# Phase 1 Content Optimization Report

## Scope

Implemented Phase 1 only: low-risk, centralized content and internal-linking improvements for service page quality, AEO, insurance-safe language, blog support links, and reusable internal-link rendering.

No Phase 2/3/4/5 city-service content, project model expansion, review schema, redirect, indexation, or global design changes were implemented.

## Files Changed

- `src/components/sections/PriorityInternalLinks.astro`
- `src/content/blog/does-homeowners-insurance-cover-water-damage.md`
- `src/content/blog/fire-damage-restoration-process-what-to-expect.md`
- `src/content/blog/how-much-does-water-damage-restoration-cost-in-san-diego-county.md`
- `src/content/blog/how-to-handle-water-damage-emergency-first-24-hours.md`
- `src/content/blog/mold-vs-mildew-whats-the-difference.md`
- `src/content/blog/signs-of-water-damage-in-your-home.md`
- `src/data/content.ts`
- `src/data/servicePillarContent.ts`
- `src/layouts/BlogPostLayout.astro`
- `src/layouts/CityLandingLayout.astro`
- `src/layouts/ServicePillarLayout.astro`
- `src/pages/blog/category/[slug]/index.astro`
- `src/pages/services/index.astro`

## Explicit Phase 1 Guardrail Confirmation

- `src/data/cityServiceContent.ts` was not modified.
- No city-service page URLs were changed.
- No city-service page metadata, H1s, or body copy were modified directly.
- `vercel.json` was not modified.
- No generated `dist` files are tracked as source changes.
- No Review or AggregateRating schema was added.
- No projects or reviews were invented.
- No pages were deleted or noindexed.

## Insurance Language Changes

Updated unsafe or overpromising insurance/claim wording in centralized templates and data:

- Replaced service pillar FAQ language that referenced maximizing claim approval with documentation-focused wording about photos, moisture readings, scope notes, drying logs where applicable, billing coordination when applicable, and carrier review.
- Replaced service pillar cost FAQ language that implied most homeowners use insurance with estimate/scope-based language.
- Updated city landing insurance FAQ language to use documentation and carrier-review caveats.
- Updated city landing trust copy from “maximum coverage” phrasing to documentation support.
- Softened selected carrier/service data copy in `src/data/content.ts` where it implied approvals, successful claims, or efficient claim processing as an outcome.
- Updated the insurance blog post to avoid “maximize your claim” framing and “covered to the fullest extent” language.

## Service-Specific FAQ/Meta Model Changes

`src/data/servicePillarContent.ts` now supports optional service-pillar fields:

- `seoDescription`
- `faqs`
- `supportLinkGroups`

`src/layouts/ServicePillarLayout.astro` now:

- Uses `pillarContent.faqs` when available.
- Falls back to generated FAQ content only when no override exists.
- Uses `pillarContent.seoDescription` when available.
- Keeps visible FAQ content and FAQPage schema sourced from the same `faqs` array.
- Renders support links only when `pillarContent.supportLinkGroups` exists.

## Slab Leak Repair Improvements

Added first-pass `slab-leak-repair` pillar content covering:

- Under-slab leak detection and moisture assessment.
- Moisture damage after pipe leaks.
- Flooring, concrete, baseboard, drywall, and wall cavity drying impacts.
- Plumbing repair/restoration coordination.
- Insurance documentation caveats.
- Relationship to leak detection, water leak repair, and water damage restoration.
- Local/service/blog support links that point only to existing routes.

## Leak Detection Improvements

Added first-pass `leak-detection` pillar content covering:

- Moisture meters.
- Thermal imaging.
- Acoustic methods where conditions allow.
- Limits of non-invasive detection.
- When detection leads to restoration work.
- Documentation limitations and carrier-review caveats.
- Relationship to water leak repair, slab leak repair, and water damage restoration.
- Local/service/blog support links that point only to existing routes.

## Reusable Internal-Link Component

Created `src/components/sections/PriorityInternalLinks.astro`.

The component renders compact grouped internal links with:

- Responsive grid layout.
- Existing Tailwind/design system classes.
- Optional group descriptions.
- Optional link descriptions.
- A six-link cap per group to avoid excessive/spammy link blocks.

Used on:

