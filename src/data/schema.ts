/**
 * Tamarack Restoration — Centralized Schema Data
 * ================================================
 * Single source of truth for structured data shared across multiple page types.
 * Import from this file instead of duplicating values in seo.ts or layout files.
 */

import type { ReviewNode } from '@/types';

// ===================
// SOCIAL & PAYMENT
// ===================

export const SOCIAL_PROFILES: string[] = [
  'https://www.facebook.com/TamarackRestoration',
  'https://www.instagram.com/tamarackrestoration/',
  'https://www.linkedin.com/company/tamarack-restoration',
  'https://www.youtube.com/@tamarackrestoration',
  'https://www.yelp.com/biz/tamarack-restoration-carlsbad',
  'https://www.bbb.org/us/ca/carlsbad/profile/water-damage-restoration/tamarack-restoration-1126-1000146682',
];

export const PAYMENT_METHODS: string[] = ['Cash', 'Check', 'Credit Card', 'Insurance'];

export const ACCEPTED_CURRENCIES: string[] = ['USD'];

// ===================
// AREA SERVED
// ===================

/**
 * Wikipedia sameAs URIs for entity disambiguation.
 * Used when mapping City objects to schema.org City nodes.
 */
export const CITY_SAME_AS: Record<string, string> = {
  'Carlsbad': 'https://en.wikipedia.org/wiki/Carlsbad,_California',
  'Oceanside': 'https://en.wikipedia.org/wiki/Oceanside,_California',
  'Vista': 'https://en.wikipedia.org/wiki/Vista,_California',
  'San Marcos': 'https://en.wikipedia.org/wiki/San_Marcos,_California',
  'Encinitas': 'https://en.wikipedia.org/wiki/Encinitas,_California',
  'Rancho Santa Fe': 'https://en.wikipedia.org/wiki/Rancho_Santa_Fe,_California',
  'Solana Beach': 'https://en.wikipedia.org/wiki/Solana_Beach,_California',
  'Bressi Ranch': 'https://en.wikipedia.org/wiki/Bressi_Ranch,_California',
};

/** Default areaServed for LocalBusiness — all primary service cities with sameAs. */
export const AREA_SERVED_CITIES = [
  { '@type': 'City' as const, name: 'Carlsbad', sameAs: 'https://en.wikipedia.org/wiki/Carlsbad,_California' },
  { '@type': 'City' as const, name: 'Oceanside', sameAs: 'https://en.wikipedia.org/wiki/Oceanside,_California' },
  { '@type': 'City' as const, name: 'Vista', sameAs: 'https://en.wikipedia.org/wiki/Vista,_California' },
  { '@type': 'City' as const, name: 'San Marcos', sameAs: 'https://en.wikipedia.org/wiki/San_Marcos,_California' },
  { '@type': 'City' as const, name: 'Encinitas', sameAs: 'https://en.wikipedia.org/wiki/Encinitas,_California' },
];

// ===================
// REVIEW NODES
// ===================

/**
 * Representative Review nodes for structured data.
 * Source: real Google Business Profile reviews from the testimonials array in site.ts.
 * Dates are approximated from relative timestamps as of 2026-03-16.
 * Minimum 3 required for review snippet eligibility per Google's guidelines.
 */
