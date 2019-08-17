import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
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
  se: {
    translation: {
      hi: "Hej",
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
