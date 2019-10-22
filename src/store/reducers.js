import { combineReducers } from 'redux';

import utils from './modules/utils/reducer';
import reducer2 from './modules/module2/reducer';

const rootReducer = combineReducers({
  utils,
  reducer2,
});

export default rootReducer;
