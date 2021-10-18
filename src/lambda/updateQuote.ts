import axios from 'axios';
import { Handler } from '@netlify/functions';
import { QuoteObjectType } from './types';

const updateQuote = async (quoteObject: QuoteObjectType) => {
  const { quote } = quoteObject;
  const { quoteId } = quote;
  const endpoint = `https://fed-challenge-api.sure.now.sh/api/v1/quotes/${quoteId}`;

  try {
    const updatedQuote = await axios.put(endpoint, quoteObject);
    return updatedQuote.data;
  } catch (error) {
    return error;
  }
};

const handler: Handler = async event => {
  const body: QuoteObjectType = JSON.parse(event.body || '');
  const quote = await updateQuote(body);

  return {
    statusCode: 200,
    body: JSON.stringify(quote),
  };
};

export { handler };
