import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  es: {
    translation: {
      // Menú principal
      "inicio": "inicio",
      "mapas": "mapas",
      "comunidad": "comunidad",
      "ayuda": "ayuda",

      // Home - Secciones principales
      "novedades": "Novedades",
      "cancion-desafio-diario": "Canción del desafío diario",
      "nuevas-canciones-clasificadas": "Nuevas canciones clasificadas",
      "canciones-populares": "Canciones populares",

      // Enlaces y botones
      "ver-mas": "ver más",

      // Otros textos (si los usas)
      "welcome-message": "Página de bienvenida del proyecto AniBeat",
      "go-to-contacts": "Ir a Contacto"
    }
  },
  en: {
    translation: {
      // Menú principal
      "inicio": "home",
      "mapas": "tracks",
      "comunidad": "community",
      "ayuda": "help",

      // Home - Secciones principales
      "novedades": "News",
      "cancion-desafio-diario": "Daily Challenge Song",
      "nuevas-canciones-clasificadas": "Newly Ranked Songs",
      "canciones-populares": "Popular Songs",

      // Enlaces y botones
      "ver-mas": "view more",

      // Otros textos
      "welcome-message": "Welcome page to the project AniBeat",
      "go-to-contacts": "Go to Contact"
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