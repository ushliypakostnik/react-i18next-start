import React, { Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './utils/i18n';

import * as serviceWorker from './serviceWorker';

import store, { history } from './store/store';

import Layout from './components/Layout';
import Header from './containers/Header';
import Home from './views/Home';
import Page404 from './views/Page404';

import './scss/_main.scss';

ReactDOM.render((
  <Provider store={store}>
    <Suspense fallback="loading...">
      <Layout>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Fragment>
              <Header />
              <Switch>
                <Redirect exact from='/' to='/home'/>
                <Route path="/home" component={ Home } />
                <Route component={ Page404 } />
              </Switch>
             </Fragment>
          </BrowserRouter>
        </ConnectedRouter>
      </Layout>
    </Suspense>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
