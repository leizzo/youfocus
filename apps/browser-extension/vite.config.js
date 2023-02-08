import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import manifest from './manifest';

const { version } = require('../../package.json');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [react(), crx({ manifest })],
  define: {
    __APP_VERSION__: JSON.stringify(`${version}-alpha`),
  },
});
