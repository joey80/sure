import { QuoteObjectType, UserObjectType } from '../../lambda/types';

interface ActionClearFieldsTypes {
  type: 'clearFields';
}

interface ActionAddressTypes {
  type: 'saveUserAddress';
  payload: Partial<UserObjectType['address']>;
}

interface ActionUserTypes {
  type: 'saveUserName';
  payload: Partial<Pick<UserObjectType, 'first_name' | 'last_name'>>;
}

interface ActionQuoteVariableTypes {
  type: 'saveUserQuoteVariable';
  payload: Partial<QuoteObjectType['quote']['variable_selections']>;
}

interface ActionQuoteTypes {
  type: 'saveUserQuote';
  payload: QuoteObjectType;
}

interface UserInfoType extends UserObjectType {
  address: UserObjectType['address'];
}

interface FormContextStateTypes {
  userInfo: UserInfoType;
  userQuote: QuoteObjectType;
}

interface FormContextTypes {
  dispatch(action: ActionAddressTypes): void;
  dispatch(action: ActionClearFieldsTypes): void;
  dispatch(action: ActionQuoteVariableTypes): void;
  dispatch(action: ActionQuoteTypes): void;
  dispatch(action: ActionUserTypes): void;
  state: FormContextStateTypes;
}

export type {
  ActionAddressTypes,
  ActionClearFieldsTypes,
  ActionQuoteVariableTypes,
  ActionQuoteTypes,
  ActionUserTypes,
  FormContextTypes,
  FormContextStateTypes,
};
