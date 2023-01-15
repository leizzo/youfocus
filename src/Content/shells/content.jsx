import React from 'react';
import { useT } from 'talkr';

import { useOptionsContext } from '../context/options';
import SwitchBase from '../components/ui/Switch';
import { ELEMENT_CLASSNAMES, observeElementInTheDOM, observeUrlChange } from '../helpers/index';

export default function Content() {
  const { options, updateOptions } = useOptionsContext();
  const { T } = useT();

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
              text={T(item.key)}
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
