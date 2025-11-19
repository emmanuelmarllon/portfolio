import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa os JSONs de tradução
import enTranslation from "./locales/en/translation.json";
import ptTranslation from "./locales/pt/translation.json";

i18n
  .use(LanguageDetector) // detecta idioma do navegador
  .use(initReactI18next) // integra com React
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
    },
    fallbackLng: "en", // se não detectar, usa inglês
    debug: false, // true se quiser log no console
    detection: {
      // opções do language detector
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"], // onde salvar a escolha do usuário
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
    },
    react: {
      useSuspense: false, // evita suspensense/loading infinito
    },
    interpolation: {
      escapeValue: false, // React já faz escape de HTML
    },
  });

export default i18n;
