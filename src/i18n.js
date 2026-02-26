import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  es: {
    translation: {
      //GENERAL
      "inicio": "inicio",
      "Novedades": "Novedades",
      "novedades": "novedades",
      "feed": "feed",
      "team": "equipo",
      "search": "búsqueda",
      "canciones": "canciones",
      "lista-canciones": "lista de canciones",
      "artistas-destacados": "artistas destacados",
      "mi-biblioteca": "mi biblioteca",
      'guessr': 'GuessTheBeat',
      'cancion': 'cancion',
      'cantante': 'cantante',
      'anime': 'anime',
      'letra': 'letra',
      "comunidad": "comunidad",
      "foro": "foro",
      "chat": "chat",
      "eventos": "eventos",
      "ayuda": "ayuda",
      "wiki": "wiki",
      "faq": "preguntas frecuentes",
      "reglas": "reglas",
      "reportes": "reportar abuso",
      "ayuda-seria": "no, en serio, ¡necesito ayuda!",

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
      "Novedades": "News",
      "novedades": "news",
      "feed": "feed",
      "team": "team",
      "search": "search",
      "canciones": "tracks",
      "lista-canciones": "track list",
      "artistas-destacados": "featured artists",
      "mi-biblioteca": "my library",
      'guessr': 'GuessTheBeat',
      'cancion': 'song',
      'cantante': 'singer',
      'anime': 'anime',
      'letra': 'lyrics',
      "comunidad": "community",
      "foro": "forum",
      "chat": "chat",
      "eventos": "events",
      "ayuda": "help",
      "wiki": "wiki",
      "faq": "FAQ",
      "reglas": "rules",
      "reportes": "report abuse",
      "ayuda-seria": "no, really, i need help!",

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