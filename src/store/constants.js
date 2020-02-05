// const isProd = process.env.NODE_ENV === 'production';
// const apiUrl = process.env.REACT_APP_API_URL;
// export const API_URL = isProd ? apiUrl || 'https://...' : apiUrl || 'http://localhost:3000';

export const API_URL = process.env.REACT_APP_API_URL;

export const LANGUAGES = [
  {
    id: 1,
    name: 'en',
  },
  {
    id: 2,
    name: 'ru',
  },
];

export const LOCALSTORAGE = {
  LANG: 'language',
  STORAGE_MESSAGE: 'storage-message',
};

export const SESSIONSTORAGE = {
};

// Auto language
export const AUTO_LANG = localStorage.getItem(LOCALSTORAGE.LANG) || null;

// Is storage message accept
export const STORAGE_MESSAGE_ACCEPT = localStorage.getItem(LOCALSTORAGE.STORAGE_MESSAGE) || false;

export const DESIGN = {
  TIMEOUT: 200,
  SPINNER_SIZE: 100,
  DEVICES_TYPES: ['desktop', 'tablet', 'mobile',],
  VIEWS: [
    { id: 1, name: 'main', path: '/main', },
    { id: 2, name: 'page404', path: '/fgdgfghgd', },
  ],
};

export const INITIAL_STATE = {
  rootReducer: {
    utils: {
      language: AUTO_LANG,
      isAcceptStorageMessage: STORAGE_MESSAGE_ACCEPT,
      deviceType: null,
    },
  },
};
