import { useContext } from 'react';
import { SettingsContext } from '../context/settings.context';

/**
 * Settings Context Hook
 * @returns {import('../context/settings.context').TSettingsContext}
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
