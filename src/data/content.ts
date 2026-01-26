/**
 * Money Page Content Data
 * =======================
 * Layered content system for unique, SEO-optimized local pages
 * 
 * CONTENT LAYERS:
 * 1. Service Base Content - detailed service information
 * 2. City Context - local factors and challenges
 * 3. Combination Content - specific city+service combinations
 */

// ===================
// SERVICE CONTENT
// ===================
// Detailed content for each service type - reusable across cities

export interface ServiceContent {
  slug: string;
  // Hero section
  heroSubtitle: string;
  // Main content sections
  problemStatement: string;
  solutionOverview: string;
  processSteps: {
    title: string;
    description: string;
  }[];
  // Why choose us for this service
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  // Common causes
  commonCauses: string[];
  // Warning signs
  warningSigns: string[];
  // Cost factors
  costFactors: string[];
  // Unique value props for this service
  serviceHighlights: string[];
}

export const serviceContent: Record<string, ServiceContent> = {
  'water-damage-restoration': {
    slug: 'water-damage-restoration',
    heroSubtitle: 'Fast water extraction and complete restoration when every minute counts.',
    problemStatement: `Water damage spreads rapidly through your property, seeping into walls, floors, and foundations within minutes. Every hour of delay allows moisture to penetrate deeper, creating ideal conditions for mold growth and structural deterioration. What starts as a simple leak can become a major restoration project if not addressed immediately.`,
    solutionOverview: `Our water damage restoration process combines industrial-grade extraction equipment with advanced drying technology to remove water quickly and completely. We use moisture meters and thermal imaging to find hidden water, ensuring nothing is missed. Our IICRC-certified technicians follow a systematic approach that protects your property and gets you back to normal faster.`,
    processSteps: [
      {
        title: 'Emergency Response',
        description: 'We arrive within 60 minutes to assess damage, stop the water source, and begin extraction immediately.',
      },
      {
        title: 'Water Extraction',
        description: 'Industrial pumps and truck-mounted extractors remove standing water quickly, minimizing damage spread.',
      },
      {
        title: 'Structural Drying',
        description: 'Commercial dehumidifiers and air movers dry walls, floors, and cavities to prevent mold and warping.',
      },
      {
        title: 'Monitoring & Verification',
        description: 'Daily moisture readings ensure complete drying. We document everything for your insurance claim.',
      },
      {
        title: 'Restoration & Repair',
        description: 'We repair or replace damaged materials, returning your property to pre-loss condition.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Fastest Response in the Area',
        description: 'Our local team guarantees 60-minute response times, 24/7. We know that with water damage, every minute matters.',
      },
      {
        title: 'Complete Service',
        description: 'From emergency extraction to final repairs, we handle everything. One company, one point of contact, no hassle.',
      },
      {
        title: 'Insurance Experts',
        description: 'We work directly with your insurance company, documenting damage thoroughly and maximizing your claim.',
      },
    ],
    commonCauses: [
      'Burst or frozen pipes',
      'Water heater failures',
      'Appliance malfunctions (washing machine, dishwasher)',
      'Roof leaks during storms',
      'Toilet or sink overflows',
      'Foundation cracks and seepage',
      'HVAC condensation problems',
    ],
    warningSigns: [
      'Visible water pooling or wet spots',
      'Damp or musty odors',
      'Warped or buckled flooring',
      'Stained or sagging ceilings',
      'Peeling paint or wallpaper',
      'Increased water bills',
    ],
    costFactors: [
      'Amount of water and affected area',
      'Water category (clean, gray, or black water)',
      'Materials affected (carpet vs. hardwood vs. concrete)',
      'Duration before treatment began',
      'Need for mold remediation',
      'Reconstruction requirements',
    ],
    serviceHighlights: [
      'IICRC-certified water restoration technicians',
      'Truck-mounted extraction for maximum power',
      'Thermal imaging to find hidden moisture',
      'Direct insurance billing available',
    ],
  },
  
  'mold-removal': {
    slug: 'mold-removal',
    heroSubtitle: 'Safe, thorough mold remediation that protects your health and property.',
    problemStatement: `Mold isn't just unsightly—it's a health hazard that can cause respiratory problems, allergic reactions, and other serious health issues. Once mold takes hold, it spreads quickly through spores that travel through your HVAC system, contaminating areas far from the original source. DIY removal often makes things worse by disturbing spores without proper containment.`,
    solutionOverview: `Professional mold remediation requires specialized training, equipment, and protocols. We contain affected areas to prevent spore spread, use HEPA filtration to clean the air, and remove mold at its source. Most importantly, we identify and fix the moisture problem that caused the mold, ensuring it doesn't return.`,
    processSteps: [
      {
        title: 'Inspection & Testing',
        description: 'We identify all mold locations, determine the type, and find the moisture source causing growth.',
      },
      {
        title: 'Containment',
        description: 'Plastic barriers and negative air pressure prevent spores from spreading to clean areas during removal.',
      },
      {
        title: 'HEPA Air Filtration',
        description: 'Industrial air scrubbers with HEPA filters capture airborne spores throughout the remediation process.',
      },
      {
        title: 'Mold Removal',
        description: 'We remove mold-damaged materials and treat surfaces with antimicrobial solutions.',
      },
      {
        title: 'Moisture Correction',
        description: 'We fix the water intrusion or humidity problem that caused mold growth in the first place.',
      },
      {
        title: 'Clearance Testing',
        description: 'Post-remediation testing verifies mold levels are back to normal before we finish.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Health-Focused Approach',
        description: 'We prioritize your family\'s health with proper containment, PPE, and air filtration throughout the process.',
      },
      {
        title: 'Find & Fix the Source',
        description: 'We don\'t just remove mold—we find and fix the moisture problem so mold doesn\'t come back.',
      },
      {
        title: 'Clearance Testing Included',
        description: 'We verify our work with post-remediation testing, giving you documented proof the mold is gone.',
      },
    ],
    commonCauses: [
      'Previous water damage not fully dried',
      'High humidity (above 60%)',
      'Poor ventilation in bathrooms and kitchens',
      'Roof or plumbing leaks',
      'Condensation on windows and pipes',
      'Flooding or storm damage',
    ],
    warningSigns: [
      'Visible mold growth (black, green, white spots)',
      'Musty or earthy odors',
      'Recent water damage or flooding',
      'Allergic symptoms that improve when away from home',
      'Condensation on windows',
      'Peeling or bubbling paint',
    ],
    costFactors: [
      'Size of affected area',
      'Type of mold present',
      'Location (crawlspace vs. living area)',
      'Materials affected',
      'Extent of moisture problem',
      'Need for reconstruction',
    ],
    serviceHighlights: [
      'IICRC-certified mold remediation specialists',
      'Full containment and HEPA filtration',
      'Moisture source identification and repair',
      'Post-remediation clearance testing',
    ],
  },
  
  'fire-damage-restoration': {
    slug: 'fire-damage-restoration',
    heroSubtitle: 'Complete fire, smoke, and soot restoration to rebuild your property and your life.',
    problemStatement: `Fire damage extends far beyond the flames. Smoke and soot penetrate every surface, while the water used to extinguish the fire creates additional damage. Without immediate action, soot becomes permanently bonded to surfaces, smoke odor permeates materials, and corrosive residues destroy electronics and metal fixtures.`,
    solutionOverview: `Fire restoration requires a comprehensive approach addressing structural damage, smoke residue, water damage, and odor elimination. Our technicians are trained in all aspects of fire restoration, using specialized equipment and techniques to salvage what can be saved and restore your property completely.`,
    processSteps: [
      {
        title: 'Emergency Board-Up',
        description: 'We secure your property immediately, boarding up openings and tarping the roof to prevent further damage.',
      },
      {
        title: 'Damage Assessment',
        description: 'Detailed documentation of all fire, smoke, and water damage for insurance purposes.',
      },
      {
        title: 'Water Removal',
        description: 'Extract water from firefighting efforts and dry the structure to prevent mold.',
      },
      {
        title: 'Smoke & Soot Removal',
        description: 'Specialized cleaning removes soot from all surfaces before it causes permanent damage.',
      },
      {
        title: 'Odor Elimination',
        description: 'Thermal fogging and ozone treatment eliminate smoke odor at the molecular level.',
      },
      {
        title: 'Reconstruction',
        description: 'We rebuild damaged areas, returning your property to pre-fire condition.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Full-Service Restoration',
        description: 'From emergency board-up to complete reconstruction, we handle every aspect of fire recovery.',
      },
      {
        title: 'Content Restoration',
        description: 'We clean, restore, and store your belongings, saving items you thought were lost.',
      },
      {
        title: 'Insurance Coordination',
        description: 'We work directly with your insurance adjuster, documenting everything for maximum claim approval.',
      },
    ],
    commonCauses: [
      'Kitchen fires (cooking accidents)',
      'Electrical malfunctions',
      'Heating equipment',
      'Candles and open flames',
      'Smoking materials',
      'Dryer lint buildup',
    ],
    warningSigns: [
      'Smoke detector activations',
      'Burning smells',
      'Discolored outlets or switches',
      'Flickering lights',
      'Frayed or damaged wiring',
      'Overheated appliances',
    ],
    costFactors: [
      'Extent of fire damage',
      'Smoke and soot penetration',
      'Water damage from firefighting',
      'Structural repairs needed',
      'Content restoration requirements',
      'Reconstruction scope',
    ],
    serviceHighlights: [
      'Emergency response and board-up',
      'Smoke and soot removal specialists',
      'Thermal fogging odor elimination',
      'Complete reconstruction services',
    ],
  },
  
  'flood-cleanup': {
    slug: 'flood-cleanup',
    heroSubtitle: 'Rapid flood response to minimize damage and restore your property.',
    problemStatement: `Flood water is especially destructive because it often contains contaminants, sewage, chemicals, and debris. Category 3 "black water" from floods poses serious health risks and requires specialized handling. The longer flood water sits, the more damage it causes—and the greater the health hazard becomes.`,
    solutionOverview: `Flood cleanup requires rapid response, proper safety protocols, and thorough sanitation. We extract flood water quickly, remove contaminated materials safely, and sanitize your property completely. Our goal is to minimize damage, eliminate health hazards, and restore your property to a safe, livable condition.`,
    processSteps: [
      {
        title: 'Safety Assessment',
        description: 'We evaluate hazards including electrical, structural, and contamination risks before entering.',
      },
      {
        title: 'Water Extraction',
        description: 'Powerful pumps remove standing flood water as quickly as possible.',
      },
      {
        title: 'Contaminated Material Removal',
        description: 'Porous materials that absorbed flood water (carpet, drywall) are safely removed.',
      },
      {
        title: 'Cleaning & Sanitization',
        description: 'All salvageable surfaces are cleaned with antimicrobial and antibacterial treatments.',
      },
      {
        title: 'Structural Drying',
        description: 'Industrial dehumidifiers and air movers dry the structure completely.',
      },
      {
        title: 'Restoration',
        description: 'We replace removed materials and restore your property to pre-flood condition.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Contamination Experts',
        description: 'We\'re trained in handling category 3 black water safely, protecting your family and our team.',
      },
      {
        title: 'Complete Sanitation',
        description: 'We don\'t just dry—we sanitize and disinfect to eliminate bacteria and health hazards.',
      },
      {
        title: 'Storm Damage Experience',
        description: 'We\'ve helped hundreds of homeowners recover from floods and storm damage.',
      },
    ],
    commonCauses: [
      'Heavy rain and storms',
      'Flash flooding',
      'River or creek overflow',
      'Storm surge',
      'Dam or levee failure',
      'Rapid snowmelt',
    ],
    warningSigns: [
      'Weather warnings and alerts',
      'Rising water levels nearby',
      'Water seeping under doors',
      'Backed up drains',
      'Saturated ground around foundation',
    ],
    costFactors: [
      'Amount of water and affected area',
      'Water contamination level',
      'Materials requiring removal',
      'Sanitation requirements',
      'Structural damage',
      'Content losses',
    ],
    serviceHighlights: [
      'Category 3 black water certified',
      'EPA-registered antimicrobial treatments',
      'Complete decontamination protocols',
      'Storm damage specialists',
    ],
  },
  
  'sewage-cleanup': {
    slug: 'sewage-cleanup',
    heroSubtitle: 'Safe sewage removal and complete sanitation to protect your health.',
    problemStatement: `Sewage backup is a serious biohazard containing bacteria, viruses, and parasites that pose immediate health risks. Raw sewage can cause infections, gastrointestinal illness, and respiratory problems. This is not a DIY situation—proper protective equipment, containment, and disposal procedures are essential.`,
    solutionOverview: `Sewage cleanup requires specialized training and equipment to protect both occupants and workers. We follow strict protocols for containment, removal, sanitation, and disposal. Every surface that contacted sewage is thoroughly cleaned and disinfected, and we verify safe conditions before you return.`,
    processSteps: [
      {
        title: 'Safety Setup',
        description: 'We establish containment, wear full PPE, and ensure proper ventilation before starting.',
      },
      {
        title: 'Sewage Extraction',
        description: 'Specialized pumps remove sewage and contaminated water safely.',
      },
      {
        title: 'Contaminated Material Removal',
        description: 'All porous materials that absorbed sewage are removed and disposed of properly.',
      },
      {
        title: 'Cleaning & Disinfection',
        description: 'Remaining surfaces are scrubbed and treated with hospital-grade disinfectants.',
      },
      {
        title: 'Odor Treatment',
        description: 'We eliminate sewage odors using enzyme treatments and air scrubbing.',
      },
      {
        title: 'Clearance & Restoration',
        description: 'We verify sanitation levels are safe, then restore affected areas.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Biohazard Certified',
        description: 'Our technicians are certified in biohazard handling and follow strict safety protocols.',
      },
      {
        title: 'Complete Decontamination',
        description: 'We use hospital-grade disinfectants and verify sanitation with testing.',
      },
      {
        title: 'Proper Disposal',
        description: 'All contaminated materials are disposed of according to health regulations.',
      },
    ],
    commonCauses: [
      'Sewer line blockages',
      'Tree root intrusion',
      'Collapsed sewer pipes',
      'Municipal sewer backup',
      'Septic system failure',
      'Heavy rain overwhelming systems',
    ],
    warningSigns: [
      'Multiple drain backups',
      'Gurgling sounds in pipes',
      'Sewage odors',
      'Slow drains throughout house',
      'Wet spots in yard',
      'Toilet bubbles when using sink',
    ],
    costFactors: [
      'Amount of sewage',
      'Affected area size',
      'Materials requiring removal',
      'Extent of contamination',
      'Structural damage',
      'Cause repair (sewer line)',
    ],
    serviceHighlights: [
      'Biohazard and bloodborne pathogen certified',
      'Hospital-grade disinfection',
      'Proper waste disposal',
      'Odor elimination guaranteed',
    ],
  },
  
  'water-leak-repair': {
    slug: 'water-leak-repair',
    heroSubtitle: 'Expert leak detection and repair before major damage occurs.',
    problemStatement: `Hidden water leaks cause more damage than sudden floods because they go unnoticed for weeks or months. A small leak can waste thousands of gallons of water, rot structural members, and create perfect conditions for mold—all while you're unaware. By the time you notice, significant damage has already occurred.`,
    solutionOverview: `We use advanced leak detection technology to find leaks without unnecessary demolition. Thermal imaging, acoustic listening devices, and moisture meters help us pinpoint leak locations precisely. Once found, we repair the leak and address any water damage that's already occurred.`,
    processSteps: [
      {
        title: 'Leak Detection',
        description: 'Using thermal imaging and acoustic equipment, we locate the leak without tearing apart your home.',
      },
      {
        title: 'Access & Repair',
        description: 'We access the leak with minimal damage and make permanent repairs.',
      },
      {
        title: 'Damage Assessment',
        description: 'We evaluate any water damage caused by the leak.',
      },
      {
        title: 'Drying & Remediation',
        description: 'If needed, we dry affected areas and treat for mold prevention.',
      },
      {
        title: 'Restoration',
        description: 'We repair access points and restore affected areas.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Non-Invasive Detection',
        description: 'Advanced technology finds leaks without unnecessary holes in your walls.',
      },
      {
        title: 'Complete Solution',
        description: 'We fix the leak AND any water damage it caused—not just one or the other.',
      },
      {
        title: 'Prevent Future Damage',
        description: 'We identify potential problems and help you prevent future leaks.',
      },
    ],
    commonCauses: [
      'Corroded or aging pipes',
      'High water pressure',
      'Shifting foundation',
      'Temperature changes',
      'Poor installation',
      'Hard water damage',
    ],
    warningSigns: [
      'Unexplained high water bills',
      'Sound of running water when nothing is on',
      'Warm spots on floor (slab leak)',
      'Mold or mildew growth',
      'Cracks in foundation',
      'Low water pressure',
    ],
    costFactors: [
      'Leak location and accessibility',
      'Pipe material and repair method',
      'Water damage extent',
      'Mold remediation needs',
      'Restoration requirements',
    ],
    serviceHighlights: [
      'Thermal imaging leak detection',
      'Acoustic listening equipment',
      'Slab leak specialists',
      'Minimally invasive repairs',
    ],
  },
};

