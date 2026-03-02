#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';

const DEFAULT_INPUT = 'docs/migration-input-raw.txt';
const DEFAULT_OUTPUT = 'docs/migration-input-cleaned.txt';
const EXPECTED_HOST = 'www.tamarackrestoration.com';

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.split('=');
    return [key, rest.join('=')];
  })
);

const inputPath = args.get('--in') || DEFAULT_INPUT;
const outputPath = args.get('--out') || DEFAULT_OUTPUT;

const raw = await readFile(inputPath, 'utf-8');
const candidates = [];

for (const chunk of raw.split(/\s+/).filter(Boolean)) {
  const split = chunk.split(/(?=https?:\/\/)/gi).filter(Boolean);
  for (const part of split) {
    const match = part.match(/^https?:\/\/.+/i);
    if (match) candidates.push(match[0]);
  }
}

const cleaned = new Set();
const rejected = [];

for (const candidate of candidates) {
  const normalizedToken = candidate
    .replace(/URL+$/i, '')
    .replace(/[),.;]+$/g, '');

  let parsed;
  try {
    parsed = new URL(normalizedToken);
  } catch {
    rejected.push(`${candidate} :: invalid absolute URL`);
    continue;
  }

  if (parsed.host !== EXPECTED_HOST) {
    rejected.push(`${candidate} :: host mismatch (${parsed.host})`);
    continue;
  }

  try {
    // Throws on malformed encodings.
    decodeURI(parsed.pathname);
  } catch {
    rejected.push(`${candidate} :: unparseable path`);
    continue;
  }

  parsed.search = '';
  parsed.hash = '';
  if (!parsed.pathname.endsWith('/')) {
    parsed.pathname = `${parsed.pathname}/`;
  }

  cleaned.add(parsed.toString());
}

const sorted = [...cleaned].sort((a, b) => a.localeCompare(b));
await writeFile(outputPath, `${sorted.join('\n')}${sorted.length ? '\n' : ''}`, 'utf-8');

console.log(`INPUT=${inputPath}`);
console.log(`OUTPUT=${outputPath}`);
console.log(`TOTAL_CANDIDATES=${candidates.length}`);
console.log(`TOTAL_CLEANED=${sorted.length}`);
console.log(`TOTAL_REJECTED=${rejected.length}`);
if (rejected.length) {
  console.log('REJECTED:');
  for (const note of rejected) console.log(`- ${note}`);
}
