/**
 * Tamarack Restoration - SEO Utilities
 * =====================================
 * Helper functions for generating SEO data and schema markup
 */

import type {
  SEOProps,
  BreadcrumbItem,
  LocalBusinessSchema,
  ServiceSchema,
  FAQPageSchema,
  ArticleSchema,
  BreadcrumbListSchema,
  WebSiteSchema,
  WebPageSchema,
  CityNode,
  CitySchema,
  ItemListSchema,
  AggregateRatingNode,
  PageGraph,
  WebPageType,
  FAQ,
  Service,
  City,
} from '@/types';
import { business, allServices, cities } from '@/data/site';
import {
  SOCIAL_PROFILES,
  PAYMENT_METHODS,
  ACCEPTED_CURRENCIES,
  CITY_SAME_AS,
  COUNTY_NAME,
  COUNTY_SAME_AS,
  STATE_NAME,
  STATE_SAME_AS,
  SERVICE_RADIUS_METERS,
  BUSINESS_KNOWS_ABOUT,
  BUSINESS_CREDENTIALS,
} from '@/data/schema';
import { getReviewTrustSummary } from '@/utils/googleReviews';

const SITE_URL = 'https://www.tamarackrestoration.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo/og-default.webp`;
const LOGO_URL = `${SITE_URL}/images/logo/tamarack-logo.webp`;
const BUSINESS_SCHEMA_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_SCHEMA_ID = `${SITE_URL}/#website`;

/** Stable @id for a city entity, defined in full on its service-area page. */
export function getCitySchemaId(slug: string): string {
  return `${SITE_URL}/service-area/${slug}/#city`;
}

/** Stable @id for a service entity, defined in full on its pillar page. */
export function getServiceSchemaId(slug: string): string {
  return `${SITE_URL}/services/${slug}/#service`;
}

/** Resolve a site-relative path or absolute URL to an absolute URL. */
export function toAbsoluteUrl(url: string): string {
  if (/^https?:\/\//.test(url)) return url;
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
}

const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// ===================
// SEO TITLE/META GENERATORS
// ===================

/**
 * Generate page title with consistent branding
 */
export function generateTitle(title: string, includeBrand = true): string {
  const brandSuffix = ' | Tamarack Restoration';
  if (!includeBrand) return title;
  if (title.includes('Tamarack')) return title;
  return `${title}${brandSuffix}`;
}

/**
 * Generate homepage title
 */
export function getHomeTitle(): string {
  return 'Emergency Water, Fire & Mold Restoration in Carlsbad | Tamarack Restoration';
}

/**
 * Generate service page title
 */
export function getServiceTitle(serviceName: string): string {
  return `${serviceName} in Carlsbad, CA | 24/7 Emergency Response | Tamarack Restoration`;
}

/**
 * Generate city landing page title
 */
export function getCityTitle(cityName: string): string {
  return `${cityName} Restoration Services | Water, Fire, Mold | Tamarack Restoration`;
}

/**
 * Generate money page title (city + service)
 */
export function getMoneyPageTitle(serviceName: string, cityName: string): string {
  return `${serviceName} in ${cityName}, CA | Tamarack Restoration`;
}

/**
 * Generate blog post title
 */
export function getBlogTitle(title: string): string {
  return `${title} | Tamarack Restoration`;
}

/**
 * Generate meta description for service pages
 */
export function getServiceDescription(serviceName: string): string {
  return `Professional ${serviceName.toLowerCase()} services in North San Diego County. IICRC certified, 60-minute response, insurance specialists. Free estimates. Call (760) 500-2211.`;
}

/**
 * Generate meta description for money pages
 */
export function getMoneyPageDescription(serviceName: string, cityName: string): string {
  return `Need ${serviceName.toLowerCase()} in ${cityName}? Tamarack Restoration responds in 60 minutes, 24/7. ${business.reviewCount} five-star reviews, IICRC certified. Call (760) 500-2211 now.`;
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const withTrailingSlash = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  return `${SITE_URL}${withTrailingSlash}`;
}

// ===================
// SCHEMA GENERATORS
// ===================


/**
 * Map a City object to a schema.org City reference, enriching with sameAs when available.
 * The full node (geo, containment, neighborhoods) lives on the city's service-area page.
 */
function toCityNode(city: City): CityNode {
  const sameAs = CITY_SAME_AS[city.name];
  return {
    '@type': 'City',
    '@id': getCitySchemaId(city.slug),
    name: city.name,
    ...(sameAs ? { sameAs } : {}),
  };
}

/**
 * Full City entity for a service-area page: coordinates, county/state containment,
 * covered ZIP codes, and named neighborhoods.
 */
export function getCitySchema(city: City): CitySchema {
  const sameAs = CITY_SAME_AS[city.name];
  const neighborhoods = (city.neighborhoods || []).map((name) => ({
    '@type': 'Place' as const,
    name,
  }));
  const zipAreas = (city.zipCodes || []).map((postalCode) => ({
    '@type': 'Place' as const,
    name: `${city.name}, CA ${postalCode}`,
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: city.name,
      addressRegion: city.state,
      postalCode,
      addressCountry: 'US',
    },
  }));

  return {
    '@type': 'City',
    '@id': getCitySchemaId(city.slug),
    name: city.name,
    ...(sameAs ? { sameAs } : {}),
    url: `${SITE_URL}/service-area/${city.slug}/`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.latitude,
      longitude: city.coordinates.longitude,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: COUNTY_NAME,
      sameAs: COUNTY_SAME_AS,
      containedInPlace: {
        '@type': 'State',
        name: STATE_NAME,
        sameAs: STATE_SAME_AS,
      },
    },
    ...(neighborhoods.length || zipAreas.length
      ? { containsPlace: [...neighborhoods, ...zipAreas] }
      : {}),
  };
}

