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
  'carlsbad__mold-removal': {
    seoTitle: 'Mold Removal in Carlsbad | Inspection & Remediation',
    seoDescription:
      'Need mold removal in Carlsbad? Tamarack handles containment, HEPA filtration, moisture source checks, remediation, and repair coordination.',
    introEyebrow: 'Carlsbad Mold Help',
    introHeading: 'Mold Remediation for Carlsbad Homes',
  },
  'carlsbad__fire-damage-restoration': {
    seoTitle: 'Fire Damage Restoration in Carlsbad | Smoke & Repairs',
    seoDescription:
      'Fire or smoke damage in Carlsbad? Tamarack provides board-up, soot cleanup, odor removal, water extraction, documentation, and repair coordination.',
    introEyebrow: 'Fire & Smoke Recovery',
    introHeading: 'Fire Damage Cleanup and Repair Support in Carlsbad',
  },
  'carlsbad__sewage-cleanup': {
    seoTitle: 'Sewage Cleanup in Carlsbad | Sanitizing & Drying',
    seoDescription:
      'Sewage backup in Carlsbad? Tamarack provides safe extraction, contaminated-material removal, sanitizing, drying, odor control, and documentation.',
    introEyebrow: 'Sewage Backup Cleanup',
    introHeading: 'Safe Sewage Cleanup for Carlsbad Properties',
  },
  'oceanside__water-leak-repair': {
    seoTitle: 'Water Leak Repair in Oceanside | Detection & Drying',
    seoDescription:
      'Hidden leak in Oceanside? Tamarack helps locate plumbing leaks, assess moisture spread, dry affected materials, and coordinate repairs.',
    introEyebrow: 'Oceanside Leak Help',
    introHeading: 'Find and Repair Water Leaks in Oceanside',
  },
  'vista__water-leak-repair': {
    seoTitle: 'Water Leak Repair in Vista | Moisture Checks & Repair',
    seoDescription:
      'Water leak in Vista? Tamarack uses moisture meters, thermal imaging, and repair coordination to help stop leaks and limit property damage.',
    introEyebrow: 'Vista Leak Response',
    introHeading: 'Water Leak Detection and Repair Support in Vista',
  },
  'san-marcos__water-leak-repair': {
    seoTitle: 'Water Leak Repair in San Marcos | Hidden Leak Help',
    seoDescription:
      'Need water leak repair in San Marcos? Tamarack helps locate hidden leaks, check moisture spread, dry affected areas, and coordinate repairs.',
    introEyebrow: 'San Marcos Leak Help',
    introHeading: 'Hidden Water Leak Help for San Marcos Homes',
  },
  'encinitas__water-leak-repair': {
    seoTitle: 'Water Leak Repair in Encinitas | Coastal Leak Help',
    seoDescription:
      'Water leak in Encinitas? Tamarack helps find hidden leaks, assess coastal moisture issues, dry affected materials, and coordinate repairs.',
    introEyebrow: 'Encinitas Leak Support',
    introHeading: 'Water Leak Repair Support for Encinitas Properties',
  },
  'oceanside__slab-leak-repair': {
    seoTitle: 'Slab Leak Repair in Oceanside | Detection & Drying',
    seoDescription:
      'Suspect a slab leak in Oceanside? Tamarack helps locate under-slab leaks, document moisture, dry affected materials, and coordinate repair access.',
    introEyebrow: 'Oceanside Slab Leak Help',
    introHeading: 'Slab Leak Detection and Drying Support in Oceanside',
  },
  'vista__slab-leak-repair': {
    seoTitle: 'Slab Leak Repair in Vista | Under-Slab Leak Help',
    seoDescription:
      'Slab leak symptoms in Vista? Tamarack helps pinpoint under-slab leaks, assess moisture damage, dry affected areas, and coordinate repairs.',
    introEyebrow: 'Vista Slab Leak Response',
    introHeading: 'Under-Slab Leak Help for Vista Homes',
  },
  'san-marcos__slab-leak-repair': {
    seoTitle: 'Slab Leak Repair in San Marcos | Leak Detection & Drying',
    seoDescription:
      'Slab leak in San Marcos? Tamarack supports leak detection, moisture mapping, drying, documentation, and repair coordination for affected homes.',
    introEyebrow: 'San Marcos Slab Leak Help',
    introHeading: 'Slab Leak Detection and Drying in San Marcos',
  },
  'encinitas__slab-leak-repair': {
    seoTitle: 'Slab Leak Repair in Encinitas | Coastal Foundation Leaks',
    seoDescription:
      'Suspect a slab leak in Encinitas? Tamarack helps locate foundation leaks, check moisture spread, dry affected materials, and coordinate repairs.',
    introEyebrow: 'Encinitas Slab Leak Help',
    introHeading: 'Slab Leak Support for Encinitas Coastal Homes',
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
