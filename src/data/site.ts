/**
 * Tamarack Restoration - Site Data
 * =================================
 * Central data file for business info, services, cities, etc.
 */

import type {
  BusinessInfo,
  Service,
  City,
  InsuranceCarrier,
  NavItem,
  FAQ,
} from '@/types';

// ===================
// BUSINESS INFO
// ===================

export const business: BusinessInfo = {
  name: 'Tamarack Restoration',
  phone: '7605002211',
  phoneFormatted: '(760) 500-2211',
  email: 'info@tamarackrestoration.com',
  address: {
    street: '5674 El Camino Real',
    suite: 'Suite M',
    city: 'Carlsbad',
    state: 'CA',
    zip: '92008',
    full: '5674 El Camino Real Suite M, Carlsbad, CA 92008',
  },
  hours: '24/7 Emergency Service',
  responseTime: '60-minute response',
  yearsInBusiness: 10,
  reviewCount: 116,
  rating: 5.0,
  coordinates: {
    latitude: 33.1581,
    longitude: -117.3506,
  },
};

// ===================
// TRUST METRICS
// ===================

export const trustMetrics = [
  {
    value: '10+',
    label: 'Years Experience',
    icon: 'calendar',
  },
  {
    value: '116',
    label: 'Five-Star Reviews',
    icon: 'star',
  },
  {
    value: '5.0',
    label: 'Google Rating',
    icon: 'google',
  },
  {
    value: '24/7',
    label: 'Emergency Service',
    icon: 'clock',
  },
  {
    value: '60',
    label: 'Minute Response',
    icon: 'lightning',
  },
];

// ===================
// SERVICES
// ===================

export const services: Service[] = [
  {
    id: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    slug: 'water-damage-restoration',
    shortDescription: 'Fast water extraction and complete restoration for flooded homes and businesses.',
    description: 'Professional water damage restoration services including emergency water extraction, structural drying, and complete property restoration. We handle everything from burst pipes to major flooding.',
    icon: 'droplet',
    image: '/images/services/water-damage/drying-equipment-room.webp',
    features: [
      '24/7 emergency response',
      'Water extraction & removal',
      'Structural drying',
      'Moisture monitoring',
      'Content restoration',
      'Insurance claim assistance',
    ],
    faqs: [],
    relatedServices: ['water-leak-repair', 'flood-cleanup', 'mold-removal'],
    emergencyService: true,
  },
  {
    id: 'water-leak-repair',
    name: 'Water Leak Repair',
    slug: 'water-leak-repair',
    shortDescription: 'Expert leak detection and repair before major damage occurs.',
    description: 'Professional water leak detection and repair services. We find and fix leaks in slabs, roofs, pipes, and foundations before they cause extensive water damage.',
    icon: 'search',
    image: '/images/services/leak-detection/thermal-camera-floor.webp',
    features: [
      'Non-invasive leak detection',
      'Slab leak repair',
      'Roof leak repair',
      'Pipe leak repair',
      'Foundation leak repair',
      'Preventive inspections',
    ],
    faqs: [],
    relatedServices: ['water-damage-restoration', 'slab-leak-repair', 'leak-detection'],
    emergencyService: true,
  },
  {
    id: 'mold-removal',
    name: 'Mold Removal',
    slug: 'mold-removal',
    shortDescription: 'Safe, thorough mold remediation to protect your health and property.',
    description: 'Comprehensive mold removal and remediation services. We safely eliminate mold, address the moisture source, and restore healthy indoor air quality.',
    icon: 'shield',
    image: '/images/services/mold-removal/technician-respirator.webp',
    features: [
      'Mold inspection & testing',
      'Safe containment procedures',
      'Complete mold removal',
      'HEPA air filtration',
      'Moisture source correction',
      'Post-remediation verification',
    ],
    faqs: [],
    relatedServices: ['water-damage-restoration', 'water-leak-repair'],
    emergencyService: false,
  },
  {
    id: 'fire-damage-restoration',
    name: 'Fire Damage Restoration',
    slug: 'fire-damage-restoration',
    shortDescription: 'Complete fire and smoke damage restoration to rebuild your property.',
    description: 'Full-service fire damage restoration including smoke and soot removal, structural repairs, odor elimination, and content cleaning. We help you recover from fire damage.',
    icon: 'flame',
    image: '/images/services/fire-damage/containment-setup.webp',
    features: [
      'Emergency board-up services',
      'Smoke & soot removal',
      'Structural cleaning',
      'Odor elimination',
      'Content restoration',
      'Reconstruction services',
    ],
    faqs: [],
    relatedServices: ['water-damage-restoration'],
    emergencyService: true,
  },
  {
    id: 'flood-cleanup',
    name: 'Flood Cleanup',
    slug: 'flood-cleanup',
    shortDescription: 'Rapid flood response to minimize damage and restore your property.',
    description: 'Emergency flood cleanup services for storm damage, flash floods, and natural disasters. We provide rapid water removal and complete property restoration.',
    icon: 'waves',
    image: '/images/services/flood-cleanup/flooded-basement.webp',
    features: [
      'Emergency flood response',
      'Standing water removal',
      'Mud & debris cleanup',
      'Structural drying',
      'Sanitization & disinfection',
      'Storm damage repair',
    ],
    faqs: [],
    relatedServices: ['water-damage-restoration', 'sewage-cleanup'],
    emergencyService: true,
  },
  {
    id: 'sewage-cleanup',
    name: 'Sewage Cleanup',
    slug: 'sewage-cleanup',
    shortDescription: 'Safe sewage removal and sanitation to protect your health.',
    description: 'Professional sewage cleanup and biohazard remediation. We safely remove sewage, sanitize affected areas, and restore your property to a healthy condition.',
    icon: 'alert-triangle',
    image: '/images/services/sewage-cleanup/demolition-repair.webp',
    features: [
      'Emergency sewage removal',
      'Biohazard cleanup',
      'Complete sanitization',
      'Odor removal',
      'Structural drying',
      'Health hazard mitigation',
    ],
    faqs: [],
    relatedServices: ['water-damage-restoration', 'flood-cleanup'],
    emergencyService: true,
  },
];

