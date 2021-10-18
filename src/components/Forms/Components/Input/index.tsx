import React, { InputHTMLAttributes } from 'react';
import { Label } from '../Label';
import { snakeCase } from '../../../../utils';
import './index.scss';

interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'small' | 'wide';
}

const Input = ({ id, name, required, variant, ...rest }: InputTypes) => {
  const computedLabel = required ? `${name} *` : name;
  const computedName = snakeCase(id ? id : name || '');

  return (
    <div className={`sure-input ${variant ? `sure-input--${variant}` : ''}`}>
      <Label htmlFor={computedName}>{computedLabel}</Label>
      <input
        className="sure-input__field"
        data-testid="sure-input"
        id={computedName}
        {...{ name, required, ...rest }}
      />
    </div>
  );
};

export { Input };
