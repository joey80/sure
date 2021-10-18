import React, { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Button } from '../../Button';
import { QuoteObjectType } from '../../../lambda/types';
import { Select } from '../Components/Select';
import { useFormContext } from '../../../contexts/form';
import '../index.scss';

const OverViewForm = () => {
  const { dispatch, state } = useFormContext();
  const { userQuote } = state;
  const { quote } = userQuote;

  const handleChange = ({ target: { id, value } }: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'saveUserQuoteVariable', payload: { [id]: parseInt(value) } });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { data }: { data: QuoteObjectType } = await axios.post(
      '/.netlify/functions/updateQuote',
      {
        quote: {
          quoteId: state.userQuote.quote.quoteId,
          rating_address: state.userQuote.quote.rating_address,
          policy_holder: state.userQuote.quote.policy_holder,
          variable_selections: state.userQuote.quote.variable_selections,
        },
      }
    );

    data && dispatch({ type: 'saveUserQuote', payload: data });
  };

  return (
    <form className='sure-form' onSubmit={handleSubmit}>
      <Select
        name={quote?.variable_options.deductible.title}
        onChange={handleChange}
        options={quote?.variable_options.deductible.values}
      />
      <Select
        id='asteroid_collision'
        name={quote?.variable_options.asteroid_collision.title}
        onChange={handleChange}
        options={quote?.variable_options.asteroid_collision.values}
      />
      <Button type='submit'>Update</Button>
    </form>
  );
};

export { OverViewForm };
