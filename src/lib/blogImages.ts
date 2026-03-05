import type { CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;

const DEFAULT_BLOG_IMAGE = '/images/logo/og-default.webp';
const IMAGE_PATH_RE = /\.(avif|webp|png|jpe?g|gif|svg)(\?.*)?$/i;

const CATEGORY_FALLBACK_IMAGES: Record<BlogEntry['data']['category'], string[]> = {
  'water-damage': [
    '/images/services/water-damage/living-room-dryout.webp',
    '/images/services/water-damage/structural-drying.webp',
    '/images/services/water-damage/drying-equipment-room.webp',
    '/images/services/water-damage/kitchen-restored.webp',
  ],
  'fire-damage': [
    '/images/services/fire-damage/containment-setup.webp',
    '/images/services/fire-damage/restoration-containment.webp',
  ],
  mold: [
    '/images/services/mold-removal/technician-respirator.webp',
    '/images/services/mold-removal/floor-remediation.webp',
  ],
  flood: [
    '/images/services/flood-cleanup/standing-water.webp',
    '/images/services/flood-cleanup/flooded-basement.webp',
  ],
  insurance: [
    '/images/insurance/insurance-banner.webp',
    '/images/insurance/state-farm.png',
    '/images/insurance/farmers.png',
    '/images/insurance/allstate.jpg',
  ],
  prevention: [
    '/images/services/general/containment-barrier.webp',
    '/images/services/general/ceiling-repair.webp',
  ],
  tips: [
    '/images/services/general/kitchen-after-restoration.webp',
    '/images/services/general/hallway-after-restoration.webp',
  ],
  news: [
    '/images/hero/truck-hero.webp',
    '/images/team/team-at-work.webp',
  ],
};

function normalizeImagePath(image: string): string {
  const value = image.trim();

  if (!value) return '';
  if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/')) {
    return value;
  }

  return `/${value.replace(/^\/+/, '')}`;
}

function isUsableImageSource(src: string): boolean {
  if (!src) return false;

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return true;
  }

  return IMAGE_PATH_RE.test(src);
}

function getDeterministicIndex(key: string, length: number): number {
  if (length <= 1) return 0;

  let hash = 0;
  for (const char of key) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return hash % length;
}

function getCategoryFallbackImage(post: BlogEntry): string {
  const options = CATEGORY_FALLBACK_IMAGES[post.data.category] ?? [DEFAULT_BLOG_IMAGE];
  const key = post.slug;
  const index = getDeterministicIndex(key, options.length);
  return options[index] || DEFAULT_BLOG_IMAGE;
}

export function resolveBlogCardImage(post: BlogEntry): { src: string; alt: string; fallback: boolean } {
  const candidate = post.data.image ? normalizeImagePath(post.data.image) : '';

  if (isUsableImageSource(candidate)) {
    return {
      src: candidate,
      alt: post.data.imageAlt || post.data.title,
      fallback: false,
    };
  }

  return {
    src: getCategoryFallbackImage(post),
    alt: post.data.title,
    fallback: true,
  };
}
