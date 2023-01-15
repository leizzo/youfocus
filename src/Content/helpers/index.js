/**
 * Element Selector
 * It's use for finding youtube content elements.
 */
export const ELEMENT_SELECTOR = {
  sidebarElement: document.querySelector('ytd-watch-flexy[flexy] #secondary.ytd-watch-flexy'),
  comments: document.querySelector('ytd-comments'),
  youtubeWrapper: document.querySelector('ytd-app'),
  toolbar: document.querySelector('ytd-masthead #end'),
};

/**
 * className Collector
 * @param  {...any} classes 'text-sm text-black', 'py-2 h-4'
 * @returns
 * @example classNames('text-sm text-black', variable && 'bg-blue');
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
