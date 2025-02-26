/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENWEATHER_API_KEY: string;
  readonly VITE_OPENWEATHER_API_URL: string;
  readonly VITE_OPENWEATHER_GEO_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}