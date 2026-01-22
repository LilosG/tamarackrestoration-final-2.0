/**
 * Comprehensive FAQ Data
 * ======================
 * Organized by category for the FAQ page
 * Used across the site with proper FAQPage schema
 * Optimized for AI/AEO with clear, complete answers
 */

import type { FAQ } from '@/types';

// ===================
// EMERGENCY & RESPONSE
// ===================
export const emergencyFaqs: FAQ[] = [
  {
    question: 'How quickly can you respond to an emergency?',
    answer: 'We offer 24/7 emergency services and guarantee a 60-minute response time to properties in North San Diego County. Our dispatch team is available around the clock, and we have crews ready to respond immediately when disaster strikes.',
    category: 'emergency',
  },
  {
    question: 'What should I do while waiting for your team to arrive?',
    answer: 'If safe to do so: turn off the water source if it\'s a leak or burst pipe, avoid walking through standing water near electrical outlets, move valuable items away from affected areas, and document the damage with photos and videos. Do not attempt to remove standing water without proper equipment, and avoid entering rooms with sagging ceilings.',
    category: 'emergency',
  },
  {
    question: 'Do you provide emergency services on weekends and holidays?',
    answer: 'Yes, we provide 24/7 emergency restoration services every day of the year, including weekends and holidays. Water damage, fire damage, and other emergencies don\'t wait for business hours, and neither do we.',
    category: 'emergency',
  },
  {
    question: 'What areas do you serve for emergency response?',
    answer: 'We serve all of North San Diego County including Carlsbad, Oceanside, Vista, San Marcos, Encinitas, Solana Beach, Rancho Santa Fe, and surrounding communities. Our headquarters in Carlsbad allows us to reach any location in our service area within 60 minutes.',
    category: 'emergency',
  },
];

// ===================
// INSURANCE & PAYMENT
// ===================
export const insuranceFaqs: FAQ[] = [
  {
    question: 'Do you work with insurance companies?',
    answer: 'Yes, we work with all major insurance carriers including State Farm, Allstate, Farmers, USAA, Liberty Mutual, and many others. We handle the documentation, communicate directly with adjusters, and can bill your insurance company directly in most cases.',
    category: 'insurance',
  },
  {
    question: 'Will my homeowner\'s insurance cover water damage?',
    answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage, such as burst pipes, water heater failures, or appliance malfunctions. However, damage from flooding, gradual leaks, or lack of maintenance is typically not covered. We can help you understand your coverage and document the damage properly for your claim.',
    category: 'insurance',
  },
  {
    question: 'Do I need to pay anything out of pocket?',
    answer: 'Typically, you\'re responsible for your insurance deductible. The rest of the covered restoration costs are paid by your insurance company. We provide detailed documentation to maximize your claim and ensure all damage is properly covered.',
    category: 'insurance',
  },
  {
    question: 'Can you help me file an insurance claim?',
    answer: 'Yes, we assist with every step of the insurance process. We provide comprehensive documentation including photos, moisture readings, damage assessments, and detailed repair estimates. We also communicate directly with your adjuster and can meet them on-site for inspections.',
    category: 'insurance',
  },
  {
    question: 'What if my insurance claim is denied?',
    answer: 'If your claim is initially denied, we can help by providing additional documentation, detailed reports, and supplemental information to support an appeal. Our thorough documentation often helps overturn initial denials.',
    category: 'insurance',
  },
];

// ===================
// WATER DAMAGE
// ===================
export const waterDamageFaqs: FAQ[] = [
  {
    question: 'How long does water damage restoration take?',
    answer: 'The timeline depends on the extent of the damage. Minor water damage affecting one room may be restored in 3-5 days. Extensive damage affecting multiple rooms or floors can take 1-2 weeks or longer. We provide a detailed timeline during our initial assessment and keep you updated throughout the process.',
    category: 'water-damage',
  },
  {
    question: 'What causes water damage in homes?',
    answer: 'Common causes include burst or leaking pipes, water heater failures, washing machine or dishwasher malfunctions, toilet overflows, roof leaks, HVAC condensation issues, and slab leaks. Storm flooding and sewage backups are also significant causes in our area.',
    category: 'water-damage',
  },
  {
    question: 'Can water damage cause mold?',
    answer: 'Yes, mold can begin growing within 24-48 hours of water damage if the affected areas aren\'t properly dried. This is why rapid response is critical. Our restoration process includes thorough drying with industrial equipment and antimicrobial treatments to prevent mold growth.',
    category: 'water-damage',
  },
  {
    question: 'Do you remove water from basements and crawl spaces?',
    answer: 'Yes, we have specialized equipment for extracting water from basements, crawl spaces, and other hard-to-reach areas. We use submersible pumps, truck-mounted extraction units, and industrial dehumidifiers to ensure complete water removal and drying.',
    category: 'water-damage',
  },
  {
    question: 'How do you dry out a house after water damage?',
    answer: 'We use a combination of industrial-grade equipment including high-powered water extractors, air movers, dehumidifiers, and moisture monitoring tools. We monitor moisture levels throughout the drying process to ensure your property is completely dry before repairs begin.',
    category: 'water-damage',
  },
];

