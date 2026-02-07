/**
 * Service Pillar Page Deep Content
 * =================================
 * In-depth content for all 6 service pillar pages.
 * Each service includes:
 *   - "When to Call" scenarios (8-10 actionable situations)
 *   - "What's Included" detailed breakdowns with equipment/timelines
 *   - "Recent Projects" case studies from North San Diego County
 *   - Expert deep-dive content
 */

export interface WhenToCallScenario {
  title: string;
  description: string;
}

export interface ServiceIncluded {
  title: string;
  description: string;
  equipment?: string;
}

export interface RecentProject {
  title: string;
  location: string;
  summary: string;
  scope: string;
}

export interface ServicePillarContent {
  whenToCall: WhenToCallScenario[];
  whatsIncluded: ServiceIncluded[];
  recentProjects: RecentProject[];
  deepDiveTitle: string;
  deepDiveContent: string;
}

export const servicePillarContent: Record<string, ServicePillarContent> = {


  // -------------------------------------------------------
  // WATER DAMAGE RESTORATION
  // -------------------------------------------------------
  'water-damage-restoration': {
    whenToCall: [
      {
        title: 'Your Water Heater Is Leaking',
        description: `A leaking water heater can release 40 to 80 gallons into your home in a matter of minutes, saturating surrounding flooring, drywall, and cabinetry. Even a slow drip from the pressure relief valve indicates internal corrosion that can escalate to a full tank rupture. Shut off the cold water supply line and call us immediately so we can extract the water before it wicks into adjacent rooms.`,
      },
      {
        title: 'You Return Home to a Flooded Room',
        description: `Coming home to standing water is one of the most common scenarios we respond to in North San Diego County. Whether a supply line burst while you were at work or a washing machine hose failed overnight, every hour the water sits allows it to migrate beneath flooring and into wall cavities. Do not walk through standing water near electrical outlets; call us for a 60-minute emergency response.`,
      },
      {
        title: 'Your Ceiling Is Sagging or Dripping',
        description: `A sagging or discolored ceiling usually means water is pooling above the drywall, often from a pinhole pipe leak, an overflowing HVAC drip pan, or a roof breach after rain. The weight of trapped water can cause a ceiling collapse without warning, creating both a safety hazard and a significantly larger restoration scope. We carefully drain and remove the saturated material, then trace the leak back to its source.`,
      },
      {
        title: 'Your Toilet Has Overflowed and Won\'t Stop',
        description: `A sewage overflow is classified as Category 3 (black water) contamination, which requires specialized extraction and antimicrobial treatment. Raw sewage contains bacteria, viruses, and parasites that can pose serious health risks within hours. Shut off the toilet supply valve, keep people and pets out of the affected area, and call us for hazardous water extraction and full sanitization.`,
      },
      {
        title: 'You Notice a Musty Smell but Can\'t Find the Source',
        description: `A persistent musty odor often indicates hidden moisture trapped behind walls, under flooring, or inside HVAC ductwork. By the time you smell it, microbial growth may already be underway in concealed cavities. We use thermal imaging cameras and pinless moisture meters to locate the moisture source without unnecessary demolition, then dry and treat the affected areas.`,
      },
      {
        title: 'Your Dishwasher or Washing Machine Supply Line Burst',
        description: `Braided stainless steel supply lines and rubber hoses are the number one cause of catastrophic residential water damage in homes over ten years old. A burst supply line behind a washing machine can release water at full municipal pressure, flooding laundry rooms, hallways, and adjacent living spaces within minutes. Turn off the main water shutoff and call us before the water reaches hardwood floors or drywall seams.`,
      },
      {
        title: 'Water Is Seeping Up Through Your Slab Foundation',
        description: `Slab leaks are particularly common in older Carlsbad and Oceanside homes built on clay-heavy soils. You may notice warm spots on tile floors, unexplained increases in your water bill, or the sound of running water when all fixtures are off. Slab leaks require professional detection and targeted extraction because the moisture migrates laterally under flooring in ways that are invisible from above.`,
      },
      {
        title: 'Your Home Was Affected by a Storm or Heavy Rain',
        description: `San Diego County averages only 10 to 12 inches of rain per year, but when storms hit, they often overwhelm aging drainage systems and expose vulnerabilities in roofs, windows, and grading. Flash flooding in low-lying areas of Vista, Oceanside, and San Marcos can send water into garages and ground-floor living spaces. We provide emergency tarping, water extraction, and structural drying to prevent long-term damage.`,
      },
      {
        title: 'Your HVAC System Is Leaking Water Inside',
        description: `A clogged condensate drain line, cracked drip pan, or frozen evaporator coil can cause your air conditioning unit to leak water into ceilings, walls, and attic spaces. Because HVAC leaks are often slow and hidden, the damage may be extensive by the time you notice wet spots. We inspect the full condensate path, extract trapped moisture from insulation and framing, and coordinate with your HVAC contractor for the mechanical repair.`,
      },
      {
        title: 'You Discovered a Pipe Leak Behind a Wall',
        description: `Pinhole leaks in copper pipes are increasingly common in North San Diego County due to the region's hard water and mineral-heavy supply. These leaks can run for weeks inside wall cavities before showing visible signs like paint bubbling, baseboard warping, or mold growth. We perform controlled demolition to access the affected area, extract and dry the wall cavity, and rebuild once moisture readings confirm the structure is dry.`,
      },
    ],

    whatsIncluded: [
      {
        title: 'Emergency Water Extraction',
        description: `Our extraction process begins within 60 minutes of your call. Technicians deploy truck-mounted extractors capable of removing thousands of gallons per hour, followed by weighted wand extraction on carpets and hard surfaces to pull water from padding and subfloor materials. We continue extraction until moisture readings at the surface drop below actionable thresholds, typically completing initial extraction within two to four hours for a standard residential loss.`,
        equipment: 'Truck-mounted extractors, portable submersible pumps, weighted carpet wands',
      },
      {
        title: 'Structural Drying and Dehumidification',
        description: `After extraction, we place commercial-grade drying equipment throughout the affected areas. Low-grain refrigerant (LGR) dehumidifiers pull moisture from the air while high-velocity air movers create directed airflow across wet surfaces and into wall cavities. We monitor drying progress daily with pin-type and pinless moisture meters, adjusting equipment placement as conditions change. Structural drying typically takes three to five days depending on material types and saturation depth.`,
        equipment: 'LGR dehumidifiers, high-velocity air movers, injectidry wall drying systems',
      },
      {
        title: 'Moisture Mapping and Documentation',
        description: `Every water damage project begins with a thorough moisture inspection using infrared thermal imaging and calibrated moisture meters. We create a detailed moisture map documenting wet and dry zones across floors, walls, and ceilings, which becomes part of your insurance claim file. This documentation ensures nothing is missed and provides the adjuster with clear evidence of the damage scope, helping your claim move through approval faster.`,
        equipment: 'FLIR thermal imaging cameras, Protimeter pin and pinless moisture meters',
      },
      {
        title: 'Antimicrobial Treatment and Sanitization',
        description: `All extracted and exposed areas receive a professional-grade antimicrobial application to inhibit mold and bacterial growth during the drying period. For Category 2 (gray water) and Category 3 (black water) losses, we perform full sanitization of all affected surfaces and apply EPA-registered disinfectants. Contents in the affected area are evaluated, cleaned, or tagged for professional off-site cleaning depending on contamination level.`,
        equipment: 'ULV foggers, pump sprayers, EPA-registered antimicrobials and disinfectants',
      },
      {
        title: 'Content Pack-Out and Storage',
        description: `When water threatens furniture, electronics, documents, or personal belongings, our team inventories and carefully packs out affected contents to our climate-controlled storage facility in Carlsbad. Each item is catalogued with photos and descriptions for your insurance claim. Items are professionally cleaned, deodorized, and returned once your home restoration is complete. Most insurance policies cover pack-out and storage costs for the duration of the project.`,
        equipment: 'Inventory management system, climate-controlled storage facility, ultrasonic cleaning equipment',
      },
      {
        title: 'Insurance Coordination and Claims Support',
        description: `We work directly with all major insurance carriers serving North San Diego County, including State Farm, Allstate, USAA, Farmers, and Liberty Mutual. Our project managers document the loss using Xactimate estimating software, the same platform your adjuster uses, so there is a common language for scope and pricing from day one. We handle supplement requests, adjuster meetings, and scope approvals so you can focus on your family rather than paperwork.`,
      },
      {
        title: 'Controlled Demolition and Material Removal',
        description: `Water-damaged drywall, insulation, baseboards, and flooring often need to be removed to allow proper drying of the structural framing behind them. Our technicians perform selective demolition along flood cut lines, typically removing drywall 12 to 24 inches above the visible water line to account for capillary wicking. All debris is hauled away, and exposed framing is treated with antimicrobials before drying equipment is directed into the open cavities.`,
        equipment: 'Reciprocating saws, pry bars, industrial debris hauling',
      },
      {
        title: 'Full Reconstruction and Rebuild',
        description: `Once the structure is confirmed dry, our in-house reconstruction team handles every phase of the rebuild: hanging and finishing drywall, installing baseboards and trim, painting, laying flooring, and rebuilding cabinetry. Because we handle both mitigation and reconstruction under one roof, there is no gap between the drying phase and the rebuild phase. Most residential water damage rebuilds are completed within two to four weeks after drying is confirmed.`,
      },
    ],

    recentProjects: [
      {
        title: 'La Costa Kitchen Supply Line Failure',
        location: 'La Costa, Carlsbad',
        summary: `A braided stainless steel supply line under the kitchen sink failed while the homeowner was traveling, releasing water for approximately 18 hours before a neighbor noticed water seeping from the garage. The kitchen, dining room, hallway, and two bedrooms sustained significant water damage with standing water up to two inches deep. We completed extraction in under four hours, ran structural drying for five days, then performed a full kitchen rebuild including new cabinetry, flooring, and drywall throughout all affected rooms.`,
        scope: '5 rooms affected, 5 days structural drying, full kitchen and flooring rebuild',
      },
      {
        title: 'Oceanside Slab Leak and Flooring Replacement',
        location: 'Fire Mountain, Oceanside',
        summary: `The homeowner noticed warm spots on their living room tile and a gradual increase in their water bill over two months. Our leak detection confirmed a hot water slab leak beneath the living room. After the plumber rerouted the line, we extracted moisture from the slab, ran drying equipment for four days until moisture readings returned to baseline, and replaced approximately 800 square feet of tile and engineered hardwood flooring throughout the main living areas.`,
        scope: '3 rooms, 4 days drying, 800 sq ft flooring replacement, drywall repairs',
      },
      {
        title: 'Encinitas Second-Story Bathroom Overflow',
        location: 'Leucadia, Encinitas',
        summary: `A second-floor bathtub overflow caused water to cascade through the subfloor, damaging the first-floor living room ceiling, walls, and hardwood floors. By the time we arrived, the ceiling drywall was fully saturated and beginning to sag. We performed an emergency ceiling drain and removal, extracted water from both floors, dried the structure over four days, then rebuilt the first-floor ceiling, refinished hardwood floors, and repaired the second-floor bathroom subfloor.`,
        scope: '2 floors, 4 rooms, 4 days drying, ceiling rebuild, hardwood floor refinishing',
      },
    ],

    deepDiveTitle: 'Understanding the Water Damage Restoration Timeline',
    deepDiveContent: `The single most important factor in the outcome of any water damage event is how quickly drying begins. Industry research from the IICRC S500 standard shows that mold can begin colonizing damp materials within 24 to 48 hours under favorable conditions, and structural materials like OSB subflooring and dimensional lumber start to swell and weaken once moisture content exceeds 19 percent. This is why our 60-minute response commitment exists: every hour of delay increases the likelihood that materials which could have been saved will need to be removed and replaced, driving up both cost and project duration.\n\nWhat most homeowners do not realize is that visible water represents only a fraction of the total moisture present after a leak or flood. Water follows gravity and capillary action simultaneously, traveling downward through flooring layers while wicking upward through drywall and insulation. A kitchen supply line leak that produces one inch of standing water on the surface may have already driven moisture 12 to 18 inches up into surrounding walls and saturated the subfloor across an area much larger than the visible puddle. This is why professional-grade moisture detection equipment is essential. Our thermal imaging cameras can identify temperature differentials that indicate trapped moisture, and our pin-type meters can measure moisture content deep within wood framing to confirm whether a wall cavity needs to be opened for drying.\n\nThe structural drying phase is where professional restoration diverges most from DIY cleanup. Simply running household fans or opening windows is not sufficient to dry wall cavities, subfloor layers, or insulation. Commercial LGR dehumidifiers remove moisture at rates 10 to 15 times faster than consumer units, and strategically placed air movers create the evaporation conditions necessary to pull water out of porous materials. We take daily moisture readings at multiple checkpoints throughout the drying process, and equipment stays in place until every reading falls within the IICRC dry standard for that material type. Removing equipment too early is one of the most common causes of secondary mold growth, and it is a mistake we never make.`,
  },

  // -------------------------------------------------------
  // MOLD REMOVAL
  // -------------------------------------------------------
  'mold-removal': {
    whenToCall: [
      {
        title: 'You Can See Visible Mold Growth on Walls or Ceilings',
        description: `Visible mold colonies on drywall, ceiling tiles, or wood framing indicate an active moisture problem that has been present long enough for spores to colonize. Surface mold you can see almost always means more extensive growth behind the wall or above the ceiling. Do not attempt to clean it with bleach or household products, as disturbing the colony without proper containment spreads spores throughout your HVAC system and into unaffected rooms.`,
      },
      {
        title: 'Your Home Has a Persistent Musty or Earthy Smell',
        description: `Mold produces microbial volatile organic compounds (MVOCs) as it digests organic materials, creating that distinctive musty, earthy odor. If you notice this smell consistently in certain rooms, closets, or near HVAC vents, there is likely concealed mold growth somewhere in the air pathway. The odor often intensifies in humid conditions or when the HVAC system cycles on, pulling contaminated air from affected wall cavities into your living space.`,
      },
      {
        title: 'You or Your Family Are Experiencing Unexplained Allergy Symptoms',
        description: `Chronic nasal congestion, sneezing, itchy eyes, headaches, or respiratory irritation that improves when you leave the house and returns when you come home is a classic pattern of mold exposure. Children, elderly family members, and individuals with asthma or compromised immune systems are particularly sensitive to airborne mold spores. A professional mold inspection can determine whether elevated spore counts in your indoor air are the cause.`,
      },
      {
        title: 'You Recently Had Water Damage That Was Not Professionally Dried',
        description: `If your home experienced a leak, flood, or plumbing failure in the past and the cleanup was handled without commercial drying equipment, there is a high probability that residual moisture in wall cavities, subfloors, or insulation has led to concealed mold growth. It is not uncommon for us to find mold colonies that began growing months or even years after a water event that was thought to be resolved with towels and household fans.`,
      },
      {
        title: 'You Found Mold in Your HVAC System or Ductwork',
        description: `Mold growth inside air handlers, on evaporator coils, or within ductwork is one of the most serious indoor air quality problems because the HVAC system actively distributes spores to every room in the house. If you see dark discoloration on vent registers, notice a musty smell when the system runs, or an HVAC technician flags mold during a service call, contact us for a full HVAC mold assessment and remediation plan.`,
      },
      {
        title: 'Your Home Inspector Found Mold During a Real Estate Transaction',
        description: `Mold findings during a home inspection can delay or derail a real estate transaction if not addressed properly and documented with clearance testing. Buyers, sellers, and agents all benefit from a fast, professional remediation with third-party post-clearance verification. We regularly work within escrow timelines in the North San Diego County market, completing remediation and obtaining clearance testing within five to ten business days.`,
      },
      {
        title: 'You Discovered Mold Behind Furniture or Inside Closets',
        description: `Mold frequently grows on exterior walls behind large furniture pieces, inside closets against exterior walls, and in corners where air circulation is limited. These areas trap moisture from humidity, condensation, or minor leaks, creating a microenvironment ideal for mold colonization. If you moved a dresser or opened a closet and found dark staining or fuzzy growth on the wall surface, the colony likely extends behind the drywall as well.`,
      },
      {
        title: 'You See Discoloration or Staining on Your Bathroom Ceiling',
        description: `Bathroom ceilings, particularly in bathrooms without adequate exhaust ventilation, are prime locations for mold growth. The combination of daily steam, warm temperatures, and poor airflow creates conditions that support mold colonies on ceiling drywall and in the attic insulation above. Dark spots or staining that you cannot wipe clean, or that returns after cleaning, indicate mold that has penetrated into the drywall substrate.`,
      },
      {
        title: 'Your Crawl Space or Attic Has Visible Mold or Excessive Moisture',
        description: `Crawl spaces and attics in coastal North San Diego County homes are particularly susceptible to mold due to marine layer humidity and temperature fluctuations that cause condensation on framing members. If you see white, green, or black growth on floor joists, roof sheathing, or insulation, or if the crawl space smells damp and earthy, professional remediation is needed before the contamination spreads to the living space above or below.`,
      },
      {
        title: 'Your Tenant or Property Manager Reported a Mold Complaint',
        description: `California landlord-tenant law requires property owners to address mold complaints promptly, and failure to remediate known mold conditions can expose landlords to significant liability. If a tenant reports visible mold or mold-related health symptoms, a professional inspection and remediation protects both the tenants and the property owner. We provide detailed documentation including pre-remediation assessment, scope of work, and post-clearance testing to demonstrate compliance.`,
      },
    ],

    whatsIncluded: [
      {
        title: 'Professional Mold Inspection and Assessment',
        description: `Every mold project begins with a comprehensive visual inspection and moisture survey to identify the full extent of contamination and the underlying moisture source. We use infrared thermography to detect moisture in concealed areas and collect air and surface samples for third-party laboratory analysis when needed. The assessment produces a detailed scope of work that defines containment boundaries, removal methods, and clearance criteria before any remediation begins.`,
        equipment: 'FLIR thermal imaging cameras, calibrated moisture meters, air sampling cassettes, surface tape lifts',
      },
      {
        title: 'Engineering-Grade Containment',
        description: `Before any mold-impacted material is disturbed, we construct full containment barriers using 6-mil polyethylene sheeting, sealed at all seams with poly tape and anchored with spring-loaded poles. Negative air pressure is established inside the containment zone using HEPA-filtered air scrubbers, which continuously exhaust filtered air to the exterior of the home. This prevents mold spores released during demolition from migrating into clean areas of the house, protecting your family and unaffected rooms.`,
        equipment: 'HEPA air scrubbers, 6-mil poly sheeting, negative air machines with manometers',
      },
      {
        title: 'Safe Removal of Mold-Contaminated Materials',
        description: `All mold-impacted porous materials including drywall, insulation, carpet, and tack strip are carefully removed within the sealed containment zone. Our technicians wear full personal protective equipment including half-face respirators with P100 filters and disposable Tyvek suits. Removed materials are double-bagged in 6-mil contractor bags, sealed with tape, and carried directly out of the containment through a designated exit path to prevent cross-contamination.`,
        equipment: 'P100 respirators, Tyvek suits, HEPA vacuums, 6-mil disposal bags',
      },
      {
        title: 'HEPA Vacuuming and Surface Treatment',
        description: `After contaminated materials are removed, all remaining structural surfaces within the containment zone are HEPA vacuumed to remove residual spores from wood framing, concrete, and other non-porous substrates. Surfaces are then treated with a professional-grade antimicrobial solution and, where appropriate, encapsulated with a mold-resistant coating. This two-step process ensures that remaining structural members are decontaminated and resistant to future colonization.`,
        equipment: 'HEPA-filtered vacuums, antimicrobial applicators, mold-resistant encapsulants',
      },
      {
        title: 'Air Scrubbing and Spore Count Reduction',
        description: `Throughout the remediation process and for 24 to 48 hours after material removal is complete, HEPA air scrubbers run continuously inside the containment zone to capture airborne spores down to 0.3 microns. We also run air scrubbers in adjacent rooms as a precaution. Before containment is removed, a third-party industrial hygienist or environmental testing firm collects post-remediation air samples to verify that airborne spore counts have returned to normal background levels.`,
        equipment: 'HEPA air scrubbers rated at 500-2000 CFM, particle counters',
      },
      {
        title: 'Third-Party Clearance Testing and Verification',
        description: `We never self-certify our own mold remediation work. Once we are satisfied that remediation is complete, an independent third-party testing company collects air and surface samples from both inside the containment zone and from unaffected reference areas. Samples are analyzed by an accredited laboratory, and a clearance report is issued documenting that spore counts meet acceptable thresholds. We do not remove containment or begin reconstruction until clearance is achieved.`,
      },
      {
        title: 'Moisture Source Identification and Correction',
        description: `Removing mold without fixing the moisture source guarantees the problem will return. As part of every remediation project, we identify the underlying moisture condition driving the mold growth, whether that is a plumbing leak, inadequate ventilation, poor drainage grading, or missing vapor barriers in crawl spaces. We either correct the moisture source directly or coordinate with plumbers, HVAC technicians, or drainage contractors to ensure the condition is resolved before reconstruction begins.`,
        equipment: 'Moisture meters, borescopes for wall cavity inspection, hygrometers',
      },
      {
        title: 'Reconstruction with Mold-Resistant Materials',
        description: `After clearance is achieved, our reconstruction team rebuilds affected areas using moisture- and mold-resistant materials wherever possible. This includes paperless drywall or fiberglass-faced gypsum board in high-humidity areas, mold-resistant insulation, and mildew-resistant paint. In bathrooms and kitchens, we recommend upgraded exhaust ventilation to prevent future moisture accumulation. The reconstruction phase typically takes one to two weeks depending on the size and complexity of the project.`,
      },
    ],

    recentProjects: [
      {
        title: 'Hidden Crawl Space Mold in Coastal Home',
        location: 'Village Park, Encinitas',
        summary: `A homeowner preparing to sell their Encinitas home discovered extensive mold growth on the floor joists and subfloor throughout the crawl space during a pre-listing inspection. The marine layer humidity combined with a missing vapor barrier had allowed moisture to accumulate for years. We contained the crawl space, HEPA vacuumed and treated over 1,200 square feet of framing, installed a 12-mil vapor barrier across the entire crawl space floor, and obtained third-party clearance within eight business days, keeping the listing on schedule.`,
        scope: '1,200 sq ft crawl space, full joist treatment, vapor barrier installation, clearance in 8 days',
      },
      {
        title: 'Post-Leak Mold Behind Master Bathroom Walls',
        location: 'Shadowridge, Vista',
        summary: `After a slow shower valve leak was repaired by a plumber, the homeowner noticed a musty smell persisting in the master suite. Our inspection revealed Stachybotrys (black mold) growth across 14 linear feet of wall cavity behind the shower, extending into the adjacent bedroom closet. We built full containment, removed and disposed of all impacted drywall and insulation, treated the framing, and rebuilt both walls with moisture-resistant materials. Third-party air testing confirmed clearance on the first attempt.`,
        scope: '2 rooms, 14 linear ft of wall remediation, full rebuild with moisture-resistant drywall',
      },
      {
        title: 'Multi-Unit Mold Remediation in Oceanside Condo',
        location: 'Downtown, Oceanside',
        summary: `A second-floor condo unit experienced recurring mold growth on an exterior-facing bedroom wall that had been painted over multiple times by previous owners. Our assessment determined that the building envelope lacked a proper weather-resistant barrier, allowing moisture intrusion during rain events. We remediated the interior mold contamination in the bedroom, hallway, and closet, then coordinated with the HOA and an exterior contractor to address the building envelope deficiency on the outside wall. Clearance testing confirmed successful remediation across all affected areas.`,
        scope: '3 rooms, exterior envelope coordination with HOA, clearance testing, 12 days total',
      },
    ],

    deepDiveTitle: 'What Homeowners Should Know About Mold Remediation',
    deepDiveContent: `One of the most common misconceptions about mold is that killing it solves the problem. Bleach, vinegar, and over-the-counter mold sprays may kill surface mold on non-porous materials, but they do not address mold that has colonized porous substrates like drywall, wood, and insulation. Even dead mold spores remain allergenic and can continue to cause respiratory symptoms. The IICRC S520 standard for professional mold remediation requires physical removal of contaminated porous materials, not just surface treatment. This is why remediation involves cutting out and disposing of affected drywall and insulation rather than simply spraying chemicals on visible growth. The goal is to return the indoor environment to normal fungal ecology, meaning the types and concentrations of mold spores inside should match what is found in the outdoor air.\n\nThe role of containment during remediation cannot be overstated. A single square foot of mold-contaminated drywall can release millions of spores when disturbed during demolition. Without proper containment and negative air pressure, those spores travel through the house via natural air currents and HVAC systems, potentially contaminating rooms that were previously clean. This is the primary reason why DIY mold removal frequently makes the problem worse. Professional containment uses sealed polyethylene barriers and HEPA-filtered negative air machines to ensure that every spore released during removal is captured and filtered, not redistributed. Post-remediation clearance testing by an independent lab confirms that the containment strategy worked and that the air in your home is safe.\n\nHomeowners in North San Diego County should be aware that coastal humidity plays a significant role in mold risk, even without a water damage event. Homes within a few miles of the coast, particularly in Carlsbad, Encinitas, Oceanside, and Del Mar, experience sustained relative humidity levels above 60 percent during marine layer conditions from May through September. When this humid air enters cooler interior spaces such as closets on exterior walls, poorly ventilated bathrooms, or enclosed crawl spaces, condensation forms and creates ideal conditions for mold growth. Ensuring adequate ventilation, using bathroom exhaust fans that vent to the exterior, and maintaining indoor humidity below 55 percent with dehumidification are the most effective preventive measures.`,
  },

  // -------------------------------------------------------
  // FIRE DAMAGE RESTORATION
  // -------------------------------------------------------
  'fire-damage-restoration': {
    whenToCall: [
      {
        title: 'Your Home Has Sustained Fire Damage of Any Size',
        description: `Whether the fire was contained to a single room or affected multiple areas of your home, professional restoration is necessary to address structural damage, smoke residue, and odor that spread far beyond the area of direct flame contact. Even a small kitchen fire can deposit corrosive soot particles throughout the house via the HVAC system. Call us as soon as the fire department clears the scene so we can begin stabilization before secondary damage sets in.`,
      },
      {
        title: 'You Have Smoke Damage but No Visible Fire Damage',
        description: `A fire in an adjacent unit, a nearby wildfire, or even a contained stovetop flare-up can fill your home with smoke without producing direct flame damage. Smoke residue is acidic and corrosive, and it begins permanently staining surfaces, discoloring metals, and degrading electronics within 24 to 72 hours if not professionally cleaned. The sooner smoke residue is addressed, the more belongings and finishes can be saved rather than replaced.`,
      },
      {
        title: 'Your Kitchen Had a Grease Fire or Cooking Fire',
        description: `Kitchen fires are the most common residential fire type in San Diego County. Grease fires produce thick, protein-based soot that is extremely adhesive and requires specialized chemical cleaning agents to remove. Even when the fire was quickly extinguished, the heat and soot typically damage cabinetry, countertops, walls, and ceiling finishes, and the smell of burnt grease permeates soft goods throughout the home. We address both the structural damage and the pervasive odor.`,
      },
      {
        title: 'A Wildfire or Brush Fire Produced Smoke and Ash Exposure',
        description: `North San Diego County is in a high-risk wildfire zone, and homes in communities like Rancho Santa Fe, Fallbrook, and the hillside neighborhoods of Carlsbad, Vista, and San Marcos can sustain significant smoke and ash damage during fire season even without direct flame contact. Wildfire ash is alkaline and can damage roofing, HVAC systems, exterior paint, and landscaping. We provide comprehensive exterior and interior smoke and ash cleanup to prevent long-term corrosion and contamination.`,
      },
      {
        title: 'An Electrical Fire Occurred in Your Walls or Attic',
        description: `Electrical fires often burn undetected inside wall cavities and attic spaces before being discovered, causing structural damage to framing members that is not visible from the exterior. Even after the fire is out, charred framing must be evaluated by a structural engineer and either treated or replaced. We perform controlled demolition to expose and assess all fire-damaged framing, then coordinate structural engineering, electrical, and reconstruction to bring the home back to code.`,
      },
      {
        title: 'Your Garage or Attached Structure Caught Fire',
        description: `Garage fires are particularly damaging because they often involve flammable liquids, stored chemicals, and vehicles, producing toxic soot and intense heat that can compromise the structural connection between the garage and the main living space. Smoke and heat frequently penetrate the firewall between the garage and the house, contaminating interior air and surfaces. We address both the direct fire damage in the garage and the smoke migration into the living areas.`,
      },
      {
        title: 'The Fire Department Used Water and Your Home Has Water Damage Too',
        description: `Fire suppression efforts often introduce thousands of gallons of water into a structure, creating a combined fire and water damage scenario that requires both disciplines of restoration. Water from fire hoses saturates framing, insulation, flooring, and drywall that may not have been directly affected by fire or smoke. We begin water extraction and drying simultaneously with fire damage assessment to prevent mold growth from compounding the fire loss.`,
      },
      {
        title: 'Your Home Smells Like Smoke and the Odor Will Not Go Away',
        description: `Smoke odor persists because microscopic soot particles embed themselves in porous materials like drywall, carpet, upholstery, clothing, and even concrete. Household air fresheners and ozone generators mask or partially reduce the odor but do not eliminate the source. Professional smoke odor removal requires cleaning all surfaces to remove soot residue, sealing porous surfaces with odor-blocking primers, and using thermal fogging or hydroxyl generators to neutralize residual odor molecules in materials that cannot be cleaned or removed.`,
      },
      {
        title: 'Your Insurance Company Wants You to Choose a Restoration Contractor',
        description: `After a fire, your insurance carrier will often provide a list of preferred vendors, but you have the legal right to choose any licensed restoration contractor in California. Selecting a contractor who handles both mitigation and reconstruction means a single point of accountability for the entire project. We work with all major carriers and submit detailed Xactimate estimates that align with insurance pricing guidelines, reducing delays and supplement disputes.`,
      },
      {
        title: 'You Need Emergency Board-Up or Tarping After a Fire',
        description: `A fire-damaged home with broken windows, compromised roofing, or burned-through walls is vulnerable to weather, theft, and animal intrusion. Emergency board-up and tarping should be completed within hours of the fire department clearing the scene. We provide 24/7 emergency securing services including plywood board-up of all openings, roof tarping over fire-damaged sections, and temporary fencing when needed to protect the property until restoration begins.`,
      },
    ],

    whatsIncluded: [
      {
        title: 'Emergency Board-Up and Property Securing',
        description: `Within hours of fire department clearance, our team secures the property against weather, intrusion, and further damage. All broken windows and compromised door frames are boarded with half-inch plywood and fastened to surviving framing. Damaged roof sections are covered with heavy-duty tarps anchored to prevent wind uplift. We also secure any utility shutoffs and coordinate with the gas and electric company to ensure the structure is safe before restoration crews enter.`,
        equipment: 'Half-inch plywood, heavy-duty tarps, cordless fastening systems, temporary fencing',
      },
      {
        title: 'Structural Assessment and Damage Evaluation',
        description: `Our project managers conduct a room-by-room assessment documenting the extent of fire, smoke, and water damage using photographs, video, and detailed written descriptions. We categorize damage by severity: direct flame damage, heat damage, smoke and soot damage, and water damage from suppression efforts. This assessment determines which structural members need replacement versus treatment, and it forms the basis of the Xactimate estimate submitted to your insurance carrier. We coordinate with structural engineers when framing integrity is in question.`,
        equipment: 'Moisture meters, structural assessment tools, Xactimate estimating software',
      },
      {
        title: 'Smoke and Soot Removal from All Surfaces',
        description: `Soot removal requires different techniques depending on the type of fire and the surfaces affected. Protein-based soot from kitchen fires requires alkaline cleaning agents, while synthetic soot from plastics and furnishings requires solvent-based cleaners. Our technicians use dry chemical sponges for initial soot removal from walls and ceilings, followed by wet cleaning with appropriate solutions. Hard surfaces, woodwork, and fixtures are hand-cleaned and deodorized. All cleaning is completed before painting or sealing to prevent soot bleed-through.`,
        equipment: 'Chemical sponges, alkaline and solvent-based cleaners, HEPA vacuums, detail cleaning tools',
      },
      {
        title: 'Professional Smoke Odor Elimination',
        description: `Smoke odor elimination is a multi-step process that goes far beyond surface cleaning. After all soot is removed, we seal porous surfaces with shellac-based odor-blocking primers that permanently trap residual odor molecules. For pervasive odor in HVAC systems, wall cavities, and attic spaces, we deploy thermal foggers that produce a heated deodorizing mist capable of penetrating the same pathways smoke traveled during the fire. Hydroxyl generators run continuously during the project to break down airborne odor compounds without the safety concerns associated with ozone.`,
        equipment: 'Thermal foggers, hydroxyl generators, shellac-based sealers, HVAC deodorization equipment',
      },
      {
        title: 'Content Cleaning, Pack-Out, and Restoration',
        description: `Personal belongings affected by smoke and soot are carefully inventoried, packed, and transported to our cleaning facility for professional restoration. Soft goods including clothing, linens, and draperies go through specialized laundering and ozone treatment. Hard goods are hand-cleaned with appropriate solvents. Electronics are evaluated for soot contamination of internal components. Documents, photographs, and artwork receive individual assessment and, when possible, specialized conservation treatment. A detailed inventory with pre-cleaning and post-cleaning photos supports your insurance claim.`,
        equipment: 'Ultrasonic cleaning equipment, ozone chambers, textile restoration systems',
      },
      {
        title: 'Water Extraction from Fire Suppression',
        description: `Fire suppression water is classified as Category 2 (gray water) due to contamination from soot, chemicals, and debris. We extract suppression water using truck-mounted equipment and weighted wands, then deploy structural drying equipment to prevent mold growth in water-affected areas. This dual-track approach, addressing fire and water damage simultaneously, prevents the secondary damage that occurs when suppression water sits in a structure during fire damage assessment and planning.`,
        equipment: 'Truck-mounted extractors, LGR dehumidifiers, air movers, moisture meters',
      },
      {
        title: 'Complete Structural Reconstruction',
        description: `Our in-house reconstruction team manages the full rebuild from framing to final finishes. This includes replacing fire-damaged framing and sheathing, running new electrical and plumbing where original systems were destroyed, hanging and finishing drywall, installing flooring, cabinetry, countertops, and trim, and completing interior and exterior painting. We pull all necessary building permits and schedule inspections with the local jurisdiction. Fire damage rebuilds typically range from four to twelve weeks depending on the scope of structural replacement required.`,
      },
      {
        title: 'Insurance Claims Management',
        description: `Fire losses are among the most complex insurance claims a homeowner will ever file. Our project managers handle the entire claims process including initial loss documentation, Xactimate scope and estimate preparation, adjuster coordination, supplement requests for hidden damage discovered during demolition, and line-item reconciliation. We attend all adjuster site visits and advocate for full coverage of the documented damage. Our team has managed hundreds of fire claims with carriers across North San Diego County.`,
      },
    ],

    recentProjects: [
      {
        title: 'Kitchen Fire and Whole-Home Smoke Damage',
        location: 'Bressi Ranch, Carlsbad',
        summary: `A grease fire on the stovetop spread to the overhead microwave and upper cabinetry before being extinguished by the homeowner. While the fire damage was limited to the kitchen, heavy protein-based soot traveled through the HVAC system and deposited on surfaces in every room of the 2,400-square-foot home. We performed a full content pack-out of the entire house, cleaned all surfaces and HVAC ductwork, sealed walls and ceilings with odor-blocking primer, rebuilt the kitchen from the studs out with new cabinetry, countertops, flooring, and appliances, and repainted every room in the home.`,
        scope: 'Kitchen rebuild, whole-home soot cleaning, HVAC decontamination, full interior repaint, 6 weeks',
      },
      {
        title: 'Garage Electrical Fire with Structural Damage',
        location: 'Rancho del Oro, Oceanside',
        summary: `An electrical fault in the garage panel ignited a fire that burned through the garage ceiling, damaging the roof trusses and penetrating the firewall into the adjacent laundry room and hallway. We boarded up the structure within three hours of fire department clearance, extracted over 2,000 gallons of suppression water, then began demolition of the garage and affected interior areas. A structural engineer designed replacement trusses, and our team completed the full reconstruction including new electrical panel, garage rebuild, roof repair, and interior restoration of the laundry room, hallway, and two bedrooms affected by smoke.`,
        scope: 'Garage and 3 rooms, structural truss replacement, electrical panel, roof repair, 10 weeks',
      },
      {
        title: 'Hillside Home Smoke Damage from Nearby Brush Fire',
        location: 'Twin Oaks Valley, San Marcos',
        summary: `A brush fire on adjacent open space produced heavy smoke exposure to a hillside home, with ash and soot infiltrating through attic vents, HVAC intakes, and gaps in the building envelope. While the home had no direct flame contact, every interior surface was coated in a thin layer of wildfire ash, and the smoke odor was severe throughout the house. We cleaned all interior surfaces across 3,200 square feet, replaced attic insulation contaminated by ash infiltration, cleaned and sealed the HVAC system, ran thermal foggers and hydroxyl generators for five days, and replaced all soft flooring throughout the home.`,
        scope: 'Whole-home cleaning (3,200 sq ft), attic insulation replacement, HVAC decontamination, 3 weeks',
      },
    ],

    deepDiveTitle: 'The Hidden Complexity of Fire Damage Restoration',
    deepDiveContent: `What surprises most homeowners after a fire is how far smoke and soot travel beyond the area of direct flame contact. Smoke follows air currents and pressure differentials, migrating through HVAC ductwork, electrical and plumbing penetrations in walls, and even the gaps around door frames and outlet covers. It is common for us to find soot contamination in rooms on the opposite end of the house from the fire origin, inside closed dresser drawers, on dishes in closed kitchen cabinets, and coating the interior surfaces of electronics. This is why a fire that appears confined to one room frequently requires cleaning and deodorization of the entire structure. The type of soot also matters significantly: natural materials like wood produce a dry, powdery soot that is relatively easy to clean, while synthetic materials like plastics, nylon carpet, and polyester upholstery produce a sticky, oily soot that smears and stains permanently if not cleaned with the correct solvent within the first 48 to 72 hours.\n\nThe fire suppression water used by the fire department creates a second, parallel restoration challenge. Thousands of gallons of water applied during suppression efforts saturate flooring, wall cavities, and insulation, and this water becomes contaminated with dissolved soot, ash, and combustion byproducts as it flows through the burned areas. If not extracted and dried within 24 to 48 hours, this contaminated water will trigger mold growth in framing and subfloor materials that survived the fire itself. We address fire and water damage simultaneously from the first day on site, running extraction and drying equipment in water-affected areas while our fire damage team works on soot removal and structural assessment in other zones of the house.\n\nInsurance claims for fire damage are significantly more complex than water or mold claims because they typically involve three overlapping categories: structural damage, contents loss, and additional living expenses while the home is uninhabitable. A thorough initial assessment and ongoing documentation of hidden damage discovered during demolition are critical to ensuring the claim reflects the true cost of restoration. We frequently submit supplements when opening walls reveals fire travel or smoke damage that was not visible during the initial inspection. Our project managers track every line item against the insurance estimate and communicate directly with the adjuster throughout the project, reducing the burden on the homeowner during an already stressful time.`,
  },


  // =====================================================================
  // FLOOD CLEANUP
  // =====================================================================
  'flood-cleanup': {
    whenToCall: [
      {
        title: 'Storm Water is Entering Your Home',
        description: `Heavy rain or a sudden storm has pushed water through doorways, window wells, or foundation cracks and it is pooling on your floors. Even a quarter inch of standing water can saturate carpet padding and wick into drywall within minutes. Shut off electricity to affected areas if you can do so safely and call us immediately so extraction can begin before structural damage sets in.`,
      },
      {
        title: 'Your Sump Pump Has Failed',
        description: `You hear the pump cycling without discharging, or it has stopped running entirely while groundwater continues to rise in your basement or crawl space. A failed sump pump during a rain event can flood a below-grade area in under an hour. Call us right away so we can deploy portable submersible pumps and get the water out before it reaches finished walls and stored belongings.`,
      },
      {
        title: 'Streets Near Your Home Are Flooding',
        description: `Water is sheeting across roadways and approaching your property line, or storm drains in your neighborhood are overflowing. Rising street-level water carries oil, chemicals, and debris that qualify it as Category 2 or Category 3 contamination once it enters your home. Act before the water breaches your threshold by sandbagging entry points and contacting us for standby rapid response.`,
      },
      {
        title: 'A Retaining Wall Has Failed and Mud is Flowing Toward Your House',
        description: `Saturated hillside soil has collapsed a retaining wall and mud-laden water is moving toward your foundation. This is common on sloped lots throughout Carlsbad, Encinitas, and San Marcos after prolonged rain. The combination of hydrostatic pressure and sediment load can crack foundation walls, so immediate water diversion and extraction are critical.`,
      },
      {
        title: 'Your Washing Machine Supply Line Has Burst',
        description: `A braided steel or rubber supply hose has ruptured while you were away, and the washer has been flowing unchecked for hours. A single supply line can discharge five to seven gallons per minute, meaning a home left unattended for a workday can take on thousands of gallons. Shut off the water at the main valve and call us to begin high-volume extraction before subfloor layers delaminate.`,
      },
      {
        title: 'You Returned Home to Standing Water After Vacation',
        description: `You opened the door to find inches of water throughout your ground floor with no obvious cause. The longer water sits undiscovered, the more it migrates into wall cavities, cabinetry, and HVAC ductwork. Time is the most important factor in limiting secondary damage, so contact us for an emergency inspection and extraction plan while you document conditions for your insurer.`,
      },
      {
        title: 'Your Water Heater Has Ruptured',
        description: `A corroded or aging water heater tank has cracked and released its full 40- to 80-gallon capacity onto the floor, with supply pressure continuing to feed the leak. The water may be hot enough to accelerate bacterial growth in organic building materials. Turn off the cold-water inlet valve on top of the unit and call us to extract the water and assess whether it has reached adjacent rooms through shared walls.`,
      },
      {
        title: 'An Upstairs Toilet or Fixture Overflowed and Water is Coming Through the Ceiling',
        description: `Water stains, dripping, or bulging drywall on a lower-level ceiling indicate that an upper-floor overflow has saturated the subfloor and is migrating downward. Ceiling drywall that absorbs enough water can collapse without warning, creating a safety hazard. Do not stand directly beneath the affected area and call us so we can relieve the trapped water safely and begin drying both levels.`,
      },
      {
        title: 'Your Yard is Flooding and Water is Approaching Your Foundation Vents',
        description: `Pooling water in your yard has risen high enough to threaten crawl space vents or low-set windows. Once flood water enters a crawl space it is extremely difficult to dry without professional equipment, and the moisture can compromise floor joists and insulation. Contact us before the water breaches your foundation so we can advise on temporary barriers and deploy if entry occurs.`,
      },
      {
        title: 'A Fire Sprinkler Head Has Accidentally Discharged',
        description: `A sprinkler head activated due to mechanical damage, a cooking incident, or a nearby heat source and is discharging 15 to 25 gallons per minute of pressurized water. The flow will not stop until the riser valve is shut off, and by that time hundreds of gallons may have soaked into floors and walls. Locate and close the sprinkler riser valve, then call us for immediate extraction and controlled drying.`,
      },
    ],

    whatsIncluded: [
      {
        title: 'High-Volume Water Extraction',
        description: `We deploy truck-mounted extraction units and portable submersible trash pumps capable of removing hundreds of gallons per minute from your property. Weighted extraction tools pull water from carpet, pad, and hard-surface flooring simultaneously. In most residential floods we can complete primary extraction within two to four hours of arrival, depending on volume and access.`,
        equipment: 'Truck-mounted extractors, submersible trash pumps, weighted carpet extraction wands',
      },
      {
        title: 'Contamination Assessment and Water Classification',
        description: `Every flood is classified by water source contamination level according to IICRC S500 standards. Our technicians test on site to determine whether the water is Category 1 (clean supply), Category 2 (gray water from appliances or rain runoff), or Category 3 (sewage or exterior flood water carrying biological contaminants). Classification determines the decontamination protocol, which materials can be saved, and how your insurance claim is documented.`,
        equipment: 'ATP bioluminescence meters, pH test strips, turbidity meters',
      },
      {
        title: 'Structural Drying with Daily Monitoring',
        description: `Once standing water is removed we install commercial-grade dehumidifiers and high-velocity air movers in a calculated drying plan based on square footage, material types, and ambient conditions. Moisture readings are taken at mapped points every 24 hours using pin-type and pinless meters. The typical structural dry-out for a flood takes three to five days, and we do not pull equipment until readings confirm that materials are at or below their dry standard.`,
        equipment: 'LGR dehumidifiers (80-130 pint capacity), centrifugal air movers, Tramex and Delmhorst moisture meters',
      },
      {
        title: 'Content Pack-Out and Inventory',
        description: `Salvageable personal belongings in the flood zone are carefully inventoried, photographed, and packed into labeled bins for transport to our climate-controlled facility. Items are cleaned, deodorized, or sent to specialty vendors for restoration. A detailed inventory list is provided for your insurance adjuster, and contents are returned once your home is fully dried and rebuilt.`,
      },
      {
        title: 'Antimicrobial Treatment and Mold Prevention',
        description: `All flood-affected surfaces that will remain in place are treated with EPA-registered antimicrobial solutions to inhibit mold colonization during the drying period. If Category 2 or Category 3 water was involved, we apply a two-stage treatment: an initial biocide followed by a residual protectant. Treatments are logged and included in the scope documentation provided to your carrier.`,
        equipment: 'Electrostatic sprayers, EPA-registered antimicrobial and biocide solutions',
      },
      {
        title: 'Controlled Demolition of Non-Salvageable Materials',
        description: `Drywall, insulation, carpet pad, and other porous materials that absorbed flood water beyond salvageable thresholds are cut out and removed in a controlled manner to prevent cross-contamination of unaffected areas. We establish containment barriers with poly sheeting and negative air pressure before demo begins. Cut lines are made at standard two-foot or four-foot increments above the flood line so new material integrates cleanly during reconstruction.`,
        equipment: 'HEPA-filtered negative air machines, 6-mil poly containment, reciprocating saws',
      },
      {
        title: 'Insurance Documentation and Claims Coordination',
        description: `We photograph and document every phase of the flood cleanup using industry-standard Xactimate estimating software, which most major carriers accept directly. Moisture maps, equipment logs, contamination test results, and before-and-after photos are compiled into a claim package. Our project managers communicate directly with your adjuster to streamline approvals and minimize out-of-pocket delays.`,
      },
      {
        title: 'Reconstruction and Final Restoration',
        description: `Once drying is verified and clearance testing is complete, our in-house construction team handles all rebuild work including drywall hanging and finishing, flooring installation, baseboard and trim replacement, painting, and texture matching. Keeping extraction through reconstruction under one company eliminates handoff delays and ensures warranty continuity across the entire project.`,
      },
    ],

    recentProjects: [
      {
        title: 'Atmospheric River Flooding in Olde Carlsbad',
        location: 'Olde Carlsbad, Carlsbad',
        summary: `A January atmospheric river event overwhelmed street drainage on a low-lying block near the Buena Vista Lagoon, sending Category 2 storm water into the ground floor of a 1960s single-story home. We extracted over 1,800 gallons, removed saturated hardwood flooring and lower drywall throughout six rooms, and ran a five-day structural dry-out. The homeowner was back in the property within three weeks of the flood, with new LVP flooring and matched texture throughout.`,
        scope: 'Entire ground floor (1,450 sq ft), 5-day dry-out, Category 2 water, full flooring and drywall rebuild',
      },
      {
        title: 'Supply Line Burst in San Marcos Townhome',
        location: 'San Elijo Hills, San Marcos',
        summary: `A second-floor washing machine supply line burst while the homeowners were at work, running for approximately seven hours before a neighbor noticed water flowing from the garage. Water migrated through the subfloor into the first-floor ceiling, kitchen, and living room. We completed extraction across both levels, performed controlled ceiling demo on the first floor, and dried the structure in four days. Insurance covered the full scope under the homeowner's dwelling policy.`,
        scope: 'Two-story townhome (2,100 sq ft affected), 4-day dry-out, Category 1 water, ceiling rebuild and repaint',
      },
      {
        title: 'Hillside Runoff Flooding in South Oceanside',
        location: 'Fire Mountain, Oceanside',
        summary: `Prolonged December rain saturated a hillside lot and overwhelmed the property's French drain system, sending mud-laden Category 3 water into a finished basement recreation room and storage area. We removed approximately 2,400 gallons of contaminated water, stripped all porous materials including carpet, pad, drywall, and stored contents, and applied full antimicrobial treatment. The basement was reconstructed with moisture-resistant materials and an upgraded perimeter drain system was recommended to the homeowner.`,
        scope: 'Finished basement (800 sq ft), 6-day dry-out, Category 3 water, full gut and rebuild with antimicrobial protocol',
      },
    ],

    deepDiveTitle: 'Understanding Flood Water Categories and Why They Matter',
    deepDiveContent: `Not all floods are equal, and the single most important factor in determining the scope, cost, and health risk of a flood cleanup is the contamination category of the water involved. The IICRC S500 Standard for Professional Water Damage Restoration defines three categories. Category 1 is clean water from a broken supply line, faucet, or water heater and poses no substantial health risk. Category 2, often called gray water, contains significant contamination from sources like washing machine overflow, dishwasher discharge, or rainwater that has contacted soil and organic debris. Category 3, known as black water, includes sewage backups, rising exterior flood water, and any water that has contacted biological or chemical contaminants. The category directly determines which building materials can be saved and which must be removed, the level of personal protective equipment our technicians wear, and the decontamination protocols we follow.

Flood water behaves differently from a contained plumbing leak because it typically enters the structure at floor level and spreads laterally through every porous material it touches. Carpet acts like a sponge, pulling water across an entire room in minutes. Drywall wicks moisture upward well above the visible water line, often 12 to 18 inches higher. Hardwood flooring absorbs water from below through the subfloor, causing cupping and buckling that may not appear for hours or days. Because flood water moves through so many materials simultaneously, the drying process is more complex and requires more equipment than a localized pipe leak affecting a single wall cavity.

The contamination risk of flood water also escalates over time. Category 1 water that sits for more than 48 hours is reclassified to Category 2 because standing water at room temperature supports rapid bacterial growth. Category 2 water that remains for 72 hours or more can be reclassified to Category 3. This time-dependent escalation is why rapid response is not just a convenience but a direct cost and health concern. A flood that is extracted and dried within the first 24 hours may allow carpet, pad, and drywall to be saved, keeping the project in the $3,000 to $6,000 range. The same flood left for three days may require full material removal, antimicrobial treatment, and rebuild, pushing costs to $15,000 or more. Calling a certified restoration company immediately is the single best way to limit both expense and health exposure.`,
  },

  // =====================================================================
  // SEWAGE CLEANUP
  // =====================================================================
  'sewage-cleanup': {
    whenToCall: [
      {
        title: 'Sewage is Backing Up Through Your Drains',
        description: `Dark, foul-smelling water is rising from floor drains, shower drains, or toilets on the lowest level of your home. A mainline blockage forces wastewater backward through the path of least resistance, and the flow will continue as long as water is used anywhere in the house. Stop all water use immediately, do not attempt to plunge or clear the drain yourself, and call us for biohazard-rated extraction and sanitation.`,
      },
      {
        title: 'You Smell Sewage in Your Home but Cannot See a Leak',
        description: `A persistent sewage odor in your bathroom, laundry room, or crawl space may indicate a cracked drain line or failed wax ring seal that is leaking effluent into a wall cavity or under the slab. Sewer gas contains hydrogen sulfide and methane, both of which pose health risks at sustained exposure levels. Even without visible water, the odor alone warrants a professional inspection to locate the source and determine whether contaminated material removal is needed.`,
      },
      {
        title: 'Your Septic System is Overflowing',
        description: `Saturated ground or a full septic tank is causing effluent to surface in your yard or back up into the home. Septic overflow is classified as Category 3 black water and carries bacteria, viruses, and parasites that make the affected area uninhabitable until professionally remediated. Keep all people and pets away from the contaminated zone and contact us for immediate containment and extraction.`,
      },
      {
        title: 'Multiple Fixtures Are Draining Slowly or Gurgling',
        description: `When more than one drain in your home is sluggish, gurgling, or bubbling, the problem is almost certainly in the main sewer lateral rather than an individual branch line. This is a precursor to a full backup, and continued water use can trigger an overflow. Call us to inspect the line with a sewer camera and, if backup has already occurred, begin cleanup before contamination spreads to adjacent rooms.`,
      },
      {
        title: 'You Found Sewage in Your Crawl Space',
        description: `A broken or separated drain line beneath your home has been leaking waste into the crawl space, often undetected for days or weeks. Crawl space sewage creates an active biohazard that releases airborne pathogens into the living space through HVAC returns and floor penetrations. Do not enter the crawl space without proper respiratory protection, and call us for confined-space rated extraction and decontamination.`,
      },
      {
        title: 'Your Toilet Overflowed and Soaked the Bathroom Floor',
        description: `A toilet overflow involving solid waste is a Category 3 event regardless of how small the volume appears. Sewage-contaminated water absorbs rapidly into grout lines, baseboards, and the subfloor beneath vinyl or tile. Wiping the surface is not sufficient because bacteria colonize porous materials below the visible layer. Contact us within hours so we can remove affected materials and apply hospital-grade disinfection.`,
      },
      {
        title: 'A Sewer Cleanout is Overflowing Outside Your Home',
        description: `Your exterior sewer cleanout cap has popped off or is actively discharging sewage onto your patio, driveway, or landscaping. Outdoor sewage spills can migrate into the home through foundation vents or garage door seals, and they also create a public health concern if the waste reaches storm drains or neighboring properties. We contain the spill, extract waste material, and treat the affected hardscape and soil to meet county health department clearance standards.`,
      },
      {
        title: 'Tree Roots Have Penetrated Your Sewer Line',
        description: `Mature trees near your sewer lateral can send roots through pipe joints, gradually restricting flow until a full blockage causes a backup inside the home. Root intrusion is especially common in older neighborhoods throughout Vista, Oceanside, and Carlsbad where clay or Orangeburg sewer pipes were installed decades ago. If you have experienced repeated slow drains or backups, call us for a camera inspection and, if a spill has occurred, immediate cleanup.`,
      },
      {
        title: 'Sewage Odor Appeared After Recent Plumbing Work',
        description: `A contractor or handyman recently worked on your plumbing and now you detect sewage smell or see moisture near the repaired area. Improperly sealed connections or disturbed wax rings can create slow sewage leaks that go unnoticed until contamination has spread inside wall cavities. Call us to assess whether sewage has entered concealed spaces that require professional remediation beyond what the plumber can address.`,
      },
      {
        title: 'Your Ejector Pump Has Failed',
        description: `Homes with below-grade bathrooms or laundry rooms rely on sewage ejector pumps to lift waste to the main sewer line. When the pump fails, raw sewage accumulates in the ejector basin and overflows onto the floor. The confined space and Category 3 water classification make this a job for trained biohazard technicians, not a general plumber. Call us for safe extraction, pump well decontamination, and sanitation of the surrounding area.`,
      },
    ],

    whatsIncluded: [
      {
        title: 'Category 3 Contaminated Water Extraction',
        description: `All sewage-contaminated water is extracted using dedicated equipment that is never shared with clean-water jobs. Our technicians wear full PPE including Tyvek suits, nitrile gloves, and PAPR respirators throughout the extraction process. Waste water is captured in sealed containment and disposed of in compliance with San Diego County health department regulations. Primary extraction in a typical residential sewage backup is completed within two to three hours.`,
        equipment: 'Dedicated sewage extractors, sealed waste containment tanks, PAPR respirators, Tyvek PPE',
      },
      {
        title: 'Removal and Disposal of Contaminated Materials',
        description: `All porous materials that contacted sewage, including carpet, pad, drywall below the contamination line, insulation, and particleboard cabinetry, are removed and bagged in 6-mil contractor bags for disposal as biohazardous waste. We follow OSHA Bloodborne Pathogen Standard protocols for handling and transport. Removed materials are documented with photographs and itemized for your insurance claim before leaving the property.`,
        equipment: '6-mil biohazard bags, HEPA-filtered negative air machines, poly containment barriers',
      },
      {
        title: 'Two-Stage Antimicrobial and Biocide Treatment',
        description: `After removal of contaminated materials, all remaining structural surfaces receive a two-stage treatment. The first application is a broad-spectrum EPA-registered biocide that kills bacteria, viruses, and fungi on contact. After a prescribed dwell time, a second application of residual antimicrobial protectant is applied to inhibit regrowth during the drying period. Treatment logs are maintained as part of your project documentation.`,
        equipment: 'Electrostatic sprayers, EPA-registered biocide (quaternary ammonium), residual antimicrobial protectant',
      },
      {
        title: 'Enzyme-Based Biotreatment for Odor Elimination',
        description: `Sewage odor penetrates concrete, wood framing, and subfloor materials at a molecular level and cannot be removed with surface cleaning alone. We apply enzyme-based biotreatments that break down organic odor compounds within the substrate rather than masking them. For severe cases we combine enzyme treatment with hydroxyl generator or thermal fogging technology to address airborne odor molecules throughout the structure. Odor clearance is verified before reconstruction begins.`,
        equipment: 'Enzyme-based biotreatment solutions, hydroxyl generators, thermal foggers',
      },
      {
        title: 'Structural Drying and Environmental Monitoring',
        description: `Once contaminated materials are removed and surfaces are treated, we install commercial dehumidifiers and air movers to dry exposed framing, subfloor, and concrete to verified standards. Air quality is monitored throughout the drying process using particulate counters to confirm that airborne contaminant levels have returned to baseline. A typical sewage cleanup dry-out runs three to five days depending on the extent of material removal and ambient humidity.`,
        equipment: 'LGR dehumidifiers, air movers, particulate counters, pin-type moisture meters',
      },
      {
        title: 'Sewer Camera Inspection and Source Identification',
        description: `Before we close the job we run a push-camera inspection of the sewer lateral to identify the root cause of the backup, whether it is root intrusion, pipe collapse, grease buildup, or a foreign object. The camera feed is recorded and shared with you so you can authorize the appropriate repair, and it provides documentation for your insurer that the cause of loss has been addressed. This step prevents recurrence and protects your investment in the cleanup.`,
        equipment: 'Push-camera sewer inspection system with locating transmitter',
      },
      {
        title: 'Insurance Coordination and Health Department Liaison',
        description: `Sewage losses often involve coordination with both your insurance carrier and the local health authority. We prepare Xactimate-format estimates, maintain chain-of-custody documentation for waste disposal, and provide clearance testing results that satisfy county health department requirements. Our project managers handle adjuster communications, supplement requests, and scheduling so you can focus on your family rather than paperwork.`,
      },
    ],

    recentProjects: [
      {
        title: 'Mainline Backup in Vista Townhome',
        location: 'Shadowridge, Vista',
        summary: `A collapsed clay sewer lateral caused raw sewage to back up through a ground-floor shower drain and toilet, contaminating the master bathroom, hallway, and a portion of the living room. Our crew arrived within 45 minutes, extracted contaminated water, removed all flooring and lower drywall in the affected areas, and completed full biocide treatment within eight hours. Camera inspection confirmed a 12-foot section of collapsed pipe, and the homeowner's insurance covered both the cleanup and the lateral replacement. The home was fully reconstructed within 18 days.`,
        scope: 'Three rooms (680 sq ft), Category 3 black water, 4-day dry-out, full material removal and biocide protocol, lateral replacement coordination',
      },
      {
        title: 'Septic Overflow in Rural Encinitas',
        location: 'Olivenhain, Encinitas',
        summary: `An older home on a private septic system experienced a tank overflow during a week of heavy rain, pushing effluent back through the laundry room drain and into the garage. The homeowner did not discover the spill for 36 hours, allowing contamination to migrate into the wall cavity between the garage and a bedroom. We performed full Category 3 remediation including wall cavity gut-out, subfloor treatment, and a seven-day dry-out with continuous air quality monitoring. Clearance testing confirmed safe pathogen levels before the family returned.`,
        scope: 'Laundry room, garage, and shared wall cavity (520 sq ft), Category 3, 7-day dry-out, air quality clearance testing',
      },
      {
        title: 'Restaurant Grease Backup in Carlsbad Village',
        location: 'Carlsbad Village, Carlsbad',
        summary: `A grease blockage in the shared sewer lateral of a mixed-use building caused sewage to back up into the ground-floor commercial kitchen and an adjacent retail space after business hours. We mobilized a night crew to extract contaminated water, remove damaged ceiling tiles and drywall in the retail suite, and apply full biocide treatment to both spaces. Enzyme biotreatment was used on the concrete slab in the kitchen to eliminate embedded grease and sewage odor. Both tenants were able to reopen within 10 days, and the property manager's commercial policy covered the remediation and tenant business interruption.`,
        scope: 'Commercial kitchen and retail suite (1,900 sq ft combined), Category 3, 5-day dry-out, enzyme biotreatment on concrete, after-hours emergency response',
      },
    ],

    deepDiveTitle: 'Sewage Contamination: Biohazard Classifications, Health Risks, and Regulatory Requirements',
    deepDiveContent: `Sewage is classified as Category 3 black water under the IICRC S500 standard, the most severe contamination category in the water damage restoration industry. Unlike a clean-water supply line break, sewage contains active colonies of pathogenic bacteria including E. coli, Salmonella, and Clostridium, as well as viruses such as Hepatitis A and Norovirus, and parasites including Giardia and Cryptosporidium. These organisms survive on porous building materials for days to weeks depending on moisture and temperature conditions, which is why surface-level cleaning after a sewage backup is never sufficient. Every porous material that contacted sewage must be physically removed and disposed of as biohazardous waste, and all remaining structural surfaces must be treated with EPA-registered biocidal agents under controlled application protocols.

The health risks of improper sewage cleanup are well documented and serious. Airborne exposure to dried sewage particulate can cause respiratory infections, gastrointestinal illness, and skin reactions, with immunocompromised individuals, children, and the elderly at greatest risk. OSHA classifies sewage cleanup workers under the Bloodborne Pathogen Standard (29 CFR 1910.1030) and requires employers to provide hepatitis B vaccination, fit-tested respirators, and written exposure control plans. When a homeowner attempts to clean a sewage spill without this level of protection, they are exposing themselves to the same hazards that require occupational safeguards for trained professionals. Additionally, improperly cleaned sewage creates a long-term mold risk because the organic nutrients in waste accelerate fungal colonization on any material that remains damp.

San Diego County has specific regulatory requirements for sewage spill reporting and remediation. Spills that reach storm drains, waterways, or neighboring properties must be reported to the County Department of Environmental Health, and commercial properties may also need to notify the Regional Water Quality Control Board. Waste disposal must follow county protocols, which require sewage-contaminated solid materials to be transported in sealed containers by licensed haulers to approved facilities. A professional restoration company maintains the required waste hauler relationships, disposal documentation, and clearance testing capabilities to ensure full regulatory compliance. Attempting to handle a sewage loss without this infrastructure can result in health code violations, liability exposure, and insurance claim denials if the carrier determines that the cleanup was not performed to professional standards.`,
  },

  // =====================================================================
  // WATER LEAK REPAIR
  // =====================================================================
  'water-leak-repair': {
    whenToCall: [
      {
        title: 'Your Water Bill Spiked Unexpectedly',
        description: `Your monthly water bill increased by 30 percent or more without any change in usage habits, which is one of the most reliable indicators of a hidden leak in a supply line, irrigation system, or toilet fill valve. A leak as small as a pinhole in a copper supply line can waste thousands of gallons per month and cause concealed damage inside walls or under your slab. Call us for a leak detection survey before the damage compounds.`,
      },
      {
        title: 'You Hear Running Water With Nothing Turned On',
        description: `A faint hissing or running sound behind a wall, under a floor, or near the water heater when every fixture in the house is off indicates a pressurized supply line leak. The sound may be intermittent if the leak only occurs when system pressure peaks. Do not ignore it, because a pressurized leak can discharge continuously and cause significant concealed damage in a short period.`,
      },
      {
        title: 'There Is a Warm Spot on Your Floor',
        description: `A noticeably warm or hot patch on a tile, hardwood, or concrete floor typically indicates a hot water supply line leak beneath the slab. Slab leaks in hot water lines are especially common in homes built before 1990 with copper piping, which corrodes over time from contact with the alkaline soils common in North San Diego County. The longer a slab leak runs, the more it erodes the soil beneath your foundation and the greater the risk of slab settlement or cracking.`,
      },
      {
        title: 'Damp or Discolored Spots Are Appearing on Walls or Ceilings',
        description: `Yellowish-brown stains, bubbling paint, or soft drywall on a wall or ceiling indicate that water has been migrating through a concealed cavity for days or weeks. The visible stain is typically smaller than the actual moisture footprint behind the wall, and mold colonization can begin within 48 to 72 hours of sustained dampness. Call us to locate the leak source with thermal imaging and moisture meters before opening the wall.`,
      },
      {
        title: 'Your Water Meter Is Spinning When Nothing Is Running',
        description: `Turn off every water-using fixture and appliance in your home, then check your water meter. If the flow indicator dial is still turning, you have a leak between the meter and your home or within your plumbing system. This is a definitive test and should prompt an immediate call for professional leak detection to pinpoint the location without unnecessary exploratory demolition.`,
      },
      {
        title: 'You Notice Mold Growth Near a Plumbing Wall',
        description: `Visible mold on or near a wall that contains plumbing supply or drain lines almost always indicates a slow, ongoing moisture source. Surface mold removal without fixing the underlying leak will result in regrowth within weeks. We locate the leak, stop the moisture source, remediate the mold, and repair the plumbing so the problem is resolved permanently rather than temporarily concealed.`,
      },
      {
        title: 'Your Foundation Has Developed New Cracks',
        description: `Fresh cracks in your slab, particularly near plumbing penetrations in bathrooms or kitchens, can indicate that a sub-slab leak has been eroding supporting soil and creating voids beneath the foundation. Foundation movement caused by slab leaks is a serious structural concern that worsens over time. Call us for leak detection and moisture assessment so the source can be identified and repaired before the structural damage escalates.`,
      },
      {
        title: 'There Is Unexplained Pooling in Your Yard',
        description: `Persistently wet or soggy areas in your lawn, especially along a line between your water meter and your home, suggest a leak in the main supply line. Underground supply line leaks can waste enormous volumes of water before they surface, and the saturated soil can undermine walkways, driveways, and foundation footings. We use acoustic listening equipment and tracer gas to locate underground leaks precisely so the repair can be made with minimal excavation.`,
      },
      {
        title: 'A Fixture Shut-Off Valve Is Dripping',
        description: `Angle stop valves beneath sinks and toilets corrode over time and develop slow drips that often go unnoticed inside vanity cabinets. By the time you see it, the cabinet floor, adjacent flooring, and potentially the subfloor may already be moisture-damaged. We repair or replace the valve, assess the extent of moisture penetration with meters, and dry or remediate the surrounding materials as needed.`,
      },
      {
        title: 'Your Water Pressure Dropped Suddenly',
        description: `A sudden loss of water pressure throughout your home can indicate a significant break in a supply line that is leaking into a wall cavity, crawl space, or under the slab. Check your main shut-off valve first to ensure it is fully open. If valve position is not the cause, call us immediately because a large-volume leak under full system pressure can cause rapid and extensive concealed damage.`,
      },
    ],

    whatsIncluded: [
      {
        title: 'Non-Invasive Electronic Leak Detection',
        description: `Our technicians survey your entire plumbing system using a combination of electronic acoustic listening equipment, electromagnetic pipe locators, and thermal imaging cameras to identify the precise location of concealed leaks without cutting into walls or breaking concrete. Acoustic sensors amplify the sound of pressurized water escaping from pipes, and thermal cameras visualize temperature differentials caused by leaking water. In most cases we can pinpoint the leak location within inches, eliminating the need for exploratory demolition and saving you significant repair costs.`,
        equipment: 'Acoustic listening devices (ground microphones and contact sensors), electromagnetic pipe locators, FLIR thermal imaging cameras',
      },
      {
        title: 'Slab Leak Detection and Access',
        description: `Slab leaks require specialized detection because the pipe is encased in or beneath four to six inches of concrete. We use acoustic amplification tuned to the frequency range of water escaping copper or CPVC pipe, combined with pressure isolation testing to determine which line is leaking. Once the leak is pinpointed, we core a precise access hole through the slab with a concrete coring drill rather than jackhammering a large area, minimizing disruption to your flooring and reducing repair costs.`,
        equipment: 'Acoustic leak correlators, static pressure test gauges, diamond-core concrete drills',
      },
      {
        title: 'Pressure Testing and Line Isolation',
        description: `To determine whether the leak is on a supply line, drain line, or irrigation line, we perform systematic pressure isolation testing. Individual sections of your plumbing system are isolated and pressurized while we monitor gauges for pressure loss over a 15- to 30-minute period. This methodical approach identifies not only the leaking line but also reveals secondary leaks that may not yet be causing visible symptoms, allowing you to address all issues in a single repair visit.`,
        equipment: 'Calibrated pressure test gauges, isolation valves, nitrogen pressurization kit',
      },
      {
        title: 'Pipe Repair, Reroute, or Repipe Recommendations',
        description: `Once the leak is located, we present repair options based on the pipe material, age, location, and condition of the overall system. A single pinhole in otherwise sound copper may warrant a spot repair, while multiple leaks in aging pipe or a slab leak in a corroded system may make a full or partial repipe more cost-effective in the long run. We provide a written comparison of repair versus repipe costs, expected lifespan of each option, and warranty terms so you can make an informed decision.`,
      },
      {
        title: 'Moisture Mapping and Concealed Damage Assessment',
        description: `Every leak detection includes a comprehensive moisture survey of the surrounding area using pin-type and pinless moisture meters and thermal imaging to map the full extent of moisture migration. We document moisture readings at grid points and identify all materials that have been affected, including those not visible without opening walls. This moisture map serves as the basis for any remediation scope and is included in your insurance claim documentation if the loss is covered.`,
        equipment: 'Tramex pinless moisture meters, Delmhorst pin-type meters, FLIR thermal cameras',
      },
      {
        title: 'Water Damage Remediation from Leak Source',
        description: `If the leak has caused water damage to drywall, flooring, cabinets, or structural framing, we transition directly from detection into remediation without the delay of hiring a separate contractor. Affected materials are dried in place when possible or removed and replaced when moisture levels exceed salvage thresholds. Antimicrobial treatment is applied to any areas showing early signs of microbial growth. Combining detection and remediation under one scope streamlines both the timeline and your insurance claim.`,
        equipment: 'LGR dehumidifiers, air movers, antimicrobial solutions, moisture meters for verification',
      },
      {
        title: 'Post-Repair Verification and Warranty',
        description: `After every leak repair, we re-pressurize the system and verify the repair holds under full operating pressure for a minimum of 30 minutes. We also re-scan the repair area with thermal imaging 24 hours later to confirm no residual moisture is present. All repairs include a written warranty, and we provide a summary report with before-and-after pressure test results that you can keep for your records or provide to a buyer during a future home sale.`,
        equipment: 'Calibrated pressure gauges, FLIR thermal cameras for post-repair verification',
      },
    ],

    recentProjects: [
      {
        title: 'Slab Leak Detection and Repair in La Costa',
        location: 'La Costa, Carlsbad',
        summary: `A homeowner reported a persistent warm spot on the master bathroom tile floor and a $200 increase in their monthly water bill. Our leak detection team identified a pinhole failure in a 30-year-old copper hot water line running beneath the slab, six inches from a bathroom wall. We core-drilled a 6-inch access hole, completed a spot repair using a coupling and new copper section, pressure-tested the line to 80 PSI for 30 minutes, and patched the slab. The homeowner elected to keep the remaining copper system after inspection showed no additional corrosion points. Total project time from detection to completed repair was one day.`,
        scope: 'Slab leak in master bathroom, hot water supply line, same-day detection and repair, 30-minute pressure verification',
      },
      {
        title: 'Concealed Supply Line Leak Behind Shower Wall in Encinitas',
        location: 'Leucadia, Encinitas',
        summary: `Discolored drywall and a musty odor in a hallway adjacent to a guest bathroom had been present for weeks before the homeowner called. Thermal imaging revealed a temperature anomaly behind the shower wall, and acoustic detection confirmed a leak at a solder joint on a half-inch copper supply line. We repaired the joint, removed and replaced moisture-damaged drywall in the hallway and inside the shower wall cavity, treated the framing with antimicrobial solution, and dried the cavity over three days. Early-stage mold growth on two studs was remediated during the repair, preventing what would have become a larger mold project.`,
        scope: 'Concealed supply leak, 120 sq ft affected area, 3-day dry-out, mold remediation on framing, drywall rebuild',
      },
      {
        title: 'Whole-Home Repipe After Multiple Leak Failures in Vista',
        location: 'Breeze Hill, Vista',
        summary: `A 1978 home had experienced three slab leak repairs in two years, each time in a different section of the original copper system. After the fourth leak was detected in a kitchen supply line, we recommended a full repipe using PEX-A tubing routed through the attic to bypass the slab entirely. The repipe was completed in two days with minimal drywall penetration, and each new line was pressure tested individually before connection. The homeowner received a 25-year manufacturer warranty on the PEX system and has had no further leak issues. Their homeowner's insurance covered the water damage remediation from the fourth leak, while the repipe was an out-of-pocket investment that eliminated future slab leak risk.`,
        scope: 'Whole-home repipe (14 fixture supply lines), PEX-A via attic route, 2-day installation, individual line pressure testing',
      },
    ],

    deepDiveTitle: 'Leak Detection Technology, Slab Leaks, and the Repair vs. Repipe Decision',
    deepDiveContent: `Modern leak detection has evolved far beyond the exploratory demolition that was common even 15 years ago. Today, a trained technician equipped with acoustic listening devices, thermal imaging cameras, electromagnetic pipe locators, and tracer gas systems can locate a concealed leak to within inches without cutting a single hole in your wall or floor. Acoustic detection works by amplifying the sound signature created when pressurized water escapes through a pipe failure. Different pipe materials, leak sizes, and soil conditions produce distinct acoustic profiles that an experienced technician can interpret to identify the precise failure point. Thermal imaging detects temperature variations caused by leaking water as it migrates through building materials, making it especially effective for hot water line leaks where the temperature contrast is significant. For complex cases involving multiple possible leak locations or non-pressurized drain lines, tracer gas (typically a hydrogen-nitrogen mixture) can be introduced into the pipe and detected at the surface using a gas-sensitive probe, even through concrete slabs.

Slab leaks deserve special attention because they are the most common and consequential type of concealed leak in North San Diego County homes. The region's housing stock includes tens of thousands of homes built between 1960 and 1990 with copper supply lines embedded directly in or beneath the concrete slab foundation. Over decades, the combination of slightly alkaline local soil chemistry, thermal expansion and contraction cycles, and the abrasive contact between copper pipe and concrete creates conditions for pinhole corrosion and joint failures. A slab leak can run undetected for weeks or months, eroding the soil beneath the foundation and creating voids that lead to slab settlement, cracking, and differential movement. The damage to the foundation itself often exceeds the cost of the plumbing repair, which is why early detection prompted by a high water bill or warm floor spot can prevent a $2,000 plumbing repair from becoming a $20,000 foundation issue.

The decision between repairing a single leak and repiping all or part of the system depends on several factors: the age and material of the existing pipe, the number of prior failures, the accessibility of the pipe, and the homeowner's plans for the property. A single leak in a 15-year-old copper system with no history of issues is usually best addressed with a spot repair. However, when a system has experienced two or more failures within a few years, statistical likelihood strongly favors additional failures in the near future because the same corrosion conditions that caused the first leak are present throughout the system. In these cases, a full repipe using modern PEX-A or PEX-B tubing routed through accessible paths like the attic or interior walls eliminates slab leak risk entirely and typically costs less than three or four individual slab leak repairs. We always present both options with transparent cost comparisons so homeowners can make the decision that best fits their budget and long-term plans for the property.`,
  },
};

export function getServicePillarContent(serviceSlug: string): ServicePillarContent | null {
  return servicePillarContent[serviceSlug] || null;
}
