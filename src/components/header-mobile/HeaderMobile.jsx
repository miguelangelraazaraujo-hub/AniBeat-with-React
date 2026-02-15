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
        { text: 'novedades', href: '/hierarchy/news.html' },
        { text: 'equipo', href: '/hierarchy/beat_team.html' },
        { text: 'búsqueda', href: '/search.html' }
      ]
    },
    {
      id: 'mapas',
      label: 'mapas',
      subItems: [
        { text: 'lista de pistas', href: '/hierarchy/tracks.html' },
        { text: 'artistas', href: '/hierarchy/artists.html' },
        { text: 'my playlist', href: '/edit-track.html' }
      ]
    },
    {
      id: 'comunidad',
      label: 'comunidad',
      subItems: [
        { text: 'foro', href: '/hierarchy/forums.html' },
        { text: 'fanarts', href: '/hierarchy/fanarts.html' }
      ]
    },
    {
      id: 'ayuda',
      label: 'ayuda',
      subItems: [
        { text: 'preguntas frecuentes', href: '/hierarchy/faq.html' },
        { text: 'formulario de ayuda', href: '/hierarchy/help-form.html' }
      ]
    }
  ];

  return (
    <header className="header-mobile">
      <div className="header-mobile-top">
        <div className="header-mobile-logo">
          <div className="logo-circle-mobile">AniBeat</div>
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
                        <a href={sub.href} className="mobile-menu-submenu-item">
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