import React from 'react';
import axios from 'axios';
import './index.scss';

const App = () => {
  const handlePost = async () => {
    const postResults = await axios.post('/.netlify/functions/createQuote', {
      first_name: 'Joey',
      last_name: 'Leger',
      address: {
        city: 'Beverly Hills',
        line_1: '123 Sesame Street',
        line_2: '',
        postal: '90210',
        region: 'CA',
      },
    });
    return postResults;
  };

  const handlePut = async () => {
    const putResults = await axios.post('/.netlify/functions/updateQuote', {
      quote: {
        quoteId: 'UP4626803',
        rating_address: {
          city: 'Beverly Hills',
          line_1: '123 Sesame Street',
          line_2: '',
          postal: '90210',
          region: 'CA',
        },
        policy_holder: {
          first_name: 'Joey',
          last_name: 'Leger',
        },
        variable_selections: {
          deductible: 2000,
          asteroid_collision: 1000000,
        },
      },
    });
    return putResults;
  };

  return (
    <div className='app'>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handlePost}>make a POST request</button>
        <button onClick={handlePut}>make a PUT request</button>
      </header>
    </div>
  );
};

export { App };
