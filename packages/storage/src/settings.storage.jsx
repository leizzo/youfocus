import { createChromeStorageStateHookLocal } from 'use-chrome-storage';
/**
 * Chrome Storage Key
 * @type {string}
 */
const SETTINGS_KEY = 'settings';
/**
 * Chrome Storage Initial Value
 * @typedef {import('@youfocus/types/src/storage.type').SETTINGS_INITIAL_VALUE}
 */
export const INITIAL_VALUE = {
  isSidebarDisabled: false,
  isShortsDisabled: false,
  isCommentDisabled: false,
  isNotificationsDisabled: false,
};

export const useSettingsStore = createChromeStorageStateHookLocal(
  SETTINGS_KEY,
  INITIAL_VALUE,
);
