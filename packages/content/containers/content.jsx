import React from 'react';

import {
  ELEMENT_CLASSNAMES, observeElementInTheDOM, observeUrlChange, SwitchBase,
} from '@yt-focus/ui';
import { useOptionsContext } from '../context/options';

/**
 * Content Container
 * @returns
 */
export function Content() {
  const { options, updateOptions } = useOptionsContext();

  observeUrlChange((location) => {
    if (location.pathname === '/watch' && options.isSidebarEnabled) {
      observeElementInTheDOM(ELEMENT_CLASSNAMES.sidebar, (element) => {
        element.remove();
      });
    }
  });

  return (
    <div className="flex flex-wrap w-full">
      {Object.entries(options)
        .reduce((a, c) => {
          a.push({ [c[0]]: c[1], key: c[0] });
          return a;
        }, [])
        .map((item) => (
          <div
            key={item.key}
            className="w-full"
          >
            <SwitchBase
              text={item.key}
              onChange={
                () => updateOptions(
                  {
                    [item.key]: !options[item.key],
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
