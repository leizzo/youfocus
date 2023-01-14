export const ELEMENT_SELECTOR = {
  sidebarElement: document.querySelector('ytd-watch-flexy[flexy] #secondary.ytd-watch-flexy'),
  comments: document.querySelector('ytd-comments'),
  youtubeWrapper: document.querySelector('ytd-app'),
  toolbar: document.querySelector('ytd-masthead #end'),
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
