/**
 * About Section Content Data
 * ==========================
 * Centralized content for all /about/ pages
 * Follows the same pattern as serviceContent and cityContext
 */

// ===================
// PAGE CONFIGURATIONS
// ===================

export interface AboutPageConfig {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroAccent?: string;
  heroSubtitle: string;
  heroBadge?: string;
  heroBadgeIcon?: string;
  showTrustBar?: boolean;
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export type AboutPageKey = "index" | "testimonials" | "faq" | "certifications";

export const aboutPages: Record<AboutPageKey, AboutPageConfig> = {
  index: {
    slug: '',
    title: 'About Tamarack Restoration | Carlsbad, CA',
    description: 'Family-owned restoration company serving North San Diego County for 10+ years. IICRC certified, 116 five-star reviews. Meet the team behind Tamarack Restoration.',
    heroTitle: 'Your Neighbors in',
    heroAccent: 'Restoration',
    heroSubtitle: 'When disaster strikes your home, you need more than a contractor—you need a partner who understands what you\'re going through. That\'s who we are.',
    heroBadge: 'Family-Owned Since 2014',
    heroBadgeIcon: 'users',
    showTrustBar: true,
  },
  testimonials: {
    slug: 'testimonials',
    title: 'Customer Reviews & Testimonials | Tamarack Restoration',
    description: 'Read 116 five-star reviews from Carlsbad homeowners. See why families trust Tamarack Restoration for water damage, fire, mold, and flood restoration.',
    heroTitle: 'What Our Customers',
    heroAccent: 'Say',
    heroSubtitle: 'Don\'t just take our word for it. Read reviews from Carlsbad homeowners who trusted us with their emergency restoration needs.',
    heroBadge: '116 Five-Star Reviews',
    heroBadgeIcon: 'star',
    showTrustBar: false,
    ctaTitle: 'Ready to Experience Our Service?',
    ctaSubtitle: 'Join hundreds of satisfied customers throughout North San Diego County.',
  },
  faq: {
    slug: 'faq',
    title: 'Frequently Asked Questions | Tamarack Restoration',
    description: 'Get answers to common questions about water damage restoration, mold removal, fire damage repair, insurance claims, and our 24/7 emergency services.',
    heroTitle: 'Frequently Asked',
    heroAccent: 'Questions',
    heroSubtitle: 'Find answers to common questions about our restoration services, insurance process, and what to expect when disaster strikes.',
    showTrustBar: false,
    ctaTitle: 'Still Have Questions?',
    ctaSubtitle: 'Can\'t find the answer you\'re looking for? Our team is here to help 24/7.',
  },
  certifications: {
    slug: 'certifications',
    title: 'Our Certifications & Credentials | Tamarack Restoration',
    description: 'IICRC certified restoration professionals. See our credentials for water damage, mold remediation, fire restoration, and applied structural drying.',
    heroTitle: 'Certified',
    heroAccent: 'Professionals',
    heroSubtitle: 'Our technicians hold the industry\'s highest certifications, ensuring quality work on every project.',
    heroBadge: 'IICRC Certified Firm',
    heroBadgeIcon: 'award',
    showTrustBar: true,
    ctaTitle: 'Work with Certified Experts',
    ctaSubtitle: 'Trust your restoration to properly trained and certified professionals.',
  },
};

// ===================
// SHARED CONTENT
// ===================

export const companyValues = [
  {
    icon: 'clock',
    title: 'Rapid Response',
    description: 'When disaster strikes, every minute counts. We guarantee 60-minute response times, 24/7, because we know you can\'t wait.',
  },
  {
    icon: 'award',
    title: 'IICRC Certified',
    description: 'Our technicians hold certifications from the Institute of Inspection, Cleaning and Restoration Certification—the gold standard in our industry.',
  },
  {
    icon: 'shield',
    title: 'Insurance Expertise',
    description: 'We work directly with all major insurance carriers, handling the paperwork and documentation so you can focus on your family.',
  },
  {
    icon: 'users',
    title: 'Local & Family-Owned',
    description: 'Based in Carlsbad, we\'re your neighbors. We treat every home like our own and every customer like family.',
  },
  {
    icon: 'check-circle',
    title: '100% Satisfaction',
    description: 'Our 116 five-star reviews speak for themselves. We don\'t consider the job done until you\'re completely satisfied.',
  },
  {
    icon: 'home',
    title: 'Full-Service Restoration',
    description: 'From emergency response to final reconstruction, we handle everything so you have one point of contact throughout the process.',
  },
];

export const certifications = [
  { name: 'IICRC Certified Firm', description: 'Institute of Inspection, Cleaning and Restoration Certification', icon: 'award' },
  { name: 'Water Damage Restoration', description: 'IICRC WRT Certified Technicians', icon: 'droplet' },
  { name: 'Applied Structural Drying', description: 'IICRC ASD Certified', icon: 'wind' },
  { name: 'Mold Remediation', description: 'IICRC AMRT Certified', icon: 'shield' },
  { name: 'Fire & Smoke Restoration', description: 'IICRC FSRT Certified', icon: 'flame' },
];

export const companyStory = {
  paragraphs: [
    'Tamarack Restoration was founded with a simple mission: to be the restoration company we\'d want to call if disaster struck our own homes.',
    'After years of working in the restoration industry, we saw too many companies that treated customers like claim numbers instead of families in crisis. We knew there had to be a better way.',
    'Today, from our headquarters in Carlsbad, we serve homeowners and businesses throughout North San Diego County. Our team of IICRC-certified technicians responds within 60 minutes, 24 hours a day, 7 days a week—because we know that when your home is flooding at 2 AM, you need help now, not tomorrow.',
    'We\'ve helped hundreds of families recover from water damage, fire, mold, and other disasters. Each project reminds us why we do this work: the relief on a homeowner\'s face when they see their restored kitchen, the gratitude of a business owner who can reopen their doors.',
  ],
  image: '/images/team/team-thumbs-up.webp',
  imageAlt: 'The Tamarack Restoration team',
  statValue: '10+',
  statLabel: 'Years Serving North San Diego',
};
