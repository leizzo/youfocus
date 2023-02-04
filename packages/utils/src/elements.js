export const ELEMENT_CLASSNAMES = {
  app: 'ytd-app',
  toolbar: 'ytd-masthead #end',
  sidebar: '#secondary.ytd-watch-flexy',
  comments: 'ytd-comments',
  html: 'html',
  /**
   * TODO:
   * - Find all Shorts Classes and remove
   */
  shorts: 'a[title=Shorts]',
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
  html: document.querySelector(ELEMENT_CLASSNAMES.html),
};

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

/**
 *
 */
const ELEMENT_LIST = {
  isSidebarDisabled: ELEMENT_CLASSNAMES.sidebar,
  isCommentDisabled: ELEMENT_CLASSNAMES.comments,
  isShortsDisabled: ELEMENT_CLASSNAMES.shorts,
};
/**
 *
 * @param {object} object
 */
export function conditionalRemove(object) {
  Object.entries(object).forEach(([name, value]) => {
    if (value) {
      observeElementInTheDOM(ELEMENT_LIST[name], removeSelectedElement);
    }
  });
}
