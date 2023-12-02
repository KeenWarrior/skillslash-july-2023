import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Hi, Welcome to React and react-i18next"
    }
  },
  zh: {
    translation: {
      "welcome": "您好，欢迎来到 React 和 React-i18next"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources
  });

  export default i18n;