// Leak sub-services
export const leakServices: Service[] = [
  {
    id: 'slab-leak-repair',
    name: 'Slab Leak Repair',
    slug: 'slab-leak-repair',
    shortDescription: 'Expert detection and repair of water leaks beneath your foundation.',
    description: 'Specialized slab leak detection and repair services. We use advanced technology to locate leaks under your foundation and provide minimally invasive repairs.',
    icon: 'home',
    image: '/images/services/leak-detection/thermal-camera-plumbing.webp',
    features: [
      'Electronic leak detection',
      'Minimally invasive repair',
      'Pipe rerouting options',
      'Foundation protection',
      'Concrete restoration',
      'Warranty coverage',
    ],
    faqs: [],
    relatedServices: ['water-leak-repair', 'leak-detection', 'water-damage-restoration'],
    emergencyService: true,
  },
  {
    id: 'leak-detection',
    name: 'Leak Detection',
    slug: 'leak-detection',
    shortDescription: 'Advanced technology to find hidden leaks without destruction.',
    description: 'State-of-the-art leak detection services using thermal imaging, acoustic detection, and moisture meters to find hidden leaks without tearing apart your property.',
    icon: 'radar',
    image: '/images/services/leak-detection/thermal-camera-garage.webp',
    features: [
      'Thermal imaging',
      'Acoustic leak detection',
      'Moisture mapping',
      'Non-invasive methods',
      'Detailed reporting',
      'Repair recommendations',
    ],
    faqs: [],
    relatedServices: ['water-leak-repair', 'slab-leak-repair'],
    emergencyService: false,
  },
];

// Combined services for iteration
export const allServices = [...services, ...leakServices];

// ===================
// CITIES
// ===================

