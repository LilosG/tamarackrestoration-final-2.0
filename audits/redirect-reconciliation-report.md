# Redirect Reconciliation Report

Date: 2026-05-06

## Scope

Compared:

- `audits/old_urls.txt`
- `docs/redirect-mapping.md`
- `vercel.json`
- current `src/pages` route structure
- current blog content slugs in `src/content/blog`
- generated route validation from `npm run build`

Only the approved safe redirects were implemented. Ambiguous mappings were documented for manual review and were not changed.

## Implemented redirects

| Legacy URL | Current redirect status before change | Recommended destination | Final implemented destination | Reason | Destination exists | Direct/chained | Monitor in GSC |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/blog/top-10-mold-removal-companies-carlsba-ca` | Missing from `vercel.json`; `docs/redirect-mapping.md` pointed to `/blog/` | `/blog/top-10-mold-removal-companies-carlsbad-ca/` | `/blog/top-10-mold-removal-companies-carlsbad-ca/` | Typo legacy URL has exact current matching post slug. Specific post is stronger than blog hub. | Yes | Direct on www; apex may first hit host redirect | Yes |
| `/blog/top-10-mold-removal-companies-carlsba-ca/` | Missing from `vercel.json` | `/blog/top-10-mold-removal-companies-carlsbad-ca/` | `/blog/top-10-mold-removal-companies-carlsbad-ca/` | Trailing slash variant of typo legacy URL. | Yes | Direct on www; apex may first hit host redirect | Yes |
| `/service-area/carlsbad/water-restoration` | Missing from `vercel.json` | `/service-area/carlsbad/water-damage-restoration/` | `/service-area/carlsbad/water-damage-restoration/` | Other city `water-restoration` legacy routes already map to current city water-damage pages; Carlsbad equivalent exists. | Yes | Direct on www; apex may first hit host redirect | Yes |
| `/service-area/carlsbad/water-restoration/` | Missing from `vercel.json` | `/service-area/carlsbad/water-damage-restoration/` | `/service-area/carlsbad/water-damage-restoration/` | Trailing slash variant of the Carlsbad water restoration legacy route. | Yes | Direct on www; apex may first hit host redirect | Yes |

Implemented rules in `vercel.json`:

```json
{
  "source": "/blog/top-10-mold-removal-companies-carlsba-ca",
  "destination": "/blog/top-10-mold-removal-companies-carlsbad-ca/",
  "permanent": true
}
```

```json
{
  "source": "/blog/top-10-mold-removal-companies-carlsba-ca/",
  "destination": "/blog/top-10-mold-removal-companies-carlsbad-ca/",
  "permanent": true
}
```

```json
{
  "source": "/service-area/carlsbad/water-restoration",
  "destination": "/service-area/carlsbad/water-damage-restoration/",
  "permanent": true
}
```

```json
{
  "source": "/service-area/carlsbad/water-restoration/",
  "destination": "/service-area/carlsbad/water-damage-restoration/",
  "permanent": true
}
```

## Manual review redirects not implemented

| Legacy URL / issue | Current status | Possible destination | Recommendation | Reason |
| --- | --- | --- | --- | --- |
| `/new-folder` | Listed in `audits/old_urls.txt`; no implemented redirect | Remain 404 or redirect to a relevant hub only if GSC/backlink data proves value | Manual review | Looks like a test URL; no clear topical replacement. |
| `/new-page` | Listed in `audits/old_urls.txt`; no implemented redirect | Remain 404 or redirect to a relevant hub only if GSC/backlink data proves value | Manual review | Looks like a test URL; no clear topical replacement. |
| `/our-projects/sample` | Listed in `audits/old_urls.txt`; no implemented redirect | `/projects/` if it had indexation/backlinks; otherwise intentional 404 | Manual review | Could be a sample project, but no exact replacement was verified. |
| Apex legacy URL variants | Apex host currently redirects to `https://www.tamarackrestoration.com/:path*` | Optional direct final destination rules for high-value old URLs | Manual review | Current apex legacy requests may chain apex → www → final. Avoid expanding config without prioritization. |
| `/service-area/carlsbad/slab-leak-repair(/)?` | Currently redirects to `/service-area/carlsbad/water-leak-repair/` | Possibly `/service-area/carlsbad/slab-leak-repair/` | Manual review before changing | Current generated route `/service-area/carlsbad/slab-leak-repair/` exists, so the existing redirect may be outdated. User requested audit only for this rule. |

## Validation evidence

Command:

```bash
python - <<'PY'
import json
j=json.load(open('vercel.json'))
for source in ['/blog/top-10-mold-removal-companies-carlsba-ca','/blog/top-10-mold-removal-companies-carlsba-ca/','/service-area/carlsbad/water-restoration','/service-area/carlsbad/water-restoration/','/service-area/carlsbad/slab-leak-repair(/)?']:
    for r in j['redirects']:
        if r['source']==source:
            print(f"{source} -> {r['destination']} permanent={r['permanent']}")
PY
```

Output:

```text
/blog/top-10-mold-removal-companies-carlsba-ca -> /blog/top-10-mold-removal-companies-carlsbad-ca/ permanent=True
/blog/top-10-mold-removal-companies-carlsba-ca/ -> /blog/top-10-mold-removal-companies-carlsbad-ca/ permanent=True
/service-area/carlsbad/water-restoration -> /service-area/carlsbad/water-damage-restoration/ permanent=True
/service-area/carlsbad/water-restoration/ -> /service-area/carlsbad/water-damage-restoration/ permanent=True
/service-area/carlsbad/slab-leak-repair(/)? -> /service-area/carlsbad/water-leak-repair/ permanent=True
```

## Notes

- `docs/redirect-mapping.md` still documents `/blog/top-10-mold-removal-companies-carlsba-ca` → `/blog/`; the implemented redirect intentionally uses the more specific current post URL because the exact current post exists.
- Live redirect behavior should be validated after deployment with `curl -IL` against both `https://www.tamarackrestoration.com` and `https://tamarackrestoration.com` for the four implemented URLs.
