import React, { SelectHTMLAttributes } from 'react';
import { Label } from '../Label';
import { snakeCase } from '../../utils';
import './index.scss';

interface SelectTypes extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Array<string>;
  variant?: 'small' | 'wide';
}

const Select = ({ id, name, options, required, variant, ...rest }: SelectTypes) => {
  const computedLabel = required ? `${name} *` : name;
  const computedName = snakeCase(id ? id : name);

  return (
    <div className={`sure-input sure-select ${variant ? `sure-input--${variant}` : ''}`}>
      <Label htmlFor={computedName}>{computedLabel}</Label>
      <select
        className='sure-input__field sure-select__field'
        id={computedName}
        {...{ required, ...rest }}
      >
        <option disabled value=''></option>
        {options.map((elm, index) => (
          <option key={index} value={elm}>
            {elm}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
