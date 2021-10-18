import React from 'react';
import { useFormContext } from '../../contexts/form';
import './index.scss';

const Card = () => {
  const { state } = useFormContext();
  const { userQuote } = state;
  const { quote } = userQuote;

  const dollar = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="sure-card">
      <header className="sure-card__header">
        <div className="sure-card__header__meta">
          <span>Policy For:</span>
          <span>
            Quote ID: <strong>{quote?.quoteId}</strong>
          </span>
        </div>
        <div className="sure-card__header__meta">
          <div className="sure-card__name">
            {quote?.policy_holder.first_name} {quote?.policy_holder.last_name}
          </div>
          <div className="sure-card__address">
            <div>{quote?.rating_address.line_1}</div>
            <div>{quote?.rating_address.line_2}</div>
            <div>
              <span>{quote?.rating_address.city}, </span>
              <span>{quote?.rating_address.region} </span>
              <span>{quote?.rating_address.postal} </span>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <ul>
          <li>
            <strong>Premium:</strong> {dollar.format(quote?.premium || 0)}
          </li>
          <li>
            <strong>Deductible:</strong> {dollar.format(quote?.variable_selections.deductible || 0)}
          </li>
          <li>
            <strong>Asteroid Collision:</strong>{' '}
            {dollar.format(quote?.variable_selections.asteroid_collision || 0)}
          </li>
        </ul>
      </footer>
    </div>
  );
};

export { Card };
