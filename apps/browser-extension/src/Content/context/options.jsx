import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const defaultOptions = {
  isSidebarEnabled: false,
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

  const updateOptions = useCallback((data) => {
    setOptions({ ...options, ...data });
  }, [options]);

  const oo = useMemo(() => ({ options, updateOptions }), [options, updateOptions]);

  return (
    <OptionsContext.Provider value={oo}>
      {children}
    </OptionsContext.Provider>
  );
}

OptionsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
