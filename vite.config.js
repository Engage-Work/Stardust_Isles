import { defineConfig } from 'vite';

// In dev, /api is proxied to the Node server (npm start) so AI chat works with `npm run dev` too.
// Builds target the GitHub Pages sub-path; set BASE_PATH=/ (and VITE_AI_CHAT=1) to host with the Node server instead.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? (process.env.BASE_PATH || '/Stardust_Isles/') : '/',
  server: { proxy: { '/api': `http://localhost:${process.env.API_PORT || 8080}` } },
  build: { chunkSizeWarningLimit: 2000 },
}));