- Service pillar pages, when a service has `supportLinkGroups`.
- Blog category hub pages for existing related services and local resource links.
- Services hub page for priority local service pages and project proof links.

## Service Hub Link Additions

Added a compact support section to `/services/` linking to:

### Priority Local Service Pages

- `/service-area/carlsbad/water-damage-restoration/`
- `/service-area/carlsbad/slab-leak-repair/`
- `/service-area/carlsbad/leak-detection/`
- `/service-area/encinitas/water-damage-restoration/`
- `/service-area/san-marcos/water-damage-restoration/`
- `/service-area/oceanside/mold-removal/`

### Project Proof Pages

- `/projects/`
- `/projects/water-damage-restoration/`
- `/projects/mold-removal/`
- `/projects/fire-damage-restoration/`

## Blog Post Link Additions

Added natural in-body editorial links to the six approved blog posts only:

- `does-homeowners-insurance-cover-water-damage.md` — 3 links.
- `fire-damage-restoration-process-what-to-expect.md` — 2 links.
- `how-much-does-water-damage-restoration-cost-in-san-diego-county.md` — 3 links.
- `how-to-handle-water-damage-emergency-first-24-hours.md` — 3 links.
- `mold-vs-mildew-whats-the-difference.md` — 3 links.
- `signs-of-water-damage-in-your-home.md` — 3 links.

Links were added contextually in body copy, not as bottom link lists.

## Taxonomy Helper Change

Updated `src/layouts/BlogPostLayout.astro` to use centralized category labels from `getCategoryNameMap()` instead of its own hardcoded category-name map.

No blog slugs or categories were changed.

## Build Result

Command run:

```bash
npm run build
```

Result:

- Passed.
- `astro check` result: 78 files, 0 errors, 0 warnings, 3 hints.
- Astro build completed successfully.
- 166 pages built.
- `sitemap-index.xml` created.

Existing hints remained unrelated to this Phase 1 work:

- `BaseLayout.astro` unused `ga4MeasurementId` hint.
- External GA script inline-processing hint.
- Existing unused `index` variable hint in `src/pages/service-area/[city]/[service].astro`.

## Validation Evidence

Static checks confirmed:

- Protected sample pages render `index, follow` after build:
  - `dist/services/index.html`
  - `dist/services/slab-leak-repair/index.html`
  - `dist/services/leak-detection/index.html`
  - `dist/service-area/carlsbad/water-damage-restoration/index.html`
  - `dist/insurance/index.html`
  - `dist/blog/category/water-damage/index.html`
- Protected sample pages have self-canonical URLs under `https://www.tamarackrestoration.com/`.
- `slab-leak-repair` and `leak-detection` service pages each include exactly one `FAQPage` schema occurrence in built HTML.
- Service FAQ override spot-check questions are visible and present in the built service page output.
- New internal-link targets exist in built `dist` output.
- Source noindex/nofollow scan found only the existing centralized SEO defaults and the intentional 404 noindex.
- Changed-file check did not include `vercel.json`, `src/data/cityServiceContent.ts`, or tracked `dist` files.
- Blog link counts are within the approved 1-3 natural-link range except the fire article, which intentionally has 2 natural links.

Commands run for validation included:

```bash
npm run build
python3 static validation script for robots/canonicals/FAQ/internal-link targets
rg noindex/nofollow source scan
rg changed protected files check
rg blog link count checks
git status --short
git diff --stat
git diff --name-only
```

## Remaining Phase 2/3/4 Recommendations

### Phase 2

- Add data-driven city-service support link/proof fields after separate approval.
- Improve city-service page proof and insurance link modules without editing `src/data/cityServiceContent.ts` in Phase 1.
- Add centralized insurance documentation workflow sections for carrier and carrier-service pages.

### Phase 3

- Extend the project/proof model with optional fields for cause, work performed, equipment/process, documentation, and related city-service links.
- Improve exact-vs-nearby project labels on money pages.
- Add contextual trust modules without unsupported Review/AggregateRating schema.

### Phase 4

- Expand blog category hub models with recommended next reads, project category links, and insurance support links.
- Continue adding editorial support links to additional blog posts where naturally helpful.
- Add AEO quick-answer blocks to selected informational posts after approval.
