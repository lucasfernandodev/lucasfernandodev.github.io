import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'pt_BR'],
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    lng: 'pt_BR',
    fallbackLng: 'pt_BR',
  });

i18n.loadNamespaces("projects")
export default i18n;