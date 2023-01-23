/**
 * Chrome i18n
 * @param {string} key
 * @returns
 */
export function getMessage(key) {
  return chrome.i18n.getMessage(key);
}
