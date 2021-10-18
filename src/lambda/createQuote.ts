import axios from 'axios';
import { Handler } from '@netlify/functions';
import { UserObjectType } from './types';

const createQuote = async (userObject: UserObjectType) => {
  const endpoint = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';

  try {
    const quote = await axios.post(endpoint, userObject);
    return quote.data;
  } catch (error) {
    return error;
  }
};

const handler: Handler = async event => {
  const body: UserObjectType = JSON.parse(event.body || '');
  const quote = await createQuote(body);

  return {
    statusCode: 200,
    body: JSON.stringify(quote),
  };
};

export { handler };
