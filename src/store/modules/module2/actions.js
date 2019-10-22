// Actions Types

export const ACTION_REQUEST2 = 'ACTION_REQUEST2';
export const ACTION_SUCCESS2 = 'ACTION_SUCCESS2';
export const ACTION_ERROR2 = 'ACTION_ERROR2';


// Action Creators
////////////////////////////////////////////////////////////

export const authRequest2 = () => ({
  type: ACTION_REQUEST2,
});

export const authSuccess2 = () => ({
  type: ACTION_SUCCESS2,
});

export const authError2 = (error) => ({
  type: ACTION_ERROR2,
  error
});

// fake async fetch
function fetchResult2(dispatch) {
  dispatch(authSuccess2());
}
export const fetch2 = (credentials) => {
  return dispatch => {
    dispatch(authRequest2(credentials));
    setTimeout(fetchResult2(dispatch), 100);
  }
}
