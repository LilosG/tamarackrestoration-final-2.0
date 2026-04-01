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
    challenge: 'The supply line failed silently overnight, saturating hardwood floors, adjacent carpet, and lower cabinetry across three rooms of this La Costa home before the damage was discovered. Moisture had wicked into the subfloor and drywall baseboards by morning.',
    solution: 'Our Carlsbad team arrived within 60 minutes, extracted standing water with truck-mounted equipment, and deployed commercial air movers and dehumidifiers throughout the affected rooms. We monitored moisture daily, removed and dried the subfloor assembly, and coordinated cabinetry replacement.',
    result: 'All materials dried to pre-loss moisture levels within seven days. Hardwood flooring was restored and refinished in place, cabinetry rebuilt to match the original, and the home passed final clearance. Total project completed in 10 days.',
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
    challenge: 'The slab leak went undetected for weeks in this South Oceanside home, steadily saturating the concrete slab and the carpet and pad above it. By the time elevated water bills prompted inspection, moisture had spread beneath the entire living room floor assembly.',
    solution: 'After the plumber completed the pipe repair, our Oceanside crew extracted standing water, removed the saturated carpet and pad, and set up a slab-drying system using desiccant dehumidifiers and floor drying mats. We monitored concrete moisture levels daily until the slab reached acceptable readings.',
    result: 'The concrete slab dried completely within five days. New luxury vinyl plank flooring was installed throughout the living room, matching the adjacent areas. The homeowner received a full moisture log documenting clearance for insurance purposes.',
    beforeImage: '/images/services/water-damage/living-room-dryout.webp',
    afterImage: '/images/services/water-damage/oceanside-water-damage-restoration.webp',
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
    challenge: 'The failed supply valve in this Cardiff-by-the-Sea two-story home allowed water to flow for several hours, traveling through the subfloor and penetrating the dining room ceiling below. Both floors sustained water damage, with ceiling drywall beginning to sag by the time the water was shut off.',
    solution: 'Our Encinitas crew opened the ceiling in the affected area to allow airflow, extracted water from both floors, and set up drying systems on each level simultaneously. Damaged drywall and insulation were removed, and the area was dried under containment to prevent secondary damage to unaffected rooms.',
    result: 'Both floors dried within six days. We replaced the damaged ceiling drywall, retextured to match the existing finish, and repaired the affected flooring. The dining room ceiling was restored with no visible trace of the damage.',
    beforeImage: '/images/services/water-damage/containment-drying.webp',
    afterImage: '/images/services/water-damage/encinitas-water-damage-restoration.webp',
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
    challenge: 'The failed water heater in this San Elijo Hills garage released its full tank before the homeowner could shut off the supply. Water migrated under the door into the adjacent laundry room, soaking the drywall base and wall cavities on both sides of the shared wall.',
    solution: 'Our San Marcos team extracted the standing water, removed baseboards and the lower portion of affected drywall to expose the wall cavities, and set up cavity-drying equipment to dry the framing from the inside out. The garage slab was dried using commercial floor mats and monitored until it reached structural drying standards.',
    result: 'The wall assemblies and slab dried within four days. New drywall was installed, taped, textured, and painted to match. The laundry room was fully restored and the garage returned to pre-loss condition with no mold growth detected.',
    beforeImage: '/images/services/water-damage/structural-drying.webp',
    afterImage: '/images/services/water-damage/san-marcos-water-damage-restoration.webp',
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
    challenge: 'A slow leak in the shower pan of this 1970s Carlsbad Village home had been feeding mold growth behind the wall for months before the homeowner noticed discoloration and a musty odor. By the time we assessed the property, mold had penetrated the drywall and insulation on two adjacent walls.',
    solution: 'Our Carlsbad crew established a full negative-air containment barrier, removed all affected drywall and insulation down to clean framing, and treated exposed wood surfaces with an EPA-registered antimicrobial solution. HEPA air scrubbers ran continuously throughout remediation to protect the rest of the home.',
    result: 'The remediation area passed independent post-clearance testing with no detectable mold spores. New drywall, cement board, and tile were installed to restore the shower, and a new waterproof pan liner was fitted to prevent recurrence.',
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
    challenge: 'Years of poor crawl space ventilation combined with a leaking foundation drain allowed moisture to accumulate beneath this Downtown Vista home, colonizing floor joists and subfloor sheathing with widespread mold growth. The contamination had progressed to the point where insulation was visibly degraded.',
    solution: 'Our Vista team set up HEPA-filtered negative air containment at all crawl space entry points, removed all contaminated insulation, wire-brushed and treated every wood surface with antimicrobial solution, and installed a 20-mil vapor barrier across the full crawl space floor. Ventilation baffles were also corrected to prevent recurrence.',
    result: 'Post-remediation clearance testing confirmed the crawl space met IICRC S520 standards. New insulation was installed, and the homeowner received a full documentation package for their insurance carrier and future buyers.',
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
    challenge: 'A grease fire at the stovetop of this Aviara home produced intense flame damage to the immediate cook zone and generated thick soot that coated every surface on the first floor — including inside HVAC registers, cabinet interiors, and ceiling texture — within minutes.',
    solution: 'Our Carlsbad fire restoration team performed a full soot and smoke residue audit before touching any surface. We cleaned all affected walls, ceilings, and contents using dry chemical sponges followed by wet cleaning, replaced the damaged cabinetry and countertops, and deodorized the entire HVAC system using thermal fogging.',
    result: 'All soot residue was removed and odor clearance was confirmed by air sampling. The kitchen was fully rebuilt with matching cabinetry and new countertops. The homeowners were back in their Aviara home within four weeks of the initial fire.',
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
    challenge: 'An electrical fire originating in the utility room of this Fairbanks Ranch estate self-extinguished quickly but produced protein-based smoke that permeated all 6,000 square feet of the home — embedding deeply into soft goods, HVAC ductwork, wall cavities, and the custom millwork throughout.',
    solution: 'Given the scale, we deployed a dedicated project team for this Rancho Santa Fe restoration. All contents were inventoried and packed out for off-site cleaning. We replaced all HVAC ductwork, performed hydroxyl generator treatments room by room, and used thermal fogging in wall cavities. Soot cleaning proceeded surface by surface with documented sign-offs.',
    result: 'The 8-week restoration was completed on schedule. Air quality testing confirmed odor elimination to pre-loss levels. All custom millwork was restored without replacement, saving the homeowner significantly on the insurance claim.',
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
    challenge: 'The January atmospheric river overwhelmed the storm drain system near Buena Vista Lagoon, sending Category 3 water — carrying soil, debris, and contaminants — into the ground floor of this Carlsbad home. Flooring, drywall, and insulation below the flood line were saturated with biologically contaminated water.',
    solution: 'Our Carlsbad flood team responded within the hour, extracted all standing water, and immediately began Category 3 protocol: full removal of all porous materials below the flood line including flooring, baseboards, drywall, and insulation. All framing and hard surfaces were treated with hospital-grade antimicrobial solution before any drying equipment was placed.',
    result: 'The home was dried, sanitized, and rebuilt to pre-loss condition within three weeks. All work was documented for the homeowners insurance claim, and the rebuilt ground floor passed final inspection. Flood venting was also added to reduce risk in future storm events.',
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
    challenge: 'A sudden downpour overwhelmed drainage around this Shadowridge home in Vista, pushing runoff through the garage door threshold and into the finished basement below. The finished carpet and pad absorbed a large volume of water before the homeowner could respond, and moisture had already begun wicking into the lower drywall.',
    solution: 'Our Vista crew pumped out standing water, removed all saturated carpet and pad from the basement, and set up a combination of air movers and low-grain refrigerant dehumidifiers to dry the concrete slab and wall cavities simultaneously. Drywall was removed to 12 inches above the moisture line to ensure full cavity drying.',
    result: 'The slab and wall assemblies reached structural drying standards within five days. New LVP flooring was installed throughout the basement and the drywall was replaced, retextured, and painted. The finished space was fully restored with no mold growth detected.',
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
    challenge: 'Tree root intrusion into the main sewer line of this Fire Mountain home caused a full backup that flooded the master bathroom and hallway with Category 3 sewage water. The porous tile grout, drywall base, and bathroom vanity cabinet had all absorbed contaminated water by the time the backup was discovered.',
    solution: 'Our biohazard-certified Oceanside team suited up in full PPE, extracted the sewage, and removed all contaminated porous materials — flooring, baseboards, lower drywall, and the vanity cabinet. All hard surfaces were cleaned and disinfected with hospital-grade products in multiple passes. A negative-air containment was maintained throughout to protect the rest of the home.',
    result: 'The master bathroom and hallway passed biohazard clearance testing before any rebuilding began. New tile flooring, drywall, and a matching vanity were installed. The homeowners insurance covered the full claim, which our documentation supported from extraction through final inspection.',
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
    challenge: 'Heavy rainfall overwhelmed the failing septic system at this Olivenhain property, causing sewage to back up through the laundry room floor drain and spread across the laundry room and into an adjacent utility hallway. The flooring, lower walls, and washing machine base cabinet were all contaminated.',
    solution: 'Our Encinitas biohazard team established a full containment barrier, extracted the contaminated water, and removed all affected building materials including the flooring, baseboards, lower drywall, and cabinet. The concrete slab and all remaining hard surfaces were treated with enzyme-based bioremediation solution followed by hospital-grade disinfectant.',
    result: 'The laundry room cleared biohazard testing within 48 hours of remediation completion. New tile, drywall, and cabinetry were installed and the space was returned to full function. The septic contractor completed system repairs concurrently, allowing us to restore the room immediately after clearance.',
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
    challenge: 'The homeowners in this Calavera Hills home noticed warm spots on their tile floor and a spike in their water bill but had no visible leak. The hot-water slab leak had been running undetected for several weeks, silently saturating the slab and the flooring adhesive across the master bedroom.',
    solution: 'Our Carlsbad detection team used thermal imaging cameras and acoustic listening equipment to pinpoint the exact leak location without breaking any concrete. We coordinated with the plumber for a same-day pipe repair, then set up slab-drying equipment — floor drying mats and desiccant dehumidifiers — to draw moisture out of the concrete from above.',
    result: 'The slab reached target moisture levels within six days with zero concrete demolition. Flooring was reinstalled over the dried slab, and the homeowner received a complete moisture log and thermal imaging report for their insurance carrier and future property records.',
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
    challenge: 'The homeowners in this Eden Gardens property in Solana Beach noticed occasional staining on the bathroom wall but assumed it was condensation. An acoustic assessment revealed a pinhole leak in a copper supply line inside the wall that had been slowly wetting the wall cavity and insulation for months — just short of triggering visible mold growth.',
    solution: 'We accessed the pipe through a minimal-demolition cut rather than opening the full wall, allowing the plumber to repair the pinhole with a targeted copper fitting. We then set up wall-cavity drying equipment to dry the framing and insulation from the inside before any moisture could promote mold. The cavity was monitored daily until clear.',
    result: 'The wall cavity dried completely within three days and was cleared with no mold detected — an outcome only possible because of early intervention. The access opening was patched, retextured, and painted, leaving no visible sign of the repair. The homeowner avoided what would have been a significant mold remediation.',
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
