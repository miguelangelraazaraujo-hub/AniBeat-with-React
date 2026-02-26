import React, { useState } from 'react';
import './HeaderMobile.css';
import IdiomSelector from '../idiom-selector/IdiomSelector';
import 'https://kit.fontawesome.com/0df28cef70.js'
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  const menuItems = [
    {
      id: 'inicio',
      label: t('inicio'),
      url: '/home',
      subItems: [
        { text: t('novedades'), url: '/news', isHeader: true },
        { text: t('feed'), url: '/rss' },
        { text: t('team'), url: '/team' },
        { text: t('search'), url: '/search' },
      ]
    },
    {
      id: 'canciones',
      label: t('canciones'),
      subItems: [
        { text: t('lista-canciones'), url: '/songs' },
        { text: t('artistas-destacados'), url: '/artists' },
        { text: t('mi-biblioteca'), url: '/library' },
      ],
    },
    {
      id: 'GuessTheBeat',
      label: t('guessr'),
      subItems: [
        { text: t('cancion'), url: '/guess-by-song' },
        { text: t('cantante'), url: '/guess-by-singer' },
        { text: t('letra'), url: '/guess-by-lyrics' },
        { text: t('anime'), url: '/guess-by-anime' },
      ],
    },
    {
      id: 'comunidad',
      label: t('comunidad'),
      subItems: [
        { text: t('foro'), url: '/forum' },
        { text: t('chat'), url: '/chat' },
        { text: t('eventos'), url: '/contest' },
      ]
    },
    {
      id: 'ayuda',
      label: t('ayuda'),
      subItems: [
        { text: t('wiki'), url: '/wiki' },
        { text: t('faq'), url: '/faq' },
        { text: t('reglas'), url: '/rules' },
        { text: t('reportes'), url: '/report' },
        { text: t('ayuda-seria'), url: '/help-centre' },
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
                  href={item.url}
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