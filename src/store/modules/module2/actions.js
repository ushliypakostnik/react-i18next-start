// Actions Types

export const ACTION_REQUEST = 'ACTION_REQUEST';
export const ACTION_SUCCESS = 'ACTION_SUCCESS';
export const ACTION_ERROR = 'ACTION_ERROR';


// Action Creators
////////////////////////////////////////////////////////////

export const authRequest = () => ({
  type: ACTION_REQUEST,
});

export const authSuccess = () => ({
  type: ACTION_SUCCESS,
});

export const authError2 = (error) => ({
  type: ACTION_ERROR,
  error
});

// fake async fetch
function fetchResult(dispatch) {
  dispatch(authSuccess());
}
export const fetch = (credentials) => {
  return dispatch => {
    dispatch(authRequest(credentials));
    setTimeout(fetchResult(dispatch), 100);
  }
}
