// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones (puedes moverlas a archivos separados luego)
const resources = {
  es: {
    translation: {
      "inicio": "inicio",
      "mapas": "mapas",
      "comunidad": "comunidad",
      "ayuda": "ayuda",
      // Añade más textos según necesites
    }
  },
  en: {
    translation: {
      "inicio": "home",
      "mapas": "tracks",
      "comunidad": "community",
      "ayuda": "help",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;