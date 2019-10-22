import Cookies from "js-cookie";

import {
  COOKIES,
  AUTO_LANG,
} from '../store/constants';

// Auto language
Cookies.set(COOKIES.LANG.name, AUTO_LANG, { expires: COOKIES.LANG.expires });

export const rememberLanguage = language => {
  Cookies.set(COOKIES.LANG.name, language, { expires: COOKIES.LANG.expires });
};

export default Storage;
