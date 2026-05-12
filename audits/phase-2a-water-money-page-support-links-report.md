# Phase 2A Water Money Page Support Links Report

## Scope

Phase 2A added compact, curated support-link groups to approved priority water-related city-service money pages only. The implementation strengthens internal linking, topical relevance, and conversion paths without rewriting city-service body content or changing project, insurance, redirect, schema, canonical, or robots behavior.

## Files Changed

- `src/data/cityServiceSupportLinks.ts` — new centralized support-link data file keyed by exact `citySlug__serviceSlug` pairs.
- `src/pages/service-area/[city]/[service].astro` — imports the support-link helper and renders `PriorityInternalLinks` only when data exists for the current city/service pair.
- `audits/phase-2a-water-money-page-support-links-report.md` — this implementation and validation report.

## Protected Files and Behaviors

- `vercel.json` was not changed.
- Redirects were not changed.
- URL slugs were not changed.
- Canonical and robots behavior were not changed.
- No pages were noindexed.
- No generated `dist/` files were edited.
- `src/data/cityServiceContent.ts` was untouched.
- No schema helpers were modified.
- No Review or AggregateRating schema was added.
- No project facts, review snippets, carrier partnership claims, preferred vendor claims, direct billing promises, claim approval promises, or guaranteed coverage statements were added.

## Support-Link Data Model

The new `src/data/cityServiceSupportLinks.ts` file defines:

- `CityServiceSupportLink`
- `CityServiceSupportLinkGroup`
- `supportLinksByCityService`, keyed by stable composite keys such as `carlsbad__water-damage-restoration`
- `enhancedCityServiceSupportLinkKeys`, exported for auditing and future checks
- `getCityServiceSupportLinks(citySlug, serviceSlug)`, which returns an empty array when a city/service pair is not explicitly configured

The city-service route calls `getCityServiceSupportLinks(city, service)` and renders the shared `PriorityInternalLinks` section only when the returned group list is non-empty. This keeps the enhancement opt-in and prevents a mass update across all 64 city-service pages.

## Priority Pages Enhanced

The support-link data exists only for these approved priority pages:

1. `/service-area/carlsbad/water-damage-restoration/`
2. `/service-area/carlsbad/water-leak-repair/`
3. `/service-area/carlsbad/slab-leak-repair/`
4. `/service-area/carlsbad/leak-detection/`
5. `/service-area/carlsbad/flood-cleanup/`
6. `/service-area/encinitas/water-damage-restoration/`
7. `/service-area/oceanside/water-damage-restoration/`
8. `/service-area/san-marcos/water-damage-restoration/`
9. `/service-area/vista/water-damage-restoration/`
10. `/service-area/bressi-ranch/water-damage-restoration/`

## Groups Added Per Priority Page

### Carlsbad Water Damage Restoration

- Related Water Services
- Helpful Guides
- Insurance Resources

### Carlsbad Water Leak Repair

- Related Water Services
- Helpful Guides
- Insurance Resources

### Carlsbad Slab Leak Repair

- Related Water Services
- Helpful Guides
- Insurance Resources

### Carlsbad Leak Detection

- Related Water Services
- Helpful Guides
- Local Project Examples

### Carlsbad Flood Cleanup

- Related Water Services
- Helpful Guides
- Insurance Resources

### Encinitas Water Damage Restoration

- Related Water Services
- Helpful Guides
- Nearby Service Areas

### Oceanside Water Damage Restoration

- Related Water Services
- Helpful Guides
- Insurance Resources

### San Marcos Water Damage Restoration

- Related Water Services
- Helpful Guides
- Insurance Resources

### Vista Water Damage Restoration

- Related Water Services
- Helpful Guides
- Nearby Service Areas

### Bressi Ranch Water Damage Restoration

- Related Water Services
- Helpful Guides
- Nearby Service Areas

## Link Safety Notes

- All links use existing route patterns or existing blog slugs.
- No links were added to `/projects/slab-leak-repair/` or `/projects/leak-detection/`.
- Slab leak, leak detection, and water leak repair pages use `/insurance/` or educational water-damage insurance resources instead of unsupported carrier-service links.
- Water damage and flood cleanup pages use carrier-service insurance links only where those routes are generated for covered services.
- Insurance descriptions use cautious documentation language and state that coverage depends on policy terms, cause of loss, exclusions, and carrier review.
- Link groups are compact: each page has three groups, and each group uses two or three links.

## Validation Results

### Commands Run

- `git status --short`
- `git diff --stat`
- `npm run build`
- Static support-link key and linked URL validation using a Python script
- Source scan for noindex/nofollow and unsupported review schema strings in changed source files
- Protected file diff check for `vercel.json`, `src/data/cityServiceContent.ts`, and `dist`
- Route conditional scan for support-link rendering

### Build Result

`npm run build` could not complete in this environment because dependencies are not installed and `astro` is unavailable in `node_modules`:

```text
sh: 1: astro: not found
```

An attempted `npm ci` could not complete because the package registry request was blocked by the environment with `403 Forbidden` for `https://registry.npmjs.org/astro`. This is an environment/dependency limitation, not a code-level failure observed by the static checks.

### Static Checks Completed

- Support-link data key count: 10
- Support-link keys matched the approved priority list: yes
- Unique linked URL count: 48
- Linked URL existence/route-pattern validation: passed
- Disallowed project category links checked: none found
- `vercel.json` modified: no
- `src/data/cityServiceContent.ts` modified: no
- `dist/` modified: no
- Route renders `PriorityInternalLinks` only when `supportLinkGroups.length > 0`: yes
- No explicit `noindex` or `nofollow` directives were added in changed source files.
- No Review or AggregateRating schema was added.

## Linked URL Existence Checks

The static linked URL validation checked all `href` values in `src/data/cityServiceSupportLinks.ts` against:

- existing blog markdown slugs in `src/content/blog/`
- existing project category routes already present in project data
- existing static route families for `/services/`, `/service-area/[city]/[service]/`, `/insurance/[carrier]/[service]/`, `/blog/category/[slug]/`, and `/projects/[category]/`

Result: all linked URLs passed the validation script.

## Layout and Design Notes

- `PriorityInternalLinks.astro` was reused without modification, preserving existing default behavior on service pages and blog category hubs.
- A compact variant was not added because the data itself is compact: three groups per enhanced page, with two or three links per group.
- The section is placed after the local project gallery and before the remaining late-page layout sections supplied by `MoneyPageLayout`, providing a natural path from proof to next-step resources without adding an early-page link block.
- No global design changes were made.

## Remaining Phase 2B/2C/2D Recommendations

These were intentionally not implemented in Phase 2A:

- Phase 2B: Add transparent project/proof match labels for exact city-service, same-city related-service, and same-service nearby project cards.
- Phase 2C: Add selected water-priority SEO title/meta overrides and avoid exact H1 duplication in the intro section.
- Phase 2D: Add a compact local trust summary module using centralized review/trust data only and no review schema.