// ===================
// CITY CONTEXT
// ===================
// Local factors that affect restoration work in each city

export interface CityContext {
  slug: string;
  // Local environmental factors
  environmentalFactors: string[];
  // Common property types
  propertyTypes: string[];
  // Local-specific content
  localExpertise: string;
  // Proximity/response info
  proximityStatement: string;
  // Notable neighborhoods with specific issues
  neighborhoodNotes?: Record<string, string>;
}

export const cityContext: Record<string, CityContext> = {
  'carlsbad': {
    slug: 'carlsbad',
    environmentalFactors: [
      'Coastal humidity increases mold risk',
      'Salt air accelerates pipe corrosion',
      'Sandy soil affects foundation drainage',
      'Lagoon proximity in some areas',
    ],
    propertyTypes: [
      'Beachfront and coastal homes',
      'Master-planned communities (La Costa, Aviara)',
      'Older Village properties',
      'Newer Bressi Ranch developments',
    ],
    localExpertise: `As a Carlsbad-based company, we know this city inside and out. From the older homes in Carlsbad Village to the newer developments in Bressi Ranch, we understand the unique challenges each neighborhood faces. Our headquarters location means we can respond faster to Carlsbad emergencies than anyone else.`,
    proximityStatement: `Our headquarters is located right here in Carlsbad at 5674 El Camino Real, allowing us to reach any Carlsbad address within minutes.`,
    neighborhoodNotes: {
      'La Costa': 'Higher-end homes with complex plumbing systems',
      'Carlsbad Village': 'Older properties requiring specialized restoration approaches',
      'Bressi Ranch': 'Newer construction with modern materials',
      'Aviara': 'Luxury properties requiring premium service',
    },
  },
  
  'oceanside': {
    slug: 'oceanside',
    environmentalFactors: [
      'Coastal moisture and salt air exposure',
      'Older infrastructure in historic downtown',
      'Variable terrain affecting drainage',
      'Some flood-prone areas near San Luis Rey River',
    ],
    propertyTypes: [
      'Historic downtown properties',
      'Beachfront homes and condos',
      'Military family housing near Camp Pendleton',
      'Newer inland developments',
    ],
    localExpertise: `Oceanside's mix of historic downtown properties and newer inland developments presents unique restoration challenges. We're experienced with the older plumbing systems in South Oceanside and Downtown, as well as the modern construction in Rancho Del Oro and Fire Mountain.`,
    proximityStatement: `We're just 10 minutes from Oceanside, ensuring rapid response to emergencies throughout the city.`,
    neighborhoodNotes: {
      'Downtown Oceanside': 'Historic properties with aging infrastructure',
      'Fire Mountain': 'Hillside properties with drainage considerations',
      'South Oceanside': 'Older homes near the coast',
    },
  },
  
  'encinitas': {
    slug: 'encinitas',
    environmentalFactors: [
      'High coastal humidity',
      'Bluff erosion affecting some properties',
      'Dense vegetation increases moisture retention',
      'Mix of beach and inland microclimates',
    ],
    propertyTypes: [
      'Beachfront properties',
      'Hillside homes with ocean views',
      'Older downtown Encinitas buildings',
      'Ranch properties in Olivenhain',
    ],
    localExpertise: `Encinitas properties face unique challenges from the coastal environment. From the beach communities of Leucadia to the rural estates in Olivenhain, we understand how the local climate affects water damage and mold growth.`,
    proximityStatement: `Located just minutes away in Carlsbad, we provide fast response times to all Encinitas neighborhoods.`,
    neighborhoodNotes: {
      'Leucadia': 'Eclectic mix of older beach cottages and newer construction',
      'Cardiff': 'Coastal properties with high humidity exposure',
      'Olivenhain': 'Larger rural properties with well water systems',
    },
  },
  
  'vista': {
    slug: 'vista',
    environmentalFactors: [
      'Inland climate with temperature extremes',
      'Some areas have older infrastructure',
      'Varied soil conditions affecting foundations',
      'Less humidity than coastal cities',
    ],
    propertyTypes: [
      'Established neighborhoods with mature homes',
      'Newer developments in east Vista',
      'Agricultural properties',
      'Commercial/industrial buildings',
    ],
    localExpertise: `Vista's established neighborhoods include many homes built in the 1960s-80s with plumbing systems that may be approaching end of life. We're experienced with the common water damage issues these older Vista homes face.`,
    proximityStatement: `We reach Vista properties quickly from our Carlsbad location, typically arriving within 30 minutes.`,
  },
  
  'san-marcos': {
    slug: 'san-marcos',
    environmentalFactors: [
      'Inland valley location',
      'Hot summers stress plumbing systems',
      'Mix of flat and hillside terrain',
      'Lake San Marcos area has unique moisture considerations',
    ],
    propertyTypes: [
      'San Elijo Hills planned community',
      'Lake San Marcos waterfront homes',
      'Established neighborhoods',
      'Student housing near university',
    ],
    localExpertise: `San Marcos has grown rapidly, and we've grown with it. From the newer homes in San Elijo Hills to the established neighborhoods near downtown, we provide restoration services throughout the city.`,
    proximityStatement: `San Marcos is a quick 15-minute drive from our Carlsbad headquarters, allowing fast emergency response.`,
  },
  
  'solana-beach': {
    slug: 'solana-beach',
    environmentalFactors: [
      'Intense coastal exposure',
      'Bluff-top properties face erosion',
      'High property values require premium service',
      'Salt air accelerates material degradation',
    ],
    propertyTypes: [
      'Luxury beachfront homes',
      'Bluff-top properties',
      'High-end condominiums',
      'Smaller beach cottages',
    ],
    localExpertise: `Solana Beach properties demand the highest level of care. We understand that our clients here expect premium service and attention to detail. Our team is experienced with high-end finishes and materials common in Solana Beach homes.`,
    proximityStatement: `Just south of our Carlsbad location, we reach Solana Beach quickly and provide the premium service these properties deserve.`,
  },
  
  'rancho-santa-fe': {
    slug: 'rancho-santa-fe',
    environmentalFactors: [
      'Rural estate properties',
      'Private water systems and wells',
      'Extensive landscaping affects drainage',
      'Wildfire risk in some areas',
    ],
    propertyTypes: [
      'Luxury estates on large lots',
      'Historic covenant properties',
      'Equestrian properties',
      'Gated community homes',
    ],
    localExpertise: `Rancho Santa Fe estates require discretion and premium service. We're experienced with large properties, complex systems, and the high standards expected in this community. Our team handles projects with professionalism and confidentiality.`,
    proximityStatement: `We provide dedicated service to Rancho Santa Fe, understanding that these properties require specialized attention.`,
  },
  
  'bressi-ranch': {
    slug: 'bressi-ranch',
    environmentalFactors: [
      'Newer construction with modern materials',
      'HOA communities with specific requirements',
      'Good drainage infrastructure',
    ],
    propertyTypes: [
      'Modern single-family homes',
      'Townhomes and condominiums',
      'New construction',
    ],
    localExpertise: `Bressi Ranch is one of our closest service areas, just minutes from our headquarters. We know these newer communities well and respond quickly to any water damage or restoration needs.`,
    proximityStatement: `Bressi Ranch is literally in our backyard—we can be on-site within minutes of your call.`,
  },
};

