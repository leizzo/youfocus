import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const defaultOptions = {
  isSidebarDisabled: false,
  isShortsDisabled: false,
  isCommentDisabled: false,
};

export const SettingsContext = createContext(defaultOptions);

/**
 * Use Options Context
 * @returns
 */
export function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      'useSettingsContext has to be used within SettingsContextProvider',
    );
  }

  return context;
}

/**
 * Options Context Provider
 * @param {children} children
 * @returns
 */
export function SettingsContextProvider({ children }) {
  const [settings, setSettings] = useState(defaultOptions);

  const updateSettings = useCallback((data) => {
    setSettings({ ...settings, ...data });
  }, [settings]);

  const settingsContextValue = useMemo(() => (
    { settings, updateSettings }), [settings, updateSettings]);

  return (
    <SettingsContext.Provider value={settingsContextValue}>
      {children}
    </SettingsContext.Provider>
  );
}

SettingsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
