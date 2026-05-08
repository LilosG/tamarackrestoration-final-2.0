/**
 * Phase 2C City-Service SEO Overrides
 * ===================================
 * Optional metadata and intro-heading overrides for selected priority
 * water-related city-service money pages. Keys are exact city/service pairs
 * so fallback behavior remains intact for all other city-service pages.
 */

export interface CityServiceSeoOverride {
  seoTitle?: string;
  seoDescription?: string;
  introHeading?: string;
  introEyebrow?: string;
}

export const cityServiceSeoOverrides: Record<string, CityServiceSeoOverride> = {
  'carlsbad__water-damage-restoration': {
    seoTitle: 'Carlsbad Water Damage Restoration | 24/7 Local Response',
    seoDescription:
      'Need water damage restoration in Carlsbad? Tamarack provides 24/7 extraction, drying, moisture documentation, and repair coordination.',
    introEyebrow: 'Local Water Damage Help',
    introHeading: 'Fast Water Cleanup for Carlsbad Homes',
  },
  'carlsbad__water-leak-repair': {
    seoTitle: 'Water Leak Detection & Repair in Carlsbad | Tamarack',
    seoDescription:
      'Hidden leak in Carlsbad? Tamarack uses thermal imaging, acoustic detection, and moisture mapping to locate leaks and help prevent spread.',
    introEyebrow: 'Hidden Leak Support',
    introHeading: 'Find Hidden Leaks Before They Spread',
  },
  'carlsbad__slab-leak-repair': {
    seoTitle: 'Slab Leak Repair in Carlsbad | Detection & Drying',
    seoDescription:
      'Suspect a slab leak in Carlsbad? Tamarack helps locate hidden leaks, coordinate repair access, dry affected materials, and document moisture.',
    introEyebrow: 'Slab Leak Response',
    introHeading: 'Slab Leak Detection, Drying, and Repair Support',
  },
  'carlsbad__leak-detection': {
    seoTitle: 'Leak Detection in Carlsbad | Thermal & Acoustic Testing',
    seoDescription:
      'Need leak detection in Carlsbad? Tamarack uses thermal imaging, acoustic equipment, and moisture meters to help locate hidden plumbing and slab leaks.',
    introEyebrow: 'Moisture Source Diagnosis',
    introHeading: 'Pinpoint Hidden Leaks With Less Guesswork',
  },
  'carlsbad__flood-cleanup': {
    seoTitle: 'Flood Cleanup in Carlsbad | Storm Water Extraction',
    seoDescription:
      'Flood cleanup in Carlsbad after storms, overflows, or contaminated water? Tamarack provides extraction, sanitizing, drying, and damage documentation.',
    introEyebrow: 'Storm & Flood Cleanup',
    introHeading: 'Storm and Flood Cleanup for Carlsbad Properties',
  },
  'encinitas__water-damage-restoration': {
    seoTitle: 'Encinitas Water Damage Restoration | 24/7 Drying Help',
    seoDescription:
      'Water damage in Encinitas? Tamarack provides 24/7 extraction, structural drying, moisture checks, and documentation for coastal North County homes.',
    introEyebrow: 'Coastal Water Damage Help',
    introHeading: 'Water Damage Help for Encinitas Coastal Homes',
  },
  'oceanside__water-damage-restoration': {
    seoTitle: 'Oceanside Water Damage Restoration | Extraction & Drying',
    seoDescription:
      'Need water damage restoration in Oceanside? Tamarack handles extraction, structural drying, moisture checks, and repair coordination from coast to inland neighborhoods.',
    introEyebrow: 'Coast-to-Inland Response',
    introHeading: 'Coast-to-Inland Water Damage Response',
  },
  'san-marcos__water-damage-restoration': {
    seoTitle: 'San Marcos Water Damage Restoration | 24/7 Drying',
    seoDescription:
      'Water damage in San Marcos? Tamarack responds to pipe, appliance, and water heater losses with extraction, drying, moisture documentation, and repairs.',
    introEyebrow: 'Inland Water Damage Help',
    introHeading: 'Inland Water Damage Help for San Marcos Homes',
  },
  'vista__water-damage-restoration': {
    seoTitle: 'Vista Water Damage Restoration | Extraction & Drying',
    seoDescription:
      'Water damage in Vista? Tamarack provides 24/7 extraction, structural drying, moisture checks, and repair coordination for North County homes.',
    introEyebrow: 'Vista Water Cleanup',
    introHeading: 'Water Cleanup and Drying for Vista Properties',
  },
  'bressi-ranch__water-damage-restoration': {
    seoTitle: 'Bressi Ranch Water Damage Restoration | Local Drying Help',
    seoDescription:
      'Water damage in Bressi Ranch? Tamarack helps with water heater failures, HVAC leaks, extraction, drying, moisture checks, and repairs near Carlsbad.',
    introEyebrow: 'Bressi Ranch Water Help',
    introHeading: 'Water Damage Help for Bressi Ranch Homes',
  },
};

export const cityServiceSeoOverrideKeys = Object.keys(cityServiceSeoOverrides);

export function getCityServiceSeoOverride(
  citySlug: string | undefined,
  serviceSlug: string | undefined,
): CityServiceSeoOverride | null {
  if (!citySlug || !serviceSlug) return null;

  return cityServiceSeoOverrides[`${citySlug}__${serviceSlug}`] || null;
}
