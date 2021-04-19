import React, { useContext, useState } from "react";
import data, { IData } from "./data";

const AppContext = React.createContext({});

interface Props {
  children: React.ReactNode;
}

interface contextData {
  state: IData;
  setState: React.Dispatch<React.SetStateAction<IData>>;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(data);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): contextData => {
  return useContext(AppContext) as contextData;
};

export { AppProvider, useGlobalContext };
