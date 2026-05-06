import cached from '@/data/google-reviews.json';
import fallback from '@/data/google-reviews-fallback.json';
import { business } from '@/data/site';

export interface GoogleReviewItem {
  reviewId?: string;
  authorName: string;
  rating: number;
  comment: string;
  publishedAt?: string;
  location?: string;
  source: 'Google';
}

export interface GoogleReviewsPayload {
  source: 'api' | 'cache' | 'static-fallback';
  lastUpdated: string | null;
  rating: number | null;
  totalReviewCount: number | null;
  googleBusinessProfileUrl: string;
  reviews: GoogleReviewItem[];
}

function toDateValue(v?: string) {
  return v ? new Date(v).getTime() || 0 : 0;
}

export function getGoogleReviews(limit = 3): GoogleReviewsPayload {
  const active = cached.reviews?.length ? cached : fallback;
  const deduped = new Map<string, GoogleReviewItem>();

  for (const r of active.reviews as GoogleReviewItem[]) {
    if (!r.comment?.trim()) continue;
    const key = r.reviewId || `${r.authorName}|${r.comment.slice(0, 50)}`;
    if (!deduped.has(key)) deduped.set(key, r as GoogleReviewItem);
  }

  const reviews = [...deduped.values()]
    .sort((a, b) => (b.rating - a.rating) || (toDateValue(b.publishedAt) - toDateValue(a.publishedAt)))
    .slice(0, limit);

  return {
    ...active,
    rating: active.rating ?? business.rating,
    totalReviewCount: active.totalReviewCount ?? business.reviewCount,
    reviews,
  } as GoogleReviewsPayload;
}

export function getReviewTrustSummary() {
  const data = getGoogleReviews(3);

  return {
    rating: data.rating ?? business.rating,
    reviewCount: data.totalReviewCount ?? business.reviewCount,
    source: data.source,
    lastUpdated: data.lastUpdated,
    googleBusinessProfileUrl: data.googleBusinessProfileUrl,
  };
}

export function formatReviewDate(date?: string): string | null {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
