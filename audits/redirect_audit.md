# Redirect Audit

Source: live `scripts/verify-redirects.sh` execution against production URL from this environment.

## Summary
```
TOTAL=48
PASS=0
CHAINS_GT1=0
LOOPS=0
FINAL_NOT_200=48
BAD_REDIRECT_CODE=0
HOMEPAGE_DUMPS=0
HOMEPAGE_DUMP_PCT=0.00
CANONICAL_HOST_MISMATCH=0
SCHEME_MISMATCH=0
TRAILING_SLASH_THRASH=0
QUERY_PRESERVATION_FAILURES=5
NETWORK_ERRORS=48
QUERY_TESTS_CSV=audits/redirect-audit-query-tests.csv
THRESHOLDS_OK=no
```

## Top offenders (up to 20)

| old_path | final_url | final_status | issues |
|---|---|---:|---|
| `/about/trusted-partners-certifications` | `https://www.tamarackrestoration.com/about/trusted-partners-certifications` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/blog/category/water-damage` | `https://www.tamarackrestoration.com/blog/category/water-damage` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/blog/top-10-mold-removal-companies-carlsba-ca` | `https://www.tamarackrestoration.com/blog/top-10-mold-removal-companies-carlsba-ca` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/blog/top-10-mold-removal-companies-carlsba-ca/` | `https://www.tamarackrestoration.com/blog/top-10-mold-removal-companies-carlsba-ca/` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/contact-us` | `https://www.tamarackrestoration.com/contact-us` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/fire-and-smoke-restoration` | `https://www.tamarackrestoration.com/fire-and-smoke-restoration` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/flood-cleanup` | `https://www.tamarackrestoration.com/flood-cleanup` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/insurance-information` | `https://www.tamarackrestoration.com/insurance-information` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/mold-removal` | `https://www.tamarackrestoration.com/mold-removal` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/new-folder` | `https://www.tamarackrestoration.com/new-folder` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/new-page` | `https://www.tamarackrestoration.com/new-page` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/our-projects/sample` | `https://www.tamarackrestoration.com/our-projects/sample` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/bressi-ranch/mold-remediation` | `https://www.tamarackrestoration.com/service-area/bressi-ranch/mold-remediation` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/bressi-ranch/water-restoration` | `https://www.tamarackrestoration.com/service-area/bressi-ranch/water-restoration` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/carlsbad/affordable-water-restoration` | `https://www.tamarackrestoration.com/service-area/carlsbad/affordable-water-restoration` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/carlsbad/emergency-water-damage-restoration` | `https://www.tamarackrestoration.com/service-area/carlsbad/emergency-water-damage-restoration` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/carlsbad/mold-remediation` | `https://www.tamarackrestoration.com/service-area/carlsbad/mold-remediation` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/carlsbad/slab-leak-repair` | `https://www.tamarackrestoration.com/service-area/carlsbad/slab-leak-repair` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/carlsbad/water-restoration` | `https://www.tamarackrestoration.com/service-area/carlsbad/water-restoration` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
| `/service-area/encinitas/mold-remediation` | `https://www.tamarackrestoration.com/service-area/encinitas/mold-remediation` | 0 | `final_0|network_error: curl: (56) CONNECT tunnel failed, response 403` |
