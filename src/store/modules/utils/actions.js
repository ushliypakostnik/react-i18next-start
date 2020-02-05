// Actions Types

export const SET_LANGUAGE = 'SET_LANGUAGE';
export const ACCEPT_STORAGE_MESSAGE = 'ACCEPT_STORAGE_MESSAGE';
export const RESIZE = 'RESIZE';


// Action Creators
////////////////////////////////////////////////////////////

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  language,
});

export const acceptStorageMessage = () => ({
  type: ACCEPT_STORAGE_MESSAGE,
});

export const resize = (deviceType) => ({
  type: RESIZE,
  deviceType,
});
