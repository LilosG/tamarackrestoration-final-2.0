# SEO Migration Policy (Redirects + Indexation)

## Canonical and URL policy
- Canonical host: **www.tamarackrestoration.com**
- Protocol: **https**
- Canonical base URL: `https://www.tamarackrestoration.com`
- Trailing slash policy: **always**
- One canonical tag per indexable URL; canonical must use canonical host + https.

## Redirect policy
- Allowed permanent redirect statuses: **301** and **308** only.
- No redirect chains > 1 hop.
- No loops.
- Final destination must return **200** on canonical URL.
- No trailing slash thrash (`/x -> /x/ -> /x`).
- Homepage dumps must stay <= 1% unless explicitly allowlisted.
- Query strings must be preserved for tracked sample URLs.
- **No redirect edits without live evidence + passing validator output.**

## Host canonicalization (edge)
- Apex must permanently redirect to www at the edge:
  - `http://tamarackrestoration.com/* -> https://www.tamarackrestoration.com/*`
  - `https://tamarackrestoration.com/* -> https://www.tamarackrestoration.com/*`
- This rule must not introduce multi-hop chains with trailing-slash handling.
- Registrar note: domain registrar can be SquareSpace (or any provider); SEO canonicalization requirement is unchanged.

## Evidence rule (required for redirect edits)
For each redirect change, include:
1. old URL inventory source (sitemap/crawl/log/GSC)
2. current chain (`curl -I -L`)
3. proposed/final chain resolves to one-hop permanent redirect and final 200 canonical URL
4. no rule conflicts in redirect configuration
5. passing `scripts/verify-redirects.sh` output

## Sitemap policy
- Include only canonical, indexable, HTTP 200 URLs.
- Exclude redirects, non-canonical URLs, params/search pages, and 404/5xx URLs.

## Staging/preview indexation policy
- Staging/preview must be noindex via meta robots.
- Staging/preview must also send edge header `X-Robots-Tag: noindex, nofollow`.

## Enforcement
- Run `scripts/verify-redirects.sh` locally and in CI.
- CI workflow `.github/workflows/seo-redirect-audit.yml` is the pass/fail gate for redirect-related PRs.
