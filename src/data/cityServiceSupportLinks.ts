/**
 * Phase 2A City-Service Support Links
 * ===================================
 * Curated, compact internal-link groups for approved priority water-related
 * city-service money pages. These links are intentionally opt-in by exact
 * city/service key so the full 64-page city-service set is not mass-updated.
 */

export interface CityServiceSupportLink {
  label: string;
  href: string;
  description?: string;
}

export interface CityServiceSupportLinkGroup {
  title: string;
  description?: string;
  links: CityServiceSupportLink[];
}

const supportLinksByCityService: Record<string, CityServiceSupportLinkGroup[]> = {
  'carlsbad__water-damage-restoration': [
    {
      title: 'Related Water Services',
      description: 'Common next steps when a Carlsbad water loss involves hidden leaks, slab moisture, or storm water.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Find and repair hidden plumbing leaks before moisture spreads.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/carlsbad/slab-leak-repair/',
          description: 'Detection, repair coordination, and drying for slab-related water damage.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/carlsbad/flood-cleanup/',
          description: 'Cleanup support for storm, overflow, and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Practical water damage resources for urgent decisions and follow-up planning.',
      links: [
        {
          label: 'First 60 Minutes in Carlsbad',
          href: '/blog/emergency-water-damage-restoration-carlsbad-first-60-minutes/',
          description: 'What to do immediately after discovering water damage locally.',
        },
        {
          label: 'Water Damage Article Hub',
          href: '/blog/category/water-damage/',
          description: 'Emergency steps, drying timelines, costs, and documentation guides.',
        },
        {
          label: 'Completed Water Damage Projects',
          href: '/projects/water-damage-restoration/',
          description: 'Real North County project examples from water restoration work.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation support links; coverage depends on your policy, cause of loss, exclusions, and carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'How Tamarack documents water losses for carrier and adjuster review.',
        },
        {
          label: 'State Farm Water Damage',
          href: '/insurance/state-farm/water-damage-restoration/',
          description: 'Documentation and communication support for State Farm policyholders.',
        },
        {
          label: 'Allstate Water Damage',
          href: '/insurance/allstate/water-damage-restoration/',
          description: 'Water damage documentation support for Allstate carrier review.',
        },
      ],
    },
  ],

  'carlsbad__water-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Nearby services when a hidden leak has already affected floors, walls, or the slab.',
      links: [
        {
          label: 'Leak Detection',
          href: '/service-area/carlsbad/leak-detection/',
          description: 'Thermal imaging and acoustic tools to narrow down hidden moisture sources.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/carlsbad/slab-leak-repair/',
          description: 'Specialized support for leaks below concrete slab foundations.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Extraction, drying, and repairs after a leak causes property damage.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Resources for spotting leak symptoms and deciding when to call.',
      links: [
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for hidden leaks, slab leaks, and moisture diagnosis.',
        },
        {
          label: 'Slab Leak Guide',
          href: '/blog/slab-leak-repair-carlsbad-detection-repair-restoration/',
          description: 'How Carlsbad slab leaks are detected, repaired, and dried.',
        },
        {
          label: 'Water Leak Project Examples',
          href: '/projects/water-leak-repair/',
          description: 'Real examples of leak detection and repair work in North County.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Use these when a leak has caused damage that may need documentation for carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Photos, moisture readings, and scope notes can help document covered losses.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Understand why coverage depends on the loss cause and policy language.',
        },
      ],
    },
  ],

  'carlsbad__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Services commonly needed before, during, or after a slab leak repair.',
      links: [
        {
          label: 'Leak Detection',
          href: '/service-area/carlsbad/leak-detection/',
          description: 'Locate slab and wall leaks with non-invasive detection equipment.',
        },
        {
          label: 'Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Repair support for pipe, wall, and foundation leaks.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Drying and restoration when slab moisture reaches interior materials.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Slab leak resources for symptoms, detection, and restoration planning.',
      links: [
        {
          label: 'Carlsbad Slab Leak Guide',
          href: '/blog/slab-leak-repair-carlsbad-detection-repair-restoration/',
          description: 'Detection, repair options, and drying steps for Carlsbad homes.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'More guidance on hidden leaks and moisture mapping.',
        },
        {
          label: 'Water Leak Project Examples',
          href: '/projects/water-leak-repair/',
          description: 'Existing leak detection and repair examples from North County.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation-focused resources; policy coverage varies by cause, exclusions, and carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Learn how photos, moisture logs, and repair scopes support review.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Review common coverage factors before making claim assumptions.',
        },
      ],
    },
  ],

  'carlsbad__leak-detection': [
    {
      title: 'Related Water Services',
      description: 'Next steps when detection confirms an active leak or moisture spread.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Targeted repair after a leak source has been confirmed.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/carlsbad/slab-leak-repair/',
          description: 'Repair and drying support for leaks beneath slab foundations.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Mitigation when hidden moisture has damaged building materials.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Learn what hidden leaks look like and how restoration decisions are made.',
      links: [
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for finding hidden leaks before damage expands.',
        },
        {
          label: 'Carlsbad Slab Leak Guide',
          href: '/blog/slab-leak-repair-carlsbad-detection-repair-restoration/',
          description: 'A local guide to slab leak detection, repair, and restoration.',
        },
        {
          label: 'Warning Signs of Water Damage',
          href: '/blog/signs-of-water-damage-in-your-home/',
          description: 'Symptoms that suggest moisture may be active behind surfaces.',
        },
      ],
    },
    {
      title: 'Local Project Examples',
      description: 'Relevant proof paths without creating unsupported leak detection project categories.',
      links: [
        {
          label: 'Water Leak Project Examples',
          href: '/projects/water-leak-repair/',
          description: 'Existing leak repair examples using detection and moisture documentation.',
        },
        {
          label: 'Water Damage Projects',
          href: '/projects/water-damage-restoration/',
          description: 'See restoration outcomes when leaks lead to property damage.',
        },
      ],
    },
  ],

  'carlsbad__flood-cleanup': [
    {
      title: 'Related Water Services',
      description: 'Services that may be needed after storm water, overflows, or contaminated water events.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Structural drying and repair support after water affects the home.',
        },
        {
          label: 'Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Find plumbing or roof-related leaks that may mimic flood damage.',
        },
        {
          label: 'Flood Cleanup Service',
          href: '/services/flood-cleanup/',
          description: 'Full-service overview for extraction, sanitation, and drying.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Storm and flood resources for Carlsbad and North County homeowners.',
      links: [
        {
          label: 'Carlsbad Flood Cleanup Guide',
          href: '/blog/flood-cleanup-carlsbad-storm/',
          description: 'What happens after storm flooding and how cleanup is prioritized.',
        },
        {
          label: 'Flood Cleanup Articles',
          href: '/blog/category/flood/',
          description: 'Storm damage, contaminated water, and flood cleanup guides.',
        },
        {
          label: 'Flood Cleanup Projects',
          href: '/projects/flood-cleanup/',
          description: 'Existing project examples for flood cleanup and sanitation.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Flood and storm coverage can vary; review depends on policy terms, water source, and carrier decisions.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Documentation support for photos, scope notes, and drying records.',
        },
        {
          label: 'State Farm Flood Cleanup',
          href: '/insurance/state-farm/flood-cleanup/',
          description: 'Flood cleanup documentation support for State Farm policyholders.',
        },
        {
          label: 'Allstate Flood Cleanup',
          href: '/insurance/allstate/flood-cleanup/',
          description: 'Flood cleanup documentation support for Allstate carrier review.',
        },
      ],
    },
  ],

  'encinitas__water-damage-restoration': [
    {
      title: 'Related Water Services',
      description: 'Water services that often connect to Encinitas leaks, slab moisture, and storm-related losses.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/encinitas/water-leak-repair/',
          description: 'Find and repair hidden leaks before water damage expands.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/encinitas/slab-leak-repair/',
          description: 'Detection and drying support for slab-related water losses.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/encinitas/flood-cleanup/',
          description: 'Storm and overflow cleanup for coastal Encinitas properties.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Local and practical guides for Encinitas water damage decisions.',
      links: [
        {
          label: 'Encinitas Water Damage Guide',
          href: '/blog/water-damage-restoration-encinitas-ca/',
          description: 'A local guide for process, costs, timing, and next steps.',
        },
        {
          label: 'First 24 Hours Guide',
          href: '/blog/how-to-handle-water-damage-emergency-first-24-hours/',
          description: 'Immediate steps to limit damage while help is on the way.',
        },
        {
          label: 'Water Damage Projects',
          href: '/projects/water-damage-restoration/',
          description: 'Examples of completed restoration work in North County.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby North County pages for homeowners comparing local response options.',
      links: [
        {
          label: 'Carlsbad Water Damage',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Water restoration near Tamarack Restoration headquarters.',
        },
        {
          label: 'Oceanside Water Damage',
          href: '/service-area/oceanside/water-damage-restoration/',
          description: 'Water damage help for coastal and inland Oceanside homes.',
        },
      ],
    },
  ],

  'oceanside__water-damage-restoration': [
    {
      title: 'Related Water Services',
      description: 'Connected services for Oceanside slab leaks, ceiling leaks, and storm water issues.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/oceanside/water-leak-repair/',
          description: 'Repair support for plumbing, wall, and roof-related leaks.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/oceanside/slab-leak-repair/',
          description: 'Detection and repair coordination for slab leaks.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/oceanside/flood-cleanup/',
          description: 'Cleanup for storm, overflow, and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Oceanside-focused guides for water damage symptoms and prevention.',
      links: [
        {
          label: 'Oceanside Ceiling Leak Steps',
          href: '/blog/oceanside-ceiling-leak-steps-before-mold-starts/',
          description: 'What to do after a ceiling leak before mold risk increases.',
        },
        {
          label: 'Oceanside Prevention Guide',
          href: '/blog/water-damage-prevention-in-oceanside/',
          description: 'Ways Oceanside homeowners can reduce avoidable water damage.',
        },
        {
          label: 'Water Damage Projects',
          href: '/projects/water-damage-restoration/',
          description: 'Completed water restoration examples in North County.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation support resources; coverage depends on policy terms and carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'How photos, readings, and scope notes support carrier communication.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Common coverage considerations for sudden and hidden water losses.',
        },
      ],
    },
  ],

  'san-marcos__water-damage-restoration': [
    {
      title: 'Related Water Services',
      description: 'Services that support San Marcos homes after plumbing, appliance, or storm water losses.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/san-marcos/water-leak-repair/',
          description: 'Find and repair leak sources before more materials are affected.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/san-marcos/slab-leak-repair/',
          description: 'Slab leak detection, repair coordination, and drying support.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/san-marcos/flood-cleanup/',
          description: 'Cleanup for storm, overflow, and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'San Marcos and North County resources for water damage response and documentation.',
      links: [
        {
          label: 'San Marcos Claim Checklist',
          href: '/blog/san-marcos-water-damage-insurance-claim-checklist/',
          description: 'Documentation steps to organize photos, readings, and claim records.',
        },
        {
          label: 'Structural Drying Timeline',
          href: '/blog/how-long-does-structural-drying-take-north-san-diego/',
          description: 'What affects drying time in North San Diego County homes.',
        },
        {
          label: 'Water Damage Projects',
          href: '/projects/water-damage-restoration/',
          description: 'Completed water restoration examples from local homes.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Insurance links focused on documentation, not coverage guarantees or claim outcomes.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'How Tamarack supports documentation and adjuster communication.',
        },
        {
          label: 'Farmers Water Damage',
          href: '/insurance/farmers/water-damage-restoration/',
          description: 'Water damage documentation support for Farmers carrier review.',
        },
      ],
    },
  ],

  'vista__water-damage-restoration': [
    {
      title: 'Related Water Services',
      description: 'Water services for Vista homes dealing with leaks, slab moisture, or flood cleanup needs.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/vista/water-leak-repair/',
          description: 'Repair support after leak detection or visible moisture symptoms.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/vista/slab-leak-repair/',
          description: 'Slab leak detection and repair coordination for Vista properties.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/vista/flood-cleanup/',
          description: 'Cleanup for storm, overflow, and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Vista and North County guides for water losses and flood cleanup decisions.',
      links: [
        {
          label: 'Vista Flooded Bathroom Guide',
          href: '/blog/vista-flooded-bathroom-category-2-3-water-loss/',
          description: 'When bathroom flooding becomes a Category 2 or 3 water loss.',
        },
        {
          label: 'Water Damage Article Hub',
          href: '/blog/category/water-damage/',
          description: 'Emergency steps, drying timelines, costs, and documentation guides.',
        },
        {
          label: 'Water Damage Projects',
          href: '/projects/water-damage-restoration/',
          description: 'Completed water restoration examples from North County homes.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby high-priority water restoration pages in North San Diego County.',
      links: [
        {
          label: 'San Marcos Water Damage',
          href: '/service-area/san-marcos/water-damage-restoration/',
          description: 'Water restoration support for neighboring San Marcos properties.',
        },
        {
          label: 'Oceanside Water Damage',
          href: '/service-area/oceanside/water-damage-restoration/',
          description: 'Water damage help for coastal and inland Oceanside homes.',
        },
      ],
    },
  ],

  'bressi-ranch__water-damage-restoration': [
    {
      title: 'Related Water Services',
      description: 'Water services for Bressi Ranch homes with leaks, slab moisture, or storm-related damage.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/bressi-ranch/water-leak-repair/',
          description: 'Find and repair hidden leaks before more rooms are affected.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/bressi-ranch/slab-leak-repair/',
          description: 'Detection and restoration support for slab-related leaks.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/bressi-ranch/flood-cleanup/',
          description: 'Cleanup support for storm, overflow, and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Practical resources for Bressi Ranch and nearby Carlsbad water losses.',
      links: [
        {
          label: 'First 60 Minutes in Carlsbad',
          href: '/blog/emergency-water-damage-restoration-carlsbad-first-60-minutes/',
          description: 'Immediate actions after discovering water damage near Carlsbad.',
        },
        {
          label: 'Water Damage Article Hub',
          href: '/blog/category/water-damage/',
          description: 'Guides for emergency response, drying, costs, and documentation.',
        },
        {
          label: 'Water Damage Projects',
          href: '/projects/water-damage-restoration/',
          description: 'Completed local restoration examples from North County homes.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby local pages for homeowners comparing service options around Carlsbad.',
      links: [
        {
          label: 'Carlsbad Water Damage',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Water restoration near Tamarack Restoration headquarters.',
        },
        {
          label: 'Encinitas Water Damage',
          href: '/service-area/encinitas/water-damage-restoration/',
          description: 'Water restoration support for nearby coastal homes.',
        },
      ],
    },
  ],
};

export const enhancedCityServiceSupportLinkKeys = Object.keys(supportLinksByCityService);

export function getCityServiceSupportLinks(
  citySlug: string | undefined,
  serviceSlug: string | undefined,
): CityServiceSupportLinkGroup[] {
  if (!citySlug || !serviceSlug) return [];

  return supportLinksByCityService[`${citySlug}__${serviceSlug}`] || [];
}
