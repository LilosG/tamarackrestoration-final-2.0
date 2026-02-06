/**
 * Projects/Portfolio Data
 * =======================
 * Showcases completed restoration projects by category
 */

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  serviceType: string;
  timeline: string;
}

export type ProjectCategory = 'water-damage' | 'mold' | 'fire-damage' | 'flood';

export interface ProjectCategoryInfo {
  slug: ProjectCategory;
  name: string;
  description: string;
  icon: string;
  relatedService: string;
  seoTitle: string;
  seoDescription: string;
}

export const projectCategories: ProjectCategoryInfo[] = [
  {
    slug: 'water-damage',
    name: 'Water Damage Restoration',
    description: 'See how we\'ve restored homes and businesses affected by burst pipes, appliance failures, and plumbing emergencies throughout North San Diego County.',
    icon: 'droplet',
    relatedService: 'water-damage-restoration',
    seoTitle: 'Water Damage Restoration Projects | Tamarack Restoration',
    seoDescription: 'View completed water damage restoration projects in Carlsbad and North San Diego County. See our work on burst pipes, flooding, and water extraction.',
  },
  {
    slug: 'mold',
    name: 'Mold Remediation',
    description: 'From hidden mold behind walls to widespread contamination, see how our IICRC-certified technicians safely eliminate mold and restore healthy indoor air quality.',
    icon: 'shield',
    relatedService: 'mold-removal',
    seoTitle: 'Mold Remediation Projects | Tamarack Restoration',
    seoDescription: 'View completed mold remediation projects in North San Diego County. Professional containment, removal, and clearance testing results.',
  },
  {
    slug: 'fire-damage',
    name: 'Fire & Smoke Restoration',
    description: 'Complete fire damage restoration including structural repair, smoke and soot removal, and odor elimination. See properties we\'ve restored after fire damage.',
    icon: 'flame',
    relatedService: 'fire-damage-restoration',
    seoTitle: 'Fire Damage Restoration Projects | Tamarack Restoration',
    seoDescription: 'View completed fire and smoke damage restoration projects. Structural repair, soot removal, and complete reconstruction in North San Diego County.',
  },
  {
    slug: 'flood',
    name: 'Flood Cleanup',
    description: 'Rapid flood response and restoration for storm damage, flash flooding, and natural disasters. See how we help families recover after flooding events.',
    icon: 'cloud-rain',
    relatedService: 'flood-cleanup',
    seoTitle: 'Flood Cleanup Projects | Tamarack Restoration',
    seoDescription: 'View completed flood cleanup and restoration projects in North San Diego County. Storm damage, water extraction, and property restoration.',
  },
];