export const cities: City[] = [
  {
    id: 'carlsbad',
    name: 'Carlsbad',
    slug: 'carlsbad',
    county: 'San Diego',
    state: 'CA',
    tier: 1,
    description: 'Serving Carlsbad with 24/7 emergency restoration services. Our headquarters is located in Carlsbad, allowing us to respond within 60 minutes.',
    neighborhoods: [
      'La Costa',
      'Aviara',
      'Bressi Ranch',
      'Calavera Hills',
      'Carlsbad Village',
      'Olde Carlsbad',
      'Rancho Carrillo',
    ],
    zipCodes: ['92008', '92009', '92010', '92011'],
    coordinates: { latitude: 33.1581, longitude: -117.3506 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'slab-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
  {
    id: 'oceanside',
    name: 'Oceanside',
    slug: 'oceanside',
    county: 'San Diego',
    state: 'CA',
    tier: 2,
    description: 'Fast emergency restoration services in Oceanside. We serve all neighborhoods from the coast to the inland communities.',
    neighborhoods: [
      'Downtown Oceanside',
      'Fire Mountain',
      'Mira Costa',
      'South Oceanside',
      'Rancho Del Oro',
      'Arrowood',
    ],
    zipCodes: ['92054', '92056', '92057', '92058'],
    coordinates: { latitude: 33.1959, longitude: -117.3795 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'slab-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
  {
    id: 'vista',
    name: 'Vista',
    slug: 'vista',
    county: 'San Diego',
    state: 'CA',
    tier: 2,
    description: 'Professional restoration services for Vista homes and businesses. Quick response times throughout the city.',
    neighborhoods: [
      'Downtown Vista',
      'Shadowridge',
      'Lake Vista',
      'Breeze Hill',
      'Alta Vista',
    ],
    zipCodes: ['92081', '92083', '92084', '92085'],
    coordinates: { latitude: 33.2000, longitude: -117.2426 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'slab-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
  {
    id: 'san-marcos',
    name: 'San Marcos',
    slug: 'san-marcos',
    county: 'San Diego',
    state: 'CA',
    tier: 2,
    description: 'Comprehensive restoration services in San Marcos. Serving residential and commercial properties throughout the area.',
    neighborhoods: [
      'San Elijo Hills',
      'Lake San Marcos',
      'Twin Oaks Valley',
      'Rancho Santa Fe Road',
      'Discovery Hills',
    ],
    zipCodes: ['92069', '92078', '92096'],
    coordinates: { latitude: 33.1434, longitude: -117.1661 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'slab-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
  {
    id: 'encinitas',
    name: 'Encinitas',
    slug: 'encinitas',
    county: 'San Diego',
    state: 'CA',
    tier: 2,
    description: 'Expert restoration services for Encinitas coastal and inland communities. Specialized in addressing moisture issues common to beach properties.',
    neighborhoods: [
      'Downtown Encinitas',
      'Leucadia',
      'Cardiff-by-the-Sea',
      'Olivenhain',
      'New Encinitas',
    ],
    zipCodes: ['92007', '92023', '92024'],
    coordinates: { latitude: 33.0370, longitude: -117.2920 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'slab-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
  {
    id: 'rancho-santa-fe',
    name: 'Rancho Santa Fe',
    slug: 'rancho-santa-fe',
    county: 'San Diego',
    state: 'CA',
    tier: 3,
    description: 'Premium restoration services for Rancho Santa Fe estates. Discreet, professional service for luxury properties.',
    neighborhoods: [
      'The Covenant',
      'Fairbanks Ranch',
      'Rancho Del Lago',
      'Morgan Run',
    ],
    zipCodes: ['92067', '92091'],
    coordinates: { latitude: 33.0203, longitude: -117.2028 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
  {
    id: 'solana-beach',
    name: 'Solana Beach',
    slug: 'solana-beach',
    county: 'San Diego',
    state: 'CA',
    tier: 3,
    description: 'Restoration services for Solana Beach properties. Experienced with coastal moisture and water damage issues.',
    neighborhoods: [
      'Solana Beach',
      'Eden Gardens',
      'Lomas Santa Fe',
    ],
    zipCodes: ['92075'],
    coordinates: { latitude: 32.9912, longitude: -117.2712 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
  {
    id: 'bressi-ranch',
    name: 'Bressi Ranch',
    slug: 'bressi-ranch',
    county: 'San Diego',
    state: 'CA',
    tier: 3,
    description: 'Serving Bressi Ranch with fast emergency restoration. Located minutes away in Carlsbad for rapid response.',
    neighborhoods: [
      'Bressi Ranch',
    ],
    zipCodes: ['92009'],
    coordinates: { latitude: 33.1295, longitude: -117.2653 },
    services: [
      'water-damage-restoration',
      'water-leak-repair',
      'mold-removal',
      'fire-damage-restoration',
      'flood-cleanup',
      'sewage-cleanup',
    ],
  },
];

// Helper to get city by slug
export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find((city) => city.slug === slug);
};

// Helper to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return allServices.find((service) => service.slug === slug);
};

// ===================
// INSURANCE CARRIERS
// ===================

export const insuranceCarriers: InsuranceCarrier[] = [
  {
    id: 'state-farm',
    name: 'State Farm',
    slug: 'state-farm',
    logo: '/images/insurance/state-farm.png',
    description: 'We work directly with State Farm adjusters to streamline your water damage, fire damage, and mold claims.',
    claimProcess: [
      'Document the damage',
      'Contact State Farm to file a claim',
      'Call Tamarack Restoration for emergency service',
      'We work directly with your adjuster',
      'Receive restoration services covered by your policy',
    ],
    coveredServices: ['water-damage-restoration', 'fire-damage-restoration', 'mold-removal', 'flood-cleanup'],
  },
  {
    id: 'allstate',
    name: 'Allstate',
    slug: 'allstate',
    logo: '/images/insurance/allstate.jpg',
    description: 'Experienced working with Allstate claims for all types of property damage restoration.',
    claimProcess: [],
    coveredServices: ['water-damage-restoration', 'fire-damage-restoration', 'mold-removal', 'flood-cleanup'],
  },
  {
    id: 'farmers',
    name: 'Farmers Insurance',
    slug: 'farmers',
    logo: '/images/insurance/farmers.png',
    description: 'Trusted restoration partner for Farmers Insurance policyholders in North San Diego County.',
    claimProcess: [],
    coveredServices: ['water-damage-restoration', 'fire-damage-restoration', 'mold-removal', 'flood-cleanup'],
  },
  {
    id: 'usaa',
    name: 'USAA',
    slug: 'usaa',
    logo: '/images/insurance/usaa.png',
    description: 'Proud to serve military families with USAA coverage for property damage restoration.',
    claimProcess: [],
    coveredServices: ['water-damage-restoration', 'fire-damage-restoration', 'mold-removal', 'flood-cleanup'],
  },
  {
    id: 'liberty-mutual',
    name: 'Liberty Mutual',
    slug: 'liberty-mutual',
    logo: '/images/insurance/liberty-mutual.png',
    description: 'Seamless claims process for Liberty Mutual policyholders needing restoration services.',
    claimProcess: [],
    coveredServices: ['water-damage-restoration', 'fire-damage-restoration', 'mold-removal', 'flood-cleanup'],
  },
];

// ===================
// NAVIGATION
// ===================

export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Water Damage Restoration', href: '/services/water-damage-restoration/' },
      { label: 'Water Leak Repair', href: '/services/water-leak-repair/' },
      { label: 'Mold Removal', href: '/services/mold-removal/' },
      { label: 'Fire Damage Restoration', href: '/services/fire-damage-restoration/' },
      { label: 'Flood Cleanup', href: '/services/flood-cleanup/' },
      { label: 'Sewage Cleanup', href: '/services/sewage-cleanup/' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-area/',
    children: [
      { label: 'Carlsbad', href: '/service-area/carlsbad/' },
      { label: 'Oceanside', href: '/service-area/oceanside/' },
      { label: 'Vista', href: '/service-area/vista/' },
      { label: 'San Marcos', href: '/service-area/san-marcos/' },
      { label: 'Encinitas', href: '/service-area/encinitas/' },
      { label: 'All Service Areas', href: '/service-area/' },
    ],
  },
  {
    label: 'Insurance',
    href: '/insurance/',
    children: [
      { label: 'State Farm', href: '/insurance/state-farm/' },
      { label: 'Allstate', href: '/insurance/allstate/' },
      { label: 'Farmers Insurance', href: '/insurance/farmers/' },
      { label: 'USAA', href: '/insurance/usaa/' },
      { label: 'Liberty Mutual', href: '/insurance/liberty-mutual/' },
      { label: 'All Insurance Partners', href: '/insurance/' },
    ],
  },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About Us', href: '/about/' },
      { label: 'Testimonials', href: '/about/testimonials/' },
      { label: 'Certifications', href: '/about/certifications/' },
      { label: 'FAQ', href: '/about/faq/' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog/',
  },
  {
    label: 'Contact',
    href: '/contact/',
    highlight: true,
  },
];

// ===================
// GLOBAL FAQS
// ===================

export const globalFaqs: FAQ[] = [
  {
    question: 'How quickly can you respond to an emergency?',
    answer: 'We offer 24/7 emergency services and guarantee a 60-minute response time to properties in North San Diego County. Our team is always ready to help when disaster strikes.',
    category: 'emergency',
  },
  {
    question: 'Do you work with insurance companies?',
    answer: 'Yes, we work with all major insurance carriers including State Farm, Allstate, Farmers, USAA, and Liberty Mutual. We can help document the damage and work directly with your adjuster to streamline the claims process.',
    category: 'insurance',
  },
  {
    question: 'Are you licensed and certified?',
    answer: 'Yes, Tamarack Restoration is fully licensed, bonded, and insured. Our technicians are IICRC certified in water damage restoration, fire restoration, and mold remediation.',
    category: 'credentials',
  },
  {
    question: 'How long does water damage restoration take?',
    answer: 'The timeline depends on the extent of the damage. Minor water damage may be restored in 3-5 days, while extensive damage can take 1-2 weeks. We provide a detailed timeline during our initial assessment.',
    category: 'process',
  },
  {
    question: 'Do I need to leave my home during restoration?',
    answer: 'In most cases, you can remain in your home during restoration. However, for extensive damage or health hazards like significant mold or sewage contamination, temporary relocation may be recommended for your safety.',
    category: 'process',
  },
  {
    question: 'What should I do while waiting for your team to arrive?',
    answer: 'If safe to do so: turn off the water source, avoid electrical hazards, move valuable items away from affected areas, and document the damage with photos. Do not attempt to remove standing water without proper equipment.',
    category: 'emergency',
  },
];

// ===================
// PROCESS STEPS
// ===================

export const processSteps = [
  {
    number: 1,
    title: 'Emergency Call',
    description: 'Contact us 24/7. Our team is ready to respond within 60 minutes.',
    icon: 'phone',
  },
  {
    number: 2,
    title: 'Assessment & Plan',
    description: 'We inspect the damage and create a comprehensive restoration plan.',
    icon: 'clipboard',
  },
  {
    number: 3,
    title: 'Restoration Work',
    description: 'Our certified technicians execute the restoration using industry-best practices.',
    icon: 'tool',
  },
  {
    number: 4,
    title: 'Final Walkthrough',
    description: 'We verify the work meets our standards and your complete satisfaction.',
    icon: 'check-circle',
  },
];

// ===================
// WHY CHOOSE US
// ===================

export const whyChooseUs = [
  {
    title: 'Locally Owned & Operated',
    description: 'We live and work in North San Diego County. Your community is our community.',
    icon: 'home',
  },
  {
    title: '60-Minute Response',
    description: 'When disaster strikes, every minute counts. We guarantee rapid response.',
    icon: 'clock',
  },
  {
    title: 'IICRC Certified',
    description: 'Our technicians hold industry-leading certifications for all restoration services.',
    icon: 'award',
  },
  {
    title: 'Insurance Specialists',
    description: 'We work directly with your insurance to simplify the claims process.',
    icon: 'shield',
  },
  {
    title: '5-Star Rated',
    description: '116 five-star reviews from satisfied customers throughout the region.',
    icon: 'star',
  },
  {
    title: '100% Satisfaction',
    description: 'We stand behind our work with a complete satisfaction guarantee.',
    icon: 'check-circle',
  },
];

// ===================
// FORM CONFIG
// ===================

export const formConfig = {
  formspreeEndpoint: 'https://formspree.io/f/PLACEHOLDER', // Replace with actual endpoint
  services: [
    { value: 'water-damage-restoration', label: 'Water Damage Restoration' },
    { value: 'water-leak-repair', label: 'Water Leak Repair' },
    { value: 'mold-removal', label: 'Mold Removal' },
    { value: 'fire-damage-restoration', label: 'Fire Damage Restoration' },
    { value: 'flood-cleanup', label: 'Flood Cleanup' },
    { value: 'sewage-cleanup', label: 'Sewage Cleanup' },
    { value: 'other', label: 'Other / Not Sure' },
  ],
  urgencyLevels: [
    { value: 'emergency', label: 'Emergency - Need Help Now' },
    { value: 'urgent', label: 'Urgent - Within 24 Hours' },
    { value: 'standard', label: 'Standard - This Week' },
  ],
};
