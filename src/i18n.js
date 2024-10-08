import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector  from "i18next-browser-languagedetector";
import transEN from "./localization/en.json";
import transAR from "./localization/ar.json";

const resources = {
  en: {
    translation: transEN
  },
  ar: {
    translation: transAR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;