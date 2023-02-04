import { useEffect } from 'react';

export const useMutationObserver = (
  ref,
  callback,
  options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  },
) => {
  useEffect(() => {
    if (ref) {
      const observer = new MutationObserver(callback);
      observer.observe(ref, options);
      return () => observer.disconnect();
    }
    return () => {};
  }, [callback, options]);
};

/**
 * Asynchronously find element in the dom tree
 * @param {HTMLDivElement} element
 * @param {Function} callback
 * @returns
 */
export function useFindElementInTheDOM(element, callback) {
  return useMutationObserver(element, callback);
}
