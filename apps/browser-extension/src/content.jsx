import {
  Content, RouterContextProvider, SettingsContextProvider, Toolbar,
} from '@youfocus/content';
import '@youfocus/ui/index.css';
import { ELEMENT_CLASSNAMES, observeElementInTheDOM } from '@youfocus/utils';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * This Observer looks at that if element is exist at the DOM.
 */
observeElementInTheDOM(ELEMENT_CLASSNAMES.toolbar, () => {
  /**
   * TOOLBAR SHELL INITIALIZE
   */
  const root = document.createElement('div');
  root.id = 'yt-focus-toolbar';
  document.querySelector('ytd-masthead #end').append(root);

  ReactDOM.createRoot(document.getElementById('yt-focus-toolbar')).render(
    <StrictMode>
      <Toolbar />
    </StrictMode>,
  );

  /**
   * CONTENT SHELL INITIALIZE
   */
  const contentRoot = document.createElement('div');
  contentRoot.id = 'yt-focus-content';
  document.querySelector('body').append(contentRoot);

  ReactDOM.createRoot(document.getElementById('yt-focus-content')).render(
    <StrictMode>
      <SettingsContextProvider>
        <RouterContextProvider>
          <Content />
        </RouterContextProvider>
      </SettingsContextProvider>
    </StrictMode>,
  );
});
