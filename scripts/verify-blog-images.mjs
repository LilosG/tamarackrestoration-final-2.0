import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const BLOG_DIR = join(process.cwd(), 'src', 'content', 'blog');
const ALLOWED_SHARED_IMAGES = new Set([
  // add shared image paths here if intentional (e.g. '/images/blog/shared.webp')
]);

function parseFrontmatter(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  if (!raw.startsWith('---\n')) {
    throw new Error(`Missing frontmatter block: ${filePath}`);
  }

  const end = raw.indexOf('\n---\n', 4);
  if (end === -1) {
    throw new Error(`Unterminated frontmatter block: ${filePath}`);
  }

  const block = raw.slice(4, end);
  const data = {};

  for (const line of block.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const idx = trimmed.indexOf(':');
    if (idx === -1) continue;

    const key = trimmed.slice(0, idx).trim();
    const valueRaw = trimmed.slice(idx + 1).trim();
    if (!key) continue;

    let value = valueRaw;
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return data;
}

function isLikelyImagePath(value) {
  return /\.(avif|webp|png|jpe?g|gif|svg)(\?.*)?$/i.test(value);
}

function resolveImagePath(src) {
  if (src.startsWith('http://') || src.startsWith('https://')) return null;
  const normalized = src.startsWith('/') ? src.slice(1) : src;
  return join(process.cwd(), 'public', normalized);
}

const files = readdirSync(BLOG_DIR).filter((f) => extname(f) === '.md').sort();
const errors = [];
const imageUsage = new Map();

for (const file of files) {
  const filePath = join(BLOG_DIR, file);
  const fm = parseFrontmatter(filePath);

  for (const required of ['title', 'image', 'imageAlt']) {
    if (!fm[required] || String(fm[required]).trim() === '') {
      errors.push(`${file}: missing required frontmatter field '${required}'`);
    }
  }

  if (fm.image) {
    if (!isLikelyImagePath(fm.image)) {
      errors.push(`${file}: image is not a valid image path/url (${fm.image})`);
    } else {
      const resolved = resolveImagePath(fm.image);
      if (resolved && !existsSync(resolved)) {
        errors.push(`${file}: image path does not exist in public/ (${fm.image})`);
      }

      if (!imageUsage.has(fm.image)) imageUsage.set(fm.image, []);
      imageUsage.get(fm.image).push(file);
    }
  }
}

for (const [image, posts] of imageUsage.entries()) {
  if (posts.length > 1 && !ALLOWED_SHARED_IMAGES.has(image)) {
    errors.push(`shared image not explicitly allowed: ${image} -> ${posts.join(', ')}`);
  }
}

console.log('Blog image resolution evidence:');
for (const file of files) {
  const fm = parseFrontmatter(join(BLOG_DIR, file));
  console.log(`- ${fm.title} (${file}) -> ${fm.image}`);
}

if (errors.length > 0) {
  console.error('\nBlog verification failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('\nBlog verification passed.');
