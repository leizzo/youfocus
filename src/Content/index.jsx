import './content.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./shells/main";


const findElement = setInterval(() => {

  if (document.querySelector('ytd-watch-flexy[flexy] #secondary.ytd-watch-flexy') && document.querySelector('#end.ytd-masthead')) {

    const root = document.createElement("div");
    root.id = "yt-focus-toolbar";
    document.querySelector('ytd-masthead #end').append(root);

    ReactDOM.createRoot(document.getElementById("yt-focus-toolbar")).render(
      <React.StrictMode>
        <App.Toolbar />
      </React.StrictMode>
    );


    const contentRoot = document.createElement("div");
    contentRoot.id = "yt-focus-content";
    document.querySelector('body').append(contentRoot);

    ReactDOM.createRoot(document.getElementById("yt-focus-content")).render(
      <React.StrictMode>
        <App.Content />
      </React.StrictMode>
    );

    clearInterval(findElement);
  }
}, 1)
