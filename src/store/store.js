import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// eslint-disable-next-line no-unused-vars
import { INITIAL_STATE, LOCALSTORAGE, SESSIONSTORAGE } from './constants';
import rootReducer from './reducers';

const middlewares = [];
middlewares.push(thunkMiddleware)

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();

  middlewares.push(loggerMiddleware);
}

const localStorageMiddleware = ({getState}) => {
  return (next) => (action) => {
    const result = next(action);

    if (getState().rootReducer.utils.isAcceptStorageMessage) {
      localStorage.setItem(LOCALSTORAGE.STORAGE_MESSAGE, JSON.stringify(
          getState().rootReducer.utils.isAcceptStorageMessage,
      ));

      /*
      sessionStorage.setItem(SESSIONSTORAGE.item, JSON.stringify(
          getState().rootReducer.module.item,
      ));
      */
    }

    return result;
  };
};
middlewares.push(localStorageMiddleware);

const reHydrateStore = (state) => {

  if (localStorage.getItem(LOCALSTORAGE.STORAGE_MESSAGE) !== null) {
    const localDataAccept = JSON.parse(localStorage.getItem(LOCALSTORAGE.STORAGE_MESSAGE) || '{}');

    // const localData = JSON.parse(sessionStorage.getItem(SESSIONSTORAGE.ITEM) || null);

    const _state = Object.assign({}, state, {
      rootReducer: {
        ...state.rootReducer,
        utils: {
          ...state.rootReducer.utils,
          isAcceptStorageMessage: localDataAccept,
        },
      },
    });
    return _state;
  }

  return state;
};

export const history = createBrowserHistory();

// to v4
function configureStore(state) {
  return createStore(
    combineReducers({
      rootReducer,
      router: connectRouter(history),
    }),
    reHydrateStore(state),
    applyMiddleware(...middlewares),
  );
}

const store = configureStore(INITIAL_STATE);

// console.log('Store: ', store.getState());

export default store;
