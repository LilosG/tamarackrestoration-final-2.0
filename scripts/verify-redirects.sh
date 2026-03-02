#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-https://www.tamarackrestoration.com}"
INPUT_FILE="${1:-audits/old_urls.txt}"
OUT_FILE="${OUT_FILE:-audits/redirect-audit.csv}"
MAX_HOPS="${MAX_HOPS:-8}"
HOMEPAGE_DUMP_THRESHOLD="${HOMEPAGE_DUMP_THRESHOLD:-1}"
CANONICAL_HOST="${CANONICAL_HOST:-www.tamarackrestoration.com}"
ALLOWED_REDIRECT_CODES="${ALLOWED_REDIRECT_CODES:-301,308}"
HOMEPAGE_DUMP_ALLOWLIST_FILE="${HOMEPAGE_DUMP_ALLOWLIST_FILE:-audits/homepage_dump_allowlist.txt}"
QUERY_TEST_FILE="${QUERY_TEST_FILE:-audits/query_test_urls.txt}"
USER_AGENT="${USER_AGENT:-Mozilla/5.0 (compatible; TamarackRedirectAudit/1.1; +https://www.tamarackrestoration.com)}"

if [[ ! -f "$INPUT_FILE" ]]; then
  echo "ERROR: input file not found: $INPUT_FILE" >&2
  exit 2
fi

python - "$BASE_URL" "$INPUT_FILE" "$OUT_FILE" "$MAX_HOPS" "$HOMEPAGE_DUMP_THRESHOLD" "$CANONICAL_HOST" "$ALLOWED_REDIRECT_CODES" "$HOMEPAGE_DUMP_ALLOWLIST_FILE" "$QUERY_TEST_FILE" "$USER_AGENT" <<'PY'
import csv, sys, urllib.parse, subprocess, pathlib
(
    base_url, input_file, out_file, max_hops, homepage_threshold,
    canonical_host, allowed_codes, homepage_allowlist_file, query_test_file, user_agent
) = sys.argv[1:11]
max_hops = int(max_hops)
homepage_threshold = float(homepage_threshold)
allowed_codes_set = {int(x.strip()) for x in allowed_codes.split(',') if x.strip()}

paths = [l.strip() for l in open(input_file, encoding='utf-8') if l.strip() and not l.strip().startswith('#')]
allowlist = set()
if pathlib.Path(homepage_allowlist_file).exists():
    allowlist = {l.strip() for l in open(homepage_allowlist_file, encoding='utf-8') if l.strip() and not l.strip().startswith('#')}

query_tests = []
if pathlib.Path(query_test_file).exists():
    query_tests = [l.strip() for l in open(query_test_file, encoding='utf-8') if l.strip() and not l.strip().startswith('#')]


def curl_head(url: str):
    cmd = [
        "curl", "-sS", "-I", "--max-time", "25", "--connect-timeout", "10",
        "-A", user_agent,
        "-o", "-", "-w", "\n%{http_code}\n%{redirect_url}", url,
    ]
    out = subprocess.check_output(cmd, text=True, stderr=subprocess.STDOUT)
    parts = out.rsplit('\n', 2)
    if len(parts) < 3:
        raise RuntimeError('parse_error')
    headers, status, redir = parts[0], parts[1].strip(), parts[2].strip()
    return headers, int(status), redir


def follow_chain(start_url: str):
    seen = set()
    hops = []
    current = start_url
    error = ''
    loop = False

    for _ in range(max_hops):
        if current in seen:
            loop = True
            error = 'loop'
            break
        seen.add(current)

        try:
            _, status, redir = curl_head(current)
        except subprocess.CalledProcessError as e:
            return hops, current, 0, f"network_error: {e.output.strip()[:180]}", loop
        except Exception as e:
            return hops, current, 0, f"error: {e}", loop

        hops.append((current, status, redir))
        if 300 <= status < 400 and redir:
            current = redir
            continue

        return hops, current, status, error, loop

    if not hops:
        return hops, current, 0, error or 'no_response', loop
    return hops, hops[-1][0], hops[-1][1], error or f'exceeded_{max_hops}_hops', loop


def path_no_slash(path: str) -> str:
    if path == '/':
        return '/'
    return path[:-1] if path.endswith('/') else path

rows = []
summary = {
    'total': len(paths),
    'pass': 0,
    'chains': 0,
    'loops': 0,
    'final_not_200': 0,
    'bad_redirect_code': 0,
    'homepage_dumps': 0,
    'canonical_host_mismatch': 0,
    'scheme_mismatch': 0,
    'trailing_slash_thrash': 0,
    'network_errors': 0,
    'query_preservation_failures': 0,
}

