import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { FormContextProvider } from '../../contexts/form';
import { QuoteOverview } from '../../routes/QuoteOverview';
import { RatingInformation } from '../../routes/RatingInformation';
import './index.scss';

const App = () => (
  <div className="sure-app">
    <main>
      <Router>
        <Switch>
          <FormContextProvider>
            <Route exact component={QuoteOverview} path="/quote-overview" />
            <Route exact component={RatingInformation} path="/rating-information" />
            <Redirect to="/rating-information" />
          </FormContextProvider>
        </Switch>
      </Router>
    </main>
  </div>
);

export { App };
