interface QuoteObjectType {
  quote: QuoteRootObjectType;
}

interface QuoteRootObjectType {
  quoteId: string;
  rating_address: UserAddressType;
  policy_holder: UserInfoType;
  variable_selections: QuoteVariableType;
}

interface QuoteVariableType {
  asteroid_collision: number;
  deductible: number;
}

interface UserAddressType {
  city: string;
  line_1: string;
  line_2: string;
  postal: string;
  region: string;
}

interface UserInfoType {
  first_name: string;
  last_name: string;
}

interface UserObjectType extends UserInfoType {
  address: UserAddressType;
}

export type { QuoteObjectType, UserObjectType };
