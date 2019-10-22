import Cookies from "js-cookie";

export const COOKIES = {
  LANG: {
    name: 'language',
    expires: 7,
  },
};

const isProd = process.env.NODE_ENV === 'production';
const apiUrl = process.env.REACT_APP_API_URL;
export const API_URL = isProd ? apiUrl || 'https://...' : apiUrl || 'http://localhost:8082';

export const LANGUAGES = [
  { id: 1, name: 'en' },
  { id: 2, name: 'ru' },
];

// Auto language
const language = Cookies.get(COOKIES.LANG.name) || null;
export const AUTO_LANG = language || LANGUAGES[1].name;

export const INITIAL_STATE = {
  rootReducer: {
    utils: {
      language: AUTO_LANG,
    },
    reducer2: {

    },
  },
};

export const LOCALSTORAGE = {
  ITEM: 'item',
}
