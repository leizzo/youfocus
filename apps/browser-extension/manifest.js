const { defineManifest } = require('@crxjs/vite-plugin');
/** Root Package */
const { version } = require('../../package.json');

module.exports = defineManifest({
  manifest_version: 3,
  name: 'YouFocus',
  short_name: 'YF',
  version,
  version_name: `${version}-alpha ${new Date().toLocaleDateString()}`,
  default_locale: 'en',
  description: 'A chrome extension for focusing youtube',
  action: { default_popup: 'index.html' },
  content_scripts: [
    {
      js: ['src/content.jsx'],
      run_at: 'document_end',
      matches: ['https://*.youtube.com/*'],
    },
  ],
  permissions: ['https://*/*', 'http://*/*', 'storage'],
});
