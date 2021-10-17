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

interface ActionQuoteTypes {
  type: 'saveUserQuote';
  payload: Partial<QuoteObjectType>;
}

interface UserInfoType extends UserObjectType {
  address: UserObjectType['address'];
}

interface FormContextStateTypes {
  userInfo: UserInfoType;
  userQuote: Partial<QuoteObjectType>;
}

interface FormContextTypes {
  dispatch(action: ActionAddressTypes): void;
  dispatch(action: ActionClearFieldsTypes): void;
  dispatch(action: ActionQuoteTypes): void;
  dispatch(action: ActionUserTypes): void;
  state: FormContextStateTypes;
}

export type {
  ActionAddressTypes,
  ActionClearFieldsTypes,
  ActionQuoteTypes,
  ActionUserTypes,
  FormContextTypes,
  FormContextStateTypes,
};
