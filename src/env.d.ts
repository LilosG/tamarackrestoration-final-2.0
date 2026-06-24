/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_MAPS_API_KEY?: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_GA4_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
