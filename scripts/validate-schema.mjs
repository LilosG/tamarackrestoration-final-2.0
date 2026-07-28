#!/usr/bin/env node
/**
 * Structured Data Validator
 * =========================
 * Parses every JSON-LD block in dist/ and enforces the invariants the site's
 * schema architecture relies on:
 *   - exactly one JSON-LD script per page, shaped as a single @graph
 *   - complete LocalBusiness (NAP + geo + areaServed) on every page
 *   - unique @id per node, at most one BreadcrumbList / FAQPage per page
 *   - every @id reference resolves to a node defined on the same page
 *   - absolute URLs in url/image/logo fields
 *
 * Usage: node scripts/validate-schema.mjs [distDir]
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = process.argv[2] || 'dist';
const SITE_URL = 'https://www.tamarackrestoration.com';
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const REQUIRED_BUSINESS_FIELDS = ['name', 'telephone', 'address', 'geo', 'url', 'areaServed'];
const URL_FIELDS = ['url', 'image', 'logo', 'hasMap'];
const SINGLETON_TYPES = ['BreadcrumbList', 'FAQPage', 'WebPage', 'Article'];

const errors = [];
const stats = { pages: 0, nodes: 0, withRating: 0 };

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.html')) out.push(full);
  }
  return out;
}

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match;
  while ((match = re.exec(html)) !== null) blocks.push(match[1]);
  return blocks;
}

function typesOf(node) {
  const type = node['@type'];
  if (!type) return [];
  return Array.isArray(type) ? type : [type];
}

/** Collect every { "@id": "..." } reference that is not a node definition. */
function collectReferences(value, refs) {
  if (Array.isArray(value)) {
    for (const item of value) collectReferences(item, refs);
    return;
  }
  if (!value || typeof value !== 'object') return;
  const keys = Object.keys(value);
  if (keys.length === 1 && keys[0] === '@id') {
    refs.add(value['@id']);
    return;
  }
  for (const key of keys) collectReferences(value[key], refs);
}

function validatePage(file, html) {
  const page = `/${relative(DIST, file).replace(/index\.html$/, '')}`;
  const blocks = extractJsonLd(html);
  const fail = (msg) => errors.push(`${page}: ${msg}`);

  if (blocks.length === 0) {
    fail('no JSON-LD found');
    return;
  }
  if (blocks.length > 1) {
    fail(`${blocks.length} JSON-LD scripts (expected 1 @graph)`);
  }

  let parsed;
  try {
    parsed = JSON.parse(blocks[0]);
  } catch (err) {
    fail(`invalid JSON-LD: ${err.message}`);
    return;
  }

  const graph = parsed['@graph'];
  if (!Array.isArray(graph)) {
    fail('top-level JSON-LD is not a @graph');
    return;
  }

  stats.pages += 1;
  stats.nodes += graph.length;

  const ids = new Set();
  const typeCounts = {};

  for (const node of graph) {
    if (node['@context']) fail(`nested @context on ${typesOf(node).join('/')} node`);

    const id = node['@id'];
    if (id) {
      if (ids.has(id)) fail(`duplicate @id ${id}`);
      ids.add(id);
    }

    for (const type of typesOf(node)) {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    }

    for (const field of URL_FIELDS) {
      const value = node[field];
      if (typeof value === 'string' && value.startsWith('/')) {
        fail(`relative ${field} on ${typesOf(node).join('/')}: ${value}`);
      }
    }
  }

  for (const type of SINGLETON_TYPES) {
    if (typeCounts[type] > 1) fail(`${typeCounts[type]} ${type} nodes (expected 1)`);
  }

  const businessNode = graph.find((node) => node['@id'] === BUSINESS_ID);
  if (!businessNode) {
    fail('missing LocalBusiness node');
  } else {
    for (const field of REQUIRED_BUSINESS_FIELDS) {
      if (!businessNode[field]) fail(`LocalBusiness missing ${field}`);
    }
    if (businessNode.aggregateRating) stats.withRating += 1;
  }

  const refs = new Set();
  collectReferences(graph, refs);
  for (const ref of refs) {
    if (!ids.has(ref)) fail(`unresolved @id reference ${ref}`);
  }
}

for (const file of walk(DIST)) {
  validatePage(file, readFileSync(file, 'utf8'));
}

console.log(
  `Validated ${stats.pages} page(s), ${stats.nodes} node(s), ${stats.withRating} with aggregateRating.`
);

if (errors.length > 0) {
  console.error(`\n${errors.length} schema error(s):`);
  for (const error of errors.slice(0, 50)) console.error(`  - ${error}`);
  if (errors.length > 50) console.error(`  ... and ${errors.length - 50} more`);
  process.exit(1);
}

console.log('All structured data checks passed.');
