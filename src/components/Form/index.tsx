import React, { ChangeEvent } from 'react';
import { Button } from '../Button';
import { FormContextProvider, useFormContext } from '../../contexts/form';
import { Input } from '../Input';
import './index.scss';

const FormComponent = () => {
  const { dispatch, state } = useFormContext();

  const handleChange = ({ target: { id, value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'saveFieldValue', payload: { [id]: value } });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('you have submitted!', state);
  };

  return (
    <form className='sure-form' onSubmit={handleSubmit}>
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