/**
 * AggregateRating sourced from the Google Business Profile feed.
 * Only attach this on pages where the underlying reviews are visible.
 */
export function getAggregateRating(): AggregateRatingNode {
  const { rating, reviewCount } = getReviewTrustSummary();
  return {
    '@type': 'AggregateRating',
    ratingValue: String(rating),
    reviewCount: String(reviewCount),
    bestRating: '5',
    worstRating: '1',
  };
}

/**
 * Generate LocalBusiness schema. Emitted in full on every page so each URL carries
 * complete NAP, service area, and credential data on its own.
 * Uses HomeAndConstructionBusiness + EmergencyService @type per schema.org hierarchy.
 */
export function getLocalBusinessSchema(options?: {
  areaServed?: City[];
  includeAggregateRating?: boolean;
}): LocalBusinessSchema {
  const areaServed = options?.areaServed;
  const localBusinessSchema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'EmergencyService'],
    '@id': BUSINESS_SCHEMA_ID,
    name: business.name,
    description:
      'IICRC-certified emergency water, fire, and mold restoration in Carlsbad, CA. 60-minute response, 24/7.',
    slogan: '60-minute emergency response, 24/7',
    image: LOGO_URL,
    logo: LOGO_URL,
    telephone: `+1${business.phone}`,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.street} ${business.address.suite}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude,
    },
    url: SITE_URL,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${business.coordinates.latitude},${business.coordinates.longitude}`,
    priceRange: '$$',
    currenciesAccepted: ACCEPTED_CURRENCIES.join(', '),
    paymentAccepted: PAYMENT_METHODS.join(', '),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAYS_OF_WEEK,
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      ...(areaServed || cities).map(toCityNode),
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: business.coordinates.latitude,
          longitude: business.coordinates.longitude,
        },
        geoRadius: String(SERVICE_RADIUS_METERS),
      },
    ],
    knowsAbout: BUSINESS_KNOWS_ABOUT,
    hasCredential: BUSINESS_CREDENTIALS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Restoration Services',
      itemListElement: allServices.map((service) => ({
        '@type': 'Offer' as const,
        itemOffered: {
          '@type': 'Service' as const,
          '@id': getServiceSchemaId(service.slug),
          name: service.name,
          url: getCanonicalUrl(`/services/${service.slug}/`),
        },
      })),
    },
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Call for 24/7 emergency dispatch',
      target: `tel:+1${business.phone}`,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: `+1${business.phone}`,
        email: business.email,
        availableLanguage: ['English'],
        areaServed: cities.map((c) => c.name),
      },
    ],
    foundingDate: '2016',
    sameAs: SOCIAL_PROFILES,
    ...(options?.includeAggregateRating ? { aggregateRating: getAggregateRating() } : {}),
  };

  return localBusinessSchema;
}

/**
 * Generate Service schema
 */
export function getServiceSchema(
  service: Service,
  options?: {
    cities?: City[];
    pagePath?: string;
    includeOffer?: boolean;
    offerDescription?: string;
  }
): ServiceSchema {
  const areaCities = options?.cities || cities;
  const pageUrl = options?.pagePath ? getCanonicalUrl(options.pagePath) : undefined;
  const areaServed = areaCities.map(toCityNode);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': pageUrl ? `${pageUrl}#service` : undefined,
    name: service.name,
    description: service.description,
    url: pageUrl,
    image: service.image ? toAbsoluteUrl(service.image) : undefined,
    category: 'Property damage restoration',
    mainEntityOfPage: pageUrl
      ? {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
        }
      : undefined,
    provider: {
      '@id': BUSINESS_SCHEMA_ID,
    },
    hoursAvailable: service.emergencyService
      ? {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: DAYS_OF_WEEK,
          opens: '00:00',
          closes: '23:59',
        }
      : undefined,
    offers: options?.includeOffer
      ? {
          '@type': 'Offer',
          name: `Free ${service.name} Assessment`,
          description:
            options?.offerDescription ||
            `Free on-site ${service.name.toLowerCase()} assessment and detailed estimate based on scope.`,
          price: '0',
          priceCurrency: 'USD',
          url: pageUrl || getCanonicalUrl(`/services/${service.slug}/`),
          areaServed,
          availableAtOrFrom: { '@id': BUSINESS_SCHEMA_ID },
        }
      : undefined,
    areaServed,
    serviceType: service.name,
  };
}

