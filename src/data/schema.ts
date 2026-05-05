/**
 * Tamarack Restoration — Centralized Schema Data
 * ================================================
 * Single source of truth for structured data shared across multiple page types.
 * Import from this file instead of duplicating values in seo.ts or layout files.
 */


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
  'Bressi Ranch': 'https://en.wikipedia.org/wiki/Bressi_Ranch,_California',
};

/** Default areaServed for LocalBusiness — all primary service cities with sameAs. */
export const AREA_SERVED_CITIES = [
  { '@type': 'City' as const, name: 'Carlsbad', sameAs: 'https://en.wikipedia.org/wiki/Carlsbad,_California' },
  { '@type': 'City' as const, name: 'Oceanside', sameAs: 'https://en.wikipedia.org/wiki/Oceanside,_California' },
  { '@type': 'City' as const, name: 'Vista', sameAs: 'https://en.wikipedia.org/wiki/Vista,_California' },
  { '@type': 'City' as const, name: 'San Marcos', sameAs: 'https://en.wikipedia.org/wiki/San_Marcos,_California' },
  { '@type': 'City' as const, name: 'Encinitas', sameAs: 'https://en.wikipedia.org/wiki/Encinitas,_California' },
];
