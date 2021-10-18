import React, { LabelHTMLAttributes } from 'react';
import './index.scss';

const Label = ({ children, ...rest }: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className="sure-label" {...rest}>
    {children}
  </label>
);

export { Label };
