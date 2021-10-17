import { ChangeEvent } from 'react';

// capitalizes the first word in a string
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// masking functions to format inputs during onChange events
const maskedEvent = {
  onlyNumbers: (event: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = maskedValue;
    return event;
  },
};

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

export { capitalize, maskedEvent, snakeCase, states };
