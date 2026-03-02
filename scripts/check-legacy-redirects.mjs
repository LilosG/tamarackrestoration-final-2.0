#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';

const DEFAULT_INPUT = 'docs/migration-input-cleaned.txt';
const DEFAULT_OUT = 'docs/legacy-redirect-report.csv';
const DEFAULT_EXPECTED_HOST = 'www.tamarackrestoration.com';
const MAX_HOPS = 5;

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.split('=');
    return [key, rest.join('=')];
  })
);

const inputPath = args.get('--in') || DEFAULT_INPUT;
const outputPath = args.get('--out') || DEFAULT_OUT;
const expectedHost = args.get('--expected-host') || DEFAULT_EXPECTED_HOST;
const mode = (args.get('--mode') || 'migration').toLowerCase();

const ALLOWED_MODES = new Set(['migration', 'baseline']);
if (!ALLOWED_MODES.has(mode)) {
  console.error(`Invalid --mode=\"${mode}\". Allowed values: migration, baseline`);
  process.exit(1);
}

const csvEscape = (value) => `"${String(value).replaceAll('"', '""')}"`;

const getReason = ({ firstStatus, finalStatus, hopCount, hostMatches }) => {
  if (mode === 'migration') {
    if (firstStatus !== 301) return 'first_hop_not_301';
    if (finalStatus !== 200) return 'final_not_200';
    if (hopCount > 3) return 'redirect_chain_too_long';
    if (!hostMatches) return 'unexpected_host';
    return 'migration_pass';
  }

  if (firstStatus !== 200) return 'first_hop_not_200';
  if (finalStatus !== 200) return 'final_not_200';
  if (hopCount !== 1) return 'hop_count_not_1';
  if (!hostMatches) return 'unexpected_host';
  return 'baseline_pass';
};

const checkUrl = async (inputUrl) => {
  const visits = [];
  let current = inputUrl;

  for (let i = 0; i < MAX_HOPS; i += 1) {
    const response = await fetch(current, { redirect: 'manual' });
    const status = response.status;
    visits.push({ url: current, status });

    const location = response.headers.get('location');
    const isRedirect = status >= 300 && status < 400 && location;
    if (!isRedirect) break;

    current = new URL(location, current).toString();
  }

  const firstStatus = visits[0]?.status ?? 0;
  const finalVisit = visits[visits.length - 1] ?? { status: 0, url: inputUrl };
  const finalStatus = finalVisit.status;
  const finalUrl = finalVisit.url;
  const hopCount = visits.length;
  const finalHost = new URL(finalUrl).hostname;
  const hostMatches = finalHost === expectedHost;

  const passReason = getReason({ firstStatus, finalStatus, hopCount, hostMatches });
  const pass = passReason.endsWith('_pass');

  return {
    input_url: inputUrl,
    mode,
    first_status: firstStatus,
    final_status: finalStatus,
    hops: hopCount,
    final_url: finalUrl,
    expected_host: expectedHost,
    host_match: hostMatches,
    pass,
    pass_reason: passReason,
  };
};

const inputText = await readFile(inputPath, 'utf-8');
const urls = inputText
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean);

const rows = [];
for (const url of urls) {
  try {
    rows.push(await checkUrl(url));
  } catch (error) {
    rows.push({
      input_url: url,
      mode,
      first_status: 0,
      final_status: 0,
      hops: 0,
      final_url: '',
      expected_host: expectedHost,
      host_match: false,
      pass: false,
      pass_reason: `request_error:${error.message}`,
    });
  }
}

const header = [
  'input_url',
  'mode',
  'first_status',
  'final_status',
  'hops',
  'final_url',
  'expected_host',
  'host_match',
  'pass',
  'pass_reason',
];

const csv = [
  header.join(','),
  ...rows.map((row) => header.map((field) => csvEscape(row[field] ?? '')).join(',')),
].join('\n');

await writeFile(outputPath, csv, 'utf-8');

const totals = {
  total: rows.length,
  pass: rows.filter((row) => row.pass).length,
  fail: rows.filter((row) => !row.pass).length,
};

console.log(`MODE=${mode}`);
console.log(`TOTAL=${totals.total}`);
console.log(`PASS=${totals.pass}`);
console.log(`FAIL=${totals.fail}`);
console.log(`REPORT=${outputPath}`);
