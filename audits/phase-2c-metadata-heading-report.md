# Phase 2C Metadata and Intro Heading Report

## Scope

Phase 2C added optional metadata and intro-heading overrides for the 10 approved priority water-related city-service money pages. The changes improve title/meta differentiation, SERP click-through language, and intro-section clarity without changing slugs, redirects, canonical/robots behavior, schema helpers, project facts, review claims, or generated `dist` files.

## Files Changed

- `src/data/cityServiceSeoOverrides.ts` — new centralized, exact-key override data for selected city/service pages.
- `src/layouts/MoneyPageLayout.astro` — reads optional SEO title/description overrides and preserves existing fallback title/meta behavior.
- `src/pages/service-area/[city]/[service].astro` — reads optional intro eyebrow/heading overrides and preserves existing fallback intro H2 behavior.
- `audits/phase-2c-metadata-heading-report.md` — this validation report.

## Override Data Model

The new override data model uses exact composite keys in the form:

```text
citySlug__serviceSlug
```

Each override supports optional fields:

- `seoTitle`
- `seoDescription`
- `introHeading`
- `introEyebrow`

The helper `getCityServiceSeoOverride(citySlug, serviceSlug)` returns `null` when no exact override exists. This keeps the existing formulaic fallback behavior intact for all non-priority city-service pages.

## Final Title / Meta / Intro Values

| Page | SEO title | Meta description | Intro eyebrow | Intro heading |
| --- | --- | --- | --- | --- |
| `/service-area/carlsbad/water-damage-restoration/` | `Carlsbad Water Damage Restoration \| 24/7 Local Response` | `Need water damage restoration in Carlsbad? Tamarack provides 24/7 extraction, drying, moisture documentation, and repair coordination.` | `Local Water Damage Help` | `Fast Water Cleanup for Carlsbad Homes` |
| `/service-area/carlsbad/water-leak-repair/` | `Water Leak Detection & Repair in Carlsbad \| Tamarack` | `Hidden leak in Carlsbad? Tamarack uses thermal imaging, acoustic detection, and moisture mapping to locate leaks and help prevent spread.` | `Hidden Leak Support` | `Find Hidden Leaks Before They Spread` |
| `/service-area/carlsbad/slab-leak-repair/` | `Slab Leak Repair in Carlsbad \| Detection & Drying` | `Suspect a slab leak in Carlsbad? Tamarack helps locate hidden leaks, coordinate repair access, dry affected materials, and document moisture.` | `Slab Leak Response` | `Slab Leak Detection, Drying, and Repair Support` |
| `/service-area/carlsbad/leak-detection/` | `Leak Detection in Carlsbad \| Thermal & Acoustic Testing` | `Need leak detection in Carlsbad? Tamarack uses thermal imaging, acoustic equipment, and moisture meters to help locate hidden plumbing and slab leaks.` | `Moisture Source Diagnosis` | `Pinpoint Hidden Leaks With Less Guesswork` |
| `/service-area/carlsbad/flood-cleanup/` | `Flood Cleanup in Carlsbad \| Storm Water Extraction` | `Flood cleanup in Carlsbad after storms, overflows, or contaminated water? Tamarack provides extraction, sanitizing, drying, and damage documentation.` | `Storm & Flood Cleanup` | `Storm and Flood Cleanup for Carlsbad Properties` |
| `/service-area/encinitas/water-damage-restoration/` | `Encinitas Water Damage Restoration \| 24/7 Drying Help` | `Water damage in Encinitas? Tamarack provides 24/7 extraction, structural drying, moisture checks, and documentation for coastal North County homes.` | `Coastal Water Damage Help` | `Water Damage Help for Encinitas Coastal Homes` |
| `/service-area/oceanside/water-damage-restoration/` | `Oceanside Water Damage Restoration \| Extraction & Drying` | `Need water damage restoration in Oceanside? Tamarack handles extraction, structural drying, moisture checks, and repair coordination from coast to inland neighborhoods.` | `Coast-to-Inland Response` | `Coast-to-Inland Water Damage Response` |
| `/service-area/san-marcos/water-damage-restoration/` | `San Marcos Water Damage Restoration \| 24/7 Drying` | `Water damage in San Marcos? Tamarack responds to pipe, appliance, and water heater losses with extraction, drying, moisture documentation, and repairs.` | `Inland Water Damage Help` | `Inland Water Damage Help for San Marcos Homes` |
| `/service-area/vista/water-damage-restoration/` | `Vista Water Damage Restoration \| Extraction & Drying` | `Water damage in Vista? Tamarack provides 24/7 extraction, structural drying, moisture checks, and repair coordination for North County homes.` | `Vista Water Cleanup` | `Water Cleanup and Drying for Vista Properties` |
| `/service-area/bressi-ranch/water-damage-restoration/` | `Bressi Ranch Water Damage Restoration \| Local Drying Help` | `Water damage in Bressi Ranch? Tamarack helps with water heater failures, HVAC leaks, extraction, drying, moisture checks, and repairs near Carlsbad.` | `Bressi Ranch Water Help` | `Water Damage Help for Bressi Ranch Homes` |

