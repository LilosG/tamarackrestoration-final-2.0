# Prelaunch Technical SEO Audit

## Executive summary
- Redirect behavior is now governed by an evidence-first validator (`scripts/verify-redirects.sh`) and CI workflow.
- Runtime redirect edits remain reverted pending live proof.
- Canonical host/trailing slash/sitemap/indexation policies are documented in `docs/seo-migration-policy.md`.

## P0
1. Live redirect verification from this environment is blocked by outbound proxy/WAF (`403 CONNECT tunnel failed`).
2. Production/preview verification must run in GitHub Actions or a networked runner before redirect changes.

## P1
1. Redirect QA automation and policy are now deterministic and in-repo.
2. Preview noindex now has both meta-level and edge-level controls.

## Verification commands
```bash
BASE_URL=https://www.tamarackrestoration.com scripts/verify-redirects.sh audits/old_urls.txt
BASE_URL=https://<preview>.vercel.app scripts/verify-redirects.sh audits/old_urls.txt
```
