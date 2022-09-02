import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DiscountOfferPage } from './pages/DiscountOfferPage/DiscountOfferPage';
import { SurveyPage } from './pages/SurveyPage/SurveyPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DiscountOfferPage} />
        <Route exact path="/survey" component={SurveyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
