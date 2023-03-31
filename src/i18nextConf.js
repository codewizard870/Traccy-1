import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nBackend from "i18next-http-backend";

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ar', 'fr'];

i18n
  .use(i18nBackend) // load translations using http (default public/assets/locals/en/translations)
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng, // fallback language is english.
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
    lng: "en",
    ns: ['about_us', 'become', "buy"],
    defaultNS: 'about_us',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;