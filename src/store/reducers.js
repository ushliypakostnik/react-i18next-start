import { combineReducers } from 'redux';

import utils from './modules/utils/reducer';

const rootReducer = combineReducers({
  utils,
});

export default rootReducer;
