import React, { InputHTMLAttributes } from 'react';
import { snakeCase } from '../../utils';
import './index.scss';

interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  variant?: 'small' | 'wide';
}

const Input = ({ id, name, required, variant, ...rest }: InputTypes) => {
  const computedLabel = required ? `${name} *` : name;
  const computedName = snakeCase(id ? id : name).toLowerCase();

  return (
    <div className={`sure-input ${variant ? `sure-input--${variant}` : ''}`}>
      <label className='sure-input__label' htmlFor={computedName}>
        {computedLabel}
      </label>
      <input className='sure-input__field' id={computedName} {...{ name, required, ...rest }} />
    </div>
  );
};

export { Input };
