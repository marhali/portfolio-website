/// <reference types="vitest" />

import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      prerender: { enabled: true },
      sitemap: { host: 'https://marhali.de' },
    }),
  ],
  test: {
    // ...
  },
});
