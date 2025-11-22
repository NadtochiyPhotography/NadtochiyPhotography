import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['devserver-preview--nadtochiyphotography.netlify.app'],
  },
});


// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ...твои другие настройки Astro (если есть)
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
