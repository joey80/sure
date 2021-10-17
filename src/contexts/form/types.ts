import { UserObjectType } from '../../lambda/types';

interface FormContextActionTypes {
  type: 'saveFieldValue';
  payload: Partial<UserObjectType>;
}

type FormContextStateTypes = Partial<UserObjectType>;

interface FormContextTypes {
  dispatch(action: FormContextActionTypes): void;
  state: FormContextStateTypes;
}

export type { FormContextTypes, FormContextActionTypes, FormContextStateTypes };
