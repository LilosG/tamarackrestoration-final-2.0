/**
 * City + Service Unique Content
 * ==============================
 * Truly unique intros, FAQs, and local context for every city+service money page.
 * Eliminates templated content and provides genuine local SEO value.
 *
 * KEY RULE: Zero duplicate sentences across different cities for the same service,
 * and zero duplicate sentences across different services for the same city.
 */

export interface CityServiceFAQ {
  question: string;
  answer: string;
}

export interface CityServiceContent {
  /** Unique H1 — not just "Service in City" */
  uniqueH1: string;
  /** 3-4 sentence intro with local specifics: neighborhoods, climate, proof points */
  uniqueIntro: string;
  /** "Understanding [Service] in [City]" — 2-3 paragraphs on local challenges */
  localChallenges: string;
  /** City+service proof point, e.g. "150+ Carlsbad mold projects" */
  localProof: string;
  /** 5-6 contextually unique FAQs */
  faqs: CityServiceFAQ[];
  /** Neighborhoods with service-specific relevance */
  neighborhoodContext: {
    name: string;
    detail: string;
  }[];
  /** Local landmarks for entity signals */
  landmarks: string[];
  /** Estimated project count for this city+service */
  projectCount: string;
  /** Average response time to this city */
  avgResponseTime: string;
}

