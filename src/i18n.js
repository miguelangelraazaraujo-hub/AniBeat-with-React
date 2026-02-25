import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  es: {
    translation: {
      //GENERAL
      "inicio": "inicio",
      "novedades": "novedades",
      "feed": "feed",
      "team": "equipo",
      "search": "búsqueda",
      "canciones": "canciones",
      'guessr': 'GuessTheBeat',
      "comunidad": "comunidad",
      "ayuda": "ayuda",

      //HOME
      "cancion-desafio-diario": "Canción del desafío diario",
      "nuevas-canciones-clasificadas": "Nuevas canciones clasificadas",
      "canciones-populares": "Canciones populares",
      "ver-mas": "ver más",
      "welcome-message": "Página de bienvenida del proyecto AniBeat",
      "go-to-contacts": "Ir a Contacto",

      //FOOTER
      'contenidos': 'Contenidos',
      'ubicacion': 'Nuestra oficina',
      'contact': 'Contactanos',
      'derechos-reservados': 'Todos los derechos reservados',
      'privacidad-cookies': 'Política de privacidad y cookies',
      'condiciones-venta': 'Condiciones de venta',
      'mapa-details': 'Indicaciones a nuestra oficina',
    }
  },
  en: {
    translation: {
      //GENERAL
      "inicio": "home",
      "novedades": "News",
      "feed": "feed",
      "team": "team",
      "search": "search",
      "canciones": "tracks",
      'guessr': 'GuessTheBeat',
      "comunidad": "community",
      "ayuda": "help",

      //HOME
      "cancion-desafio-diario": "Daily Challenge Song",
      "nuevas-canciones-clasificadas": "Newly Ranked Songs",
      "canciones-populares": "Popular Songs",
      "ver-mas": "view more",
      "welcome-message": "Welcome page to the project AniBeat",
      "go-to-contacts": "Go to Contact",

      //FOOTER
      'contenidos': 'Contents',
      'ubicacion': 'Our office',
      'contact': 'Contact Us',
      'derechos-reservados': 'All rights reserved',
      'privacidad-cookies': 'Privacy and Cookies Policy',
      'condiciones-venta': 'Sale Conditions',
      'mapa-details': 'Get diretions to our office',
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