import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en/translation.json';
import translationGE from './ge/translation.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  ge: {
    translation: translationGE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  returnEmptyString: false,
  interpolation: {
    escapeValue: false,
  },
});