export const REVIEW_NODES: ReviewNode[] = [
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Brandon Taylor" },
    datePublished: "2026-01-20",
    reviewBody: "I recently hired Tamarack Restoration after a tenant complained about potential mold in my property in Carlsbad. Robert personally answered the phone when I called and met me at the house the same day. He was upfront: many mold remediation companies push unnecessary work to maximize profits, but he showed me with a moisture meter and thermal imaging camera that several areas flagged by the previous company had no moisture at all. His quote came in 5 times cheaper. The team started right away and had everything dried out, cleaned, and fully remediated in just 3 days. Robert truly cares about his customers and does quality work without overcharging.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Terri Trexler" },
    datePublished: "2026-02-17",
    reviewBody: "We called Robert at Tamarack Restoration after finding that the water heater stopped working and was leaking all over the garage. He arrived within forty-five minutes of my call with his tools, knowledge, and much experience to assess the situation and give us advice. Unfortunately, water had penetrated the walls and mold was visible. After making a few calls we found that Robert was best priced and he did beautiful work. Problem solved. He even recommended a plumber to replace the water heater with the best price! I highly recommend Robert at Tamarack Restoration.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "John Bray" },
    datePublished: "2026-01-30",
    reviewBody: "Rob and his team did a great job with a water issue at our home. They quickly came out and assessed the situation and gave their recommendations. They are not only knowledgeable, but did great work! They also went over to our friends home last year when they had a flash flood. They immediately got to work to fix their problem. I highly recommend Tamarack Restoration!!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Houtan Movafagh" },
    datePublished: "2026-01-27",
    reviewBody: "I had a potential water leak issue in a bathroom that I found out about on a Sunday. I reached out to Tamarack Restoration, and to my surprise, a gentleman named Robert picked up the phone. He understood the urgency of the issue and fit me in his schedule the following day. Robert showed up to the appointment on time and did a thorough inspection of my bathroom. He provided recommendations and explained everything very clearly. He is an honest individual and I will not hesitate to use his services in the future.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Jamie Tobey" },
    datePublished: "2025-10-08",
    reviewBody: "Great experience with Tamarack. Robert came out within 12 hours of my call, on the weekend, to assess my issue and had a crew at my house 48 hours later to start fixing the issue. The crew was thorough, fast, and nice, they were very informative with answering my many questions. Would use them again, highly recommend.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Michelle D. Greven" },
    datePublished: "2025-08-12",
    reviewBody: "Robert was a rock star for us during a really stressful situation. We had a major leak that flooded part of our property. Robert and his team guided us through every step for the best possible outcome with our insurance company. He is super knowledgeable on the process so you are in the best hands should you need his services. Could not recommend more.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Richard Grant" },
    datePublished: "2024-12-01",
    reviewBody: "Had my neighbors water filtration system bust above my garage and completely flooded our garage roof and shared wall with neighbor. These guys came out and were a godsend during a rough time of need. I cannot recommend this team enough. They are super responsive, treat you as a customer as they would a family member. You can really tell they are good people and have your back. Highly recommended!!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Anthony Scaturro" },
    datePublished: "2025-03-09",
    reviewBody: "Robert and his team at Tamarack were quick to respond, they setup a very clean work environment considering the mess created by the leak and required demo. They provided professional documents to file the claim to insurance. They even connected me with great contractors to help with the rebuild. I highly recommend Tamarack Restoration for any water mitigation needs.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Tamara Kapa Strom" },
    datePublished: "2025-02-27",
    reviewBody: "My clients discovered they had a major leak and flood at their brand new home. Within minutes Robert was onsite and ready to take action. When you have a situation like this come up you are in shock and having someone right there who knows what steps to take next was so helpful and reassuring. Very thankful to Tamarack Restoration.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Lisa Simmons" },
    datePublished: "2025-03-06",
    reviewBody: "I highly recommend Tamarack Restoration. Robert was very good at communicating with me, he was responsive to my calls and texts. He gave me a comprehensive quote so I knew what work he was doing and how much it would cost. The work areas were kept cleaned and organized. They did a great job!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Ben Hancock" },
    datePublished: "2025-10-08",
    reviewBody: "Tamarack is second to none. The best! Rob and his team killed it and the job was done in less than a week. Water leak from upstairs condo caused damage to our condo below. They treated and removed the mold, plumbing was repaired, drywall replaced and painted. Looked just like new. Highly recommend.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Howard Joelson" },
    datePublished: "2025-09-16",
    reviewBody: "Robert and his team were very professional and responsive. Tamarack Restoration was referred to me by a good friend who said they do a great job and you can trust them to be honest. They were right!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
];
