import { INITIAL_STATE } from '../../constants';

import {
  SET_LANGUAGE,
} from './actions';

const reducer1 = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language,
      });
    default:
      return state;
  }
};

export default reducer1;
