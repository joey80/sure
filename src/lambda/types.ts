interface QuoteObjectType {
  quote: QuoteRootObjectType;
}

interface QuoteRootObjectType {
  quoteId: string;
  rating_address: UserAddressType;
  policy_holder: UserInfoType;
  variable_options: QuoteVariablesOptionType;
  variable_selections: QuoteVariableSelectionsType;
  premium: number;
}

interface VariablesOptionObjectType {
  title: string;
  description: string;
  values: Array<number>;
}

interface QuoteVariablesOptionType {
  deductible: VariablesOptionObjectType;
  asteroid_collision: VariablesOptionObjectType;
}

interface QuoteVariableSelectionsType {
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
