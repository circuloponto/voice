import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en.json';
import ptTranslations from './translations/pt.json';
import roTranslations from './translations/ro.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      pt: { translation: ptTranslations },
      ro: { translation: roTranslations }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    debug: true
  });

export default i18n;