import React, { useContext, useState } from 'react';
import { IData, getData } from './data';

const AppContext = React.createContext({});

interface Props {
  children: React.ReactNode;
}

interface contextData {
  state: IData;
  setState: React.Dispatch<React.SetStateAction<IData>>;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  todoId: string | undefined;
  setTodoId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const data = getData();
  const [state, setState] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [todoId, setTodoId] = useState<string | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        showForm,
        setShowForm,
        todoId,
        setTodoId,
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
