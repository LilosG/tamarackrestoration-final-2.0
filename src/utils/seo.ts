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
  FAQ,
  Service,
  City,
} from '@/types';
import { business } from '@/data/site';

const SITE_URL = 'https://www.tamarackrestoration.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo/og-default.webp`;
const BUSINESS_SCHEMA_ID = `${SITE_URL}/#business`;
const SOCIAL_PROFILES: string[] = [];
const PAYMENT_METHODS: string[] = [];
const ACCEPTED_CURRENCIES: string[] = [];

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
  return `${serviceName} | 24/7 Emergency Response | Tamarack Restoration`;
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
  return `${serviceName} in ${cityName}, CA | 60-Min Response | (760) 500-2211`;
}

/**
 * Generate blog post title
 */
export function getBlogTitle(title: string): string {
  return `${title} | Tamarack Restoration Blog`;
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
  return `Need ${serviceName.toLowerCase()} in ${cityName}? Tamarack Restoration responds in 60 minutes, 24/7. 116 five-star reviews, IICRC certified. Call (760) 500-2211 now.`;
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
 * Generate LocalBusiness schema (base for all pages)
 */
export function getLocalBusinessSchema(areaServed?: City[]): LocalBusinessSchema {
  const cities = areaServed || [];
  const foundingYear = new Date().getFullYear() - business.yearsInBusiness;

  const localBusinessSchema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_SCHEMA_ID,
    name: business.name,
    image: `${SITE_URL}/images/logo/tamarack-logo.webp`,
    logo: `${SITE_URL}/images/logo/tamarack-logo.webp`,
    telephone: business.phoneFormatted,
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.toString(),
      reviewCount: business.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: cities.length > 0
      ? cities.map((city) => ({ '@type': 'City', name: city.name }))
      : [
          { '@type': 'City', name: 'Carlsbad' },
          { '@type': 'City', name: 'Oceanside' },
          { '@type': 'City', name: 'Vista' },
          { '@type': 'City', name: 'San Marcos' },
          { '@type': 'City', name: 'Encinitas' },
        ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: business.phoneFormatted,
        email: business.email,
        availableLanguage: ['English'],
        areaServed: 'US-CA',
      },
    ],
    foundingDate: `${foundingYear}`,
  };

  if (SOCIAL_PROFILES.length > 0) {
    localBusinessSchema.sameAs = SOCIAL_PROFILES;
  }

  if (PAYMENT_METHODS.length > 0) {
    localBusinessSchema.paymentAccepted = PAYMENT_METHODS;
  }

  if (ACCEPTED_CURRENCIES.length > 0) {
    localBusinessSchema.currenciesAccepted = ACCEPTED_CURRENCIES;
  }

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
    includeOfferCatalog?: boolean;
    offerDescription?: string;
  }
): ServiceSchema {
  const cities = options?.cities;
  const pageUrl = options?.pagePath ? getCanonicalUrl(options.pagePath) : undefined;
  const includeOfferCatalog = options?.includeOfferCatalog ?? false;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': pageUrl ? `${pageUrl}#service` : undefined,
    name: service.name,
    description: service.description,
    url: pageUrl,
    mainEntityOfPage: pageUrl
      ? {
          '@type': 'WebPage',
          '@id': pageUrl,
        }
      : undefined,
    provider: {
      '@id': BUSINESS_SCHEMA_ID,
    },
    hasOfferCatalog: includeOfferCatalog
      ? {
          '@type': 'OfferCatalog',
          name: `${service.name} Estimates`,
          itemListElement: [
            {
              '@type': 'Offer',
              name: `Free ${service.name} Assessment`,
              description:
                options?.offerDescription ||
                `Free on-site ${service.name.toLowerCase()} assessment and detailed estimate based on scope.`,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: pageUrl || getCanonicalUrl(`/services/${service.slug}/`),
            },
          ],
        }
      : undefined,
    areaServed: cities
      ? cities.map((city) => ({ '@type': 'City', name: city.name }))
      : [{ '@type': 'City', name: 'North San Diego County' }],
    serviceType: service.name,
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
export function getArticleSchema(
  title: string,
  description: string,
  publishDate: Date,
  modifiedDate?: Date,
  image?: string
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || DEFAULT_OG_IMAGE,
    datePublished: publishDate.toISOString(),
    dateModified: modifiedDate?.toISOString() || publishDate.toISOString(),
    author: {
      '@type': 'Organization',
      name: business.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': BUSINESS_SCHEMA_ID,
      name: business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo/tamarack-logo.webp`,
      },
    },
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
 * Combine multiple schema objects into array
 */
export function combineSchemas(
  ...schemas: (object | undefined | null)[]
): object[] {
  return schemas.filter((schema): schema is object => !!schema);
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
