import React, { useContext, createContext, useState } from "react";

export const ObsContext = createContext({
  isConnected: false,
  isLoading: true,
  connInfo: null,
  setConnInfo: null,
  setIsLoading: null,
});

export const ObsProvider = ({ onConnect, ...rest }) => {
  const [connInfo, setConnInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ObsContext.Provider
      value={{
        isLoading,
        isConnected: !!connInfo,
        connInfo,
        setConnInfo,
        setIsLoading,
      }}
      {...rest}
    />
  );
};
export const useObs = () => useContext(ObsContext);
