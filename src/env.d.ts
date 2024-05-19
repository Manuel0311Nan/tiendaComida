
// / <reference path="../.astro/types.d.ts" />
// env.d.ts
interface ImportMetaEnv {
    RESEND_API_KEY: string;
    readonly VITE_API_URL: string;
    // Otras variables de entorno
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  