export const projects: Project[] = [
  // Water Damage Projects
  {
    id: 'carlsbad-burst-pipe',
    title: 'Emergency Burst Pipe Restoration in La Costa',
    category: 'water-damage',
    location: 'Carlsbad, CA',
    description: 'A burst pipe in the second-floor bathroom sent water cascading through the home, damaging two floors of a La Costa family residence.',
    challenge: 'Water from a burst supply line had been flowing for several hours before the homeowner returned, saturating the upstairs bathroom, hallway, and the living room ceiling below. Hardwood floors were cupping and drywall was beginning to sag.',
    solution: 'Our team arrived within 40 minutes and immediately began extraction. We removed standing water, set up a containment system for the damaged ceiling, and deployed 12 commercial dehumidifiers and 20 air movers. Moisture monitoring over 4 days confirmed complete drying before we began repairs.',
    result: 'The home was fully restored within 10 days, including new drywall, refinished hardwood floors, and a repainted ceiling. The homeowner\'s State Farm policy covered the full restoration.',
    serviceType: 'water-damage-restoration',
    timeline: '10 days',
  },
  {
    id: 'oceanside-water-heater',
    title: 'Water Heater Failure Cleanup in Fire Mountain',
    category: 'water-damage',
    location: 'Oceanside, CA',
    description: 'A failed water heater in the garage flooded the garage and adjacent family room of an Oceanside home.',
    challenge: 'The 50-gallon water heater ruptured overnight, flooding the garage and seeping into the family room through the shared wall. Carpet, drywall, and stored belongings were affected.',
    solution: 'We extracted water, removed damaged carpet and 2 feet of drywall along the shared wall, and set up drying equipment. The water heater was isolated and the homeowner arranged replacement.',
    result: 'Complete drying achieved in 3 days. New carpet and drywall installed within one week. Insurance claim processed smoothly with our documentation.',
    serviceType: 'water-damage-restoration',
    timeline: '7 days',
  },
  {
    id: 'encinitas-slab-leak',
    title: 'Slab Leak Detection & Restoration in Leucadia',
    category: 'water-damage',
    location: 'Encinitas, CA',
    description: 'An Encinitas homeowner noticed warm spots on the floor and a steadily increasing water bill, indicating a hidden slab leak.',
    challenge: 'The leak had been slowly releasing water under the slab for weeks, causing elevated moisture in the surrounding flooring and creating conditions for potential mold growth.',
    solution: 'Using thermal imaging and acoustic equipment, we pinpointed the leak location without unnecessary demolition. The pipe was repaired with minimal floor penetration, and we dried the affected area thoroughly.',
    result: 'Leak repaired and area fully dried in 5 days. Flooring restored with minimal disruption. Early detection prevented what could have become a major mold issue.',
    serviceType: 'water-damage-restoration',
    timeline: '5 days',
  },
  // Mold Projects
  {
    id: 'carlsbad-bathroom-mold',
    title: 'Bathroom Mold Remediation in Carlsbad Village',
    category: 'mold',
    location: 'Carlsbad, CA',
    description: 'Extensive mold growth discovered behind the shower walls of an older Carlsbad Village home during a bathroom remodel.',
    challenge: 'When the contractor removed tile, they found widespread black mold covering the wall cavities and extending into the adjacent bedroom wall. The homeowner\'s family had been experiencing increased allergies.',
    solution: 'We established full containment with negative air pressure, used HEPA air scrubbers throughout the home, and safely removed all mold-affected materials. The moisture source—a failed shower pan—was identified and noted for repair.',
    result: 'Post-remediation air testing confirmed mold spore counts returned to normal levels. The contractor completed the bathroom renovation with proper waterproofing. The family reported significant improvement in allergy symptoms.',
    serviceType: 'mold-removal',
    timeline: '4 days',
  },
  {
    id: 'vista-crawlspace-mold',
    title: 'Crawlspace Mold Treatment in Shadowridge',
    category: 'mold',
    location: 'Vista, CA',
    description: 'A home inspection revealed significant mold growth in the crawlspace of a Vista home being prepared for sale.',
    challenge: 'The crawlspace had poor ventilation and a vapor barrier that had degraded over time, allowing ground moisture to support mold growth on floor joists and subfloor.',
    solution: 'Our team set up containment, removed damaged insulation, treated all wood surfaces with antimicrobial agents, and installed a new vapor barrier. We also recommended improved ventilation to the homeowner.',
    result: 'The home passed re-inspection with clean air quality results. The sale proceeded on schedule, and the new owners have a properly protected crawlspace.',
    serviceType: 'mold-removal',
    timeline: '3 days',
  },
  {
    id: 'san-marcos-mold-after-leak',
    title: 'Post-Leak Mold Remediation in San Elijo Hills',
    category: 'mold',
    location: 'San Marcos, CA',
    description: 'A slow roof leak during winter rains led to mold growth in the attic and upper-floor bedroom of a San Marcos home.',
    challenge: 'The homeowner noticed a musty smell and dark spots on the ceiling. Investigation revealed mold had spread from the attic through the ceiling and into the bedroom wall cavity.',
    solution: 'We contained the affected areas, removed mold-damaged insulation and drywall, treated all surfaces, and used HEPA filtration throughout. The roof leak was identified and marked for the roofer.',
    result: 'All mold was successfully removed and clearance testing confirmed safe air quality. The homeowner had the roof repaired and we restored the bedroom to its original condition.',
    serviceType: 'mold-removal',
    timeline: '5 days',
  },
  // Fire Damage Projects
  {
    id: 'carlsbad-kitchen-fire',
    title: 'Kitchen Fire Restoration in Calavera Hills',
    category: 'fire-damage',
    location: 'Carlsbad, CA',
    description: 'A cooking fire in a Carlsbad kitchen caused significant fire damage to the kitchen and smoke damage throughout the home.',
    challenge: 'The fire consumed the kitchen cabinets, appliances, and caused structural damage to the ceiling. Smoke and soot spread to every room in the house, and firefighting water damaged the flooring.',
    solution: 'We boarded up the kitchen opening for security, extracted firefighting water, and began smoke and soot removal from all surfaces. We used thermal fogging and ozone treatment for odor elimination, then coordinated complete kitchen reconstruction.',
    result: 'The home was fully restored in 6 weeks, including a completely rebuilt kitchen with new cabinets, countertops, and appliances. The homeowner said the kitchen was better than before the fire.',
    serviceType: 'fire-damage-restoration',
    timeline: '6 weeks',
  },
  {
    id: 'oceanside-electrical-fire',
    title: 'Electrical Fire Damage Repair in Rancho Del Oro',
    category: 'fire-damage',
    location: 'Oceanside, CA',
    description: 'An electrical fire in a wall outlet caused localized fire damage and widespread smoke damage in an Oceanside townhome.',
    challenge: 'While the fire was contained to one wall, smoke traveled through the HVAC system and coated surfaces throughout the two-story townhome. The HOA required specific materials for exterior repairs.',
    solution: 'We cleaned smoke residue from all surfaces using appropriate methods for each material type, cleaned the HVAC system, and performed thermal fogging for odor treatment. The damaged wall was rebuilt with materials matching HOA requirements.',
    result: 'Smoke odor completely eliminated and all surfaces restored. The HOA approved the exterior work. Total restoration completed in 3 weeks.',
    serviceType: 'fire-damage-restoration',
    timeline: '3 weeks',
  },
  // Flood Projects
  {
    id: 'carlsbad-storm-flood',
    title: 'Storm Flood Cleanup in Olde Carlsbad',
    category: 'flood',
    location: 'Carlsbad, CA',
    description: 'Heavy rains overwhelmed the drainage system near an older Carlsbad neighborhood, sending flood water into several ground-floor homes.',
    challenge: 'Several inches of storm water entered through the front door and garage, contaminating carpet, drywall, and personal belongings. The water was classified as Category 3 (contaminated) due to storm runoff.',
    solution: 'We responded within 45 minutes, extracted all standing water, removed contaminated carpet and lower drywall, and applied antimicrobial treatments. All salvageable contents were cleaned and sanitized.',
    result: 'The home was dried, sanitized, and fully restored within 2 weeks. Our detailed documentation helped the homeowner successfully file their flood insurance claim.',
    serviceType: 'flood-cleanup',
    timeline: '2 weeks',
  },
  {
    id: 'vista-basement-flood',
    title: 'Flash Flood Response in Downtown Vista',
    category: 'flood',
    location: 'Vista, CA',
    description: 'A sudden downpour caused flash flooding that entered the lower level of a Vista home through window wells and foundation seepage.',
    challenge: 'The lower level was used as a family room and home office. Flood water damaged flooring, furniture, electronics, and stored documents. Quick action was needed to prevent mold growth.',
    solution: 'Emergency extraction began immediately upon arrival. We removed all porous materials that contacted flood water, set up commercial drying equipment, and sanitized all hard surfaces. Contents were inventoried for the insurance claim.',
    result: 'The space was dried and sanitized within 4 days. New flooring and drywall installed within 2 weeks. The homeowner was able to save most electronics and important documents thanks to quick response.',
    serviceType: 'flood-cleanup',
    timeline: '2 weeks',
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getCategoryBySlug(slug: string): ProjectCategoryInfo | undefined {
  return projectCategories.find((c) => c.slug === slug);
}
