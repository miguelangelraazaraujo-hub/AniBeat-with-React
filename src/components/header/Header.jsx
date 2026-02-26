import "./Header.css";
import React, { useRef, useEffect, useState } from 'react';
import IdiomSelector from '../idiom-selector/IdiomSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => setShowOverlay(true);
  const handleMouseLeave = () => setShowOverlay(false);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowOverlay(false);
      }
    };

    document.addEventListener('mousemove', handler);
    return () => document.removeEventListener('mousemove', handler);
  }, []);

  const { t } = useTranslation();

  return (
    <header className="header" ref={menuRef}>
      {/* Overlay */}
      {showOverlay && (
        <div className="header-overlay"></div>
      )}

      {/* Logo */}
      <div className="header-logo">
        <a href="/home" className="header-logo-link"><div className="logo-circle">AniBeat</div></a>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        {[
          {
            id: 'inicio',
            label: t('inicio'),
            url: '/home',
            submenu: [
              { text: t('novedades'), url: '/news', isHeader: true },
              { text: t('feed'), url: '/rss' },
              { text: t('team'), url: '/team' },
              { text: t('search'), url: '/search' },
            ],
          },
          {
            id: 'canciones',
            label: t('canciones'),
            url: '/songs',
            submenu: [
              { text: t('lista-canciones'), url: '/songs', isHeader: true },
              { text: t('artistas-destacados'), url: '/artists' },
              { text: t('mi-biblioteca'), url: '/library' },
            ],
          },
          {
            id: 'GuessTheBeat',
            label: t('GuessTheBeat'),
            url: '/guess-game',
            submenu: [
              { text: t('cancion'), url: '/guess-by-song', isHeader: true },
              { text: t('cantante'), url: '/guess-by-singer' },
              { text: t('letra'), url: '/guess-by-lyrics' },
              { text: t('anime'), url: '/guess-by-anime' },
            ],
          },
          {
            id: 'comunidad',
            label: t('comunidad'),
            url: '/community',
            submenu: [
              { text: t('foro'), url: '/forum', isHeader: true },
              { text: t('chat'), url: '/chat' },
              { text: t('eventos'), url: '/contest' },
            ],
          },
          {
            id: 'ayuda',
            label: t('ayuda'),
            url: '/help',
            submenu: [
              { text: t('wiki'), url: '/wiki', isHeader: true },
              { text: t('faq'), url: '/faq' },
              { text: t('reglas'), url: '/rules' },
              { text: t('reportes'), url: '/report' },
              { text: t('ayuda-seria'), url: '/help-centre' },
            ],
          },
        ].map((item) => (
          <div
            key={item.id}
            className="header-nav-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.url} className="nav-link">{item.label}</a>

            {/* Submenu */}
            <div className="submenu">
              {item.submenu.map((subItem, idx) => (
                <a
                  key={idx}
                  href={subItem.url}
                  className={`submenu-item ${subItem.isHeader ? 'submenu-item-header' : ''}`}
                >
                  {subItem.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Right icons */}
      <div className="header-right">
        <button className="header-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
        <IdiomSelector />
        <button className="header-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <path d="M7 7h10"></path>
            <path d="M7 12h10"></path>
            <path d="M7 17h7"></path>
          </svg>
        </button>
        <button className="header-avatar">
          <svg width="18" height="18" viewBox="0 0 17 18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" />
            <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header