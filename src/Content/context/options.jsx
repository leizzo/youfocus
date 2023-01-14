import { createContext, useContext, useState } from "react";

const defaultOptions = {
  isSidebarEnabled: false,
  isShortsEnabled: true,
  isViewCountAndDateEnabled: true,
  isVideoCreatorEnabled: true,
};

export const OptionsContext = createContext(defaultOptions);

export function useOptionsContext() {
  const context = useContext(OptionsContext);

  if (!context) {
    throw new Error(
      "useOptionsContext has to be used within OptionsContextProvider"
    )
  }

  return context;
}

export function OptionsContextProvider({ children }) {
  const [options, setOptions] = useState(defaultOptions);

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
}
