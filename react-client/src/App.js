import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from './pages';
import { Footer } from './layout'

// import './style.css';

function App() {

  return (
    <>
      {/* <Pages.Home /> */}
      <Switch>
      <Route exact path="/login">
          <Pages.LandingPage />
        </Route>
      <Route path="/">
          <Pages.Home />
        </Route>
        {/* <Route exact path="/">
            <Redirect to="/login" />
            </Route> */}
        <Route>
          <Pages.NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );

};

export default App;