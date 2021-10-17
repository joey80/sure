import React, { ButtonHTMLAttributes } from 'react';
import './index.scss';

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary';
}

const Button = ({ children, variant, ...rest }: ButtonTypes) => (
  <button className={`sure-button ${variant ? `sure-button--${variant}` : ''}`} {...rest}>
    {children}
  </button>
);

export { Button };
