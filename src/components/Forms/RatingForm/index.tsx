import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Button } from '../../Button';
import { useFormContext } from '../../../contexts/form';
import { Input } from '../Components/Input';
import { maskedEvent, states } from '../../../utils';
import { Modal } from '../../Modal';
import { QuoteObjectType } from '../../../lambda/types';
import { Select } from '../Components/Select';
import { useHistory } from 'react-router';
import '../index.scss';

const RatingForm = () => {
  const { dispatch, state } = useFormContext();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  // save the user data as they type
  const handleChange = ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (id === 'first_name' || id === 'last_name') {
      return dispatch({ type: 'saveUserName', payload: { [id]: value } });
    }

    dispatch({ type: 'saveUserAddress', payload: { [id]: value } });
  };

  // save the user quote from the api after form submit
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const { data }: { data: QuoteObjectType } = await axios.post(
      '/.netlify/functions/createQuote',
      state.userInfo
    );

    if (data) {
      setIsLoading(false);
      dispatch({ type: 'saveUserQuote', payload: data });
      return history.push('/quote-overview');
    }
  };

  return (
    <>
      <Modal isActive={isLoading} />
      <form
        className="sure-form"
        onReset={() => dispatch({ type: 'clearFields' })}
        onSubmit={handleSubmit}
      >
        <Input name="First Name" onChange={handleChange} required />
        <Input name="Last Name" onChange={handleChange} required />
        <Input id="line_1" name="Address Line 1" onChange={handleChange} required variant="wide" />
        <Input id="line_2" name="Address Line 2" onChange={handleChange} variant="wide" />
        <Input name="City" onChange={handleChange} required />
        <Select
          defaultValue=""
          id="region"
          name="State"
          onChange={handleChange}
          options={states}
          variant="small"
          required
        />
        <Input
          id="postal"
          maxLength={5}
          name="Zip"
          onChange={e => handleChange(maskedEvent.onlyNumbers(e))}
          variant="small"
          required
        />
        <Button type="submit" variant="top-margin">
          Get your quote!
        </Button>
        <Button type="reset" variant="text">
          Clear
        </Button>
        <div className="sure-form--text-small">* denotes a required field</div>
      </form>
    </>
  );
};

export { RatingForm };
