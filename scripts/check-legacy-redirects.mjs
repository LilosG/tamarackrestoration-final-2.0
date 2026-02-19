#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';

const HELP_TEXT = `Legacy redirect checker

Usage:
  node scripts/check-legacy-redirects.mjs [--in=legacy-urls.txt] [--out=migration-redirect-report.csv] [--timeout-ms=12000] [--expected-host=www.tamarackrestoration.com]

Examples:
  npm run check:legacy-redirects
  npm run check:legacy-redirects -- --in=legacy-urls.txt --out=migration-redirect-report.csv
`;

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.split('=');
    return [key, rest.join('=')];
  })
);

if (args.has('--help') || args.has('-h')) {
  console.log(HELP_TEXT);
  process.exit(0);
}

const inputPath = args.get('--in') || 'legacy-urls.txt';
const outputPath = args.get('--out') || 'migration-redirect-report.csv';
const timeoutMs = Number.parseInt(args.get('--timeout-ms') || '12000', 10);
const expectedHost = args.get('--expected-host') || 'www.tamarackrestoration.com';

if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
  console.error(`Invalid --timeout-ms value: ${args.get('--timeout-ms')}`);
  process.exit(1);
}

const csvEscape = (value) => {
  const s = `${value ?? ''}`;
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replaceAll('"', '""')}"`;
  }
  return s;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchNoFollow = async (url) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      redirect: 'manual',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TamarackRedirectAudit/1.0)'
      },
      signal: controller.signal
    });

    return response;
  } finally {
    clearTimeout(timer);
  }
};

const followChain = async (startUrl, maxHops = 8) => {
  const visited = new Set();
  const chain = [];
  let current = startUrl;

  for (let hop = 0; hop < maxHops; hop += 1) {
    if (visited.has(current)) {
      return {
        chain,
        finalUrl: current,
        finalStatus: 'loop',
        error: 'redirect loop detected'
      };
    }

    visited.add(current);

    let response;
    try {
      response = await fetchNoFollow(current);
    } catch (error) {
      return {
        chain,
        finalUrl: current,
        finalStatus: 'error',
        error: error instanceof Error ? error.message : 'network error'
      };
    }

    const status = response.status;
    const location = response.headers.get('location');
    chain.push({ url: current, status, location: location || '' });

    if (status >= 300 && status < 400 && location) {
      try {
        current = new URL(location, current).toString();
      } catch {
        return {
          chain,
          finalUrl: current,
          finalStatus: status,
          error: `invalid location header: ${location}`
        };
      }

      await delay(25);
      continue;
    }

    return {
      chain,
      finalUrl: current,
      finalStatus: status,
      error: ''
    };
  }

  return {
    chain,
    finalUrl: current,
    finalStatus: 'too_many_hops',
    error: `exceeded ${maxHops} hops`
  };
};

let text = '';
try {
  text = await readFile(inputPath, 'utf-8');
} catch (error) {
  const message = error instanceof Error ? error.message : 'unknown read error';
  console.error(`Could not read input file: ${inputPath}`);
  console.error(message);
  console.error('Run `npm run extract:legacy-urls` first, or pass --in=<path-to-url-list>.');
  process.exit(1);
}

const urls = text
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

if (urls.length === 0) {
  console.error(`No URLs found in ${inputPath}.`);
  console.error('Run `npm run extract:legacy-urls` first, or populate the file with one URL per line.');
  process.exit(1);
}

const reportRows = [];
let passCount = 0;

for (const url of urls) {
  const result = await followChain(url);
  const first = result.chain[0] || { status: '', location: '' };

  const firstHopIs301 = first.status === 301;
  const finalIs200 = result.finalStatus === 200;
  const chainLength = result.chain.length;

  let hostOk = false;
  try {
    hostOk = new URL(result.finalUrl).host === expectedHost;
  } catch {
    hostOk = false;
  }

  const passed = firstHopIs301 && finalIs200 && chainLength <= 2 && hostOk;
  if (passed) passCount += 1;

  reportRows.push({
    old_url: url,
    first_status: first.status,
    first_location: first.location,
    final_url: result.finalUrl,
    final_status: result.finalStatus,
    chain_hops: chainLength,
    final_host_ok: hostOk,
    pass: passed,
    error: result.error
  });
}

const header = [
  'old_url',
  'first_status',
  'first_location',
  'final_url',
  'final_status',
  'chain_hops',
  'final_host_ok',
  'pass',
  'error'
];

const csv = [
  header.join(','),
  ...reportRows.map((row) => header.map((key) => csvEscape(row[key])).join(','))
].join('\n');

await writeFile(outputPath, `${csv}\n`, 'utf-8');

console.log(`INPUT_URLS=${urls.length}`);
console.log(`PASS_COUNT=${passCount}`);
console.log(`FAIL_COUNT=${urls.length - passCount}`);
console.log(`OUTPUT=${outputPath}`);
console.log('Sample failures:');

for (const row of reportRows.filter((entry) => !entry.pass).slice(0, 10)) {
  console.log(`- ${row.old_url} | first=${row.first_status} | final=${row.final_status} | hops=${row.chain_hops} | error=${row.error || 'n/a'}`);
}
