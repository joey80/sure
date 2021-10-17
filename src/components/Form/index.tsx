import React, { ChangeEvent, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../Button';
import { FormContextProvider, useFormContext } from '../../contexts/form';
import { Input } from '../Input';
import { QuoteObjectType } from '../../lambda/types';
import './index.scss';

const FormComponent = () => {
  const { dispatch, state } = useFormContext();

  const handleChange = ({ target: { id, value } }: ChangeEvent<HTMLInputElement>) => {
    if (id === 'first_name' || id === 'last_name') {
      dispatch({ type: 'saveUserName', payload: { [id]: value } });
    }

    dispatch({ type: 'saveUserAddress', payload: { [id]: value } });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { data }: { data: QuoteObjectType } = await axios.post(
      '/.netlify/functions/createQuote',
      state.userInfo
    );

    dispatch({ type: 'saveUserQuote', payload: data });
  };

  return (
    <form
      className='sure-form'
      onReset={() => dispatch({ type: 'clearFields' })}
      onSubmit={handleSubmit}
    >
      <Input name='First Name' onChange={handleChange} required />
      <Input name='Last Name' onChange={handleChange} required />
      <Input id='line_1' name='Address Line 1' onChange={handleChange} required variant='wide' />
      <Input id='line_2' name='Address Line 2' onChange={handleChange} variant='wide' />
      <Input name='City' onChange={handleChange} required />
      <Input id='region' name='State' onChange={handleChange} variant='small' required />
      <Input
        id='postal'
        maxLength={5}
        name='Zip'
        onChange={handleChange}
        variant='small'
        required
      />
      <Button type='submit' variant='top-margin'>
        Get your quote!
      </Button>
      <Button type='reset' variant='text'>
        Clear
      </Button>
      <div className='sure-form--text-small'>* denotes a required field</div>
    </form>
  );
};

const Form = () => (
  <FormContextProvider>
    <FormComponent />
  </FormContextProvider>
);

export { Form };
