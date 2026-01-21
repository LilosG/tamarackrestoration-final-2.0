/**
 * Tamarack Restoration - Type Definitions
 * ========================================
 * Centralized types for type safety across the site
 */

// ===================
// BUSINESS DATA
// ===================

export interface BusinessInfo {
  name: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: Address;
  hours: string;
  responseTime: string;
  yearsInBusiness: number;
  reviewCount: number;
  rating: number;
  coordinates: Coordinates;
}

export interface Address {
  street: string;
  suite?: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

// ===================
// SERVICES
// ===================

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  faqs: FAQ[];
  relatedServices: string[];
  emergencyService: boolean;
}

export type ServiceSlug =
  | 'water-damage-restoration'
  | 'water-leak-repair'
  | 'slab-leak-repair'
  | 'roof-leak-repair'
  | 'pipe-leak-repair'
  | 'leak-detection'
  | 'mold-removal'
  | 'fire-damage-restoration'
  | 'flood-cleanup'
  | 'sewage-cleanup';

// ===================
// LOCATIONS
// ===================

export interface City {
  id: string;
  name: string;
  slug: string;
  county: string;
  state: string;
  tier: 1 | 2 | 3;
  description: string;
  neighborhoods: string[];
  zipCodes: string[];
  coordinates: Coordinates;
  services: ServiceSlug[];
}

export type CitySlug =
  | 'carlsbad'
  | 'oceanside'
  | 'vista'
  | 'san-marcos'
  | 'encinitas'
  | 'rancho-santa-fe'
  | 'bressi-ranch'
  | 'solana-beach';

// ===================
// INSURANCE
// ===================

export interface InsuranceCarrier {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  claimProcess: string[];
  coveredServices: ServiceSlug[];
}

export type InsuranceSlug =
  | 'state-farm'
  | 'allstate'
  | 'farmers'
  | 'usaa'
  | 'liberty-mutual'
  | 'aaa'
  | 'travelers'
  | 'nationwide'
  | 'progressive'
  | 'mercury';

// ===================
// TESTIMONIALS
// ===================

export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  rating: number;
  text: string;
  service?: ServiceSlug;
  city?: CitySlug;
  date: string;
  source: 'google' | 'yelp' | 'facebook' | 'direct';
  featured: boolean;
}

// ===================
// PROJECTS
// ===================

export interface Project {
  id: string;
  title: string;
  slug: string;
  service: ServiceSlug;
  city: CitySlug;
  description: string;
  beforeImage: string;
  afterImage: string;
  completionDate: string;
  featured: boolean;
}

// ===================
// BLOG
// ===================

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  category: BlogCategory;
  tags: string[];
  image?: ImageMeta;
  relatedServices: ServiceSlug[];
  relatedCities: CitySlug[];
  featured: boolean;
}

export type BlogCategory =
  | 'water-damage'
  | 'mold'
  | 'fire-damage'
  | 'leaks'
  | 'insurance'
  | 'diy-tips'
  | 'local-guides';

export interface ImageMeta {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// ===================
// FAQ
// ===================

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQSection {
  title: string;
  faqs: FAQ[];
}

// ===================
// NAVIGATION
// ===================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
  icon?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

// ===================
// SEO
// ===================

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogType?: 'website' | 'article' | 'local.business';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

// ===================
// FORMS
// ===================

export interface LeadFormData {
  name: string;
  phone: string;
  service: ServiceSlug | 'other';
  message?: string;
  source: string;
  timestamp: string;
}

export interface ContactFormData extends LeadFormData {
  email: string;
  address?: string;
  urgency: 'emergency' | 'urgent' | 'standard';
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// ===================
// COMPONENTS
// ===================

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export type CardVariant = 'default' | 'outlined' | 'elevated';

// ===================
// SCHEMA.ORG
// ===================

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  '@id': string;
  name: string;
  image: string;
  telephone: string;
  email?: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  url: string;
  priceRange: string;
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  areaServed: Array<{
    '@type': 'City';
    name: string;
  }>;
  sameAs?: string[];
}

export interface ServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@id': string;
  };
  areaServed: Array<{
    '@type': 'City';
    name: string;
  }>;
  serviceType: string;
}

export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Organization';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}
