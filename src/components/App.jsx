import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../containers/Main';
import Page404 from '../components/Page404';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route component={ Page404 } />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
