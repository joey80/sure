import React, { createContext, useContext, useReducer } from 'react';
import {
  ActionAddressTypes,
  ActionClearFieldsTypes,
  ActionQuoteTypes,
  ActionUserTypes,
  FormContextTypes,
  FormContextStateTypes,
} from './types';

const initialState: FormContextStateTypes = {
  userInfo: {
    address: {
      city: '',
      line_1: '',
      line_2: '',
      postal: '',
      region: '',
    },
    first_name: '',
    last_name: '',
  },
  userQuote: {},
};

const FormContext = createContext<FormContextTypes>({
  dispatch: () => {},
  state: initialState,
});

const FormReducer = (
  state: FormContextStateTypes,
  action: ActionAddressTypes | ActionClearFieldsTypes | ActionQuoteTypes | ActionUserTypes
) => {
  switch (action.type) {
    case 'clearFields':
      return {
        ...state,
        ...initialState,
      };
    case 'saveUserAddress':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          address: {
            ...state.userInfo.address,
            ...action.payload,
          },
        },
      };
    case 'saveUserName':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload,
        },
      };
    case 'saveUserQuote':
      return {
        ...state,
        userQuote: {
          ...action.payload,
        },
      };
    default:
      throw new Error();
  }
};

const FormContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(FormReducer, initialState);

  return <FormContext.Provider value={{ dispatch, state }}>{children}</FormContext.Provider>;
};

const useFormContext = () => useContext(FormContext);

export { FormContextProvider, useFormContext };
