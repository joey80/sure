import React, { createContext, useContext, useReducer } from 'react';
import { FormContextTypes, FormContextActionTypes, FormContextStateTypes } from './types';

const initialState: FormContextStateTypes = {};

const FormContext = createContext<FormContextTypes>({
  dispatch: () => {},
  state: initialState,
});

const FormReducer = (state: FormContextStateTypes, action: FormContextActionTypes) => {
  return {
    ...state,
    ...action.payload,
  };
};

const FormContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(FormReducer, initialState);

  return <FormContext.Provider value={{ dispatch, state }}>{children}</FormContext.Provider>;
};

const useFormContext = () => useContext(FormContext);

export { FormContextProvider, useFormContext };
