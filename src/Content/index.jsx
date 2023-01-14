import './content.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./shells/main";
import { ELEMENT_SELECTOR } from './helpers';


const observer = new MutationObserver((_, obs) => {


  if (ELEMENT_SELECTOR.toolbar) {

    /**
     * TOOLBAR SHELL INITIALIZE
     */
    const root = document.createElement("div");
    root.id = "yt-focus-toolbar";
    document.querySelector('ytd-masthead #end').append(root);

    ReactDOM.createRoot(document.getElementById("yt-focus-toolbar")).render(
      <React.StrictMode>
        <App.Toolbar />
      </React.StrictMode>
    );

    /**
     * CONTENT SHELL INITIALIZE
     */
    const contentRoot = document.createElement("div");
    contentRoot.id = "yt-focus-content";
    document.querySelector('body').append(contentRoot);

    ReactDOM.createRoot(document.getElementById("yt-focus-content")).render(
      <React.StrictMode>
        <App.Content />
      </React.StrictMode>
    );

    obs.disconnect();
    return;
  }
});


observer.observe(document, {
  childList: true,
  subtree: true
});
