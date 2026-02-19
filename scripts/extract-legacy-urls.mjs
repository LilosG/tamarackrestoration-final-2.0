#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const DEFAULT_BASE_URL = 'https://www.tamarackrestoration.com';
const DEFAULT_MAX_PAGES = 400;
const SITEMAP_PATHS = ['/sitemap.xml', '/sitemap_index.xml', '/wp-sitemap.xml'];
const DEFAULT_LOCAL_FILES = ['legacy-sitemap.xml', 'legacy-sitemap-index.xml', 'legacy-wp-sitemap.xml'];

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.split('=');
    return [key, rest.join('=')];
  })
);

const baseUrl = args.get('--base') || DEFAULT_BASE_URL;
const outputPath = args.get('--out') || 'legacy-urls.txt';
const maxPages = Number.parseInt(args.get('--max-pages') || `${DEFAULT_MAX_PAGES}`, 10);
const localFilesArg = args.get('--from-files');
const localFiles = localFilesArg
  ? localFilesArg
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
  : DEFAULT_LOCAL_FILES;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const isHtml = (text) => /<!doctype html>|<html[\s>]/i.test(text);

const toAbsolute = (href, origin) => {
  try {
    return new URL(href, origin).toString();
  } catch {
    return null;
  }
};

const extractLocUrls = (xmlText) => {
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/gims;
  let match;

  while ((match = locRegex.exec(xmlText)) !== null) {
    const raw = match[1]?.trim();
    if (!raw) continue;
    const decoded = raw
      .replaceAll('&amp;', '&')
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')
      .replaceAll('&quot;', '"')
      .replaceAll('&apos;', "'");
    urls.push(decoded);
  }

  return urls;
};

const extractAnchorUrls = (htmlText, origin) => {
  const urls = [];
  const hrefRegex = /href=["']([^"']+)["']/gim;
  let match;

  while ((match = hrefRegex.exec(htmlText)) !== null) {
    const href = match[1];
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;

    const abs = toAbsolute(href, origin);
    if (!abs) continue;
    urls.push(abs);
  }

  return urls;
};

const normalizeUrl = (urlString, expectedOrigin) => {
  try {
    const url = new URL(urlString);
    if (url.origin !== expectedOrigin) return null;
    if (/\.(png|jpe?g|webp|svg|gif|pdf|zip|xml|txt|json|css|js|woff2?)$/i.test(url.pathname)) return null;

    url.hash = '';
    url.search = '';

    if (!url.pathname.endsWith('/')) {
      url.pathname = `${url.pathname}/`;
    }

    return url.toString();
  } catch {
    return null;
  }
};

const fetchText = async (url) => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; TamarackMigrationBot/1.0)',
      Accept: 'application/xml,text/xml,text/html;q=0.9,*/*;q=0.8'
    }
  });

  const text = await response.text();
  return { ok: response.ok, status: response.status, text };
};

const origin = new URL(baseUrl).origin;
const discovered = new Set();
const sitemapQueue = SITEMAP_PATHS.map((path) => `${origin}${path}`);
const crawledSitemaps = new Set();
const failedSitemaps = [];

for (const localFile of localFiles) {
  if (!existsSync(localFile)) continue;

  const text = await readFile(localFile, 'utf-8');
  if (!text.trim()) {
    failedSitemaps.push(`${localFile} (empty file)`);
    continue;
  }

  if (isHtml(text)) {
    failedSitemaps.push(`${localFile} (html response saved instead of xml)`);
    continue;
  }

  const locs = extractLocUrls(text);
  if (locs.length === 0) {
    failedSitemaps.push(`${localFile} (no <loc> entries)`);
    continue;
  }

  for (const loc of locs) {
    const normalized = normalizeUrl(loc, origin);
    if (normalized) discovered.add(normalized);

    if (/sitemap/i.test(loc)) {
      sitemapQueue.push(loc);
    }
  }
}

while (sitemapQueue.length) {
  const sitemapUrl = sitemapQueue.shift();
  if (!sitemapUrl || crawledSitemaps.has(sitemapUrl)) continue;
  crawledSitemaps.add(sitemapUrl);

  try {
    const { ok, status, text } = await fetchText(sitemapUrl);
    if (!ok || !text || isHtml(text)) {
      failedSitemaps.push(`${sitemapUrl} (status ${status}, non-xml response)`);
      continue;
    }

    const locUrls = extractLocUrls(text);
    if (locUrls.length === 0) {
      failedSitemaps.push(`${sitemapUrl} (xml received but no <loc> entries)`);
      continue;
    }

    for (const url of locUrls) {
      const normalized = normalizeUrl(url, origin);
      if (normalized) discovered.add(normalized);

      if (/sitemap/i.test(url)) {
        sitemapQueue.push(url);
      }
    }
  } catch (error) {
    failedSitemaps.push(`${sitemapUrl} (${error instanceof Error ? error.message : 'unknown error'})`);
  }
}

if (discovered.size === 0) {
  const queue = [origin];
  const visited = new Set();

  while (queue.length && visited.size < maxPages) {
    const current = queue.shift();
    if (!current || visited.has(current)) continue;
    visited.add(current);

    try {
      const { ok, text } = await fetchText(current);
      if (!ok || !text || !isHtml(text)) continue;

      const normalizedCurrent = normalizeUrl(current, origin);
      if (normalizedCurrent) discovered.add(normalizedCurrent);

      const links = extractAnchorUrls(text, origin);
      for (const link of links) {
        const normalized = normalizeUrl(link, origin);
        if (!normalized || visited.has(normalized) || queue.includes(normalized)) continue;
        queue.push(normalized);
      }
    } catch {
      // Continue crawl.
    }

    await sleep(60);
  }
}

const sorted = [...discovered].sort((a, b) => a.localeCompare(b));
await writeFile(outputPath, `${sorted.join('\n')}${sorted.length ? '\n' : ''}`, 'utf-8');

console.log(`TOTAL_URLS=${sorted.length}`);
console.log(`OUTPUT=${outputPath}`);

if (failedSitemaps.length) {
  console.log('SITEMAP_NOTES:');
  for (const note of failedSitemaps) {
    console.log(`- ${note}`);
  }
}

console.log('FIRST_20:');
for (const url of sorted.slice(0, 20)) {
  console.log(url);
}
