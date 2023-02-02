import { useSettingsStore } from '@youfocus/storage';
import PropTypes from 'prop-types';
import {
  createContext, useCallback, useMemo,
} from 'react';

/**
 * @typedef Settings
 * @type {import('@youfocus/types/src/storage.type').SETTINGS_INITIAL_VALUE}
 */

/**
 * @typedef TSettingsContext
 * @property {Settings} settings
 * @property {function} updateSettings
 */

/**
 * @type {import('react').Context<TSettingsContext>}
 */
export const SettingsContext = createContext({
  settings: {
    isSidebarDisabled: false,
    isCommentDisabled: false,
    isShortsDisabled: false,
  },
  updateSettings: () => {},
  route: document.location,
  updateRoute: () => {},
});

/**
 *
 * @param {{ children: JSX.Element }} children JSX Element
 * @returns
 */
export function SettingsContextProvider({ children }) {
  const [settings, setSettings] = useSettingsStore();

  const updateSettings = useCallback((data) => {
    setSettings({ ...settings, ...data });
  }, [settings]);

  const settingsContextValue = useMemo(() => (
    {
      settings,
      updateSettings,
    }), [settings]);

  return (
    <SettingsContext.Provider value={settingsContextValue}>
      {children}
    </SettingsContext.Provider>
  );
}

SettingsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
