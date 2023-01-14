import { useEffect } from 'react';

export function sidebarDiscover(isSidebarFocusEnabled, elements) {
  if (!isSidebarFocusEnabled) {
    return false;
  }

  const sideBarElement = document.querySelector('ytd-watch-flexy[flexy] #secondary.ytd-watch-flexy');

  useEffect(() => {
    if (toggle) {
      sideBarElement.classList.add('opened');
    } else {
      sideBarElement.classList.remove('opened');
    }
  });
}