export const cityServiceContent: Record<string, CityServiceContent> = {

  // ============================================================
  // CARLSBAD — WATER DAMAGE RESTORATION
  // ============================================================
  'carlsbad-water-damage-restoration': {
    uniqueH1: 'Water Damage Restoration in Carlsbad — 60-Minute Local Response',
    uniqueIntro: `Carlsbad homes face water damage risks year-round, from aging supply lines in Carlsbad Village bungalows to burst washing-machine hoses in newer La Costa developments. Because our headquarters sits on El Camino Real less than two miles from the Carlsbad city center, we consistently arrive on-scene faster than any competitor — averaging 38 minutes to most Carlsbad ZIP codes. Since 2014, Tamarack Restoration has completed more than 200 water damage projects across Carlsbad, restoring everything from single-room kitchen floods to whole-home slab-leak disasters in Aviara and Rancho Carrillo.`,
    localChallenges: `Carlsbad's coastal location creates a unique combination of water damage risks that inland cities rarely face. Salt-laden ocean air corrodes copper supply lines at an accelerated rate, particularly in homes west of El Camino Real in Olde Carlsbad and the Village, where original plumbing from the 1960s and 1970s is still in service. We regularly find pinhole leaks in these neighborhoods that have been seeping behind walls for weeks before homeowners notice the damage.

In the master-planned communities east of I-5 — La Costa, Aviara, and Rancho Carrillo — the risks shift toward appliance failures and HVAC condensation. Homes in these neighborhoods often have multiple stories with bathrooms above living areas, meaning a second-floor toilet overflow or failed shower pan can cascade water through ceilings and walls before anyone realizes there is a problem. Bressi Ranch homes, though newer in construction, are not immune; we have responded to several water heater failures in this community where tank corrosion went undetected during routine inspections.

The Batiquitos Lagoon and Buena Vista Lagoon also raise the water table in adjacent neighborhoods, making foundation seepage a recurring issue during wet winters. Homes near Cannon Road and along Batiquitos Drive often require post-storm moisture assessments to catch water infiltration early.`,
    localProof: 'Over 200 water damage restoration projects completed in Carlsbad since 2014, with a 4.9-star average rating from Carlsbad homeowners.',
    projectCount: '200+',
    avgResponseTime: '38 minutes',
    landmarks: ['Carlsbad Village', 'LEGOLAND California', 'The Flower Fields', 'Batiquitos Lagoon', 'Carlsbad Premium Outlets'],
    neighborhoodContext: [
      { name: 'Carlsbad Village & Olde Carlsbad', detail: 'Older plumbing in 1960s-70s homes makes pinhole leaks and supply-line failures our most common call in this area.' },
      { name: 'La Costa', detail: 'Multi-story luxury homes with complex plumbing — second-floor bath overflows and failed shower pans are frequent causes of ceiling and wall damage.' },
      { name: 'Aviara', detail: 'High-end finishes in Aviara homes demand careful extraction and drying to protect hardwood floors, custom cabinetry, and integrated smart-home systems.' },
      { name: 'Bressi Ranch', detail: 'Newer construction does not eliminate risk — we see water heater failures and HVAC condensation leaks regularly in this community.' },
      { name: 'Rancho Carrillo', detail: 'Hillside grading in Rancho Carrillo can direct storm runoff toward foundations, causing basement and garage flooding during heavy rain events.' },
      { name: 'Calavera Hills', detail: 'Mature landscaping and clay soils in Calavera Hills contribute to foundation moisture issues, especially in homes with older drainage systems.' },
    ],
    faqs: [
      {
        question: 'How fast can Tamarack reach my Carlsbad home for a water emergency?',
        answer: 'Our headquarters is located on El Camino Real in Carlsbad, so we average 38-minute arrival times to most Carlsbad addresses. Properties in Carlsbad Village and Bressi Ranch typically see us within 25 minutes because of our proximity. We dispatch trucks 24 hours a day, 7 days a week, including holidays — just call (760) 500-2211.',
      },
      {
        question: 'Why do older Carlsbad Village homes have more water damage issues?',
        answer: 'Many homes in Carlsbad Village and Olde Carlsbad were built in the 1960s and 1970s with copper supply lines that are now 50-60 years old. Carlsbad\'s salt air accelerates corrosion on these pipes, causing pinhole leaks that seep behind walls silently. We recommend annual plumbing inspections for any Carlsbad home with original copper piping.',
      },
      {
        question: 'Will my insurance cover water damage restoration in Carlsbad?',
        answer: 'Most homeowner policies cover sudden and accidental water damage — burst pipes, appliance failures, and supply-line breaks are typically covered. Gradual leaks that were ignored may be denied. We work directly with all major carriers serving Carlsbad, including State Farm, USAA, and Farmers, handling documentation and adjuster coordination so you can focus on your family.',
      },
      {
        question: 'What should I do if my Carlsbad home floods while I am away?',
        answer: 'Carlsbad has a large number of seasonal and vacation properties, especially near the coast. If you return to find water damage, do not turn on the HVAC system — this can spread moisture and mold through ductwork. Shut off the main water valve, call us immediately at (760) 500-2211, and we will begin emergency extraction. The sooner we start, the more flooring, drywall, and personal belongings we can save.',
      },
      {
        question: 'How long does water damage restoration take for a typical Carlsbad home?',
        answer: 'A single-room incident — such as a kitchen sink overflow — usually takes 3-4 days to fully dry and restore. Larger events involving multiple rooms or slab leaks can take 7-10 days for drying alone, plus additional time for repairs. We set up commercial dehumidifiers and air movers, then take daily moisture readings until readings hit target levels. Every Carlsbad project gets a detailed timeline during our initial assessment.',
      },
      {
        question: 'Do you handle water damage from slab leaks in Carlsbad?',
        answer: 'Absolutely. Slab leaks are one of the most common causes of water damage in Carlsbad, especially in La Costa and Calavera Hills where the soil conditions place extra stress on under-slab plumbing. We use thermal imaging and acoustic detection to locate the leak precisely, then coordinate the plumbing repair alongside our water damage restoration so you deal with one company, not three.',
      },
    ],
  },

  // ============================================================
  // CARLSBAD — MOLD REMOVAL
  // ============================================================
  'carlsbad-mold-removal': {
    uniqueH1: 'Mold Remediation in Carlsbad — Coastal Climate Specialists',
    uniqueIntro: `Carlsbad's proximity to the Pacific Ocean means homes here battle higher humidity levels than properties just a few miles inland, creating ideal year-round conditions for mold colonization. Neighborhoods like La Costa and Aviara, where ocean moisture pushes average indoor humidity above 60 percent during summer months, are especially prone. Tamarack Restoration has completed over 150 mold remediation projects in Carlsbad since 2014, with IICRC-certified technicians who understand exactly how North County's coastal climate drives mold growth patterns. We provide 60-minute emergency response to all Carlsbad ZIP codes — 92008, 92009, 92010, and 92011.`,
    localChallenges: `Carlsbad's coastal humidity is the single largest driver of residential mold growth in the city. While San Diego County averages around 50 percent relative humidity, oceanfront neighborhoods in Olde Carlsbad and Carlsbad Village regularly exceed 65 percent, particularly during the marine layer season from May through September. Bathrooms, laundry rooms, and poorly ventilated attic spaces in these areas become prime breeding grounds for Aspergillus, Cladosporium, and Stachybotrys — the notorious "black mold" that triggers serious respiratory symptoms.

In the master-planned communities of La Costa and Aviara, the mold risk profile is different but equally persistent. These larger homes often have complex HVAC systems with extensive ductwork running through unconditioned attic spaces. When cool, conditioned air meets warm attic air at duct joints, condensation forms — and that hidden moisture feeds mold colonies that can spread for months before anyone detects a musty odor in the living spaces below.

Carlsbad Village presents its own mold challenge. Older construction in the Village often lacks modern vapor barriers and adequate ventilation. We routinely find mold behind original plaster walls and beneath hardwood floors in homes built before 1980. These remediation projects require extra care to preserve the character of these properties while eliminating every trace of contamination.`,
    localProof: 'Over 150 mold remediation projects completed across Carlsbad neighborhoods including La Costa, Aviara, and the Village — with post-remediation clearance testing passed on the first attempt in 97% of projects.',
    projectCount: '150+',
    avgResponseTime: '35 minutes',
    landmarks: ['Carlsbad Village', 'Batiquitos Lagoon', 'Buena Vista Lagoon', 'LEGOLAND California', 'The Flower Fields'],
    neighborhoodContext: [
      { name: 'Carlsbad Village & Olde Carlsbad', detail: 'Homes built before 1980 often lack vapor barriers and modern ventilation, making hidden mold behind plaster walls and under original hardwood floors a recurring finding.' },
      { name: 'La Costa', detail: 'Complex HVAC systems in large La Costa homes create condensation at duct joints in unconditioned attics — a hidden moisture source that feeds mold colonies for months before detection.' },
      { name: 'Aviara', detail: 'High-end Aviara properties near the Four Seasons often have wine cellars, bonus rooms, and below-grade spaces where humidity accumulates and mold takes hold without visible signs.' },
      { name: 'Bressi Ranch', detail: 'Newer Bressi Ranch homes have tighter building envelopes, which improves energy efficiency but can trap indoor moisture if bathroom exhaust fans are undersized or vented into attic spaces.' },
      { name: 'Calavera Hills', detail: 'Properties backing to natural open space in Calavera Hills experience elevated outdoor spore counts, increasing the risk of indoor colonization whenever windows are left open.' },
    ],
    faqs: [
      {
        question: 'Why is mold so common in Carlsbad compared to inland cities?',
        answer: 'Carlsbad\'s ocean proximity keeps relative humidity 10-15 percent higher than cities like Vista or San Marcos, especially during the marine layer season from May through September. Mold spores need moisture above 60 percent to colonize, and many Carlsbad homes — particularly in Olde Carlsbad and the Village — exceed that threshold for months at a time. This is why we see roughly twice the mold remediation volume in Carlsbad as we do in comparable inland areas.',
      },
      {
        question: 'How do you handle mold in older Carlsbad Village homes without destroying the character?',
        answer: 'Carlsbad Village has some of the most charming older homes in North County, and we take preservation seriously. Our technicians use targeted containment and HEPA-filtered negative air to isolate work areas, then carefully remove mold from plaster, lath, and original hardwood without unnecessary demolition. When materials must be replaced, we match existing profiles and finishes as closely as possible. We have completed dozens of Village remediation projects while maintaining the homes\' historic character.',
      },
      {
        question: 'Can mold in my Carlsbad home make my family sick?',
        answer: 'Yes. Mold produces allergens, irritants, and in some cases mycotoxins that can cause respiratory symptoms, skin rashes, headaches, and aggravated asthma. In Carlsbad, where homes are often closed up with air conditioning running, mold spores circulate through HVAC systems and affect every room. Children, elderly family members, and anyone with respiratory conditions are particularly vulnerable. If you notice musty odors or unexplained allergy symptoms, schedule a professional inspection immediately.',
      },
      {
        question: 'What does mold remediation cost for a typical Carlsbad home?',
        answer: 'Costs depend on the size of the affected area, the type of materials involved, and whether the moisture source requires repair. A contained bathroom mold issue in a Carlsbad home typically runs $1,500-$3,500. Larger projects involving multiple rooms, attic spaces, or HVAC system contamination can range from $5,000-$15,000. We provide free on-site assessments with detailed written estimates, and most Carlsbad homeowners use insurance to cover mold remediation when it stems from a covered water event.',
      },
      {
        question: 'Do you test for mold before and after remediation in Carlsbad?',
        answer: 'We always recommend pre-remediation testing to identify mold species and establish baseline spore counts. After remediation is complete, we perform post-remediation clearance testing — an independent air-quality assessment that verifies spore levels have returned to normal. In Carlsbad, where ambient outdoor spore counts are elevated due to coastal vegetation and humidity, our technicians calibrate clearance thresholds to local conditions rather than generic national standards.',
      },
      {
        question: 'How can I prevent mold from returning in my Carlsbad home?',
        answer: 'In Carlsbad\'s coastal climate, prevention requires active humidity management. We recommend keeping indoor relative humidity below 50 percent using dehumidifiers, ensuring all bathroom exhaust fans vent to the exterior rather than into the attic, and running HVAC fans periodically to circulate air through the home. For La Costa and Aviara homes with complex ductwork, annual HVAC inspections that include checking duct joints for condensation are essential. We provide every Carlsbad client with a customized prevention plan after remediation.',
      },
    ],
  },

};

/**
 * Retrieve unique content for a city+service combination.
 * Returns null if no unique content exists yet (allows graceful fallback).
 */
export function getCityServiceContent(citySlug: string, serviceSlug: string): CityServiceContent | null {
  const key = `${citySlug}-${serviceSlug}`;
  return cityServiceContent[key] || null;
}
