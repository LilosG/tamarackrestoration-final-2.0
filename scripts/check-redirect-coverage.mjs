#!/usr/bin/env node

import { readFile } from 'node:fs/promises';

const DEFAULT_INPUT = 'docs/migration-input-cleaned.txt';
const DEFAULT_VERCEL = 'vercel.json';

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.split('=');
    return [key, rest.join('=')];
  })
);

const inputPath = args.get('--in') || DEFAULT_INPUT;
const vercelPath = args.get('--vercel') || DEFAULT_VERCEL;

const text = await readFile(inputPath, 'utf-8');
const vercel = JSON.parse(await readFile(vercelPath, 'utf-8'));
const redirects = Array.isArray(vercel.redirects) ? vercel.redirects : [];

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const sourceToRegex = (source) => {
  const parts = source
    .split('/')
    .map((part) => {
      if (!part) return '';
      if (part.startsWith(':')) return '[^/]+';
      if (part === '(.*)') return '.*';
      return escapeRegex(part);
    })
    .join('/');

  return new RegExp(`^${parts}/?$`);
};

const rules = redirects.map((redirect) => ({ ...redirect, pattern: sourceToRegex(redirect.source) }));
const urls = text.split('\n').map((line) => line.trim()).filter(Boolean);

const missing = [];
for (const url of urls) {
  const parsed = new URL(url);
  const path = parsed.pathname.endsWith('/') ? parsed.pathname.slice(0, -1) || '/' : parsed.pathname;
  const covered = rules.some((rule) => rule.pattern.test(path));
  if (!covered) missing.push(path);
}

console.log(`INPUT_URLS=${urls.length}`);
console.log(`REDIRECT_RULES=${rules.length}`);
console.log(`MISSING=${missing.length}`);
for (const item of missing) {
  console.log(`- ${item}`);
}
