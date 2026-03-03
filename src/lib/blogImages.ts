import type { CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;

const DEFAULT_BLOG_IMAGE = '/images/logo/og-default.webp';
const IMAGE_PATH_RE = /\.(avif|webp|png|jpe?g|gif|svg)(\?.*)?$/i;

const CATEGORY_FALLBACK_IMAGES: Record<BlogEntry['data']['category'], string> = {
  'water-damage': '/images/services/water-damage/living-room-dryout.webp',
  'fire-damage': '/images/services/fire-damage/containment-setup.webp',
  mold: '/images/services/mold-removal/technician-respirator.webp',
  flood: '/images/services/flood-cleanup/standing-water.webp',
  insurance: '/images/insurance/insurance-banner.webp',
  prevention: '/images/services/water-damage/structural-drying.webp',
  tips: '/images/services/general/kitchen-after-restoration.webp',
  news: '/images/hero/truck-hero.webp',
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

export function resolveBlogCardImage(post: BlogEntry): { src: string; alt: string; fallback: boolean } {
  const candidate = post.data.image ? normalizeImagePath(post.data.image) : '';

  if (isUsableImageSource(candidate)) {
    return {
      src: candidate,
      alt: post.data.imageAlt ?? post.data.title,
      fallback: false,
    };
  }

  return {
    src: CATEGORY_FALLBACK_IMAGES[post.data.category] || DEFAULT_BLOG_IMAGE,
    alt: post.data.imageAlt ?? post.data.title,
    fallback: true,
  };
}
