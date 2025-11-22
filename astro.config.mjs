import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ...твои существующие настройки (ничего не удаляй)
  vite: {
    server: {
      allowedHosts: [
        'devserver-preview--nadtochiyphotography.netlify.app',
        'studio--nadtochiyphotography.netlify.app',
        'nadtochiyphotography.netlify.app',
        'localhost',
        '127.0.0.1'
      ],
    },
  },
});
