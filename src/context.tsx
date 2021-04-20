import React, { useContext, useState } from "react";
import data, { IData } from "./data";

const AppContext = React.createContext({});

interface Props {
  children: React.ReactNode;
}

interface contextData {
  state: IData;
  setState: React.Dispatch<React.SetStateAction<IData>>;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(data);
  const [showForm, setShowForm] = useState(false);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        showForm,
        setShowForm,
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
