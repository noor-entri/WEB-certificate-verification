// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://noor-entri.github.io',
  base: 'WEB-certificate-verification',
  env: {
    schema: {
      API_BASE_URL: envField.string({ context: "client", access: "public", default: "https://channel7.dev.entri.app/api", url: true }),
    }
  }
});