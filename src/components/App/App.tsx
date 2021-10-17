import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../Button';
import { Intro } from '../Intro';
import { QuoteOverview } from '../../routes/QuoteOverview';
import { RatingInformation } from '../../routes/RatingInformation';
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
    <div className='sure-app'>
      <header>
        <Button onClick={handlePost}>make a POST request</Button>
        <Button onClick={handlePut}>make a PUT request</Button>
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact component={QuoteOverview} path='/quote-overview' />
            <Route exact component={RatingInformation} path='/rating-information' />
            <Redirect to='/quote-overview' />
          </Switch>
        </Router>
        <Intro />
      </main>
    </div>
  );
};

export { App };
