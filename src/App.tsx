import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
