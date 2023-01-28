import React from 'react';

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  logo: <span>Youtube Focus</span>,
  primaryHue: 360,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Youtube Focus" />
      <meta property="og:description" content="A Chrome Extension for better Youtube experience." />
    </>
  ),
  project: {
    link: 'https://github.com/leizzo/yt-focus',
  },
  docsRepositoryBase: 'https://github.com/leizzo/yt-focus/tree/main/apps/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – YT FOCUS',
    };
  },

};
