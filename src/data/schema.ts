/**
 * Tamarack Restoration — Centralized Schema Data
 * ================================================
 * Single source of truth for structured data shared across multiple page types.
 * Import from this file instead of duplicating values in seo.ts or layout files.
 */

import type { ReviewNode } from '@/types';

// ===================
// SOCIAL & PAYMENT
// ===================

export const SOCIAL_PROFILES: string[] = [
  'https://www.facebook.com/TamarackRestoration',
  'https://www.instagram.com/tamarackrestoration/',
  'https://www.linkedin.com/company/tamarack-restoration',
  'https://www.youtube.com/@tamarackrestoration',
  'https://www.yelp.com/biz/tamarack-restoration-carlsbad',
  'https://www.bbb.org/us/ca/carlsbad/profile/water-damage-restoration/tamarack-restoration-1126-1000146682',
];

export const PAYMENT_METHODS: string[] = ['Cash', 'Check', 'Credit Card', 'Insurance'];

export const ACCEPTED_CURRENCIES: string[] = ['USD'];

// ===================
// AREA SERVED
// ===================

/**
 * Wikipedia sameAs URIs for entity disambiguation.
 * Used when mapping City objects to schema.org City nodes.
 */
export const CITY_SAME_AS: Record<string, string> = {
  'Carlsbad': 'https://en.wikipedia.org/wiki/Carlsbad,_California',
  'Oceanside': 'https://en.wikipedia.org/wiki/Oceanside,_California',
  'Vista': 'https://en.wikipedia.org/wiki/Vista,_California',
  'San Marcos': 'https://en.wikipedia.org/wiki/San_Marcos,_California',
  'Encinitas': 'https://en.wikipedia.org/wiki/Encinitas,_California',
  'Rancho Santa Fe': 'https://en.wikipedia.org/wiki/Rancho_Santa_Fe,_California',
  'Solana Beach': 'https://en.wikipedia.org/wiki/Solana_Beach,_California',
};

/** Default areaServed for LocalBusiness — all primary service cities with sameAs. */
export const AREA_SERVED_CITIES = [
  { '@type': 'City' as const, name: 'Carlsbad', sameAs: 'https://en.wikipedia.org/wiki/Carlsbad,_California' },
  { '@type': 'City' as const, name: 'Oceanside', sameAs: 'https://en.wikipedia.org/wiki/Oceanside,_California' },
  { '@type': 'City' as const, name: 'Vista', sameAs: 'https://en.wikipedia.org/wiki/Vista,_California' },
  { '@type': 'City' as const, name: 'San Marcos', sameAs: 'https://en.wikipedia.org/wiki/San_Marcos,_California' },
  { '@type': 'City' as const, name: 'Encinitas', sameAs: 'https://en.wikipedia.org/wiki/Encinitas,_California' },
];

// ===================
// REVIEW NODES
// ===================

/**
 * Representative Review nodes for structured data.
 * Source: real Google Business Profile reviews from the testimonials array in site.ts.
 * Dates are approximated from relative timestamps as of 2026-03-16.
 * Minimum 3 required for review snippet eligibility per Google's guidelines.
 */
export const REVIEW_NODES: ReviewNode[] = [
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Sarah M.' },
    datePublished: '2026-01-15',
    reviewBody:
      'Tamarack responded within 30 minutes when our pipe burst at 2 AM. Their team was professional, efficient, and made a stressful situation much easier to handle. Robert and his crew are the best!',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Michael T.' },
    datePublished: '2026-02-15',
    reviewBody:
      "We had mold in our bathroom that we didn't even know about. Tamarack found it, removed it safely, and made sure it wouldn't come back. Great communication throughout the entire process.",
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Jennifer L.' },
    datePublished: '2026-02-23',
    reviewBody:
      'After a small kitchen fire, I was devastated. The Tamarack team not only restored my kitchen but helped me navigate the insurance process. They truly care about their customers.',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'David R.' },
    datePublished: '2026-02-15',
    reviewBody:
      'Fast, professional, and thorough. They handled our water damage from a broken dishwasher line with expertise. The team even moved our furniture carefully and put everything back.',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Patricia K.' },
    datePublished: '2026-01-15',
    reviewBody:
      "Robert and his team are fantastic! They detected a slab leak that two other companies missed. Fixed it quickly and the price was fair. Highly recommend for any water issues.",
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  },
];
