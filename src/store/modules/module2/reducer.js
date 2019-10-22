import { INITIAL_STATE } from '../../constants';

import {
  ACTION_REQUEST2,
  ACTION_SUCCESS2,
  ACTION_ERROR2,
} from './actions';

const reducer2 = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case ACTION_REQUEST2:
      return Object.assign({}, state, {
      });
    case ACTION_SUCCESS2:
      return Object.assign({}, state, {
      });
    case ACTION_ERROR2:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
};

export default reducer2;
