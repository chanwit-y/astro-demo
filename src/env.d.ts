/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TENANT_ID: string;
  readonly CLIENT_ID: string;
  readonly REDIRECT_URL: string;
  readonly API_SCOPE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