// ===================
// FAQ TEMPLATES
// ===================
// Dynamic FAQ generation functions

export function generateServiceCityFAQs(
  serviceName: string,
  serviceSlug: string,
  cityName: string,
  citySlug: string,
  neighborhoods: string[] = []
): { question: string; answer: string }[] {
  const neighborhoodList = neighborhoods.length > 0 
    ? neighborhoods.slice(0, 3).join(', ') 
    : '';
  
  const baseFAQs = [
    {
      question: `How quickly can you respond to ${serviceName.toLowerCase()} emergencies in ${cityName}?`,
      answer: `We guarantee 60-minute response times to ${cityName} for all emergency ${serviceName.toLowerCase()} calls. Our team is available 24 hours a day, 7 days a week, including holidays. As a locally-based company, we can reach any ${cityName} address quickly.`,
    },
    {
      question: `What areas of ${cityName} do you serve for ${serviceName.toLowerCase()}?`,
      answer: `We provide ${serviceName.toLowerCase()} services throughout all of ${cityName}${neighborhoodList ? `, including ${neighborhoodList}, and all surrounding neighborhoods` : ''}. No matter where you're located in ${cityName}, we can help.`,
    },
    {
      question: `Do you work with insurance for ${serviceName.toLowerCase()} in ${cityName}?`,
      answer: `Yes, we work with all major insurance carriers and have extensive experience with ${serviceName.toLowerCase()} claims. We document all damage thoroughly, communicate directly with your insurance adjuster, and help maximize your claim. Many ${cityName} homeowners pay little or nothing out of pocket.`,
    },
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${cityName}?`,
      answer: `${serviceName} costs vary based on the extent of damage, affected materials, and work required. We provide free on-site assessments and detailed estimates before any work begins. Most ${cityName} homeowners use their insurance to cover ${serviceName.toLowerCase()} costs.`,
    },
    {
      question: `Are your ${serviceName.toLowerCase()} technicians certified?`,
      answer: `Yes, all our technicians are IICRC certified and undergo continuous training. The IICRC (Institute of Inspection, Cleaning and Restoration Certification) sets the standard for the restoration industry, and we maintain the highest certifications for ${serviceName.toLowerCase()}.`,
    },
  ];
  
  return baseFAQs;
}
