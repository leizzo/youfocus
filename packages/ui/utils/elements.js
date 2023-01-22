export const ELEMENT_CLASSNAMES = {
  app: 'ytd-app',
  toolbar: 'ytd-masthead #end',
  sidebar: '#secondary.ytd-watch-flexy',
  comments: 'ytd-comments',
};
/**
 * Element Selector
 * It's use for finding youtube content elements.
 */
export const ELEMENT_SELECTOR = {
  sidebarElement: document.querySelector(ELEMENT_CLASSNAMES.sidebar),
  comments: document.querySelector(ELEMENT_CLASSNAMES.comments),
  youtubeWrapper: document.querySelector(ELEMENT_CLASSNAMES.app),
  toolbar: document.querySelector(ELEMENT_CLASSNAMES.toolbar),
};

/**
 * Observe Url Change
 * @param {callback} location
 */
export function observeUrlChange(callback) {
  let oldHref = document.location.href;
  const body = document.querySelector('body');
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        //
        //
        //
        callback(document.location);
      }
    });
  });
  observer.observe(body, { childList: true, subtree: true });
}

/**
 *
 * @param {string} element
 * @param {function} callback
 */
export function observeElementInTheDOM(element, callback) {
  const observer = new MutationObserver((_, obs) => {
    const el = document.querySelector(element);
    if (el) {
      /**
       *
       */
      callback(el);
      /**
       *
       */
      obs.disconnect();
    }
  });

  observer.disconnect();
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}
