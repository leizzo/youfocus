const { defineManifest } = require('@crxjs/vite-plugin');
/** Root Package */
const { version } = require('../../package.json');

module.exports = defineManifest({
  manifest_version: 3,
  name: 'Youtube Focus',
  short_name: 'YT Focus',
  version,
  version_name: `${version}-alpha`,
  default_locale: 'en',
  description: 'A Chrome Extension for Youtube Focus',
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
