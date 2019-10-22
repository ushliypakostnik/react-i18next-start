import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";

import App from './components/app';

import './utils/i18n';

import * as serviceWorker from './serviceWorker';

import store, { history } from './store/store';

import './scss/_main.scss';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
