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

  'oceanside__water-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Same-city services when an Oceanside leak has affected walls, floors, or nearby rooms.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/oceanside/water-damage-restoration/',
          description: 'Extraction, drying, and restoration after a leak causes property damage.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/oceanside/slab-leak-repair/',
          description: 'Support for leaks beneath slab foundations and related moisture spread.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/oceanside/flood-cleanup/',
          description: 'Cleanup for storm water, overflows, and larger water intrusions.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Oceanside leak and water damage resources for early action and prevention.',
      links: [
        {
          label: 'Oceanside Ceiling Leak Steps',
          href: '/blog/oceanside-ceiling-leak-steps-before-mold-starts/',
          description: 'What to do before ceiling leak moisture turns into a larger mold risk.',
        },
        {
          label: 'Water Damage Prevention in Oceanside',
          href: '/blog/water-damage-prevention-in-oceanside/',
          description: 'Prevention tips for coastal and inland Oceanside properties.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for hidden leaks, slab leaks, and moisture diagnosis.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation-focused links when leak damage may need carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Learn how photos, moisture readings, and scopes support claim review.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Coverage depends on the cause of loss, policy language, and exclusions.',
        },
      ],
    },
  ],

  'vista__water-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Vista water services commonly needed after hidden plumbing or fixture leaks.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/vista/water-damage-restoration/',
          description: 'Drying and repairs when leak moisture reaches building materials.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/vista/slab-leak-repair/',
          description: 'Under-slab leak support for Vista homes with foundation moisture symptoms.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/vista/flood-cleanup/',
          description: 'Cleanup for bathroom floods, overflows, and larger water losses.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Resources for spotting leak damage and preventing spread in Vista homes.',
      links: [
        {
          label: 'Vista Flooded Bathroom Guide',
          href: '/blog/vista-flooded-bathroom-category-2-3-water-loss/',
          description: 'How category 2 and category 3 bathroom water losses are handled.',
        },
        {
          label: 'Warning Signs of Water Damage',
          href: '/blog/signs-of-water-damage-in-your-home/',
          description: 'Common visual and odor clues that hidden water may be spreading.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guidance on slab leaks, hidden leaks, and moisture mapping.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby leak repair pages for homeowners comparing North County service coverage.',
      links: [
        {
          label: 'San Marcos Water Leak Repair',
          href: '/service-area/san-marcos/water-leak-repair/',
          description: 'Leak repair support in nearby San Marcos neighborhoods.',
        },
        {
          label: 'Oceanside Water Leak Repair',
          href: '/service-area/oceanside/water-leak-repair/',
          description: 'Leak detection and repair support across Oceanside.',
        },
      ],
    },
  ],

  'san-marcos__water-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Same-city water services when a San Marcos leak affects floors, walls, or the slab.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/san-marcos/water-damage-restoration/',
          description: 'Extraction, structural drying, and repair coordination after leak damage.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/san-marcos/slab-leak-repair/',
          description: 'Detection and drying support for under-slab plumbing leaks.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/san-marcos/flood-cleanup/',
          description: 'Cleanup for overflows, storm water, and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'San Marcos water damage and drying resources for leak-related decisions.',
      links: [
        {
          label: 'San Marcos Claim Checklist',
          href: '/blog/san-marcos-water-damage-insurance-claim-checklist/',
          description: 'Documentation steps before and during carrier review.',
        },
        {
          label: 'Structural Drying Timeline',
          href: '/blog/how-long-does-structural-drying-take-north-san-diego/',
          description: 'Typical drying timelines for North San Diego County water losses.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for hidden leaks, slab symptoms, and moisture diagnosis.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation support links when a covered water loss needs review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'How Tamarack documents moisture readings, photos, and restoration scopes.',
        },
        {
          label: 'Farmers Water Damage',
          href: '/insurance/farmers/water-damage-restoration/',
          description: 'Water damage documentation support for Farmers policyholders.',
        },
      ],
    },
  ],

  'encinitas__water-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Encinitas water services for leak damage, slab moisture, and overflow cleanup.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/encinitas/water-damage-restoration/',
          description: 'Drying and restoration for coastal homes affected by leak moisture.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/encinitas/slab-leak-repair/',
          description: 'Support for foundation leaks and under-slab moisture issues.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/encinitas/flood-cleanup/',
          description: 'Cleanup for storm water, overflows, and larger water intrusions.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Encinitas water and leak resources for quick decisions after symptoms appear.',
      links: [
        {
          label: 'Encinitas Water Damage Guide',
          href: '/blog/water-damage-restoration-encinitas-ca/',
          description: 'Local water damage considerations for Encinitas properties.',
        },
        {
          label: 'Encinitas Slab vs Pipe Leak Guide',
          href: '/blog/encinitas-slab-leak-vs-pipe-leak-how-to-tell/',
          description: 'How to compare common slab leak and pipe leak symptoms.',
        },
        {
          label: 'First 24 Hours Guide',
          href: '/blog/how-to-handle-water-damage-emergency-first-24-hours/',
          description: 'Steps to reduce damage before and during professional response.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby leak repair pages for coastal North County homeowners.',
      links: [
        {
          label: 'Carlsbad Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Leak detection and repair near Tamarack Restoration headquarters.',
        },
        {
          label: 'Oceanside Water Leak Repair',
          href: '/service-area/oceanside/water-leak-repair/',
          description: 'Leak repair support for nearby coastal and inland properties.',
        },
      ],
    },
  ],

  'oceanside__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Oceanside services commonly needed after a slab leak affects interior materials.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/oceanside/water-leak-repair/',
          description: 'Targeted repair support after a leak source is confirmed.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/oceanside/water-damage-restoration/',
          description: 'Drying and restoration when slab moisture reaches walls or flooring.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/oceanside/flood-cleanup/',
          description: 'Cleanup for larger water releases and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Leak detection and water damage resources for Oceanside slab leak planning.',
      links: [
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for slab leaks, hidden leaks, and moisture mapping.',
        },
        {
          label: 'Oceanside Ceiling Leak Steps',
          href: '/blog/oceanside-ceiling-leak-steps-before-mold-starts/',
          description: 'Early steps when hidden moisture appears overhead or nearby.',
        },
        {
          label: 'Water Damage Prevention in Oceanside',
          href: '/blog/water-damage-prevention-in-oceanside/',
          description: 'Prevention guidance for coastal and inland Oceanside homes.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation resources for slab leak damage and carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Moisture readings, photos, and scopes can help document the loss.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Understand why coverage depends on cause, timing, and policy language.',
        },
      ],
    },
  ],

  'vista__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Vista water services for under-slab leaks and related property damage.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/vista/water-leak-repair/',
          description: 'Repair support for confirmed pipe, wall, and foundation leaks.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/vista/water-damage-restoration/',
          description: 'Drying and restoration when slab leak moisture spreads indoors.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/vista/flood-cleanup/',
          description: 'Cleanup for overflows, bathroom floods, and contaminated water losses.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Vista moisture and slab leak resources for homeowners comparing next steps.',
      links: [
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for locating slab leaks and hidden plumbing issues.',
        },
        {
          label: 'Vista Flooded Bathroom Guide',
          href: '/blog/vista-flooded-bathroom-category-2-3-water-loss/',
          description: 'How contaminated bathroom water losses are cleaned and dried.',
        },
        {
          label: 'Warning Signs of Water Damage',
          href: '/blog/signs-of-water-damage-in-your-home/',
          description: 'Common signs that hidden water damage may be spreading.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby slab leak pages for North County homeowners.',
      links: [
        {
          label: 'San Marcos Slab Leak Repair',
          href: '/service-area/san-marcos/slab-leak-repair/',
          description: 'Slab leak detection and drying support in nearby San Marcos.',
        },
        {
          label: 'Oceanside Slab Leak Repair',
          href: '/service-area/oceanside/slab-leak-repair/',
          description: 'Under-slab leak support for Oceanside properties.',
        },
      ],
    },
  ],

  'san-marcos__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'San Marcos water services commonly paired with slab leak response.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/san-marcos/water-leak-repair/',
          description: 'Repair support after under-slab or wall leaks are located.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/san-marcos/water-damage-restoration/',
          description: 'Drying and restoration when slab moisture affects interior materials.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/san-marcos/flood-cleanup/',
          description: 'Cleanup for larger water releases, overflows, and storm-related events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'San Marcos guides for detection, drying timelines, and claim documentation.',
      links: [
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for under-slab leaks, hidden leaks, and moisture mapping.',
        },
        {
          label: 'Structural Drying Timeline',
          href: '/blog/how-long-does-structural-drying-take-north-san-diego/',
          description: 'What affects drying timelines for North County water damage.',
        },
        {
          label: 'San Marcos Claim Checklist',
          href: '/blog/san-marcos-water-damage-insurance-claim-checklist/',
          description: 'Documentation checklist for water damage claims in San Marcos.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation support for slab leak water damage review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Learn how photos, moisture logs, and scopes support review.',
        },
        {
          label: 'Farmers Water Damage',
          href: '/insurance/farmers/water-damage-restoration/',
          description: 'Water damage documentation support for Farmers policyholders.',
        },
      ],
    },
  ],

  'encinitas__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Encinitas services for slab leaks, pipe leaks, and related water damage.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/encinitas/water-leak-repair/',
          description: 'Repair coordination after a hidden or under-slab leak is located.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/encinitas/water-damage-restoration/',
          description: 'Drying and restoration for coastal properties with moisture spread.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/encinitas/flood-cleanup/',
          description: 'Cleanup for storm water, overflows, and larger water intrusions.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Encinitas resources for distinguishing slab leaks from other plumbing leaks.',
      links: [
        {
          label: 'Encinitas Slab vs Pipe Leak Guide',
          href: '/blog/encinitas-slab-leak-vs-pipe-leak-how-to-tell/',
          description: 'How to compare common foundation and pipe leak symptoms.',
        },
        {
          label: 'Encinitas Water Damage Guide',
          href: '/blog/water-damage-restoration-encinitas-ca/',
          description: 'Local water damage considerations for Encinitas coastal homes.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for hidden leaks, slab symptoms, and moisture diagnosis.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby slab leak pages for coastal North County homeowners.',
      links: [
        {
          label: 'Carlsbad Slab Leak Repair',
          href: '/service-area/carlsbad/slab-leak-repair/',
          description: 'Slab leak support near Tamarack Restoration headquarters.',
        },
        {
          label: 'Oceanside Slab Leak Repair',
          href: '/service-area/oceanside/slab-leak-repair/',
          description: 'Under-slab leak support for nearby Oceanside properties.',
        },
      ],
    },
  ],

  'carlsbad__mold-removal': [
    {
      title: 'Related Restoration Services',
      description: 'Related Carlsbad services when mold is connected to leaks, flooding, or hidden moisture.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Drying and restoration for water losses that can lead to mold growth.',
        },
        {
          label: 'Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Find and repair hidden leaks that may be feeding mold growth.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/carlsbad/flood-cleanup/',
          description: 'Cleanup and drying after storm water, overflows, or contaminated water.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Mold resources for identifying moisture problems and planning safe remediation.',
      links: [
        {
          label: 'Mold vs Mildew',
          href: '/blog/mold-vs-mildew-whats-the-difference/',
          description: 'Understand the difference between mildew-like growth and mold concerns.',
        },
        {
          label: 'Mold After Water Damage',
          href: '/blog/mold-after-water-damage-timeline-risk-safe-remediation/',
          description: 'Timeline and safety considerations after water damage leads to mold risk.',
        },
        {
          label: 'Mold Articles',
          href: '/blog/category/mold/',
          description: 'More guidance on mold inspection, remediation, and prevention.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation resources when mold is related to a water damage event.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Learn how documentation supports adjuster and carrier review.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Review why coverage depends on the cause of loss and policy language.',
        },
      ],
    },
  ],

  'carlsbad__fire-damage-restoration': [
    {
      title: 'Related Restoration Services',
      description: 'Carlsbad services commonly needed after fire, smoke, suppression water, or humidity damage.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Drying and restoration after firefighting water affects the structure.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/carlsbad/flood-cleanup/',
          description: 'Cleanup for significant water intrusion during or after emergency response.',
        },
        {
          label: 'Mold Removal',
          href: '/service-area/carlsbad/mold-removal/',
          description: 'Mold remediation when lingering moisture creates secondary damage risk.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Fire damage resources for understanding cleanup, odor removal, and restoration planning.',
      links: [
        {
          label: 'Fire Damage Restoration Guide',
          href: '/blog/fire-damage-restoration-carlsbad-guide/',
          description: 'Carlsbad-specific guidance for smoke, soot, and fire restoration steps.',
        },
        {
          label: 'Fire Damage Restoration Process',
          href: '/blog/fire-damage-restoration-process-what-to-expect/',
          description: 'What to expect from assessment through cleanup and repairs.',
        },
        {
          label: 'Fire Damage Articles',
          href: '/blog/category/fire-damage/',
          description: 'More fire restoration guides, cost resources, and process explanations.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation links for fire losses and related water damage review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Photos, scopes, and documentation can support claim review.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Helpful context when suppression water causes additional damage.',
        },
      ],
    },
  ],

  'carlsbad__sewage-cleanup': [
    {
      title: 'Related Restoration Services',
      description: 'Carlsbad services related to sewage backups, contaminated water, and moisture damage.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Drying and restoration after water affects floors, walls, or contents.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/carlsbad/flood-cleanup/',
          description: 'Cleanup for storm water, overflows, and contaminated water events.',
        },
        {
          label: 'Mold Removal',
          href: '/service-area/carlsbad/mold-removal/',
          description: 'Remediation when moisture creates mold growth risk after cleanup.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Sewage and contaminated water resources for safe cleanup decisions.',
      links: [
        {
          label: 'Sewage Backup Cleanup in Carlsbad',
          href: '/blog/sewage-backup-cleanup-carlsbad-north-san-diego/',
          description: 'Local guidance for cleanup after sewage backups in North San Diego County.',
        },
        {
          label: 'Flood Cleanup Articles',
          href: '/blog/category/flood/',
          description: 'Guides for storm water, overflows, and contaminated water restoration.',
        },
        {
          label: 'Water Damage Articles',
          href: '/blog/category/water-damage/',
          description: 'Emergency steps, drying timelines, and restoration documentation guides.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation resources when sewage damage needs insurance review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Learn how photos, mitigation notes, and scopes support claim review.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Coverage depends on cause, policy language, endorsements, and exclusions.',
        },
      ],
    },
  ],

  'vista__fire-damage-restoration': [
    {
      title: 'Related Restoration Services',
      description: 'Vista services often needed after fire, smoke, suppression water, or lingering moisture damage.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/vista/water-damage-restoration/',
          description: 'Drying and restoration after firefighting water affects floors, walls, or ceilings.',
        },
        {
          label: 'Mold Removal',
          href: '/service-area/vista/mold-removal/',
          description: 'Containment and remediation when post-fire moisture creates mold risk.',
        },
        {
          label: 'Sewage Cleanup',
          href: '/service-area/vista/sewage-cleanup/',
          description: 'Sanitizing support for contaminated water and biohazard cleanup needs.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Fire damage resources for understanding cleanup, smoke odor, and repair planning.',
      links: [
        {
          label: 'Fire Damage Restoration Process',
          href: '/blog/fire-damage-restoration-process-what-to-expect/',
          description: 'What to expect from emergency assessment through cleanup and repairs.',
        },
        {
          label: 'Fire Damage Articles',
          href: '/blog/category/fire-damage/',
          description: 'Guides for fire restoration costs, cleanup steps, and recovery planning.',
        },
        {
          label: 'Smoke Damage Cleanup',
          href: '/services/fire-damage-restoration/',
          description: 'Core fire and smoke damage restoration services from Tamarack.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Fire damage help in nearby North County communities.',
      links: [
        {
          label: 'San Marcos Fire Damage Restoration',
          href: '/service-area/san-marcos/fire-damage-restoration/',
          description: 'Fire, smoke, odor, and repair coordination for San Marcos properties.',
        },
        {
          label: 'Oceanside Fire Damage Restoration',
          href: '/service-area/oceanside/fire-damage-restoration/',
          description: 'Coastal and inland fire restoration support in Oceanside.',
        },
      ],
    },
  ],

  'san-marcos__mold-removal': [
    {
      title: 'Related Restoration Services',
      description: 'San Marcos services that help address moisture sources and secondary damage behind mold growth.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/san-marcos/water-damage-restoration/',
          description: 'Extraction, drying, and repairs when water damage creates mold risk.',
        },
        {
          label: 'Water Leak Repair',
          href: '/service-area/san-marcos/water-leak-repair/',
          description: 'Find and address hidden leaks that keep materials damp.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/san-marcos/flood-cleanup/',
          description: 'Cleanup and sanitizing after storm water, overflows, or contaminated water.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Mold resources for San Marcos homeowners deciding what to inspect, document, and remediate.',
      links: [
        {
          label: 'Mold After Water Damage',
          href: '/blog/mold-after-water-damage-timeline-risk-safe-remediation/',
          description: 'Understand when mold can start after a water loss and what to do next.',
        },
        {
          label: 'Mold vs Mildew',
          href: '/blog/mold-vs-mildew-whats-the-difference/',
          description: 'How to tell surface mildew concerns from mold problems that need remediation.',
        },
        {
          label: 'Mold Articles',
          href: '/blog/category/mold/',
          description: 'More guides for mold symptoms, testing, cleanup, and prevention.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Mold remediation support in nearby North County cities.',
      links: [
        {
          label: 'Vista Mold Removal',
          href: '/service-area/vista/mold-removal/',
          description: 'Mold inspection, containment, and remediation for Vista properties.',
        },
        {
          label: 'Encinitas Mold Removal',
          href: '/service-area/encinitas/mold-removal/',
          description: 'Coastal moisture and mold remediation support in Encinitas.',
        },
      ],
    },
  ],

  'encinitas__mold-removal': [
    {
      title: 'Related Restoration Services',
      description: 'Encinitas services that help stop moisture sources before mold spreads further.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/encinitas/water-damage-restoration/',
          description: 'Drying and restoration after leaks, overflows, and coastal moisture issues.',
        },
        {
          label: 'Water Leak Repair',
          href: '/service-area/encinitas/water-leak-repair/',
          description: 'Hidden leak support when damp materials keep returning.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/encinitas/flood-cleanup/',
          description: 'Cleanup after storm water, flooding, and contaminated water events.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Mold resources for coastal homes, moisture control, and safe remediation decisions.',
      links: [
        {
          label: 'Mold After Water Damage',
          href: '/blog/mold-after-water-damage-timeline-risk-safe-remediation/',
          description: 'Learn how quickly mold can develop after leaks or water damage.',
        },
        {
          label: 'Mold vs Mildew',
          href: '/blog/mold-vs-mildew-whats-the-difference/',
          description: 'Compare common surface growth with mold concerns that need containment.',
        },
        {
          label: 'Mold Articles',
          href: '/blog/category/mold/',
          description: 'More mold remediation, health, testing, and cleanup resources.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Mold remediation support in neighboring North County communities.',
      links: [
        {
          label: 'Carlsbad Mold Removal',
          href: '/service-area/carlsbad/mold-removal/',
          description: 'Mold inspection, containment, and remediation near Tamarack headquarters.',
        },
        {
          label: 'San Marcos Mold Removal',
          href: '/service-area/san-marcos/mold-removal/',
          description: 'Inland North County mold remediation and moisture-source support.',
        },
      ],
    },
  ],

  'encinitas__fire-damage-restoration': [
    {
      title: 'Related Restoration Services',
      description: 'Encinitas services commonly needed after fire, smoke, suppression water, or secondary moisture damage.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/encinitas/water-damage-restoration/',
          description: 'Drying and restoration after firefighting water affects the structure.',
        },
        {
          label: 'Mold Removal',
          href: '/service-area/encinitas/mold-removal/',
          description: 'Remediation when post-fire moisture creates mold growth risk.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/encinitas/flood-cleanup/',
          description: 'Cleanup for major water intrusion during or after emergency response.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Fire damage resources for smoke cleanup, odor control, and restoration planning.',
      links: [
        {
          label: 'Fire Damage Restoration Process',
          href: '/blog/fire-damage-restoration-process-what-to-expect/',
          description: 'What to expect from initial inspection through cleanup and repair planning.',
        },
        {
          label: 'Fire Damage Articles',
          href: '/blog/category/fire-damage/',
          description: 'Fire restoration guides covering costs, cleanup, and recovery steps.',
        },
        {
          label: 'Fire Damage Restoration Guide',
          href: '/blog/fire-damage-restoration-carlsbad-guide/',
          description: 'A local fire restoration guide with steps that also apply across North County.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Fire damage help in nearby North County cities.',
      links: [
        {
          label: 'Carlsbad Fire Damage Restoration',
          href: '/service-area/carlsbad/fire-damage-restoration/',
          description: 'Fire, smoke, and repair coordination near Tamarack headquarters.',
        },
        {
          label: 'Vista Fire Damage Restoration',
          href: '/service-area/vista/fire-damage-restoration/',
          description: 'Fire and smoke cleanup support for Vista homes and businesses.',
        },
      ],
    },
  ],


  'rancho-santa-fe__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Rancho Santa Fe services commonly needed when an under-slab leak affects premium flooring, walls, or adjacent rooms.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/rancho-santa-fe/water-damage-restoration/',
          description: 'Drying and restoration when slab moisture spreads into flooring or walls.',
        },
        {
          label: 'Water Leak Repair',
          href: '/service-area/rancho-santa-fe/water-leak-repair/',
          description: 'Repair coordination for hidden plumbing leaks in Rancho Santa Fe homes.',
        },
        {
          label: 'Leak Detection',
          href: '/service-area/rancho-santa-fe/leak-detection/',
          description: 'Thermal and moisture checks to narrow down hidden under-slab leak sources.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Guides for slab leak symptoms, hidden moisture, and drying decisions after a leak is found.',
      links: [
        {
          label: 'Carlsbad Slab Leak Guide',
          href: '/blog/slab-leak-repair-carlsbad-detection-repair-restoration/',
          description: 'Detection, repair access, drying, and restoration steps that also apply across North County.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Resources for under-slab leaks, pipe leaks, and moisture mapping.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Coverage depends on the cause of loss, timing, exclusions, and carrier review.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation support resources for moisture readings, photos, and scope notes after slab leak damage.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'How Tamarack documents water losses for carrier and adjuster review.',
        },
        {
          label: 'Rancho Santa Fe Water Damage',
          href: '/blog/rancho-santa-fe-water-damage-48-hour-playbook/',
          description: 'Local guidance for protecting larger homes and high-value materials after water damage.',
        },
      ],
    },
  ],

  'rancho-santa-fe__water-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Services that help protect Rancho Santa Fe estate homes when hidden leaks affect walls, floors, or slab areas.',
      links: [
        {
          label: 'Slab Leak Repair',
          href: '/service-area/rancho-santa-fe/slab-leak-repair/',
          description: 'Detection and drying support for under-slab plumbing leaks.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/rancho-santa-fe/water-damage-restoration/',
          description: 'Extraction, drying, and repairs when a leak has damaged materials.',
        },
        {
          label: 'Leak Detection',
          href: '/service-area/rancho-santa-fe/leak-detection/',
          description: 'Moisture mapping and leak source checks before repair access is planned.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Leak and water damage resources for hidden plumbing issues and documentation planning.',
      links: [
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for hidden leaks, slab symptoms, and moisture diagnosis.',
        },
        {
          label: 'Water Leak Repair Cost Guide',
          href: '/blog/water-leak-repair-cost-carlsbad-2026-pricing-guide/',
          description: 'Cost factors for leak detection, repair coordination, drying, and restoration.',
        },
        {
          label: 'First 24 Hours Guide',
          href: '/blog/how-to-handle-water-damage-emergency-first-24-hours/',
          description: 'Immediate steps to limit damage before and during professional response.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation-focused resources; coverage depends on policy language, cause, exclusions, and carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Photos, moisture readings, and scope notes can support carrier communication.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Understand common coverage factors before making claim assumptions.',
        },
      ],
    },
  ],

  'san-marcos__sewage-cleanup': [
    {
      title: 'Related Restoration Services',
      description: 'San Marcos services commonly needed after sewage backups, contaminated water, and secondary moisture damage.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/san-marcos/water-damage-restoration/',
          description: 'Drying and repair support after contaminated water affects building materials.',
        },
        {
          label: 'Flood Cleanup',
          href: '/service-area/san-marcos/flood-cleanup/',
          description: 'Cleanup for larger water releases, storm water, and overflow events.',
        },
        {
          label: 'Mold Removal',
          href: '/service-area/san-marcos/mold-removal/',
          description: 'Remediation support when sewage or moisture creates mold risk.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Resources for Category 3 cleanup, flood decisions, drying, and safety planning.',
      links: [
        {
          label: 'Sewage Backup Cleanup Guide',
          href: '/blog/sewage-backup-cleanup-carlsbad-north-san-diego/',
          description: 'What homeowners should know about sewage cleanup in North San Diego County.',
        },
        {
          label: 'Flood Cleanup vs Water Damage',
          href: '/blog/north-county-water-damage-vs-flood-cleanup-which-service/',
          description: 'How to decide which service fits contaminated water or large water losses.',
        },
        {
          label: 'Vista Category 2/3 Guide',
          href: '/blog/vista-flooded-bathroom-category-2-3-water-loss/',
          description: 'When bathroom flooding becomes a Category 2 or Category 3 cleanup issue.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation resources for contaminated water losses; coverage varies by policy and carrier review.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'How Tamarack documents photos, affected materials, and mitigation scopes.',
        },
        {
          label: 'San Marcos Claim Checklist',
          href: '/blog/san-marcos-water-damage-insurance-claim-checklist/',
          description: 'Local documentation checklist for organizing claim records.',
        },
      ],
    },
  ],

  'solana-beach__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Solana Beach services commonly paired with coastal slab leak response and moisture control.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/solana-beach/water-damage-restoration/',
          description: 'Drying and restoration when slab leak moisture reaches interior materials.',
        },
        {
          label: 'Water Leak Repair',
          href: '/service-area/solana-beach/water-leak-repair/',
          description: 'Repair coordination for hidden plumbing leaks and moisture spread.',
        },
        {
          label: 'Leak Detection',
          href: '/service-area/solana-beach/leak-detection/',
          description: 'Moisture checks and leak source support before repair access is planned.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Slab leak and hidden moisture resources for coastal North County homeowners.',
      links: [
        {
          label: 'Encinitas Slab vs Pipe Leak Guide',
          href: '/blog/encinitas-slab-leak-vs-pipe-leak-how-to-tell/',
          description: 'Nearby coastal guidance for comparing slab leak and pipe leak symptoms.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'More guides for hidden leaks, under-slab moisture, and moisture mapping.',
        },
        {
          label: 'Structural Drying Timeline',
          href: '/blog/how-long-does-structural-drying-take-north-san-diego/',
          description: 'What affects drying time after slab moisture reaches building materials.',
        },
      ],
    },
    {
      title: 'Insurance Resources',
      description: 'Documentation support when a slab leak affects flooring, walls, or other covered materials.',
      links: [
        {
          label: 'Insurance Claim Help',
          href: '/insurance/',
          description: 'Photos, moisture readings, and scope notes can support carrier review.',
        },
        {
          label: 'Water Damage Insurance Guide',
          href: '/blog/does-homeowners-insurance-cover-water-damage/',
          description: 'Review common coverage factors for sudden and hidden water losses.',
        },
      ],
    },
  ],

  'bressi-ranch__water-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Bressi Ranch services for appliance leaks, supply-line failures, slab moisture, and affected rooms near Carlsbad.',
      links: [
        {
          label: 'Water Damage Restoration',
          href: '/service-area/bressi-ranch/water-damage-restoration/',
          description: 'Extraction, drying, and repairs after a leak damages materials.',
        },
        {
          label: 'Slab Leak Repair',
          href: '/service-area/bressi-ranch/slab-leak-repair/',
          description: 'Detection and drying support for under-slab leak symptoms.',
        },
        {
          label: 'Leak Detection',
          href: '/service-area/bressi-ranch/leak-detection/',
          description: 'Moisture checks and source-location support before repairs begin.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Nearby Carlsbad and North County leak resources for fast decisions after water appears.',
      links: [
        {
          label: 'Water Leak Repair Cost Guide',
          href: '/blog/water-leak-repair-cost-carlsbad-2026-pricing-guide/',
          description: 'Cost factors for locating, repairing, drying, and documenting leak damage.',
        },
        {
          label: 'First 60 Minutes in Carlsbad',
          href: '/blog/emergency-water-damage-restoration-carlsbad-first-60-minutes/',
          description: 'Immediate steps after discovering water damage near Carlsbad.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'Guides for hidden leaks, slab symptoms, and moisture mapping.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby leak and water pages for homeowners comparing service coverage around Carlsbad.',
      links: [
        {
          label: 'Carlsbad Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Leak detection and repair near Tamarack Restoration headquarters.',
        },
        {
          label: 'Carlsbad Water Damage',
          href: '/service-area/carlsbad/water-damage-restoration/',
          description: 'Water extraction, drying, and repair coordination in nearby Carlsbad.',
        },
      ],
    },
  ],

  'bressi-ranch__slab-leak-repair': [
    {
      title: 'Related Water Services',
      description: 'Bressi Ranch services commonly needed when slab leak symptoms appear near flooring, baseboards, or adjacent rooms.',
      links: [
        {
          label: 'Water Leak Repair',
          href: '/service-area/bressi-ranch/water-leak-repair/',
          description: 'Repair coordination after hidden plumbing or slab leaks are located.',
        },
        {
          label: 'Water Damage Restoration',
          href: '/service-area/bressi-ranch/water-damage-restoration/',
          description: 'Drying and restoration when slab moisture spreads into materials.',
        },
        {
          label: 'Leak Detection',
          href: '/service-area/bressi-ranch/leak-detection/',
          description: 'Moisture mapping and leak source checks before repair access is planned.',
        },
      ],
    },
    {
      title: 'Helpful Guides',
      description: 'Slab leak and hidden moisture guides for Bressi Ranch homes near Carlsbad.',
      links: [
        {
          label: 'Carlsbad Slab Leak Guide',
          href: '/blog/slab-leak-repair-carlsbad-detection-repair-restoration/',
          description: 'Detection, repair options, drying, and restoration steps near Bressi Ranch.',
        },
        {
          label: 'Leak Detection Articles',
          href: '/blog/category/leak-detection/',
          description: 'More guides for slab leak symptoms and hidden moisture diagnosis.',
        },
        {
          label: 'Mold After Water Damage',
          href: '/blog/mold-after-water-damage-timeline-risk-safe-remediation/',
          description: 'Why slab moisture needs prompt drying to reduce mold risk.',
        },
      ],
    },
    {
      title: 'Nearby Service Areas',
      description: 'Nearby slab leak and water pages for homeowners comparing Carlsbad-area service options.',
      links: [
        {
          label: 'Carlsbad Slab Leak Repair',
          href: '/service-area/carlsbad/slab-leak-repair/',
          description: 'Slab leak detection and drying support near Tamarack headquarters.',
        },
        {
          label: 'Carlsbad Water Leak Repair',
          href: '/service-area/carlsbad/water-leak-repair/',
          description: 'Hidden leak support for nearby Carlsbad properties.',
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
