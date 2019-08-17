import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      hi: "Hi",
    },
  },
  pt: {
    translation: {
      hi: "Oi",
    },
  },
  sv: {
    translation: {
      hi: "Hej",
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
