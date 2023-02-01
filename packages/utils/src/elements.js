export const ELEMENT_CLASSNAMES = {
  app: 'ytd-app',
  toolbar: 'ytd-masthead #end',
  sidebar: '#secondary.ytd-watch-flexy',
  comments: 'ytd-comments',
};
/**
 * Element Selector
 * It's use for finding youtube content elements.
 * @type {import('@youfocus/types/src/elements.type').ELEMENT_CLASSNAMES}
 */
export const ELEMENT_SELECTOR = {
  sidebarElement: document.querySelector(ELEMENT_CLASSNAMES.sidebar),
  youtubeWrapper: document.querySelector(ELEMENT_CLASSNAMES.app),
  comments: document.querySelector(ELEMENT_CLASSNAMES.comments),
  toolbar: document.querySelector(ELEMENT_CLASSNAMES.toolbar),
};

/**
 * @callback location
 * @param {Location} location
 */
/**
 * Observe Url Change
 * @param {location} callback
 */
export function onLocationPathChanged(callback) {
  let oldHref = document.location.href;
  const body = document.querySelector('body');
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        /**
         * @type {HTMLDivElement} location
         */
        callback(document.location);
      }
    });
  });
  observer.observe(body, { childList: true, subtree: true });
}

/**
 * Observe Element in the dom.
 * @param {String} element
 * @param {Function} callback
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

/**
 * Remove Selected Element
 * @param {HTMLDivElement} element
 */
export function removeSelectedElement(element) {
  element.remove();
}
