import "./Header.css";
import React, { useRef, useEffect, useState } from 'react';
import IdiomSelector from '../idiom-selector/IdiomSelector';

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const menuRef = useRef(null);

  // Detectar si el mouse está dentro del menú o sus submenús
  const handleMouseEnter = () => setShowOverlay(true);
  const handleMouseLeave = () => setShowOverlay(false);

  // Para evitar que el overlay desaparezca al pasar entre menú y submenú
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowOverlay(false);
      }
    };

    document.addEventListener('mousemove', handler);
    return () => document.removeEventListener('mousemove', handler);
  }, []);

  return (
    <header className="header" ref={menuRef}>
      {/* Overlay */}
      {showOverlay && (
        <div className="header-overlay"></div>
      )}

      {/* Logo */}
      <div className="header-logo">
        <a href="/home"><div className="logo-circle">AniBeat</div></a>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        {[
          {
            id: 'inicio',
            label: 'inicio',
            submenu: [
              { text: 'novedades', isHeader: true },
              { text: 'equipo' },
              { text: 'búsqueda' },
            ],
          },
          {
            id: 'canciones',
            label: 'canciones',
            submenu: [
              { text: 'lista de canciones', isHeader: true },
              { text: 'artistas destacados' },
              { text: 'mi biblioteca' },
            ],
          },
          {
            id: 'GuessTheBeat',
            label: 'GuessTheBeat',
            submenu: [
              { text: 'cancion', isHeader: true },
              { text: 'autor' },
              { text: 'letra' },
              { text: 'anime' },
            ],
          },
          {
            id: 'comunidad',
            label: 'comunidad',
            submenu: [
              { text: 'foro', isHeader: true },
              { text: 'chat' },
              { text: 'concursos' },
            ],
          },
          {
            id: 'ayuda',
            label: 'ayuda',
            submenu: [
              { text: 'wiki', isHeader: true },
              { text: 'preguntas frecuentes' },
              { text: 'reglas' },
              { text: 'reportar abuso' },
              { text: 'no, en serio, ¡necesito ayuda!' },
            ],
          },
        ].map((item) => (
          <div
            key={item.id}
            className="header-nav-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">{item.label}</span>

            {/* Submenu */}
            <div className="submenu">
              {item.submenu.map((subItem, idx) => (
                <div
                  key={idx}
                  className={`submenu-item ${subItem.isHeader ? 'submenu-item--header' : ''}`}
                >
                  {subItem.text}
                </div>
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
          <svg width="18" height="18" viewBox="0 0 17 18" fill="none"  stroke="currentColor" strokeWidth="2">
            <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" />
            <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header