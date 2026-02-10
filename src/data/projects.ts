/**
 * Projects Data
 * =============
 * Completed restoration projects for gallery display.
 * Each project has before/after images, service type, city, and description.
 * Used by ProjectsSection and ProjectCard components.
 */

import type { Project, ProjectCategoryInfo } from '@/types';
export type { ProjectCategoryInfo };

export const projects: Project[] = [
  // ============================================================
  // WATER DAMAGE RESTORATION
  // ============================================================
  {
    id: 'carlsbad-kitchen-flood',
    title: 'Kitchen Supply Line Failure',
    slug: 'carlsbad-kitchen-flood',
    service: 'water-damage-restoration',
    city: 'carlsbad',
    description: 'A burst supply line under the kitchen sink flooded the first floor of this La Costa home overnight. We extracted over 400 gallons, set up structural drying across three rooms, and restored hardwood flooring and cabinetry within 10 days.',
    beforeImage: '/images/services/water-damage/drying-equipment-room.webp',
    afterImage: '/images/services/water-damage/kitchen-restored.webp',
    completionDate: '2024-11',
    featured: true,
  },
  {
    id: 'oceanside-slab-leak',
    title: 'Slab Leak & Flooring Replacement',
    slug: 'oceanside-slab-leak',
    service: 'water-damage-restoration',
    city: 'oceanside',
    description: 'Thermal imaging identified a hot-water slab leak beneath the living room of this South Oceanside home. After plumbing repair, we removed saturated carpet and pad, dried the concrete slab for five days, and installed new luxury vinyl plank flooring.',
    beforeImage: '/images/services/water-damage/living-room-dryout.webp',
    afterImage: '/images/services/general/hallway-after-restoration.webp',
    completionDate: '2024-09',
    featured: true,
  },
  {
    id: 'encinitas-bathroom-overflow',
    title: 'Second-Story Bathroom Overflow',
    slug: 'encinitas-bathroom-overflow',
    service: 'water-damage-restoration',
    city: 'encinitas',
    description: 'A toilet supply valve failed in this Cardiff-by-the-Sea two-story home, sending water through the ceiling into the dining room below. We extracted water from both floors, replaced damaged drywall and insulation, and restored the ceiling texture to match.',
    beforeImage: '/images/services/water-damage/containment-drying.webp',
    afterImage: '/images/services/general/dining-room-after.webp',
    completionDate: '2024-08',
    featured: false,
  },
  {
    id: 'san-marcos-water-heater',
    title: 'Water Heater Rupture in Garage',
    slug: 'san-marcos-water-heater',
    service: 'water-damage-restoration',
    city: 'san-marcos',
    description: 'A corroded 15-year-old water heater ruptured in this San Elijo Hills garage, flooding the garage and adjacent laundry room. We extracted standing water, dried affected wall assemblies with commercial dehumidifiers, and replaced damaged drywall and baseboards.',
    beforeImage: '/images/services/water-damage/structural-drying.webp',
    afterImage: '/images/services/general/kitchen-after-restoration.webp',
    completionDate: '2025-01',
    featured: false,
  },

  // ============================================================
  // MOLD REMOVAL
  // ============================================================
  {
    id: 'carlsbad-village-mold',
    title: 'Bathroom Mold Remediation',
    slug: 'carlsbad-village-mold',
    service: 'mold-removal',
    city: 'carlsbad',
    description: 'Extensive mold growth behind the shower wall of this 1970s Carlsbad Village home was caused by a slow leak in the shower pan. We contained the area, removed affected drywall and insulation, treated framing with antimicrobial solution, and passed post-remediation clearance testing.',
    beforeImage: '/images/services/mold-removal/floor-remediation.webp',
    afterImage: '/images/services/general/containment-barrier.webp',
    completionDate: '2024-10',
    featured: true,
  },
  {
    id: 'vista-crawlspace-mold',
    title: 'Crawl Space Mold Remediation',
    slug: 'vista-crawlspace-mold',
    service: 'mold-removal',
    city: 'vista',
    description: 'Poor ventilation and a leaking foundation drain allowed mold to colonize floor joists in this Downtown Vista home. Our team set up HEPA-filtered negative air containment, removed contaminated insulation, treated all wood surfaces, and installed a vapor barrier to prevent recurrence.',
    beforeImage: '/images/services/mold-removal/technician-respirator.webp',
    afterImage: '/images/services/general/containment-kitchen.webp',
    completionDate: '2024-12',
    featured: false,
  },

  // ============================================================
  // FIRE DAMAGE RESTORATION
  // ============================================================
  {
    id: 'carlsbad-kitchen-fire',
    title: 'Kitchen Grease Fire Restoration',
    slug: 'carlsbad-kitchen-fire',
    service: 'fire-damage-restoration',
    city: 'carlsbad',
    description: 'A grease fire in this Aviara kitchen caused flame damage to the stovetop area and heavy smoke damage throughout the entire first floor. We cleaned soot from all surfaces, replaced damaged cabinetry and countertops, deodorized the HVAC system, and completed a full kitchen rebuild.',
    beforeImage: '/images/services/fire-damage/containment-setup.webp',
    afterImage: '/images/services/general/kitchen-after-restoration.webp',
    completionDate: '2024-07',
    featured: true,
  },
  {
    id: 'rsf-smoke-damage',
    title: 'Whole-Home Smoke Remediation',
    slug: 'rsf-smoke-damage',
    service: 'fire-damage-restoration',
    city: 'rancho-santa-fe',
    description: 'An electrical fire in the utility room of this Fairbanks Ranch estate produced heavy smoke that permeated the entire 6,000-square-foot home. We performed complete soot and smoke residue removal, replaced HVAC ductwork, used thermal fogging and hydroxyl generators for odor elimination, and restored the home over 8 weeks.',
    beforeImage: '/images/services/fire-damage/restoration-containment.webp',
    afterImage: '/images/services/general/hallway-after-restoration.webp',
    completionDate: '2024-06',
    featured: false,
  },

  // ============================================================
  // FLOOD CLEANUP
  // ============================================================
  {
    id: 'carlsbad-storm-flood',
    title: 'Atmospheric River Flood Damage',
    slug: 'carlsbad-storm-flood',
    service: 'flood-cleanup',
    city: 'carlsbad',
    description: 'Heavy rainfall from a January atmospheric river overwhelmed storm drains and flooded the ground floor of this home near Buena Vista Lagoon. We extracted Category 3 water, removed all porous materials below the flood line, sanitized with antimicrobial treatments, and rebuilt the affected areas.',
    beforeImage: '/images/services/flood-cleanup/standing-water.webp',
    afterImage: '/images/services/general/dining-room-after.webp',
    completionDate: '2025-01',
    featured: true,
  },
  {
    id: 'vista-flood-cleanup',
    title: 'Flash Flood Garage & Basement',
    slug: 'vista-flood-cleanup',
    service: 'flood-cleanup',
    city: 'vista',
    description: 'A sudden downpour sent runoff through the garage and into the finished basement of this Shadowridge home. We pumped out standing water, removed soaked carpet and padding, dried the concrete slab and wall cavities, and replaced all affected materials.',
    beforeImage: '/images/services/flood-cleanup/vista-flood-cleanup.webp',
    afterImage: '/images/services/general/floor-demolition.webp',
    completionDate: '2024-12',
    featured: false,
  },

  // ============================================================
  // SEWAGE CLEANUP
  // ============================================================
  {
    id: 'oceanside-sewage-backup',
    title: 'Main Sewer Line Backup',
    slug: 'oceanside-sewage-backup',
    service: 'sewage-cleanup',
    city: 'oceanside',
    description: 'Tree root intrusion caused a main sewer line backup that flooded the master bathroom and hallway of this Fire Mountain home. Our biohazard-certified team extracted sewage, removed contaminated flooring and drywall, sanitized with hospital-grade disinfectants, and restored the bathroom completely.',
    beforeImage: '/images/services/sewage-cleanup/demolition-repair.webp',
    afterImage: '/images/services/sewage-cleanup/bathroom-restoration.webp',
    completionDate: '2024-10',
    featured: true,
  },
  {
    id: 'encinitas-septic-overflow',
    title: 'Septic System Overflow',
    slug: 'encinitas-septic-overflow',
    service: 'sewage-cleanup',
    city: 'encinitas',
    description: 'A failing septic system in this Olivenhain property caused sewage to back up through the laundry room drains during heavy rain. We contained and extracted the contaminated water, removed affected building materials, applied enzyme-based bioremediation treatments, and rebuilt the laundry room.',
    beforeImage: '/images/services/flood-cleanup/flooded-basement.webp',
    afterImage: '/images/services/general/containment-kitchen.webp',
    completionDate: '2024-11',
    featured: false,
  },

  // ============================================================
  // WATER LEAK REPAIR
  // ============================================================
  {
    id: 'carlsbad-slab-leak-detect',
    title: 'Slab Leak Detection & Repair',
    slug: 'carlsbad-slab-leak-detect',
    service: 'water-leak-repair',
    city: 'carlsbad',
    description: 'Thermal imaging revealed a hot-water slab leak beneath the master bedroom of this Calavera Hills home that had been running undetected for weeks. We pinpointed the exact location, coordinated the plumbing repair, dried the slab and surrounding materials, and restored the flooring.',
    beforeImage: '/images/services/leak-detection/thermal-camera-floor.webp',
    afterImage: '/images/services/general/hallway-after-restoration.webp',
    completionDate: '2024-09',
    featured: true,
  },
  {
    id: 'solana-beach-pipe-leak',
    title: 'Hidden Wall Leak & Mold Prevention',
    slug: 'solana-beach-pipe-leak',
    service: 'water-leak-repair',
    city: 'solana-beach',
    description: 'An acoustic detection assessment found a pinhole leak in a copper supply line inside the bathroom wall of this Eden Gardens home. We accessed the pipe with minimal demolition, repaired the leak, dried the wall cavity before mold could develop, and patched the drywall.',
    beforeImage: '/images/services/leak-detection/thermal-camera-wall.webp',
    afterImage: '/images/services/general/ceiling-repair.webp',
    completionDate: '2025-01',
    featured: false,
  },
];

