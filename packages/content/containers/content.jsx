import React from 'react';

import {
  ELEMENT_CLASSNAMES, observeElementInTheDOM, observeUrlChange, SwitchBase, getMessage,
} from '@yt-focus/ui';
import { useSettingsContext } from '../context/settings.context';

/**
 * Content Container
 * @returns
 */
export function Content() {
  const { settings, updateSettings } = useSettingsContext();

  observeUrlChange((location) => {
    if (location.pathname === '/watch' && settings.isSidebarDisabled) {
      observeElementInTheDOM(ELEMENT_CLASSNAMES.sidebar, (element) => {
        element.remove();
      });
    }
  });

  return (
    <div className="flex flex-wrap w-full">
      {Object.entries(settings)
        .reduce((a, c) => {
          a.push({ [c[0]]: c[1], key: c[0] });
          return a;
        }, [])
        .map((item) => (
          <div
            key={item.key}
            className="w-full mb-3"
          >
            <SwitchBase
              text={getMessage(item.key)}
              checked={item[item.key]}
              onChange={
                () => updateSettings(
                  {
                    [item.key]: !settings[item.key],
                  },
                )
              }
            />
          </div>
        ))}
    </div>
  );
}

export default Content;
