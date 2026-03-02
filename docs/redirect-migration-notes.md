# Redirect Migration Notes

This file records **non-obvious** redirect decisions so future cleanup work does not remove SEO- or migration-critical mappings without context.

## Removed low-intent placeholders

| Legacy path | Decision | Why |
| --- | --- | --- |
| `/new-folder` | Removed from `vercel.json` redirects | Placeholder-style slug with no topical meaning. It appears only in redirect config history and not in repository content, migration inputs, or known legacy URL lists. |
| `/new-page` | Removed from `vercel.json` redirects | Placeholder-style slug with no topical meaning. It appears only in redirect config history and not in repository content, migration inputs, or known legacy URL lists. |

## Keep these non-obvious redirects

| Legacy path | Destination | Why this should remain |
| --- | --- | --- |
| `/blog/top-10-mold-removal-companies-carlsba-ca` | `/blog/` | Corrects a historical misspelled slug (`carlsba`) from earlier migrations. This captures typo traffic from old links and previously indexed URL variants even though the exact slug is malformed. |
| `/testamonials` | `/about/testimonials/` | Common misspelling route retained intentionally to preserve inbound links and user typo traffic. |
