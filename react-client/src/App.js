import React from 'react'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Footer } from './layout'

function App() {

  return (
    <>
      <Switch>
      <Route path="/home">
          <Pages.Home />
        </Route>
      <Route exact path="/">
          <Pages.LandingPage />
        </Route>
        <Route path="/login">
          <Pages.LandingPage />
        </Route>
        <Route exact path="/register">
          <Pages.LandingPage />
        </Route>
        <Route>
          <Pages.NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );

};

export default App;