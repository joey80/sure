import React, { createContext, useContext, useReducer } from 'react';
import {
  ActionAddressTypes,
  ActionClearFieldsTypes,
  ActionQuoteTypes,
  ActionUserTypes,
  FormContextTypes,
  FormContextStateTypes,
  ActionQuoteVariableTypes,
} from './types';

const initialAddress = {
  city: '',
  line_1: '',
  line_2: '',
  postal: '',
  region: '',
};

const initialUser = {
  first_name: '',
  last_name: '',
};

const initialState: FormContextStateTypes = {
  userInfo: {
    address: initialAddress,
    ...initialUser,
  },
  userQuote: {
    quote: {
      policy_holder: initialUser,
      premium: 0,
      quoteId: '',
      rating_address: initialAddress,
      variable_options: {
        asteroid_collision: {
          description: '',
          title: '',
          values: [0],
        },
        deductible: {
          description: '',
          title: '',
          values: [0],
        },
      },
      variable_selections: {
        asteroid_collision: 0,
        deductible: 0,
      },
    },
  },
};

const FormContext = createContext<FormContextTypes>({
  dispatch: () => {},
  state: initialState,
});

const FormReducer = (
  state: FormContextStateTypes,
  action:
    | ActionAddressTypes
    | ActionClearFieldsTypes
    | ActionQuoteVariableTypes
    | ActionQuoteTypes
    | ActionUserTypes
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
    case 'saveUserQuoteVariable':
      return {
        ...state,
        userQuote: {
          ...state.userQuote,
          quote: {
            ...state.userQuote.quote,
            variable_selections: {
              ...state.userQuote.quote.variable_selections,
              ...action.payload,
            },
          },
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