// ===================
// MOLD
// ===================
export const moldFaqs: FAQ[] = [
  {
    question: 'How do I know if I have mold in my home?',
    answer: 'Signs of mold include visible mold growth (often appearing as black, green, or white patches), a musty odor, water stains, peeling wallpaper or paint, and health symptoms like allergies, respiratory issues, or headaches that improve when you leave the building. If you suspect mold, we offer professional inspections to identify and assess the problem.',
    category: 'mold',
  },
  {
    question: 'Is mold dangerous to my health?',
    answer: 'Mold can cause health issues, especially for people with allergies, asthma, or compromised immune systems. Symptoms can include respiratory problems, nasal congestion, eye irritation, skin rashes, and headaches. Some molds produce mycotoxins that can cause more serious health effects. Professional remediation is recommended to safely remove mold.',
    category: 'mold',
  },
  {
    question: 'Can I remove mold myself?',
    answer: 'Small areas of mold (less than 10 square feet) on non-porous surfaces can sometimes be cleaned with appropriate precautions. However, larger areas, mold in HVAC systems, or mold caused by contaminated water require professional remediation. DIY attempts often spread mold spores and make the problem worse.',
    category: 'mold',
  },
  {
    question: 'How long does mold remediation take?',
    answer: 'The timeline depends on the extent of contamination. Small, contained areas may be remediated in 1-3 days. Larger areas or mold that has spread through walls, HVAC systems, or multiple rooms can take 1-2 weeks. We provide detailed timelines after our initial assessment.',
    category: 'mold',
  },
  {
    question: 'Will mold come back after remediation?',
    answer: 'Properly performed mold remediation should eliminate the current mold problem. However, mold can return if the underlying moisture source isn\'t addressed. We identify and help resolve moisture issues as part of our remediation process and can recommend preventive measures.',
    category: 'mold',
  },
];

// ===================
// FIRE DAMAGE
// ===================
export const fireDamageFaqs: FAQ[] = [
  {
    question: 'What should I do after a fire in my home?',
    answer: 'First, ensure everyone is safe and don\'t re-enter until authorities clear the building. Contact your insurance company to start a claim. Then call a professional restoration company like Tamarack. Don\'t attempt to clean soot or smoke damage yourself, as improper cleaning can cause permanent damage.',
    category: 'fire-damage',
  },
  {
    question: 'Can smoke odor be completely removed?',
    answer: 'Yes, professional smoke odor removal can completely eliminate smoke smells. We use specialized techniques including thermal fogging, ozone treatment, and hydroxyl generators that neutralize odor molecules. We also clean and treat all affected surfaces, textiles, and HVAC systems.',
    category: 'fire-damage',
  },
  {
    question: 'How long does fire damage restoration take?',
    answer: 'Minor smoke damage may be addressed in a few days. Moderate fire damage typically takes 1-2 weeks. Extensive structural damage requiring reconstruction can take several weeks to months. We provide detailed timelines and keep you informed throughout the process.',
    category: 'fire-damage',
  },
  {
    question: 'Do you handle the reconstruction after fire damage?',
    answer: 'Yes, we provide complete fire restoration services from initial board-up and emergency stabilization through final reconstruction and finishing. Having one company manage the entire process simplifies communication and ensures consistent quality.',
    category: 'fire-damage',
  },
];

// ===================
// PROCESS & GENERAL
// ===================
export const processFaqs: FAQ[] = [
  {
    question: 'Do I need to leave my home during restoration?',
    answer: 'In most cases, you can remain in your home during restoration, especially for localized damage. However, for extensive damage, health hazards like significant mold or sewage contamination, or during certain phases of work, temporary relocation may be recommended for your safety and comfort.',
    category: 'process',
  },
  {
    question: 'Are you licensed and certified?',
    answer: 'Yes, Tamarack Restoration is fully licensed, bonded, and insured in California. Our technicians hold IICRC certifications in water damage restoration (WRT), applied structural drying (ASD), fire and smoke restoration (FSRT), and mold remediation (AMRT).',
    category: 'credentials',
  },
  {
    question: 'What certifications do your technicians have?',
    answer: 'Our technicians are certified by the Institute of Inspection, Cleaning and Restoration Certification (IICRC), the industry standard for restoration professionals. Certifications include Water Damage Restoration (WRT), Applied Structural Drying (ASD), Fire & Smoke Restoration (FSRT), and Applied Microbial Remediation (AMRT).',
    category: 'credentials',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide free on-site assessments and estimates for all restoration services. For emergencies, we begin work immediately to prevent further damage and provide detailed documentation for your insurance claim.',
    category: 'process',
  },
  {
    question: 'What is the restoration process like?',
    answer: 'Our process begins with an emergency response and damage assessment. We then develop a restoration plan, which we review with you and your insurance company. Next, we perform mitigation to prevent further damage, followed by restoration work. Finally, we conduct a walkthrough to ensure your complete satisfaction.',
    category: 'process',
  },
];

// ===================
// COMBINED EXPORTS
// ===================
export const allFaqs: FAQ[] = [
  ...emergencyFaqs,
  ...insuranceFaqs,
  ...waterDamageFaqs,
  ...moldFaqs,
  ...fireDamageFaqs,
  ...processFaqs,
];

export const faqCategories = [
  { id: 'emergency', name: 'Emergency Response', faqs: emergencyFaqs },
  { id: 'insurance', name: 'Insurance & Payment', faqs: insuranceFaqs },
  { id: 'water-damage', name: 'Water Damage', faqs: waterDamageFaqs },
  { id: 'mold', name: 'Mold Removal', faqs: moldFaqs },
  { id: 'fire-damage', name: 'Fire & Smoke Damage', faqs: fireDamageFaqs },
  { id: 'process', name: 'Our Process & Credentials', faqs: processFaqs },
];