## Fallback Behavior Confirmation

- The override file contains exactly 10 page-specific entries.
- Non-priority city-service pages continue using the existing fallback title and description logic from `MoneyPageLayout.astro`.
- Generated fallback spot check: `/service-area/carlsbad/mold-removal/` retained `Mold Removal in Carlsbad, CA | 60-Min Response | (760) 500-2211`.
- Existing unique-content intro H2 fallback remains in place for pages without an `introHeading` override.

## Guardrail Confirmations

- `vercel.json` was not changed.
- Redirects were not changed.
- Slugs and route structure were not changed.
- Canonical behavior was not changed.
- Robots/indexation behavior was not changed.
- No schema helpers were changed.
- No Review or AggregateRating schema was added.
- `src/data/cityServiceContent.ts` was not changed.
- Phase 2A support-link data was not changed.
- Phase 2B project proof labeling logic was not changed.
- Project facts and review claims were not changed.
- `dist/` was generated by the build for validation only and was not edited or staged.

## Build Result

`npm run build` passed.

Build summary:

- `astro check`: 0 errors, 0 warnings, 3 existing hints
- `astro build`: 166 pages built
- sitemap generated at `dist/sitemap-index.xml`

## Generated HTML Validation Notes

A generated HTML validation script checked all 10 priority pages and confirmed:

- `<title>` matched the Phase 2C override.
- `<meta name="description">` matched the Phase 2C override.
- `og:title` and `og:description` matched the same override values through the existing `SEOHead` flow.
- `twitter:title` and `twitter:description` matched the same override values through the existing `SEOHead` flow.
- Canonical URLs remained `https://www.tamarackrestoration.com/service-area/[city]/[service]/`.
- Robots remained `index, follow`.
- H1 remained present.
- Intro H2 no longer exactly duplicated the hero H1 where an override exists.

Static guardrail checks also confirmed:

- no protected-file git diffs for `vercel.json`, `dist`, `src/data/cityServiceContent.ts`, `src/data/cityServiceSupportLinks.ts`, `src/data/projects.ts`, `src/utils/seo.ts`, or `src/data/schema.ts`
- no `noindex`, `nofollow`, `AggregateRating`, or `Review` strings added in the changed source files
- exactly 10 override entries in `src/data/cityServiceSeoOverrides.ts`
- `git diff --check` passed

## Remaining Phase 2D Recommendations

- Add a compact local trust summary module for selected high-priority water pages using only centralized review/trust data.
- Do not add Review or AggregateRating schema without a separate compliance review.
- Keep any trust module opt-in and compact so it does not duplicate the existing TrustBar and Testimonials sections.
