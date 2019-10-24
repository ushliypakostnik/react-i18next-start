import Cookies from "js-cookie";

import { COOKIES } from '../store/constants';

import i18n from './i18n';

export const rememberLanguage = language => {
  if (typeof(language) !== 'undefined') {
    i18n.changeLanguage(language);
    Cookies.set(COOKIES.LANG.name, language, { expires: COOKIES.LANG.expires });
  }
};

export default Storage;