for raw in paths:
    normalized = raw if raw.startswith('/') else '/' + raw
    start_url = urllib.parse.urljoin(base_url, normalized)
    hops, final_url, final_status, error, loop = follow_chain(start_url)

    issues = []
    chain_len = max(0, len(hops) - 1)
    if loop:
        summary['loops'] += 1
        issues.append('loop')
    if chain_len > 1:
        summary['chains'] += 1
        issues.append('chain>1')

    redirect_statuses = [s for _, s, _ in hops[:-1]] if hops else []
    if any(code not in allowed_codes_set for code in redirect_statuses):
        summary['bad_redirect_code'] += 1
        issues.append('bad_redirect_code')

    if final_status != 200:
        summary['final_not_200'] += 1
        issues.append(f'final_{final_status}')

    final_parsed = urllib.parse.urlparse(final_url)
    final_path = final_parsed.path or '/'
    if final_parsed.hostname != canonical_host:
        summary['canonical_host_mismatch'] += 1
        issues.append('canonical_host_mismatch')
    if final_parsed.scheme != 'https':
        summary['scheme_mismatch'] += 1
        issues.append('scheme_mismatch')

    if final_path == '/' and normalized not in allowlist:
        summary['homepage_dumps'] += 1
        issues.append('homepage_dump')

    # trailing slash thrash: detect immediate pattern /x -> /x/ -> /x or inverse
    hop_paths = [urllib.parse.urlparse(u).path or '/' for u, _, _ in hops]
    thrash = False
    for i in range(len(hop_paths) - 2):
        a, b, c = hop_paths[i], hop_paths[i+1], hop_paths[i+2]
        if path_no_slash(a) == path_no_slash(b) == path_no_slash(c) and a != b and b != c:
            thrash = True
            break
    if thrash:
        summary['trailing_slash_thrash'] += 1
        issues.append('trailing_slash_thrash')

    if error:
        summary['network_errors'] += 1
        issues.append(error)

    passed = len(issues) == 0
    if passed:
        summary['pass'] += 1

    rows.append({
        'old_path': normalized,
        'start_url': start_url,
        'first_status': hops[0][1] if hops else 0,
        'hop_count': len(hops),
        'final_url': final_url,
        'final_status': final_status,
        'hops': ' => '.join([f"{u} [{s}]" for u, s, _ in hops]),
        'issues': '|'.join(issues) if issues else 'none',
    })

# Query preservation tests
query_results = []
for qurl in query_tests:
    p = urllib.parse.urlparse(qurl)
    if not p.path:
        continue
    start_url = urllib.parse.urljoin(base_url, qurl)
    hops, final_url, final_status, error, _ = follow_chain(start_url)
    src_q = urllib.parse.parse_qsl(urllib.parse.urlparse(start_url).query, keep_blank_values=True)
    dst_q = urllib.parse.parse_qsl(urllib.parse.urlparse(final_url).query, keep_blank_values=True)
    preserved = sorted(src_q) == sorted(dst_q)
    ok = (final_status == 200 and preserved and not error)
    if not ok:
        summary['query_preservation_failures'] += 1
    query_results.append({
        'test_url': start_url,
        'final_url': final_url,
        'final_status': final_status,
        'query_preserved': preserved,
        'issues': error if error else ('none' if ok else 'query_not_preserved_or_final_not_200'),
    })

with open(out_file, 'w', newline='', encoding='utf-8') as f:
    fields = list(rows[0].keys()) if rows else ['old_path']
    w = csv.DictWriter(f, fieldnames=fields)
    w.writeheader()
    w.writerows(rows)

query_out = str(pathlib.Path(out_file).with_name(pathlib.Path(out_file).stem + '-query-tests.csv'))
with open(query_out, 'w', newline='', encoding='utf-8') as f:
    fields = list(query_results[0].keys()) if query_results else ['test_url']
    w = csv.DictWriter(f, fieldnames=fields)
    w.writeheader()
    w.writerows(query_results)

homepage_pct = (summary['homepage_dumps'] / summary['total'] * 100) if summary['total'] else 0.0
threshold_ok = (
    summary['loops'] == 0
    and summary['chains'] == 0
    and summary['final_not_200'] == 0
    and summary['bad_redirect_code'] == 0
    and summary['canonical_host_mismatch'] == 0
    and summary['scheme_mismatch'] == 0
    and summary['trailing_slash_thrash'] == 0
    and summary['network_errors'] == 0
    and summary['query_preservation_failures'] == 0
    and homepage_pct <= homepage_threshold
)

print(f"TOTAL={summary['total']}")
print(f"PASS={summary['pass']}")
print(f"CHAINS_GT1={summary['chains']}")
print(f"LOOPS={summary['loops']}")
print(f"FINAL_NOT_200={summary['final_not_200']}")
print(f"BAD_REDIRECT_CODE={summary['bad_redirect_code']}")
print(f"HOMEPAGE_DUMPS={summary['homepage_dumps']}")
print(f"HOMEPAGE_DUMP_PCT={homepage_pct:.2f}")
print(f"CANONICAL_HOST_MISMATCH={summary['canonical_host_mismatch']}")
print(f"SCHEME_MISMATCH={summary['scheme_mismatch']}")
print(f"TRAILING_SLASH_THRASH={summary['trailing_slash_thrash']}")
print(f"QUERY_PRESERVATION_FAILURES={summary['query_preservation_failures']}")
print(f"NETWORK_ERRORS={summary['network_errors']}")
print(f"QUERY_TESTS_CSV={query_out}")
print(f"THRESHOLDS_OK={'yes' if threshold_ok else 'no'}")
sys.exit(0 if threshold_ok else 1)
PY
