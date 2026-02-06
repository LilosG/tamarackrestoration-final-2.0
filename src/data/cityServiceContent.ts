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
  // CARLSBAD — FIRE DAMAGE RESTORATION
  // ============================================================
  'carlsbad-fire-damage-restoration': {
    uniqueH1: 'Fire & Smoke Damage Restoration in Carlsbad — Full Recovery Services',
    uniqueIntro: `When fire strikes a Carlsbad home, the damage extends far beyond the flames — smoke infiltrates HVAC ductwork, soot bonds to surfaces within hours, and water from firefighting efforts saturates walls and ceilings. Tamarack Restoration has guided over 75 Carlsbad families through complete fire recovery since 2014, from the initial board-up through final reconstruction. Our Carlsbad headquarters means we arrive for emergency securing faster than any regional competitor, typically within 40 minutes of the Carlsbad Fire Department clearing the scene.`,
    localChallenges: `Carlsbad's mix of housing stock creates distinct fire damage patterns depending on the neighborhood. In Carlsbad Village and Olde Carlsbad, older wood-frame construction from the 1960s and 1970s burns faster and produces dense structural char that requires complete framing replacement. These homes also lack the fire-resistant materials mandated in newer building codes, meaning fire spreads more rapidly through walls and attic spaces. Our Village restoration projects often involve careful structural engineering to preserve the home's footprint while rebuilding to current code.

The master-planned communities of La Costa and Aviara present different restoration challenges. Modern open floor plans allow smoke to travel throughout the entire home within minutes, contaminating rooms far from the fire's origin. We commonly see kitchen fires in these neighborhoods — a grease flare-up or oven malfunction — that cause relatively minor flame damage but fill every room with soot and smoke residue. HVAC systems in these larger homes distribute smoke particles into ductwork, requiring complete duct cleaning or replacement as part of the restoration.

Bressi Ranch and Rancho Carrillo homes, built with modern fire-resistant materials, generally sustain less structural damage from equivalent fires. However, their engineered wood products and composite materials can off-gas toxic compounds when heated, requiring specialized air-quality testing and remediation. Additionally, the proximity of properties in these planned communities means a fire in one home can cause smoke damage to neighboring properties, and we frequently handle multi-home smoke restoration projects in these areas.`,
    localProof: 'Over 75 fire damage restoration projects completed in Carlsbad, including full kitchen rebuilds in La Costa and whole-home smoke remediation in Aviara and the Village.',
    projectCount: '75+',
    avgResponseTime: '40 minutes',
    landmarks: ['Carlsbad Village', 'LEGOLAND California', 'Carlsbad Fire Station 1', 'The Flower Fields', 'Batiquitos Lagoon'],
    neighborhoodContext: [
      { name: 'Carlsbad Village & Olde Carlsbad', detail: 'Older wood-frame homes burn faster and require complete framing replacement — our restoration projects here balance code compliance with preserving the home\'s original character.' },
      { name: 'La Costa', detail: 'Open floor plans in La Costa homes allow smoke to spread rapidly. Kitchen fires are our most frequent call, with smoke contaminating every room and the HVAC system.' },
      { name: 'Aviara', detail: 'High-end finishes in Aviara — hardwood, marble, custom cabinetry — require specialized cleaning techniques. We use dry-chem sponges and ultrasonic cleaning to save premium materials.' },
      { name: 'Bressi Ranch', detail: 'Newer construction resists flame spread but engineered materials off-gas when heated. Air-quality testing is standard for every Bressi Ranch fire project.' },
      { name: 'Rancho Carrillo', detail: 'Close-proximity homes in Rancho Carrillo mean a fire in one property often causes smoke damage to neighbors. We coordinate multi-home restoration efficiently.' },
    ],
    faqs: [
      {
        question: 'What should I do immediately after a fire in my Carlsbad home?',
        answer: 'First, ensure the Carlsbad Fire Department has cleared the property for re-entry. Do not try to clean soot yourself — improper wiping bonds soot permanently into surfaces. Call Tamarack at (760) 500-2211 and we will arrive within 40 minutes to board up openings, tarp the roof if needed, and begin emergency stabilization. Time is critical: soot begins permanently etching metal fixtures and countertops within 24-48 hours.',
      },
      {
        question: 'How long does fire damage restoration take in a typical Carlsbad home?',
        answer: 'Timeline varies significantly based on damage extent. A contained kitchen fire with smoke spread typically takes 3-6 weeks for complete restoration. A fire affecting multiple rooms or structural elements can take 3-6 months, including reconstruction. We create a detailed project timeline during our initial assessment and update Carlsbad homeowners weekly throughout the process.',
      },
      {
        question: 'Can you save smoke-damaged furniture and personal items in my Carlsbad home?',
        answer: 'In many cases, yes. We operate content restoration services including ultrasonic cleaning for hard goods, ozone treatment for fabrics, and specialized document and photo recovery. For Carlsbad clients, we provide on-site pack-out services, inventorying and transporting salvageable items to our climate-controlled facility for cleaning and storage while restoration work proceeds.',
      },
      {
        question: 'Will my insurance cover fire restoration in Carlsbad?',
        answer: 'Fire damage is one of the most comprehensively covered perils in homeowner policies. Coverage typically includes structural repairs, smoke and soot cleanup, content restoration, and additional living expenses while your Carlsbad home is being restored. We work directly with all major carriers serving Carlsbad — State Farm, USAA, Allstate, Farmers, and Liberty Mutual — handling the extensive documentation that fire claims require.',
      },
      {
        question: 'Do you handle the reconstruction after fire damage, or just the cleanup?',
        answer: 'We provide complete fire restoration from start to finish — emergency board-up, smoke and soot removal, water extraction from firefighting, odor elimination, and full reconstruction. Carlsbad homeowners work with a single project manager throughout the entire process. We handle permits, coordinate with Carlsbad building inspectors, and rebuild to current code while matching your home\'s original style.',
      },
      {
        question: 'How do you eliminate smoke odor from a Carlsbad home?',
        answer: 'Smoke odor requires a multi-step approach because smoke particles penetrate porous materials at a molecular level. We use thermal fogging to reach the same spaces smoke reached, hydroxyl generators for continuous air treatment, and ozone shock treatment for severe cases. In Carlsbad coastal homes, we pay special attention to HVAC systems where smoke residue mixes with salt-air deposits in ductwork, creating persistent odor sources that basic cleaning misses.',
      },
    ],
  },

  // ============================================================
  // CARLSBAD — FLOOD CLEANUP
  // ============================================================
  'carlsbad-flood-cleanup': {
    uniqueH1: 'Flood Cleanup in Carlsbad — Storm & Flash Flood Recovery',
    uniqueIntro: `Carlsbad's drainage infrastructure handles most rainfall well, but heavy winter storms and atmospheric river events can overwhelm systems — particularly in low-lying areas near Buena Vista Lagoon, Batiquitos Lagoon, and along Agua Hedionda Creek. Tamarack Restoration has responded to over 85 flood emergencies in Carlsbad since 2014, including the major January 2023 atmospheric river that flooded garages and ground-floor rooms across multiple neighborhoods. Our Carlsbad headquarters puts us on-scene within 30 minutes of your call, with truck-mounted extractors capable of removing thousands of gallons per hour.`,
    localChallenges: `Carlsbad's geography creates predictable flood risk zones that our team knows intimately. The Buena Vista Lagoon watershed, running through Olde Carlsbad and connecting to Buena Vista Creek, backs up during sustained heavy rainfall and sends water into adjacent residential streets. Properties along Jefferson Street and near the lagoon outlet have experienced repeat flooding, and homeowners in this area should have a relationship with a restoration company before storm season begins.

The Batiquitos Lagoon corridor on Carlsbad's south side presents similar risks. Homes along Batiquitos Drive and in the La Costa Valley area sit in a natural drainage path. During high-tide storm events, lagoon water levels rise simultaneously with storm runoff, creating a backflow effect that can push water into garages and lower-level living spaces. We've completed dozens of post-storm restorations in this corridor over the past decade.

Inland Carlsbad neighborhoods — Calavera Hills, Rancho Carrillo, and parts of La Costa — face flash-flood risk from hillside runoff rather than coastal flooding. Graded slopes can channel enormous volumes of water toward downhill properties during intense rain bursts, overwhelming landscape drains and sending water against foundations. Older drainage systems in Calavera Hills are particularly prone to this, and we see foundation-level flooding there during nearly every significant storm.`,
    localProof: 'Over 85 flood cleanup projects in Carlsbad, including multi-home response during the January 2023 atmospheric river event. Average time from call to water extraction: 38 minutes.',
    projectCount: '85+',
    avgResponseTime: '30 minutes',
    landmarks: ['Buena Vista Lagoon', 'Batiquitos Lagoon', 'Agua Hedionda Creek', 'Carlsbad Village', 'LEGOLAND California'],
    neighborhoodContext: [
      { name: 'Olde Carlsbad & Buena Vista Lagoon Area', detail: 'Properties near Jefferson Street and the lagoon outlet experience repeat flooding during sustained rain — the Buena Vista Creek watershed backs up and overflows into residential streets.' },
      { name: 'La Costa Valley & Batiquitos Corridor', detail: 'Homes along Batiquitos Drive sit in a natural drainage path. High-tide storm events create backflow that pushes water into garages and ground-floor rooms.' },
      { name: 'Calavera Hills', detail: 'Hillside runoff overwhelms older landscape drains during heavy bursts, sending water against downhill foundations. We respond to foundation flooding here during nearly every major storm.' },
      { name: 'Rancho Carrillo', detail: 'Graded slopes channel runoff toward lower properties. Homes at the bottom of Rancho Carrillo\'s hills need functioning French drains and sump systems to prevent repeat flooding.' },
      { name: 'Bressi Ranch', detail: 'Newer infrastructure handles typical storms well, but record rainfall events have still caused garage flooding where community storm drains reach capacity.' },
    ],
    faqs: [
      {
        question: 'Which Carlsbad neighborhoods are most prone to flooding?',
        answer: 'Areas near Buena Vista Lagoon in Olde Carlsbad, the Batiquitos corridor in south Carlsbad, and hillside-adjacent homes in Calavera Hills and Rancho Carrillo see the most flood calls during storms. Properties on Jefferson Street, Batiquitos Drive, and at the base of graded slopes in La Costa Valley are repeat flood zones. If you live in any of these areas, we recommend pre-season preparation including drain maintenance and sump pump testing.',
      },
      {
        question: 'Is flood water in Carlsbad dangerous?',
        answer: 'Yes. Flood water in Carlsbad often picks up contaminants from lagoon sediment, agricultural runoff, street debris, and sewage system overflow. The Buena Vista and Batiquitos lagoon waters carry bacteria levels that make any contact a health concern. All flood water is treated as Category 2 or Category 3 contamination, meaning we use full protective equipment and EPA-registered antimicrobial treatments during cleanup. Porous materials that absorb flood water — carpet, drywall, insulation — must be removed and replaced.',
      },
      {
        question: 'Does homeowner insurance cover flood damage in Carlsbad?',
        answer: 'Standard homeowner policies do not cover flood damage — you need a separate flood policy through the National Flood Insurance Program or a private flood insurer. This catches many Carlsbad homeowners off guard because properties outside FEMA-designated flood zones still flood during extreme events. If you have flood insurance, we work directly with NFIP adjusters and meet their specific documentation requirements. If you do not have flood insurance, we provide detailed cost estimates and flexible scheduling.',
      },
      {
        question: 'How quickly can you start flood cleanup at my Carlsbad property?',
        answer: 'Our Carlsbad headquarters means we can have truck-mounted extractors running at your property within 30 minutes of your call. During major storm events, we pre-position crews and equipment throughout Carlsbad to ensure rapid response even when call volume spikes. Every hour flood water sits increases damage exponentially, so we prioritize getting extraction started immediately — we can complete the full assessment while pumps are already running.',
      },
      {
        question: 'What does flood cleanup in a Carlsbad home involve?',
        answer: 'Flood cleanup is more intensive than standard water damage restoration because of contamination. We start with rapid water extraction using truck-mounted pumps. Then we remove all porous materials that absorbed flood water — carpet, padding, lower drywall sections, and insulation. All remaining surfaces are scrubbed with antimicrobial solutions and disinfected. We then set up commercial drying equipment and monitor moisture levels daily until the structure reaches target dryness. Only then do we begin reconstruction of removed materials.',
      },
    ],
  },

  // ============================================================
  // CARLSBAD — SEWAGE CLEANUP
  // ============================================================
  'carlsbad-sewage-cleanup': {
    uniqueH1: 'Sewage Cleanup in Carlsbad — Biohazard Certified Response',
    uniqueIntro: `Sewage backups in Carlsbad homes require immediate professional intervention — raw sewage carries bacteria, viruses, and parasites that pose serious health risks within hours of exposure. Tamarack Restoration has handled over 60 sewage emergencies across Carlsbad since 2014, from backed-up lateral lines in Carlsbad Village to main sewer failures affecting multiple homes in La Costa. Our biohazard-certified technicians arrive in full PPE within 35 minutes, equipped to contain, extract, sanitize, and restore your property safely.`,
    localChallenges: `Carlsbad's sewer infrastructure varies dramatically by neighborhood age, creating different risk profiles across the city. In Carlsbad Village and Olde Carlsbad, clay sewer laterals installed in the 1960s and 1970s are highly susceptible to tree-root intrusion. Mature landscaping throughout the Village sends roots toward sewer lines seeking moisture, and we see a spike in sewage backup calls every fall when root growth is most aggressive. Homes on streets lined with large ficus or eucalyptus trees are particularly vulnerable.

La Costa and Aviara face a different sewage risk: their longer lateral runs from home to street main create more potential failure points. These laterals often travel 50-80 feet from the home's foundation to the city connection, passing under driveways and landscaping. Bellied pipes — sections that sag and collect waste — develop over time as soil settles beneath these long runs. We have responded to numerous La Costa sewage emergencies caused by bellied laterals that slowly worsened over years before failing completely.

During heavy rainstorms, Carlsbad's municipal sewer system can experience capacity surges that cause backups through floor drains and lower-level fixtures. Properties at lower elevations in the sewer grid — particularly in areas near Agua Hedionda and along Carlsbad Boulevard — are most susceptible. A backwater valve can prevent this type of backup, and we recommend installation for every Carlsbad home that has experienced even a minor backup during storms.`,
    localProof: 'Over 60 sewage cleanup projects in Carlsbad, with biohazard-certified technicians who follow strict containment and decontamination protocols for every project.',
    projectCount: '60+',
    avgResponseTime: '35 minutes',
    landmarks: ['Carlsbad Village', 'Carlsbad Boulevard', 'Agua Hedionda', 'Buena Vista Lagoon', 'LEGOLAND California'],
    neighborhoodContext: [
      { name: 'Carlsbad Village & Olde Carlsbad', detail: 'Clay sewer laterals from the 1960s-70s are highly prone to tree-root intrusion. Mature ficus and eucalyptus trees along Village streets aggressively invade sewer lines, causing annual backup spikes each fall.' },
      { name: 'La Costa', detail: 'Long lateral runs of 50-80 feet create multiple potential failure points. Bellied pipe sections develop as soil settles under driveways and landscaping, trapping waste until the line fails completely.' },
      { name: 'Aviara', detail: 'Premium properties with complex plumbing demand careful sewage extraction to protect high-end flooring and finishes. We use targeted extraction and rapid antimicrobial treatment to minimize material replacement.' },
      { name: 'Carlsbad Boulevard Area', detail: 'Lower-elevation properties near the coast are vulnerable to municipal sewer surges during storms. Backwater valve installation is essential for homes in this area.' },
      { name: 'Calavera Hills', detail: 'Established homes with aging lateral lines and mature trees face the same root-intrusion risks as the Village. Regular sewer camera inspections can catch problems before they become emergencies.' },
    ],
    faqs: [
      {
        question: 'How dangerous is a sewage backup in my Carlsbad home?',
        answer: 'Sewage contains E. coli, Salmonella, hepatitis, and parasites that can cause serious illness within hours of exposure. Children, elderly household members, and anyone with compromised immunity are at highest risk. Do not attempt to clean sewage yourself — the risk of pathogen exposure without proper PPE and containment is significant. Call Tamarack at (760) 500-2211 and keep family members and pets away from affected areas until our certified crew arrives.',
      },
      {
        question: 'Why are sewage backups common in Carlsbad Village?',
        answer: 'Carlsbad Village homes built in the 1960s-70s have clay sewer laterals that deteriorate and develop cracks over time. The mature trees lining Village streets — particularly ficus and eucalyptus species — send roots toward these cracked lines seeking moisture. Once roots enter the pipe, they grow rapidly and create blockages that cause sewage to back up into the home. We see a reliable spike in Village sewage calls each fall during peak root-growth season.',
      },
      {
        question: 'What does sewage cleanup cost in Carlsbad?',
        answer: 'Costs depend on the volume of sewage, the area affected, and the materials that need replacement. A contained backup affecting a single bathroom typically costs $2,000-$5,000 for extraction, decontamination, and material replacement. A major backup flooding multiple rooms can range from $8,000-$20,000. Many Carlsbad homeowners have sewer backup endorsements on their insurance policies that cover these costs — we help you verify coverage and coordinate the claim.',
      },
      {
        question: 'Can my Carlsbad home be safe to live in after a sewage backup?',
        answer: 'Yes, but only after professional decontamination. We remove all porous materials that absorbed sewage — carpet, padding, lower sections of drywall, and insulation. Hard surfaces are scrubbed with hospital-grade disinfectants, and we apply antimicrobial treatments to framing and subfloors. After drying, we conduct clearance testing to verify bacteria levels are within safe limits before any Carlsbad family re-occupies affected areas.',
      },
      {
        question: 'How can I prevent sewage backups in my Carlsbad home?',
        answer: 'For Village and Calavera Hills homes with older laterals, annual sewer camera inspections catch root intrusion and bellied sections before they cause backups. For all Carlsbad homes, we recommend installing a backwater valve on your main sewer line to prevent municipal system surges from entering your home during storms. Avoid flushing anything other than waste and toilet paper, and never pour grease down drains — grease buildup is the second most common cause of Carlsbad residential sewer backups after root intrusion.',
      },
      {
        question: 'Do you repair the sewer line that caused the backup, or just clean up?',
        answer: 'We focus on the cleanup, decontamination, and interior restoration. For the sewer line repair itself, we coordinate with trusted licensed plumbers in Carlsbad who specialize in lateral replacement and trenchless pipe relining. This ensures you have one point of contact — us — managing both the restoration and the root-cause repair, so the problem gets fixed completely rather than recurring.',
      },
    ],
  },

  // ============================================================
  // CARLSBAD — WATER LEAK REPAIR
  // ============================================================
  'carlsbad-water-leak-repair': {
    uniqueH1: 'Water Leak Detection & Repair in Carlsbad — Find It Before It Spreads',
    uniqueIntro: `Hidden water leaks cause more long-term damage to Carlsbad homes than any sudden flood or burst pipe, because they go undetected for weeks or months while silently rotting framing, warping subfloors, and feeding mold colonies. Tamarack Restoration has located and repaired over 120 hidden leaks across Carlsbad since 2014, using thermal imaging cameras, acoustic listening equipment, and moisture mapping technology that finds leaks without tearing apart your walls. Our Carlsbad headquarters means a technician with detection equipment can be at your door within 35 minutes.`,
    localChallenges: `Carlsbad's coastal environment accelerates the pipe deterioration that leads to hidden leaks. Salt air corrodes copper plumbing from the outside in, particularly in homes west of I-5 where ocean influence is strongest. We have mapped a clear pattern: homes in Olde Carlsbad and Carlsbad Village — where original copper supply lines from the 1960s-70s are still in service — develop pinhole leaks at roughly twice the rate of identical pipe in inland cities. These pinhole leaks often appear on horizontal runs inside walls, where corrosion products accumulate and eat through the pipe wall.

Slab leaks represent the most damaging type of hidden leak in Carlsbad, and they are more common here than in most North County cities. The sandy, shifting soils beneath Carlsbad foundations put constant stress on under-slab copper lines, particularly at elbows and connections where the pipe changes direction. La Costa and Calavera Hills properties are especially prone because of the hillside grading beneath their slabs. Symptoms are subtle at first — a warm spot on the floor, a slight increase in water bills — but by the time most homeowners call, significant damage has already occurred beneath the slab and to surrounding materials.

Newer Carlsbad homes in Bressi Ranch and portions of Rancho Carrillo generally use PEX or CPVC plumbing that resists corrosion, but they are not leak-free. We see failures at connection fittings, at transitions between PEX and copper, and at water heater connections. Additionally, the HVAC condensation systems in these tightly sealed newer homes can develop leaks in drain lines that drip into wall cavities for months before producing visible damage.`,
    localProof: 'Over 120 hidden leaks located and repaired across Carlsbad, saving homeowners an estimated $2.4 million in prevented structural damage through early detection.',
    projectCount: '120+',
    avgResponseTime: '35 minutes',
    landmarks: ['Carlsbad Village', 'LEGOLAND California', 'Batiquitos Lagoon', 'The Flower Fields', 'Carlsbad Premium Outlets'],
    neighborhoodContext: [
      { name: 'Carlsbad Village & Olde Carlsbad', detail: 'Original copper supply lines from the 1960s-70s develop pinhole leaks at twice the inland rate due to salt-air corrosion. Horizontal pipe runs inside walls are the most common failure point.' },
      { name: 'La Costa', detail: 'Hillside grading beneath La Costa foundations stresses under-slab copper lines at elbows and connections. Slab leaks here are our most common detection call.' },
      { name: 'Calavera Hills', detail: 'Similar slab-leak risk to La Costa, compounded by mature landscaping whose root systems shift soil around foundations and increase stress on under-slab plumbing.' },
      { name: 'Aviara', detail: 'Luxury finishes make early leak detection critical — a hidden leak behind a marble shower wall or beneath imported hardwood flooring causes disproportionately expensive damage if not caught early.' },
      { name: 'Bressi Ranch', detail: 'PEX plumbing resists corrosion but fails at connection fittings and at PEX-to-copper transitions. HVAC condensation drain leaks in tightly sealed homes are an emerging issue.' },
    ],
    faqs: [
      {
        question: 'How do you detect hidden leaks in Carlsbad homes without tearing apart walls?',
        answer: 'We use three complementary technologies. Thermal imaging cameras detect temperature differences caused by water evaporation behind walls and under floors — even small leaks create visible thermal signatures. Acoustic listening equipment amplifies the sound of water escaping from pressurized pipes, pinpointing the leak location through walls and slabs. Moisture meters and mapping tools measure moisture content in building materials to confirm the leak\'s path and extent. Together, these tools let us locate leaks precisely without exploratory demolition.',
      },
      {
        question: 'What are the signs of a slab leak in a Carlsbad home?',
        answer: 'The most common early sign is a warm or hot spot on the floor, since most slab leaks involve hot water lines. Other indicators include an unexplained increase in water bills, the sound of running water when all fixtures are off, cracks appearing in the foundation or floor tiles, and damp carpet or flooring in areas away from any water source. In Carlsbad homes with La Costa and Calavera Hills addresses, we recommend investigating any of these symptoms promptly because sandy soils allow slab leaks to erode quickly.',
      },
      {
        question: 'How much does leak detection cost in Carlsbad?',
        answer: 'Our comprehensive leak detection assessment — including thermal imaging, acoustic testing, and moisture mapping — runs between $250-$450 depending on the complexity and size of the property. This fee is often waived or credited toward the repair if we perform the fix. Many Carlsbad homeowners find that the detection fee saves them thousands by preventing unnecessary drywall opening or slab cutting in the wrong location.',
      },
      {
        question: 'Why are slab leaks so common in Carlsbad?',
        answer: 'Two factors converge in Carlsbad. First, the sandy coastal soils shift more than the clay soils found in inland cities, putting stress on under-slab copper pipes at every bend and connection. Second, salt air accelerates copper corrosion even on pipes buried beneath the slab, because salty moisture migrates through the concrete over decades. La Costa, Calavera Hills, and Aviara — neighborhoods built on graded hillsides — experience the most slab leaks because the soil movement beneath their foundations is greatest.',
      },
      {
        question: 'Should I repipe my entire Carlsbad home if I have a leak?',
        answer: 'Not always, but sometimes it is the most cost-effective long-term decision. If your Carlsbad home has original copper plumbing from the 1960s-70s and you have experienced multiple pinhole leaks, a full repipe to PEX eliminates the recurring problem permanently. For a single isolated leak in an otherwise healthy system, a targeted repair makes more sense. We assess your entire plumbing system during every leak detection visit and give you an honest recommendation based on pipe age, condition, and history.',
      },
      {
        question: 'Can a small leak really cause serious damage to my Carlsbad home?',
        answer: 'A pinhole leak dripping one drop per second wastes over 3,000 gallons per year and saturates the surrounding wall cavity continuously. Within weeks, that moisture rots wood framing, delaminates drywall, and creates ideal conditions for mold growth. In Carlsbad\'s humid coastal environment, mold colonizes wet materials faster than in drier inland areas. We have responded to Carlsbad homes where a tiny leak — undetected for 3-4 months — caused $15,000-$30,000 in hidden structural and mold damage. Early detection is always cheaper than delayed restoration.',
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

  // ============================================================
  // OCEANSIDE — WATER DAMAGE RESTORATION
  // ============================================================
  'oceanside-water-damage-restoration': {
    uniqueH1: 'Water Damage Restoration in Oceanside — Serving Coast to Inland',
    uniqueIntro: `Oceanside's diverse housing stock — from 1950s beach bungalows in South Oceanside to modern family homes in Rancho Del Oro — creates a wide range of water damage scenarios that our technicians handle daily. Tamarack Restoration has completed over 180 water damage projects across Oceanside since 2014, with IICRC-certified crews that understand the distinct plumbing challenges of each neighborhood. Based just 10 minutes south in Carlsbad, we average 42-minute response times to all Oceanside ZIP codes: 92054, 92056, 92057, and 92058.`,
    localChallenges: `Downtown Oceanside and South Oceanside contain some of the oldest housing stock in North County, with many homes dating to the 1940s and 1950s. These properties frequently have galvanized steel supply lines that corrode from the inside, gradually restricting water flow and eventually developing full-wall failures that release high-pressure water into wall cavities. Unlike the gradual pinhole leaks common in copper piping, galvanized pipe failures tend to be sudden and dramatic, flooding rooms within minutes. Our Downtown and South Oceanside calls are disproportionately emergency-level events because of this infrastructure reality.

The San Luis Rey River corridor running through central Oceanside creates elevated groundwater conditions that affect homes in Mission San Luis Rey, Mira Costa, and surrounding neighborhoods. During wet winters, the water table rises and pushes moisture through foundation walls and floor slabs. Homeowners in these areas often discover water stains on basement or garage floors that seem to appear from nowhere — the moisture is coming up through the slab rather than from a plumbing failure. Addressing this type of water intrusion requires specialized vapor-barrier installation alongside our standard drying protocols.

Rancho Del Oro, Arrowood, and Fire Mountain represent Oceanside's newer and mid-age housing stock, where the primary water damage risks mirror those of other planned communities: appliance failures, water heater ruptures, and second-story bathroom leaks. However, Fire Mountain's hillside positioning adds a unique factor — homes at lower elevations on Fire Mountain collect runoff from upslope properties during storms, and inadequate drainage systems cause water to pool against foundations and seep into ground-level rooms.`,
    localProof: 'Over 180 water damage restoration projects completed across Oceanside, from emergency pipe-burst response in South O to storm-damage recovery in Fire Mountain.',
    projectCount: '180+',
    avgResponseTime: '42 minutes',
    landmarks: ['Oceanside Pier', 'Oceanside Harbor', 'Mission San Luis Rey', 'Camp Pendleton', 'Heritage Park'],
    neighborhoodContext: [
      { name: 'Downtown & South Oceanside', detail: 'Galvanized steel supply lines in 1940s-50s homes fail suddenly and dramatically. Emergency pipe-burst calls here are high-volume, high-urgency events requiring immediate extraction.' },
      { name: 'Fire Mountain', detail: 'Hillside homes at lower elevations collect upslope runoff during storms. Inadequate drainage causes water to pool against foundations and seep into ground-level rooms.' },
      { name: 'Mira Costa & Mission Area', detail: 'Proximity to the San Luis Rey River raises the water table during wet winters, pushing moisture through foundation walls and slabs — a unique intrusion pattern requiring vapor barriers.' },
      { name: 'Rancho Del Oro', detail: 'Modern planned community with typical appliance and water-heater failure risks. Second-story bathroom leaks damaging ground-floor ceilings are our most common call here.' },
      { name: 'Arrowood', detail: 'Family-oriented community where we frequently respond to washing machine hose bursts and dishwasher connection failures — quick extraction prevents flooring replacement in most cases.' },
    ],
    faqs: [
      {
        question: 'How quickly can Tamarack respond to water damage in Oceanside?',
        answer: 'We are based in Carlsbad, just 10 minutes south of Oceanside, and maintain equipment staged for rapid deployment to all Oceanside neighborhoods. Our average response time to Oceanside is 42 minutes, with South Oceanside and downtown locations typically seeing us within 35 minutes. We dispatch 24/7/365 — call (760) 500-2211 for immediate emergency response.',
      },
      {
        question: 'Why do South Oceanside homes experience so many pipe bursts?',
        answer: 'Many South Oceanside and downtown homes were built in the 1940s and 1950s with galvanized steel water supply lines. Unlike copper, which develops slow pinhole leaks, galvanized steel corrodes from the inside out, building up rust deposits that restrict flow. Eventually the corroded section fails catastrophically, releasing full-pressure water into walls and floors. If your Oceanside home has galvanized piping and you notice declining water pressure or rusty water, a proactive repipe prevents an emergency.',
      },
      {
        question: 'Does water come up through the floor in Oceanside homes near the San Luis Rey River?',
        answer: 'Yes. During wet winters, the San Luis Rey River corridor raises the local water table significantly. Homes in Mission San Luis Rey, Mira Costa, and adjacent neighborhoods can experience moisture migrating upward through concrete slabs and foundation walls. This is not a plumbing leak — it is hydrostatic pressure from groundwater. Our solution combines water extraction, structural drying, and installation of sub-slab vapor barriers to prevent recurrence.',
      },
      {
        question: 'Will insurance cover water damage restoration for my Oceanside home?',
        answer: 'Sudden water damage from pipe bursts, appliance failures, and supply-line breaks is covered by most standard homeowner policies. Gradual damage from long-term leaks or deferred maintenance may be excluded. We work with every major carrier serving Oceanside — State Farm, USAA, Allstate, Farmers, and Liberty Mutual — and handle all damage documentation, adjuster meetings, and supplement requests. Most Oceanside homeowners pay only their deductible.',
      },
      {
        question: 'What should I do if my Oceanside home floods while Camp Pendleton restricts base access?',
        answer: 'Military families living off-base in Oceanside sometimes face water emergencies while a spouse is deployed or during base access restrictions. We serve as your on-the-ground emergency response — just call us and we handle everything from emergency extraction through insurance coordination and final repairs. We can communicate project updates via email and phone to deployed service members, and we work with USAA and military-affiliated insurers daily.',
      },
      {
        question: 'How long does it take to dry out a water-damaged Oceanside home?',
        answer: 'Typical drying time is 3-5 days for moderate water damage using commercial dehumidifiers and air movers. Coastal Oceanside homes take slightly longer than inland properties because ambient humidity near the ocean slows evaporation rates. We compensate by deploying additional dehumidifier capacity in beachside homes. We take daily moisture readings and only release equipment when every reading hits the target — never on a fixed schedule.',
      },
    ],
  },

  // ============================================================
  // OCEANSIDE — MOLD REMOVAL
  // ============================================================
  'oceanside-mold-removal': {
    uniqueH1: 'Mold Removal in Oceanside — From Beach Cottages to Modern Homes',
    uniqueIntro: `Oceanside's combination of ocean humidity, older housing stock, and the San Luis Rey River corridor creates persistent mold risks across every neighborhood in the city. Tamarack Restoration has remediated mold in over 130 Oceanside properties since 2014 — from hidden infestations behind shower walls in South Oceanside cottages to HVAC-spread contamination in Rancho Del Oro family homes. Our IICRC-certified mold specialists are equipped with containment systems, HEPA air scrubbers, and antimicrobial treatments, and we reach any Oceanside address within 45 minutes from our Carlsbad headquarters.`,
    localChallenges: `South Oceanside and Downtown Oceanside bear the heaviest mold burden in the city due to the combination of coastal humidity and aging building materials. Many homes in these neighborhoods were built before modern vapor barriers and ventilation standards existed. Single-wall construction — common in 1940s-50s beach cottages — allows ocean moisture to pass directly through exterior walls and condense on interior surfaces. We have removed mold from behind original wood paneling in South O cottages that showed no visible signs until the homeowner noticed persistent allergy symptoms.

The San Luis Rey River corridor adds a groundwater component to mold risk for central Oceanside neighborhoods. Homes in the Mission area, along North River Road, and in parts of Mira Costa sit on soil with elevated moisture content year-round. This ground moisture wicks into foundations, creating damp conditions in crawl spaces and along lower wall sections that mold exploits. Crawl-space mold remediation is one of our most frequent Oceanside service calls — many homeowners discover the issue during a home sale inspection and need rapid remediation to close escrow.

Newer Oceanside communities like Rancho Del Oro, Arrowood, and the developments along College Boulevard face mold challenges related to construction quality rather than building age. Improperly installed bathroom tile, gaps in shower pan membranes, and inadequate caulking allow water to seep into wall cavities where it feeds mold growth in the dark, enclosed space between studs. These moisture intrusions often go undetected for 6-12 months because the exterior surface looks fine while mold spreads behind it.`,
    localProof: 'Over 130 mold remediation projects across Oceanside, with clearance testing passed on the first attempt in 96% of cases. We serve every Oceanside neighborhood from the coast to inland developments.',
    projectCount: '130+',
    avgResponseTime: '45 minutes',
    landmarks: ['Oceanside Pier', 'Mission San Luis Rey', 'Oceanside Harbor', 'Camp Pendleton', 'Heritage Park'],
    neighborhoodContext: [
      { name: 'South Oceanside', detail: 'Pre-1950s beach cottages with single-wall construction allow ocean moisture to pass through walls and condense on interior surfaces — hidden mold behind wood paneling is a common finding.' },
      { name: 'Downtown Oceanside', detail: 'Older mixed-use buildings and converted properties lack modern ventilation. Mold behind bathroom walls and in units with shared plumbing is a frequent remediation scenario.' },
      { name: 'Mira Costa & Mission Area', detail: 'Elevated ground moisture from the San Luis Rey corridor wicks into foundations, creating damp crawl spaces where mold thrives. Crawl-space remediation is our top call type here.' },
      { name: 'Rancho Del Oro', detail: 'Construction-quality issues — improper tile installation, shower pan gaps, inadequate caulking — allow hidden moisture intrusion that feeds mold behind intact-looking walls for months.' },
      { name: 'Fire Mountain', detail: 'Hillside homes experience moisture condensation on cooler north-facing walls, particularly in rooms without direct sunlight. Closets and storage rooms against hillside walls are frequent mold sites.' },
    ],
    faqs: [
      {
        question: 'Why does mold grow so easily in Oceanside beach homes?',
        answer: 'Oceanside\'s beachside neighborhoods experience relative humidity levels of 65-75 percent during summer marine layer season. Many beach homes in South Oceanside and along The Strand were built before 1960 with single-wall construction that provides no moisture barrier between the humid exterior and interior living spaces. This allows continuous moisture transfer into walls, ceilings, and floors — conditions that Aspergillus, Penicillium, and Cladosporium species thrive in year-round.',
      },
      {
        question: 'I found mold during a home inspection in Oceanside — can you remediate before closing?',
        answer: 'Yes, escrow-timeline mold remediation is one of our most common Oceanside requests. We understand the urgency of real estate transactions and prioritize these projects accordingly. A typical contained mold issue — bathroom wall, closet, or small section of crawl space — can be remediated with clearance testing completed in 3-5 business days. We coordinate directly with the buyer\'s inspector, the listing agent, and escrow to provide documentation that satisfies all parties.',
      },
      {
        question: 'Is crawl-space mold common in Oceanside?',
        answer: 'Extremely common, particularly in neighborhoods near the San Luis Rey River — Mission area, Mira Costa, and North River Road. Elevated ground moisture wicks through soil into crawl spaces, where limited airflow and darkness create perfect mold habitat. Many Oceanside homeowners are unaware of crawl-space mold until a home inspection, a musty odor investigation, or unexplained allergy symptoms lead to discovery. We remediate the mold, install vapor barriers, and improve ventilation to prevent regrowth.',
      },
      {
        question: 'How much does mold removal cost in an Oceanside home?',
        answer: 'A contained mold issue in a single bathroom or closet typically runs $1,500-$4,000. Crawl-space remediation, which is very common in Oceanside, ranges from $3,000-$8,000 depending on the size and accessibility of the space. Whole-home remediation for severe or multi-room contamination can reach $10,000-$20,000. We provide free on-site assessments with written estimates. Insurance covers mold remediation when it results from a sudden covered water event.',
      },
      {
        question: 'Can mold in my Oceanside home affect my neighbors in attached housing?',
        answer: 'In Oceanside\'s many condominiums, townhomes, and duplexes — particularly common in downtown and South Oceanside — mold can absolutely spread through shared walls, common attic spaces, and connected plumbing chases. We frequently remediate mold that originated in one unit and spread to adjacent ones. Proper containment during remediation is critical in attached housing to prevent cross-contamination, and we coordinate with HOAs and neighboring unit owners when shared structures are involved.',
      },
      {
        question: 'Do military families near Camp Pendleton face special mold risks?',
        answer: 'Military families frequently rent homes in Oceanside during assignments at Camp Pendleton and may inherit mold issues from previous tenants or deferred maintenance. As renters, you should report any mold signs — musty odors, visible growth, persistent allergies — to your landlord immediately and document the condition in writing. If you own your Oceanside home, USAA and other military-affiliated insurers cover mold remediation from covered water events. We work with USAA regularly and understand their claims process.',
      },
    ],
  },

  // ============================================================
  // OCEANSIDE — FIRE DAMAGE RESTORATION
  // ============================================================
  'oceanside-fire-damage-restoration': {
    uniqueH1: 'Fire Damage Restoration in Oceanside — Emergency Board-Up to Full Rebuild',
    uniqueIntro: `Fire damage in Oceanside demands rapid response and specialized expertise — from securing the structure within hours to completing full reconstruction that meets current building codes. Tamarack Restoration has restored over 55 fire-damaged Oceanside properties since 2014, handling everything from apartment kitchen fires downtown to whole-room blazes in Fire Mountain single-family homes. Our crew arrives within 45 minutes of the Oceanside Fire Department clearing the scene, preventing secondary soot and smoke damage that worsens dramatically in the first 48 hours.`,
    localChallenges: `Downtown Oceanside and South Oceanside present elevated fire restoration challenges because of building density and construction age. Multi-unit buildings, converted properties, and older wood-frame duplexes are common in these neighborhoods, and a fire in one unit frequently causes smoke damage to adjacent units and common areas. Restoration in multi-unit settings requires coordination with property managers, multiple tenants, insurance carriers, and sometimes the city building department — a project-management challenge our team handles routinely for Oceanside property owners.

The older construction in South Oceanside and the Mission area means many homes lack modern fire-rated assemblies between rooms and between floors. Fire and smoke travel through wall cavities, floor systems, and attic spaces more freely in these structures, often causing contamination in areas that appear undamaged on the surface. Our Oceanside fire assessments include thermal imaging of walls and ceilings to detect hidden heat damage and smoke penetration that visual inspection alone would miss.

In Oceanside's newer communities — Rancho Del Oro, Arrowood, and developments along El Camino Real — kitchen fires are the primary fire-damage scenario. Modern open floor plans allow smoke from a cooking fire to fill the entire home within minutes, depositing soot on every surface and saturating soft furnishings with smoke odor. While structural damage is often limited, the smoke remediation required in these homes is extensive — every wall, ceiling, cabinet interior, and HVAC duct requires cleaning or replacement.`,
    localProof: 'Over 55 fire and smoke damage restorations completed across Oceanside, including multi-unit projects in downtown and complete kitchen rebuilds in Rancho Del Oro.',
    projectCount: '55+',
    avgResponseTime: '45 minutes',
    landmarks: ['Oceanside Pier', 'Oceanside Fire Department', 'Mission San Luis Rey', 'Camp Pendleton', 'Oceanside Harbor'],
    neighborhoodContext: [
      { name: 'Downtown Oceanside', detail: 'Building density and multi-unit properties mean a fire in one unit causes smoke damage to neighbors. We coordinate complex multi-party restoration projects with property managers and multiple insurers.' },
      { name: 'South Oceanside', detail: 'Older wood-frame construction lacks modern fire-rated assemblies — smoke and heat travel through wall cavities and attic spaces, causing hidden damage that requires thermal imaging to detect.' },
      { name: 'Fire Mountain', detail: 'Hillside properties face brush fire risk during dry seasons. We provide emergency board-up and smoke remediation for homes affected by wildland-urban interface fire events.' },
      { name: 'Rancho Del Oro', detail: 'Kitchen fires in open floor plans fill entire homes with smoke in minutes. Structural damage is often limited, but smoke remediation of every surface and the HVAC system is extensive.' },
      { name: 'Mira Costa', detail: 'Mid-century homes with updated interiors require careful fire restoration that preserves renovations while addressing smoke penetration into original framing and wall cavities.' },
    ],
    faqs: [
      {
        question: 'What should I do after a fire in my Oceanside home?',
        answer: 'Wait for the Oceanside Fire Department to clear the structure for re-entry. Do not attempt to clean any soot — wiping or touching soot on surfaces can permanently bond it to the material. Call Tamarack at (760) 500-2211 immediately. We will arrive within 45 minutes to board up windows and doors, tarp any roof openings, and begin emergency stabilization. Quick action in the first 24-48 hours prevents soot from permanently damaging metals, countertops, and appliances.',
      },
      {
        question: 'I rent an apartment in downtown Oceanside and there was a fire in another unit — who pays for restoration?',
        answer: 'When fire in an adjacent unit causes smoke damage to yours, the at-fault party\'s insurance typically covers your unit\'s restoration. However, your renter\'s insurance may provide faster coverage for your personal belongings and additional living expenses while restoration is underway. We work with all parties\' insurance carriers simultaneously to ensure nothing falls through the cracks, and we coordinate with the property manager on building-wide restoration.',
      },
      {
        question: 'How do you remove smoke odor from an Oceanside home?',
        answer: 'Smoke odor elimination requires reaching every space the smoke reached. We use thermal fogging — a process that creates a deodorizing fog with the same particle size as smoke, allowing it to penetrate the same cracks and cavities. For severe cases, we add hydroxyl generators for continuous air treatment and ozone shock treatment for enclosed spaces. In coastal Oceanside homes, we also address salt-air residue that mixes with smoke deposits in HVAC systems, creating a compound odor that requires duct cleaning or replacement.',
      },
      {
        question: 'Does fire damage restoration in Oceanside include rebuilding the damaged areas?',
        answer: 'Yes, we provide complete restoration from emergency response through final reconstruction. After cleaning smoke and soot from salvageable areas, we rebuild everything that was damaged — drywall, framing, flooring, cabinetry, painting, and trim work. We pull permits through the City of Oceanside, coordinate inspections, and rebuild to current code. Oceanside homeowners work with a single Tamarack project manager from day one through final walkthrough.',
      },
      {
        question: 'Are Oceanside homes near brush areas at higher fire risk?',
        answer: 'Properties on Fire Mountain and along the eastern edges of Oceanside near Camp Pendleton sit in the wildland-urban interface zone, where brush fires can threaten structures during dry, windy conditions. While wildfire damage is relatively rare in central Oceanside, smoke from nearby brush fires can affect homes miles from the fire line. We provide smoke damage assessment and cleaning for Oceanside properties affected by regional fire events, even when the fire itself is miles away.',
      },
      {
        question: 'How long does fire restoration take for a typical Oceanside home?',
        answer: 'A contained kitchen fire with smoke spread throughout the home typically requires 4-8 weeks for complete cleaning, odor elimination, and kitchen reconstruction. Significant structural fire damage can extend the timeline to 3-6 months depending on the scope of reconstruction and permit review timelines with the City of Oceanside. We provide a detailed project schedule during our initial assessment and keep you updated throughout the process.',
      },
    ],
  },

  // ============================================================
  // OCEANSIDE — FLOOD CLEANUP
  // ============================================================
  'oceanside-flood-cleanup': {
    uniqueH1: 'Flood Cleanup in Oceanside — River Corridor & Storm Response',
    uniqueIntro: `Oceanside faces flood risks that most San Diego County cities do not — the San Luis Rey River bisects the city, creeks feed through residential neighborhoods, and coastal storm surge affects low-lying beach areas during winter swells. Tamarack Restoration has completed over 70 flood cleanup projects across Oceanside since 2014, including emergency multi-home response along North River Road and Benet Road during the January 2023 atmospheric river event. We pre-position equipment in Oceanside during major storm forecasts and can begin extraction within 40 minutes of your call.`,
    localChallenges: `The San Luis Rey River is the dominant flood factor in Oceanside. Flowing from Palomar Mountain through the city center to the ocean at Oceanside Harbor, this river can rise dramatically during prolonged rainfall. Homes along North River Road, Benet Road, and in the Mission San Luis Rey area are in the highest-risk zone — when the river exceeds its banks, water enters properties rapidly and carries significant sediment and agricultural contamination from upstream. Our flood response along this corridor requires not just water extraction but full contamination protocols.

Loma Alta Creek, running through central Oceanside from Fire Mountain to the coast, is a secondary flood source that catches many homeowners off-guard. This creek channel passes through residential neighborhoods and can overflow during intense rain bursts, flooding streets and adjacent properties in areas that are not technically in FEMA flood zones. Homes along Loma Alta Drive and in the surrounding blocks have experienced repeat flooding that surprises residents who never expected flood risk when they purchased their property.

Oceanside's beachfront properties face a different flood threat: coastal storm surge combined with high tide events. During winter storms with large swells, wave runoff and elevated tide levels can push ocean water into ground-level units along The Strand and Pacific Street. Salt-water flooding causes accelerated corrosion damage to electrical systems, metal fixtures, and appliances, and requires specialized salt-water decontamination protocols during cleanup.`,
    localProof: 'Over 70 flood cleanup projects in Oceanside, including rapid multi-home response during the 2023 atmospheric river. Pre-staged equipment during storm forecasts for fastest possible extraction.',
    projectCount: '70+',
    avgResponseTime: '40 minutes',
    landmarks: ['San Luis Rey River', 'Oceanside Harbor', 'Mission San Luis Rey', 'Oceanside Pier', 'Loma Alta Creek'],
    neighborhoodContext: [
      { name: 'North River Road & Benet Road', detail: 'Highest flood risk in Oceanside — the San Luis Rey River overflows during prolonged rain, carrying sediment and agricultural contamination into homes. Full decontamination protocols required.' },
      { name: 'Mission San Luis Rey Area', detail: 'Low-lying properties near the river corridor experience both river overflow and groundwater rise during storms, creating dual-source flood events that require specialized drying.' },
      { name: 'Fire Mountain & Loma Alta Creek', detail: 'Loma Alta Creek overflows during intense rain bursts, flooding properties in areas not technically mapped as FEMA flood zones — catching homeowners without flood insurance.' },
      { name: 'The Strand & Pacific Street', detail: 'Coastal storm surge during high-tide winter swell events pushes salt water into ground-level units. Salt-water flooding requires specialized decontamination to prevent accelerated corrosion.' },
      { name: 'Downtown Oceanside', detail: 'Aging stormwater infrastructure overwhelms during heavy rain, causing street flooding that enters ground-floor commercial spaces and residential units.' },
    ],
    faqs: [
      {
        question: 'Which Oceanside neighborhoods flood most often?',
        answer: 'The San Luis Rey River corridor — particularly homes along North River Road, Benet Road, and in the Mission area — carries the highest flood risk. Loma Alta Creek through central Oceanside is a secondary risk zone that floods during intense rain bursts. Beachfront properties along The Strand and Pacific Street face coastal storm surge during winter high-tide events. Properties in any of these areas should have flood insurance and a pre-established relationship with a restoration company.',
      },
      {
        question: 'Do I need flood insurance if I live in Oceanside?',
        answer: 'If your Oceanside home is in a FEMA-designated flood zone near the San Luis Rey River, your mortgage lender likely requires it. However, we strongly recommend flood insurance for any Oceanside homeowner, even outside mapped zones. Over 25 percent of flood insurance claims nationwide come from properties outside FEMA flood zones. Homes near Loma Alta Creek, in low-lying downtown areas, and along the beachfront have all flooded without being in mapped zones. Standard homeowner policies do not cover flood damage.',
      },
      {
        question: 'Is flood water in Oceanside contaminated?',
        answer: 'Almost always. San Luis Rey River floodwater carries agricultural runoff, sediment, and potentially sewage from overwhelmed systems upstream. Loma Alta Creek floodwater picks up street contaminants, fertilizers, and debris. Coastal flooding introduces salt water that is corrosive to building systems. All Oceanside flood events are treated as Category 2 or Category 3 water, requiring full PPE, antimicrobial treatment of all contacted surfaces, and removal of all porous materials that absorbed the water.',
      },
      {
        question: 'How quickly can you respond to flooding in Oceanside during a major storm?',
        answer: 'During major storm forecasts, we pre-position crews and truck-mounted extraction equipment in Oceanside so we can respond within 30-40 minutes even during peak call volume. For the January 2023 atmospheric river, we had crews on North River Road within 35 minutes of the first call. During normal conditions, our response time from Carlsbad to Oceanside averages 40 minutes. Call (760) 500-2211 at the first sign of water entry — do not wait for the storm to pass.',
      },
      {
        question: 'What does flood cleanup involve for a home near the San Luis Rey River?',
        answer: 'River flooding requires more intensive cleanup than clean-water events. After rapid extraction of standing water using truck-mounted pumps, we remove all porous materials that absorbed flood water — carpet, padding, drywall up to at least 12 inches above the high-water mark, and insulation. Hard surfaces are scrubbed and treated with EPA-registered antimicrobial solutions. Sediment deposits require physical removal and cleaning. Commercial drying equipment runs for 4-7 days until all moisture readings hit targets.',
      },
    ],
  },

  // ============================================================
  // OCEANSIDE — SEWAGE CLEANUP
  // ============================================================
  'oceanside-sewage-cleanup': {
    uniqueH1: 'Sewage Cleanup in Oceanside — 24/7 Biohazard Emergency Response',
    uniqueIntro: `Oceanside's aging sewer infrastructure, particularly in neighborhoods built before 1970, makes sewage backups a persistent problem that demands professional biohazard response. Tamarack Restoration has handled over 50 sewage emergencies across Oceanside since 2014, including complex multi-unit backup events in downtown and chronic lateral-line failures in South Oceanside. Our biohazard-certified crews arrive in full PPE within 45 minutes, prepared to contain the contamination zone, extract sewage, decontaminate all surfaces, and restore your property to verified safe conditions.`,
    localChallenges: `South Oceanside and Downtown Oceanside account for a disproportionate share of the city's sewage backup emergencies. The vitrified clay sewer laterals installed in these neighborhoods during the 1940s-60s have passed their expected service life and are deteriorating. Cracks, joint separations, and root intrusion are widespread, and the City of Oceanside's main sewer lines in these areas also experience capacity issues during heavy rainfall, causing backups that push through the system and into homes through floor drains, toilets, and shower stalls.

The multi-unit residential buildings common in downtown Oceanside create compounded sewage risks. When a shared lateral line fails — or when one unit's blockage backs up into another — the contamination can affect multiple residences simultaneously. We have managed several downtown Oceanside projects where a single sewer failure required coordinated cleanup and decontamination across three or four connected units, working with multiple tenants, the property owner, and several insurance carriers concurrently.

Military families renting homes in Oceanside near Camp Pendleton are particularly vulnerable to sewage issues in older rental properties where sewer maintenance has been deferred. Rental homes with mature trees, aging laterals, and landlords who have not performed preventive sewer inspections account for a significant portion of our Oceanside sewage calls. We work with tenants, property managers, and landlords to ensure proper remediation and root-cause repair regardless of the property ownership structure.`,
    localProof: 'Over 50 sewage cleanup projects across Oceanside, including multi-unit biohazard response in downtown and aging-infrastructure failures in South Oceanside.',
    projectCount: '50+',
    avgResponseTime: '45 minutes',
    landmarks: ['Oceanside Pier', 'Mission San Luis Rey', 'Camp Pendleton', 'Oceanside Harbor', 'Heritage Park'],
    neighborhoodContext: [
      { name: 'South Oceanside', detail: 'Vitrified clay sewer laterals from the 1940s-60s are past their service life — root intrusion, joint separation, and pipe collapse cause frequent backups in this neighborhood.' },
      { name: 'Downtown Oceanside', detail: 'Multi-unit buildings with shared lateral lines create compounded backup events — one unit\'s blockage backs into others, requiring coordinated cleanup across multiple residences.' },
      { name: 'Mira Costa & Mission Area', detail: 'Proximity to the San Luis Rey River means municipal sewer lines here experience storm-related surges that push sewage back through floor drains into ground-level rooms.' },
      { name: 'Rancho Del Oro', detail: 'Newer infrastructure reduces backup frequency, but grease buildup and improper flushing still cause blockages. HOA coordination is often needed for shared sewer connections.' },
      { name: 'Fire Mountain', detail: 'Hillside sewer laterals run at steep grades, creating velocity issues that lead to solids buildup and eventual blockage at slope transitions.' },
    ],
    faqs: [
      {
        question: 'How dangerous is sewage in my Oceanside home?',
        answer: 'Sewage is a serious biohazard containing E. coli, Salmonella, hepatitis A, norovirus, and parasites. Exposure risk begins immediately upon contact with contaminated surfaces or inhalation of aerosolized pathogens. Keep all family members and pets away from affected areas, do not attempt to clean up sewage without professional PPE and containment, and call Tamarack at (760) 500-2211 immediately. Our biohazard-certified team will arrive within 45 minutes.',
      },
      {
        question: 'I rent a home in Oceanside and the sewer backed up — who is responsible for cleanup?',
        answer: 'In most cases, the property owner or landlord is responsible for sewer lateral maintenance and repair, and their insurance should cover the restoration. As a tenant, you should document the backup immediately with photos, notify your landlord in writing, and call a professional restoration company. Your renter\'s insurance may cover damage to your personal belongings and temporary housing. We coordinate between tenants, landlords, and property managers regularly for Oceanside sewage events.',
      },
      {
        question: 'Why are sewage backups so common in older Oceanside neighborhoods?',
        answer: 'South Oceanside and downtown homes have vitrified clay sewer laterals that are 60-80 years old — well past their intended lifespan. These clay pipes crack and separate at joints, allowing tree roots to enter and create blockages. Combined with the City of Oceanside\'s older main sewer lines that reach capacity during storms, this creates a system-wide vulnerability. The only permanent solution is lateral replacement, which we can coordinate through our licensed plumbing partners.',
      },
      {
        question: 'What does professional sewage cleanup in Oceanside cost?',
        answer: 'A contained bathroom backup typically costs $2,500-$5,500 for extraction, decontamination, material removal, and restoration. Multi-room backups affecting living areas can range from $7,000-$18,000 depending on the volume of sewage and the materials affected. Many Oceanside homeowners and landlords carry sewer backup endorsements on their insurance policies that cover these costs. We verify coverage and handle the insurance claim process.',
      },
      {
        question: 'Can you prevent future sewage backups in my Oceanside home?',
        answer: 'We recommend three preventive measures for Oceanside homes. First, a sewer camera inspection of your lateral line to identify roots, bellied sections, and pipe deterioration before they cause backups. Second, installation of a backwater valve that prevents municipal system surges from entering your home during storms. Third, for homes with known root intrusion, annual hydro-jetting to clear roots before they create blockages. We coordinate all three services through our trusted Oceanside-area plumbing partners.',
      },
    ],
  },

  // ============================================================
  // OCEANSIDE — WATER LEAK REPAIR
  // ============================================================
  'oceanside-water-leak-repair': {
    uniqueH1: 'Water Leak Detection & Repair in Oceanside — Advanced Technology, Minimal Disruption',
    uniqueIntro: `Hidden water leaks silently damage more Oceanside homes each year than any sudden flood or storm, because they persist undetected behind walls and under slabs for weeks or months at a time. Tamarack Restoration has detected and repaired over 95 concealed leaks across Oceanside since 2014, using thermal imaging, acoustic listening devices, and comprehensive moisture mapping to find leaks without unnecessary demolition. From corroded galvanized lines in South Oceanside to slab leaks beneath Fire Mountain foundations, we locate the source precisely and fix it — typically arriving within 42 minutes of your call.`,
    localChallenges: `Oceanside's older neighborhoods — South Oceanside, Downtown, and parts of the Mission area — contain extensive galvanized steel and older copper plumbing systems that are well past their expected lifespan. Galvanized steel pipes corrode from the inside, building rust deposits that narrow the interior diameter and create weak points prone to failure. Unlike copper pinhole leaks that drip slowly, galvanized failures often crack along corroded seams, releasing water at supply pressure into wall cavities. Our thermal imaging cameras reveal these leaks as dramatic temperature anomalies that pinpoint the failure location precisely.

Slab leaks in Oceanside are driven by different soil conditions than in neighboring Carlsbad. Central Oceanside sits on alluvial deposits from the San Luis Rey River — soil that expands and contracts with moisture changes more than coastal sand. This soil movement puts cyclical stress on under-slab copper lines, flexing them at connection points and elbows until metal fatigue creates cracks. We see the highest concentration of Oceanside slab leaks in Mira Costa and the Mission area, where river-deposited soils are deepest.

The military housing rental market in Oceanside adds a unique dimension to leak detection needs. Homes rented by military families stationed at Camp Pendleton often receive minimal maintenance between tenants. We frequently detect leaks in rental properties that have been hidden for months — behind bathroom vanities, under kitchen sinks, and in laundry areas where slow drips have caused concealed rot, mold growth, and structural damage that new tenants discover after moving in.`,
    localProof: 'Over 95 hidden leaks detected and repaired across Oceanside, from galvanized pipe failures in South O to slab leaks in Mira Costa — saving homeowners an estimated $1.8 million in prevented damage.',
    projectCount: '95+',
    avgResponseTime: '42 minutes',
    landmarks: ['Oceanside Pier', 'Mission San Luis Rey', 'Camp Pendleton', 'Oceanside Harbor', 'San Luis Rey River'],
    neighborhoodContext: [
      { name: 'South Oceanside & Downtown', detail: 'Galvanized steel supply lines from the 1940s-60s corrode internally, crack along seams, and release water at full pressure into wall cavities — our thermal imaging reveals these dramatically.' },
      { name: 'Mira Costa & Mission Area', detail: 'Alluvial soils from the San Luis Rey River expand and contract, flexing under-slab copper at connections and elbows. Highest slab-leak concentration in Oceanside.' },
      { name: 'Fire Mountain', detail: 'Hillside foundations shift subtly over time, stressing both under-slab and in-wall plumbing. Homes here develop leaks at pipe hangers and support brackets where movement concentrates.' },
      { name: 'Rancho Del Oro', detail: 'CPVC plumbing in mid-2000s homes can become brittle and crack at fittings. Leaks behind second-story shower walls are our most common Rancho Del Oro detection call.' },
      { name: 'Arrowood', detail: 'Water heater connections and washing machine supply hoses are the primary leak sources in this family-oriented community. Annual inspection of these connections prevents most emergencies.' },
    ],
    faqs: [
      {
        question: 'How do you find hidden leaks in Oceanside homes without cutting into walls?',
        answer: 'We use a three-tool approach. Thermal imaging cameras detect the temperature differential caused by water evaporation behind walls and under floors, showing the leak as a cool spot on an otherwise uniform surface. Acoustic sensors amplify the ultrasonic sound of water escaping from pressurized pipes, allowing us to hear the leak through concrete slabs and wall assemblies. Moisture meters confirm the extent of water migration through building materials. Together, these tools pinpoint the leak location within inches.',
      },
      {
        question: 'My Oceanside water bill suddenly increased — could I have a hidden leak?',
        answer: 'A sudden unexplained increase in water usage is one of the most reliable indicators of a hidden leak. The Oceanside water department can help you confirm whether the increase is on the supply side or the irrigation side. If supply-side, common sources include slab leaks (check for warm floor spots), toilet flappers that allow continuous tank-to-bowl flow, and pipe leaks inside walls. Our detection assessment can identify or rule out hidden leaks quickly and prevent months of wasted water and concealed damage.',
      },
      {
        question: 'Are slab leaks common in Oceanside?',
        answer: 'Yes, particularly in neighborhoods built on San Luis Rey River alluvial deposits — Mira Costa, the Mission area, and portions of central Oceanside. These soils expand and contract with moisture changes, cyclically stressing under-slab copper pipes. Over years, this flexing causes metal fatigue at elbows and connections. Signs include warm floor spots, the sound of running water with fixtures off, unexplained water-bill increases, and foundation cracks. Early detection with thermal imaging prevents thousands in additional damage.',
      },
      {
        question: 'Should I repipe my older Oceanside home to prevent leaks?',
        answer: 'If your South Oceanside or downtown home still has original galvanized steel supply lines, a full repipe to PEX or copper is one of the best investments you can make. Galvanized pipes do not develop isolated leaks — the corrosion is systemic, meaning a repair today will be followed by another failure next month. We assess your entire plumbing system during every detection visit and provide honest recommendations. For copper systems with isolated failures, targeted repair is usually more cost-effective.',
      },
      {
        question: 'I just moved into an Oceanside rental and found water damage — what should I do?',
        answer: 'Document the damage immediately with photos and written descriptions, then notify your landlord in writing. Call Tamarack for a leak detection assessment — finding the active leak source protects you from being held responsible for ongoing damage. Your renter\'s insurance may cover damage to your personal property. We regularly work with tenants, landlords, and property managers in Oceanside\'s active rental market to coordinate detection, repair, and restoration responsibilities.',
      },
      {
        question: 'How much does leak detection cost in Oceanside?',
        answer: 'Our comprehensive detection assessment — including thermal imaging, acoustic testing, and moisture mapping — costs $250-$450 depending on property size and complexity. For properties where we perform the repair, this fee is typically credited toward the work. Given that an undetected leak can cause $10,000-$30,000 in hidden damage over several months, the detection fee is one of the best prevention investments an Oceanside homeowner can make.',
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
