import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// PORT and BASE_PATH are injected by Replit's managed workflows.
// When building on Vercel (or locally), they are not set — fall back to safe defaults.
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;
const basePath = process.env.BASE_PATH ?? '/';

const isReplit =
  process.env.NODE_ENV !== 'production' && process.env.REPL_ID !== undefined;

export default defineConfig(async () => ({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(await (async () => {
      if (!isReplit) return [];
      const [{ default: runtimeErrorOverlay }, { cartographer }, { devBanner }] =
        await Promise.all([
          import('@replit/vite-plugin-runtime-error-modal'),
          import('@replit/vite-plugin-cartographer'),
          import('@replit/vite-plugin-dev-banner'),
        ]);
      return [
        runtimeErrorOverlay(),
        cartographer({ root: path.resolve(import.meta.dirname, '..') }),
        devBanner(),
      ];
    })()),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      // @assets alias kept for backward compat — images are now in /public/images/
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: false,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
}));
