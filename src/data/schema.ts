/**
 * Tamarack Restoration — Centralized Schema Data
 * ================================================
 * Single source of truth for structured data shared across multiple page types.
 * Import from this file instead of duplicating values in seo.ts or layout files.
 */

import type { CredentialNode, KnowsAboutNode } from '@/types';

// ===================
// SOCIAL & PAYMENT
// ===================

export const GOOGLE_BUSINESS_PROFILE_URL = 'https://g.page/r/CQm9QH8xWk8SEAE';

export const SOCIAL_PROFILES: string[] = [
  'https://www.facebook.com/TamarackRestoration',
  'https://www.instagram.com/tamarackrestoration/',
  'https://www.linkedin.com/company/tamarack-restoration',
  'https://www.youtube.com/@tamarackrestoration',
  'https://www.yelp.com/biz/tamarack-restoration-carlsbad',
  'https://www.bbb.org/us/ca/carlsbad/profile/water-damage-restoration/tamarack-restoration-1126-1000146682',
  GOOGLE_BUSINESS_PROFILE_URL,
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
  // Bressi Ranch is a Carlsbad master-planned community with no Wikipedia entity.
};

/** County and state the business operates in, used for City containment. */
export const COUNTY_NAME = 'San Diego County';
export const COUNTY_SAME_AS = 'https://en.wikipedia.org/wiki/San_Diego_County,_California';
export const STATE_NAME = 'California';
export const STATE_SAME_AS = 'https://en.wikipedia.org/wiki/California';

/** Emergency dispatch radius from the Carlsbad HQ, in meters (~25 miles / 60-minute response). */
export const SERVICE_RADIUS_METERS = 40000;

// ===================
// EXPERTISE & CREDENTIALS
// ===================

/** Topics the business is an authority on — restoration-specific entity signals. */
export const BUSINESS_KNOWS_ABOUT: KnowsAboutNode[] = [
  {
    '@type': 'Thing',
    name: 'Water damage restoration',
    sameAs: 'https://en.wikipedia.org/wiki/Water_damage_restoration',
  },
  { '@type': 'Thing', name: 'Water damage', sameAs: 'https://en.wikipedia.org/wiki/Water_damage' },
  {
    '@type': 'Thing',
    name: 'Mold remediation',
    sameAs: 'https://en.wikipedia.org/wiki/Mold_remediation',
  },
  { '@type': 'Thing', name: 'Indoor mold', sameAs: 'https://en.wikipedia.org/wiki/Indoor_mold' },
  { '@type': 'Thing', name: 'Fire damage', sameAs: 'https://en.wikipedia.org/wiki/Fire_damage' },
  { '@type': 'Thing', name: 'Smoke damage', sameAs: 'https://en.wikipedia.org/wiki/Smoke_damage' },
  { '@type': 'Thing', name: 'Structural drying' },
  { '@type': 'Thing', name: 'Category 3 water loss cleanup' },
  { '@type': 'Thing', name: 'Sewage cleanup' },
  { '@type': 'Thing', name: 'Slab leak detection' },
  { '@type': 'Thing', name: 'Insurance claim documentation' },
  { '@type': 'Thing', name: 'IICRC S500 water damage restoration standard' },
  { '@type': 'Thing', name: 'IICRC S520 mold remediation standard' },
];

const IICRC = {
  '@type': 'Organization' as const,
  name: 'Institute of Inspection, Cleaning and Restoration Certification',
  alternateName: 'IICRC',
  url: 'https://iicrc.org/',
};

/**
 * IICRC credentials held by the firm and its technicians.
 * Mirrors the certifications listed on /about/certifications/.
 */
export const BUSINESS_CREDENTIALS: CredentialNode[] = [
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'IICRC Certified Firm',
    credentialCategory: 'certification',
    recognizedBy: IICRC,
  },
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'Water Damage Restoration Technician (WRT)',
    credentialCategory: 'certification',
    recognizedBy: IICRC,
  },
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'Applied Structural Drying (ASD)',
    credentialCategory: 'certification',
    recognizedBy: IICRC,
  },
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'Applied Microbial Remediation Technician (AMRT)',
    credentialCategory: 'certification',
    recognizedBy: IICRC,
  },
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'Fire and Smoke Restoration Technician (FSRT)',
    credentialCategory: 'certification',
    recognizedBy: IICRC,
  },
];