/**
 * Get projects filtered by service, city, or featured status.
 */
export function getProjects(options?: {
  service?: string;
  city?: string;
  featured?: boolean;
  limit?: number;
}): Project[] {
  let filtered = [...projects];

  if (options?.service) {
    filtered = filtered.filter(p => p.service === options.service);
  }
  if (options?.city) {
    filtered = filtered.filter(p => p.city === options.city);
  }
  if (options?.featured !== undefined) {
    filtered = filtered.filter(p => p.featured === options.featured);
  }

  if (options?.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
}

/**
 * Get projects for a city+service money page.
 * First tries exact city+service match, then falls back to same-service projects.
 */
export function getMoneyPageProjects(city: string, service: string, limit = 3): Project[] {
  // First: exact city+service match
  const exact = projects.filter(p => p.city === city && p.service === service);
  if (exact.length >= limit) return exact.slice(0, limit);

  // Second: fill with same-service from other cities
  const sameService = projects.filter(
    p => p.service === service && p.city !== city
  );
  const combined = [...exact, ...sameService];
  return combined.slice(0, limit);
}

// ===================
// PROJECT CATEGORIES
// ===================

export const projectCategories: ProjectCategoryInfo[] = [
  {
    slug: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    icon: 'droplet',
    description: 'Burst pipes, appliance failures, slab leaks — see how we restore water-damaged homes throughout North San Diego County.',
    seoTitle: 'Water Damage Restoration Projects | Tamarack Restoration',
    seoDescription: 'View completed water damage restoration projects in Carlsbad, Oceanside, and North San Diego County. See our process and results.',
    relatedService: 'water-damage-restoration',
  },
  {
    slug: 'mold-removal',
    name: 'Mold Removal',
    icon: 'shield',
    description: 'IICRC-certified mold remediation projects — safely contained, thoroughly removed, and cleared for reoccupancy.',
    seoTitle: 'Mold Removal Projects | Tamarack Restoration',
    seoDescription: 'Browse completed mold remediation projects in North San Diego County. IICRC-certified containment and removal.',
    relatedService: 'mold-removal',
  },
  {
    slug: 'fire-damage-restoration',
    name: 'Fire Damage Restoration',
    icon: 'flame',
    description: 'From kitchen fires to whole-home smoke damage — complete fire and smoke restoration projects across our service area.',
    seoTitle: 'Fire Damage Restoration Projects | Tamarack Restoration',
    seoDescription: 'See completed fire and smoke damage restoration projects in Carlsbad and North San Diego County.',
    relatedService: 'fire-damage-restoration',
  },
  {
    slug: 'flood-cleanup',
    name: 'Flood Cleanup',
    icon: 'cloud-rain',
    description: 'Storm flooding, atmospheric river damage, and flash flood cleanup — see our Category 3 water remediation projects.',
    seoTitle: 'Flood Cleanup Projects | Tamarack Restoration',
    seoDescription: 'Completed flood cleanup projects in North San Diego County. Category 1-3 water extraction and restoration.',
    relatedService: 'flood-cleanup',
  },
  {
    slug: 'sewage-cleanup',
    name: 'Sewage Cleanup',
    icon: 'alert-triangle',
    description: 'Biohazard-certified sewage backup and septic overflow cleanup — safe, thorough, and code-compliant restoration.',
    seoTitle: 'Sewage Cleanup Projects | Tamarack Restoration',
    seoDescription: 'Sewage backup and biohazard remediation projects in North San Diego County. Certified technicians, safe outcomes.',
    relatedService: 'sewage-cleanup',
  },
  {
    slug: 'water-leak-repair',
    name: 'Water Leak Repair',
    icon: 'tool',
    description: 'Thermal imaging leak detection and repair projects — catching hidden leaks before they cause major damage.',
    seoTitle: 'Water Leak Repair Projects | Tamarack Restoration',
    seoDescription: 'Water leak detection and repair projects in Carlsbad and North San Diego County. Thermal imaging, minimal demolition.',
    relatedService: 'water-leak-repair',
  },
];

/**
 * Get all projects within a specific category (service slug).
 */
export function getProjectsByCategory(categorySlug: string): Project[] {
  return projects.filter(p => p.service === categorySlug);
}

/**
 * Get a single category by its slug.
 */
export function getCategoryBySlug(slug: string): ProjectCategoryInfo | undefined {
  return projectCategories.find(c => c.slug === slug);
}
