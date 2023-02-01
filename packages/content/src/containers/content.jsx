import { SwitchBase } from '@youfocus/ui';
import {
  ELEMENT_CLASSNAMES, getMessage, observeElementInTheDOM,
  onLocationPathChanged,
} from '@youfocus/utils';
import { useSettingsContext } from '../hooks/use-settings.hook';

const changedLocation = (settings) => onLocationPathChanged((location) => {
  if (location.pathname === '/watch' && settings.isSidebarDisabled) {
    observeElementInTheDOM(ELEMENT_CLASSNAMES.sidebar, (element) => {
      element.remove();
    });
  }
});

export function Content() {
  const { settings, updateSettings } = useSettingsContext();

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
