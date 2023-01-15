import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const defaultOptions = {
  isSidebarEnabled: false,
  isShortsEnabled: true,
  isViewCountAndDateEnabled: true,
  isVideoCreatorEnabled: true,
};

export const OptionsContext = createContext(defaultOptions);

/**
 * Use Options Context
 * @returns
 */
export function useOptionsContext() {
  const context = useContext(OptionsContext);

  if (!context) {
    throw new Error(
      'useOptionsContext has to be used within OptionsContextProvider',
    );
  }

  return context;
}

/**
 * Options Context Provider
 * @param {children} children
 * @returns
 */
export function OptionsContextProvider({ children }) {
  const [options, setOptions] = useState(defaultOptions);

  const oo = useMemo(() => ({ options, setOptions }), []);

  return (
    <OptionsContext.Provider value={oo}>
      {children}
    </OptionsContext.Provider>
  );
}

OptionsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
