import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './utils/i18n';

import * as serviceWorker from './serviceWorker';

import { DESIGN } from './store/constants';
import store from './store/store';

import './scss/_main.scss';

import Loading from './components/utils/Loading';
import Layout from './components/layout/Layout';

ReactDOM.render((
  <Provider store={store}>
    <Suspense fallback={<Loading className="loading--index" size={DESIGN.SPINNER_SIZE} />}>
      <Layout />
    </Suspense>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
