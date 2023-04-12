import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import am from './locales/am/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      am: { translation: am }
    },
    lng:  localStorage.getItem("lang") ? localStorage.getItem("lang") : 'en', // Set your default language here
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;