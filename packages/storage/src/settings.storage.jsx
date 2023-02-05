import { createChromeStorageStateHookLocal } from 'use-chrome-storage';
/**
 * Chrome Storage Key
 * @typedef {import('@youfocus/types/src/storage.type').SETTINGS_KEY}
 */
const SETTINGS_KEY = 'settings';
/**
 * Chrome Storage Initial Value
 * @typedef {import('@youfocus/types/src/storage.type').SETTINGS_INITIAL_VALUE}
 */
const INITIAL_VALUE = {
  isSidebarDisabled: false,
  isShortsDisabled: false,
  isCommentDisabled: false,
};
/**
 * Settings Store Hook
 * @typedef {import('use-chrome-storage').createChromeStorageStateHookLocal}
 */
export const useSettingsStore = createChromeStorageStateHookLocal(
  SETTINGS_KEY,
  INITIAL_VALUE,
);
