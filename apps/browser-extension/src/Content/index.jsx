import '@yt-focus/ui/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Content, Toolbar, OptionsContextProvider } from '@yt-focus/content';
import { ELEMENT_SELECTOR } from '@yt-focus/ui';

/**
 * This Observer looks at that if element is exist at the DOM.
 */
const observer = new MutationObserver((_, obs) => {
  if (ELEMENT_SELECTOR.toolbar) {
    /**
     * TOOLBAR SHELL INITIALIZE
     */
    const root = document.createElement('div');
    root.id = 'yt-focus-toolbar';
    document.querySelector('ytd-masthead #end').append(root);

    ReactDOM.createRoot(document.getElementById('yt-focus-toolbar')).render(
      <React.StrictMode>
        <OptionsContextProvider>
          <Toolbar />
        </OptionsContextProvider>
      </React.StrictMode>,
    );

    /**
     * CONTENT SHELL INITIALIZE
     */
    const contentRoot = document.createElement('div');
    contentRoot.id = 'yt-focus-content';
    document.querySelector('body').append(contentRoot);

    ReactDOM.createRoot(document.getElementById('yt-focus-content')).render(
      <React.StrictMode>
        <OptionsContextProvider>
          <Content />
        </OptionsContextProvider>
      </React.StrictMode>,
    );

    obs.disconnect();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
