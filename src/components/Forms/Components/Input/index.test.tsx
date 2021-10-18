import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Input } from './index';
import { maskedEvent } from '../../../../utils';

describe('Input', () => {
  it('renders', () => {
    render(<Input />);

    const input = screen.getByTestId('sure-input');
    expect(input).toBeInTheDocument();
  });

  it('only allows numbers if masking the onChange', () => {
    render(<Input onChange={(e) => maskedEvent.onlyNumbers(e)} />);
    const input = screen.getByTestId('sure-input') as HTMLInputElement;

    act(() => {
      fireEvent.change(input, { target: { value: 'abcdefg123' } });
    });

    expect(input.value).toBe('123');
  });
});
