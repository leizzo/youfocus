import './content.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Talkr } from 'talkr';
import en from '../i18n/en.json';
import App from './shells/main';
import { ELEMENT_SELECTOR } from './helpers';

const activeChromeLanguage = chrome.i18n.getUILanguage().split('-')[0];

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
        <Talkr languages={{ en }} defaultLanguage={activeChromeLanguage}>
          <App.Toolbar />
        </Talkr>
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
        <Talkr languages={{ en }} defaultLanguage={activeChromeLanguage}>
          <App.Content />
        </Talkr>
      </React.StrictMode>,
    );

    obs.disconnect();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
