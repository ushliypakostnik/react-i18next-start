import { INITIAL_STATE } from '../../constants';

import {
  ACTION_REQUEST,
  ACTION_SUCCESS,
  ACTION_ERROR,
} from './actions';

const reducer2 = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case ACTION_REQUEST:
      return Object.assign({}, state, {
      });
    case ACTION_SUCCESS:
      return Object.assign({}, state, {
      });
    case ACTION_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
};

export default reducer2;
