import React from 'react';
import axios from 'axios';
import { FormContextProvider, useFormContext } from '../../../contexts/form';
import '../index.scss';

const FormComponent = () => {
  return <div>this is the form</div>;
};

const OverViewForm = () => (
  <FormContextProvider>
    <FormComponent />
  </FormContextProvider>
);

export { OverViewForm };