/**
 * Generate an ItemList of links (service lists, city lists, hub indexes).
 */
export function getItemListSchema(
  items: Array<{ name: string; url: string; id?: string; type?: 'Service' | 'City' }>,
  options?: { name?: string; listId?: string }
): ItemListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(options?.listId ? { '@id': options.listId } : {}),
    ...(options?.name ? { name: options.name } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: toAbsoluteUrl(item.url),
      ...(item.id && item.type
        ? {
            item: {
              '@type': item.type,
              '@id': item.id,
              name: item.name,
              url: toAbsoluteUrl(item.url),
            },
          }
        : {}),
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function getFAQSchema(faqs: FAQ[]): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article schema for blog posts
 */
export function getArticleSchema(options: {
  title: string;
  description: string;
  publishDate: Date;
  modifiedDate?: Date;
  image?: string;
  url: string;
  author?: string;
  section?: string;
  keywords?: string[];
}): ArticleSchema {
  const authorName = options.author || business.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${options.url}#article`,
    headline: options.title,
    description: options.description,
    image: options.image ? toAbsoluteUrl(options.image) : DEFAULT_OG_IMAGE,
    datePublished: options.publishDate.toISOString(),
    dateModified: (options.modifiedDate || options.publishDate).toISOString(),
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_SCHEMA_ID },
    mainEntityOfPage: { '@id': `${options.url}#webpage` },
    ...(options.section ? { articleSection: options.section } : {}),
    ...(options.keywords?.length ? { keywords: options.keywords } : {}),
    author:
      authorName === business.name
        ? { '@id': BUSINESS_SCHEMA_ID }
        : { '@type': 'Person', name: authorName },
    publisher: { '@id': BUSINESS_SCHEMA_ID },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * Generate WebSite schema for homepage.
 * Links the website entity to the LocalBusiness and enables Sitelinks eligibility.
 */
export function getWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_SCHEMA_ID,
    name: business.name,
    url: SITE_URL,
    publisher: {
      '@id': BUSINESS_SCHEMA_ID,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate WebPage schema for individual pages.
 * Links the page to the WebSite and the LocalBusiness entity.
 */
export function getWebPageSchema(options: {
  url: string;
  name: string;
  description?: string;
  breadcrumb?: object;
  pageType?: WebPageType;
  primaryImage?: string;
  about?: object;
  mainEntity?: object;
  speakableCssSelectors?: string[];
}): WebPageSchema {
  const speakableSelectors = options.speakableCssSelectors ?? ['h1', '.hero-subtitle', '.page-intro'];
  return {
    '@context': 'https://schema.org',
    '@type': options.pageType || 'WebPage',
    '@id': `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_SCHEMA_ID },
    about: options.about || { '@id': BUSINESS_SCHEMA_ID },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSelectors,
    },
    ...(options.primaryImage
      ? { primaryImageOfPage: { '@type': 'ImageObject' as const, url: toAbsoluteUrl(options.primaryImage) } }
      : {}),
    ...(options.mainEntity ? { mainEntity: options.mainEntity } : {}),
    ...(options.breadcrumb ? { breadcrumb: options.breadcrumb } : {}),
  };
}

/**
 * Combine multiple schema objects into array
 */
export function combineSchemas(
  ...schemas: (object | undefined | null)[]
): object[] {
  return schemas.filter((schema): schema is object => !!schema);
}

// ===================
// PAGE GRAPH
// ===================

type SchemaNode = Record<string, unknown>;

/** Node types that get a deterministic, page-scoped @id when one isn't supplied. */
const NODE_ID_SUFFIX: Record<string, string> = {
  BreadcrumbList: '#breadcrumb',
  FAQPage: '#faq',
  ItemList: '#itemlist',
  Article: '#article',
  Service: '#service',
};

function nodeType(node: SchemaNode): string {
  const type = node['@type'];
  return Array.isArray(type) ? String(type[0]) : String(type);
}

/**
 * Assemble every node on a page into a single @graph, so nodes reference each other
 * by @id instead of being repeated or left dangling across separate script tags.
 *
 * The LocalBusiness and WebSite entities are always included: search engines evaluate
 * structured data per URL and do not resolve an @id defined on another page.
 */
export function buildPageGraph(options: {
  url: string;
  name: string;
  description?: string;
  nodes?: (object | undefined | null)[];
  pageType?: WebPageType;
  primaryImage?: string;
  about?: object;
  includeAggregateRating?: boolean;
}): PageGraph {
  const pageNodes = (options.nodes || []).filter((n): n is object => !!n).map((n) => {
    const node = { ...(n as SchemaNode) };
    delete node['@context'];
    const suffix = NODE_ID_SUFFIX[nodeType(node)];
    if (suffix && !node['@id']) node['@id'] = `${options.url}${suffix}`;
    return node;
  });

  // Deduplicate nodes that were generated more than once for the same entity.
  const byId = new Map<string, SchemaNode>();
  const anonymous: SchemaNode[] = [];
  for (const node of pageNodes) {
    const id = node['@id'];
    if (typeof id === 'string') {
      if (!byId.has(id)) byId.set(id, node);
    } else {
      anonymous.push(node);
    }
  }
  const uniqueNodes = [...byId.values(), ...anonymous];

  const breadcrumb = uniqueNodes.find((n) => nodeType(n) === 'BreadcrumbList');
  const faq = uniqueNodes.find((n) => nodeType(n) === 'FAQPage');

  const webPageNode = getWebPageSchema({
    url: options.url,
    name: options.name,
    description: options.description,
    pageType: options.pageType,
    primaryImage: options.primaryImage,
    about: options.about,
    breadcrumb: breadcrumb ? { '@id': breadcrumb['@id'] as string } : undefined,
    mainEntity: faq ? { '@id': faq['@id'] as string } : undefined,
  }) as unknown as SchemaNode;
  delete webPageNode['@context'];

  const businessNode = getLocalBusinessSchema({
    includeAggregateRating: options.includeAggregateRating,
  }) as unknown as SchemaNode;
  delete businessNode['@context'];

  const websiteNode = getWebSiteSchema() as unknown as SchemaNode;
  delete websiteNode['@context'];

  return {
    '@context': 'https://schema.org',
    '@graph': [businessNode, websiteNode, webPageNode, ...uniqueNodes],
  };
}

// ===================
// BREADCRUMB GENERATORS
// ===================

/**
 * Generate breadcrumbs for service pages
 */
export function getServiceBreadcrumbs(service: Service): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: service.name, href: `/services/${service.slug}/` },
  ];
}

/**
 * Generate breadcrumbs for city pages
 */
export function getCityBreadcrumbs(city: City): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-area/' },
    { label: city.name, href: `/service-area/${city.slug}/` },
  ];
}

/**
 * Generate breadcrumbs for money pages (city + service)
 */
export function getMoneyPageBreadcrumbs(city: City, service: Service): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-area/' },
    { label: city.name, href: `/service-area/${city.slug}/` },
    { label: service.name, href: `/service-area/${city.slug}/${service.slug}/` },
  ];
}

/**
 * Generate breadcrumbs for blog posts
 */
export function getBlogBreadcrumbs(title: string, slug: string, category?: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
  ];

  if (category) {
    crumbs.push({
      label: formatCategoryName(category),
      href: `/blog/category/${category}/`
    });
  }

  crumbs.push({ label: title, href: `/blog/${slug}/` });

  return crumbs;
}

/**
 * Format category slug to display name
 */
function formatCategoryName(slug: string): string {
  const names: Record<string, string> = {
    'water-damage': 'Water Damage',
    'mold': 'Mold',
    'fire-damage': 'Fire Damage',
    'leaks': 'Leaks',
    'insurance': 'Insurance',
    'diy-tips': 'DIY Tips',
    'local-guides': 'Local Guides',
  };
  return names[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// ===================
// DEFAULT SEO PROPS
// ===================

export function getDefaultSEOProps(): Partial<SEOProps> {
  return {
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    twitterCard: 'summary_large_image',
  };
}
