import { ChangeEvent } from 'react';

// masking functions to format inputs during onChange events
const maskedEvent = {
  onlyNumbers: (event: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = maskedValue;
    return event;
  },
};

const titleCase = (str: string) => str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());

// PascalCase
const pascalCase = (str: string) => titleCase(str).split(' ').join('');

// to_snake_case
const snakeCase = (str: string) => str.split(' ').join('_').toLowerCase();

const states = [
  'AK',
  'AL',
  'AR',
  'AS',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DC',
  'DE',
  'FL',
  'FM',
  'GA',
  'GU',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MH',
  'MI',
  'MN',
  'MO',
  'MP',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NM',
  'NJ',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'PR',
  'PW',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'VI',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY',
];

export { maskedEvent, pascalCase, snakeCase, states };
