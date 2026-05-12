import type { ServiceSlug } from '@/types';

export interface BlogCategoryHub {
  slug: string;
  label: string;
  icon: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  relatedServiceSlugs: ServiceSlug[];
  relatedCityServiceLinks: Array<{
    label: string;
    href: string;
    context: string;
  }>;
  priority: number;
}

export const blogCategoryHubs: Record<string, BlogCategoryHub> = {
  'water-damage': {
    slug: 'water-damage',
    label: 'Water Damage',
    icon: 'droplet',
    title: 'Water Damage Articles | Tamarack Restoration Blog',
    metaDescription:
      'Read practical water damage restoration guides for Carlsbad and North San Diego County homeowners, including emergency steps, drying timelines, costs, and insurance documentation.',
    h1: 'Water Damage Restoration Articles',
    intro:
      'Use these guides to understand what to do after leaks, burst pipes, sewage backups, and structural drying issues in North San Diego County homes. The articles connect emergency actions with professional restoration, documentation, and local service options.',
    relatedServiceSlugs: ['water-damage-restoration', 'water-leak-repair', 'flood-cleanup', 'sewage-cleanup'],
    relatedCityServiceLinks: [
      {
        label: 'Water Damage Restoration in Carlsbad',
        href: '/service-area/carlsbad/water-damage-restoration/',
        context: 'Local emergency water damage response near Tamarack Restoration headquarters.',
      },
      {
        label: 'Water Damage Restoration in Oceanside',
        href: '/service-area/oceanside/water-damage-restoration/',
        context: 'Water mitigation support for coastal and inland Oceanside properties.',
      },
      {
        label: 'Water Damage Restoration in San Marcos',
        href: '/service-area/san-marcos/water-damage-restoration/',
        context: 'Restoration and claim documentation for San Marcos water losses.',
      },
    ],
    priority: 10,
  },
  'fire-damage': {
    slug: 'fire-damage',
    label: 'Fire Damage',
    icon: 'flame',
    title: 'Fire Damage Articles | Tamarack Restoration Blog',
    metaDescription:
      'Learn about fire damage restoration, smoke cleanup, cost factors, and recovery steps for North San Diego County homes and businesses.',
    h1: 'Fire Damage Restoration Articles',
    intro:
      'These articles explain what happens after a fire, how smoke and soot cleanup works, and what property owners should document before restoration begins.',
    relatedServiceSlugs: ['fire-damage-restoration', 'water-damage-restoration'],
    relatedCityServiceLinks: [
      {
        label: 'Fire Damage Restoration in Carlsbad',
        href: '/service-area/carlsbad/fire-damage-restoration/',
        context: 'Emergency fire and smoke cleanup for Carlsbad homes and businesses.',
      },
      {
        label: 'Fire Damage Restoration in Encinitas',
        href: '/service-area/encinitas/fire-damage-restoration/',
        context: 'Smoke, soot, and water-from-firefighting restoration in Encinitas.',
      },
    ],
    priority: 20,
  },
  mold: {
    slug: 'mold',
    label: 'Mold',
    icon: 'alert-triangle',
    title: 'Mold Removal Articles | Tamarack Restoration Blog',
    metaDescription:
      'Read mold removal and remediation guides for Carlsbad, Oceanside, Encinitas, and North San Diego County properties.',
    h1: 'Mold Removal & Remediation Articles',
    intro:
      'This hub gathers mold remediation guides covering moisture sources, safe removal expectations, testing questions, and local conditions that can contribute to mold growth.',
    relatedServiceSlugs: ['mold-removal', 'water-damage-restoration', 'water-leak-repair'],
    relatedCityServiceLinks: [
      {
        label: 'Mold Removal in Carlsbad',
        href: '/service-area/carlsbad/mold-removal/',
        context: 'Local mold remediation help for Carlsbad moisture and leak issues.',
      },
      {
        label: 'Mold Removal in Oceanside',
        href: '/service-area/oceanside/mold-removal/',
        context: 'Mold remediation for Oceanside coastal and crawl-space conditions.',
      },
      {
        label: 'Mold Removal in Encinitas',
        href: '/service-area/encinitas/mold-removal/',
        context: 'Containment and remediation for Encinitas homes after leaks or humidity problems.',
      },
    ],
    priority: 30,
  },
  flood: {
    slug: 'flood',
    label: 'Flood',
    icon: 'cloud-rain',
    title: 'Flood Cleanup Articles | Tamarack Restoration Blog',
    metaDescription:
      'Find flood cleanup and storm damage restoration guides for Carlsbad and North San Diego County property owners.',
    h1: 'Flood Cleanup & Storm Damage Articles',
    intro:
      'These guides cover storm damage, flood cleanup, category 2 and category 3 water issues, and the difference between flood cleanup and standard water damage restoration.',
    relatedServiceSlugs: ['flood-cleanup', 'water-damage-restoration', 'sewage-cleanup'],
    relatedCityServiceLinks: [
      {
        label: 'Flood Cleanup in Carlsbad',
        href: '/service-area/carlsbad/flood-cleanup/',
        context: 'Storm and flood cleanup for Carlsbad properties.',
      },
      {
        label: 'Flood Cleanup in Vista',
        href: '/service-area/vista/flood-cleanup/',
        context: 'Flood response and sanitization for Vista water losses.',
      },
    ],
    priority: 40,
  },
  insurance: {
    slug: 'insurance',
    label: 'Insurance',
    icon: 'shield',
    title: 'Insurance Claim Articles | Tamarack Restoration Blog',
    metaDescription:
      'Learn how restoration insurance claims are documented for water, fire, mold, and flood damage in North San Diego County.',
    h1: 'Restoration Insurance Claim Articles',
    intro:
      'These articles help homeowners understand documentation, adjuster coordination, and restoration claim steps. Coverage depends on your policy, cause of loss, and carrier review.',
    relatedServiceSlugs: ['water-damage-restoration', 'fire-damage-restoration', 'mold-removal', 'flood-cleanup'],
    relatedCityServiceLinks: [
      {
        label: 'Insurance Claim Help',
        href: '/insurance/',
        context: 'How Tamarack supports restoration documentation and carrier communication.',
      },
      {
        label: 'Water Damage Restoration in San Marcos',
        href: '/service-area/san-marcos/water-damage-restoration/',
        context: 'Documentation-focused water damage support for San Marcos claims.',
      },
    ],
    priority: 50,
  },
  prevention: {
    slug: 'prevention',
    label: 'Prevention',
    icon: 'check-circle',
    title: 'Damage Prevention Articles | Tamarack Restoration Blog',
    metaDescription:
      'Read practical prevention guides for water damage, mold risk, leaks, and emergency restoration issues in North San Diego County homes.',
    h1: 'Property Damage Prevention Articles',
    intro:
      'Prevention guides help homeowners spot early warning signs, reduce moisture risk, and understand when a small leak or delay can become a larger restoration project.',
    relatedServiceSlugs: ['water-leak-repair', 'leak-detection', 'water-damage-restoration', 'mold-removal'],
    relatedCityServiceLinks: [
      {
        label: 'Leak Detection in Carlsbad',
        href: '/service-area/carlsbad/leak-detection/',
        context: 'Find hidden leaks before they become larger water or mold losses.',
      },
      {
        label: 'Water Leak Repair in Oceanside',
        href: '/service-area/oceanside/water-leak-repair/',
        context: 'Leak response for Oceanside homes with ceiling, wall, or plumbing concerns.',
      },
    ],
    priority: 60,
  },
  tips: {
    slug: 'tips',
    label: 'Tips & Guides',
    icon: 'lightbulb',
    title: 'Restoration Tips & Local Guides | Tamarack Restoration Blog',
    metaDescription:
      'Browse local restoration tips for choosing a restoration company, understanding emergency response, and protecting North San Diego County homes.',
    h1: 'Restoration Tips & Local Guides',
    intro:
      'These practical guides help homeowners compare services, understand restoration timelines, and make safer decisions during water, leak, mold, and flood emergencies.',
    relatedServiceSlugs: ['water-damage-restoration', 'water-leak-repair', 'slab-leak-repair', 'flood-cleanup'],
    relatedCityServiceLinks: [
      {
        label: 'Restoration Services in Carlsbad',
        href: '/service-area/carlsbad/',
        context: 'Local restoration services near Tamarack Restoration headquarters.',
      },
      {
        label: 'Service Areas',
        href: '/service-area/',
        context: 'Browse Tamarack Restoration service areas across North San Diego County.',
      },
    ],
    priority: 70,
  },
  'leak-detection': {
    slug: 'leak-detection',
    label: 'Leak Detection',
    icon: 'search',
    title: 'Leak Detection Articles | Tamarack Restoration Blog',
    metaDescription:
      'Read leak detection and slab leak repair guides for Carlsbad, Encinitas, and North San Diego County homes.',
    h1: 'Leak Detection & Slab Leak Articles',
    intro:
      'This hub focuses on hidden leaks, slab leak warning signs, moisture documentation, and the restoration work that may be needed after a leak is found.',
    relatedServiceSlugs: ['leak-detection', 'slab-leak-repair', 'water-leak-repair', 'water-damage-restoration'],
    relatedCityServiceLinks: [
      {
        label: 'Slab Leak Repair in Carlsbad',
        href: '/service-area/carlsbad/slab-leak-repair/',
        context: 'Local slab leak detection, repair coordination, and restoration support.',
      },
      {
        label: 'Leak Detection in Encinitas',
        href: '/service-area/encinitas/leak-detection/',
        context: 'Hidden leak detection and moisture assessment for Encinitas homes.',
      },
    ],
    priority: 80,
  },
};

export function getBlogCategoryHub(slug: string): BlogCategoryHub {
  return blogCategoryHubs[slug] || {
    slug,
    label: slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    icon: 'file-text',
    title: `${slug.replace(/-/g, ' ')} Articles | Tamarack Restoration Blog`,
    metaDescription: `Browse Tamarack Restoration articles and guides about ${slug.replace(/-/g, ' ')}.`,
    h1: `${slug.replace(/-/g, ' ')} Articles`,
    intro:
      'Browse related restoration articles, service resources, and local guidance from Tamarack Restoration.',
    relatedServiceSlugs: [],
    relatedCityServiceLinks: [],
    priority: 999,
  };
}
