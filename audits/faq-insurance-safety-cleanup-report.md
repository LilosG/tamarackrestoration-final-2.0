# FAQ Insurance-Safety Cleanup Report

## Files Changed

- `src/data/cityServiceContent.ts`
- `src/data/content.ts`
- `src/data/faqs.ts`
- `src/data/site.ts`
- `src/data/servicePillarContent.ts`
- `src/layouts/InsuranceCarrierLayout.astro`
- `src/pages/insurance/index.astro`
- `audits/faq-insurance-safety-cleanup-report.md`

## Risky Language Categories Cleaned

- Broad coverage conclusions such as “most homeowner policies cover,” “coverage typically includes,” and “typically covered.”
- Universal carrier relationship or acceptance claims such as “work directly with all major carriers,” “every major carrier,” and “accepted by all major carriers.”
- Carrier approval or endorsement implications such as “Allstate-Approved Methods” and “meets Allstate standards.”
- Claim-management promises such as “manage the entire claims process,” “handle all documentation and adjuster coordination,” and “advocate for full coverage.”
- Claim outcome language such as “pay only their deductible,” “overturn initial denials,” and case-study statements implying insurance payment outcomes are typical.
- Overly definitive flood/NFIP, sewer-backup, and HOA responsibility statements.
- Direct carrier/team wording that implied Tamarack has special carrier relationships or controls carrier timelines.

## High-Risk Items Resolved

- Removed “accepted by all major carriers” language from the Carlsbad leak detection FAQ and replaced it with documentation-sharing and carrier-review language.
- Replaced “Allstate-Approved Methods” and carrier-standard claims with industry-standard/IICRC-aligned documentation language.
- Removed “manage the entire claims process” and “advocate for full coverage” from fire damage service pillar content.
- Removed denial-overturn outcome language from shared insurance FAQs.
- Removed deductible-only outcome statements from city-service fire/water/slab leak FAQ answers.
- Replaced universal “work with all carriers” language on the insurance hub with documentation-support language for many carriers.

## Medium-Risk Items Resolved

- Qualified city-service water, fire, flood, slab leak, leak detection, sewer backup, and HOA insurance FAQs with policy, cause-of-loss, exclusions, timing, and carrier-review language.
- Preserved local page value by keeping city-specific causes, neighborhoods, weather/flood risks, HOA contexts, and response details while changing only insurance-safety wording.
- Updated generated fallback slab leak FAQ copy so future fallback city-service pages do not emit “most homeowners use homeowner insurance” or “handle all documentation and adjuster coordination.”
- Updated carrier-specific content for Allstate, Farmers, USAA, Liberty Mutual, and State Farm to focus on organized restoration documentation rather than special carrier relationships.
- Made project insurance outcomes case-specific with “In that specific project...” and “coverage outcomes vary...” caveats.
- Qualified billing coordination language as available when applicable and dependent on policy, claim status, and carrier review.

## FAQ Source/Data and Schema Alignment

Visible FAQ/source data was edited directly. No FAQ schema helper, schema generation, canonical, robots, or layout schema behavior was changed.

FAQPage schema alignment remains intact because the audited layouts continue to use the same `faqs` arrays for visible FAQ rendering and `getFAQSchema(faqs)` JSON-LD generation:

- City-service pages pass source FAQ arrays into `MoneyPageLayout` for both visible FAQ rendering and FAQPage schema.
- Service pillar pages use `pillarContent.faqs` or default generated FAQs for both visible FAQ rendering and FAQPage schema.
- Insurance carrier pages and insurance carrier/service pages use their local `faqs` arrays for both visible FAQ rendering and FAQPage schema.

## Protected Areas Confirmation

- No slugs were changed.
- No redirects were changed.
- `vercel.json` was not changed.
- Generated `dist/` files were not edited or staged.
- No canonical, robots, or indexation logic was changed.
- No Review or AggregateRating schema was added, removed, or modified.
- No schema helper files were changed.
- No global design/layout changes were made.

## Build Result

- `npm run build` passed.
- Astro check reported 0 errors, 0 warnings, and 3 existing hints.
- Astro built 166 pages successfully.

## Source Check Result

The required risky-language source check was run after edits. The targeted approved files no longer contain the high-risk phrases from the audit. The broader command still reports existing matches outside the approved modification scope, notably `src/data/about.ts`, plus non-insurance “standards” wording in existing about/site copy. These were not changed because they were outside the approved file list for this implementation.

## Remaining Manual Approval Items

- `src/data/about.ts` still contains broad “work directly with all major insurance carriers” wording outside the approved modification scope. Recommend a separate approval if that file should be cleaned in a follow-up.
- Existing non-insurance uses of “standards” remain in about/certification and satisfaction copy; these do not imply carrier approval and were not changed.
