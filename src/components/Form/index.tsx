import React, { ChangeEvent } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import './index.scss';

const Form = () => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('you have submitted!');
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
      <Button variant='top-margin' type='submit'>
        Get your quote!
      </Button>
      <div className='sure-form--text-small'>* denotes a required field</div>
    </form>
  );
};

export { Form };
