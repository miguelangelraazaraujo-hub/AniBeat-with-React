import React, { useState } from 'react';
import './HeaderMobile.css';
import IdiomSelector from '../idiom-selector/IdiomSelector';
import 'https://kit.fontawesome.com/0df28cef70.js'

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    {
      id: 'inicio',
      label: 'inicio',
      subItems: [
        { text: 'novedades', url: '/news' },
        { text: 'feed', url: '/rss' },
        { text: 'equipo', url: '/team' },
        { text: 'búsqueda', url: '/search' },
      ]
    },
    {
      id: 'mapas',
      label: 'mapas',
      subItems: [
        { text: 'lista de canciones', url: '/songs' },
        { text: 'artistas destacados', url: '/artists' },
        { text: 'mi biblioteca', url: '/library' },
      ],
    },
    {
      id: 'GuessTheBeat',
      label: 'GuessTheBeat',
      subItems: [
        { text: 'cancion', url: '/guess-by-song' },
        { text: 'cantante', url: '/guess-by-singer' },
        { text: 'letra', url: '/guess-by-lyrics' },
        { text: 'anime', url: '/guess-by-anime' },
      ],
    },
    {
      id: 'comunidad',
      label: 'comunidad',
      subItems: [
        { text: 'foro', url: '/forum' },
        { text: 'chat', url: '/chat' },
        { text: 'concursos', url: '/contest' },
      ]
    },
    {
      id: 'ayuda',
      label: 'ayuda',
      subItems: [
        { text: 'wiki', url: '/wiki' },
        { text: 'preguntas frecuentes', url: '/faq' },
        { text: 'reglas', url: '/rules' },
        { text: 'reportar abuso', url: '/report' },
        { text: 'no, en serio, ¡necesito ayuda!', url: '/help-centre' }
      ]
    }
  ];

  return (
    <header className="header-mobile">
      <div className="header-mobile-top">
        <div className="header-logo-mobile">
          <a href="/home" className="header-logo-link-mobile"><div className="logo-circle-mobile">AniBeat</div></a>
        </div>
        <button
          className="header-mobile-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <div className="mobile-menu-content">
            {menuItems.map((item) => (
              <div key={item.id} className="mobile-menu-item">
                <button
                  className="mobile-menu-item-main"
                  onClick={() => toggleSection(item.id)}
                >
                  <span className="mobile-menu-item-icon">
                    {openSections[item.id] ? (
                      <i className="fas fa-chevron-down"></i>
                    ) : (
                      <i className="fas fa-chevron-right"></i>
                    )}
                  </span>
                  {item.label}
                </button>
                {openSections[item.id] && (
                  <ul className="mobile-menu-submenu">
                    {item.subItems.map((sub, idx) => (
                      <li key={idx}>
                        <a href={sub.url} className="mobile-menu-submenu-item">
                          {sub.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <IdiomSelector isMobile={true} />

          </div>
        </nav>
      )}
    </header>
  );
};

export default HeaderMobile;