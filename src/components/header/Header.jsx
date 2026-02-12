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
        <div className="logo-circle">AniBeat</div>
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
              { text: 'registro de cambios' },
              { text: 'descarga' },
              { text: 'búsqueda' },
            ],
          },
          {
            id: 'mapas',
            label: 'mapas',
            submenu: [
              { text: 'lista de mapas', isHeader: true },
              { text: 'artistas destacados' },
              { text: 'paquetes de mapas' },
            ],
          },
          {
            id: 'comunidad',
            label: 'comunidad',
            submenu: [
              { text: 'foro', isHeader: true },
              { text: 'chat' },
              { text: 'concursos' },
              { text: 'torneos' },
              { text: 'transmisiones en vivo' },
              { text: 'desarrollo' },
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
        <button className="header-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12v.01"></path>
            <path d="M12 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"></path>
            <path d="M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
          </svg>
        </button>
        <IdiomSelector />
        <button className="header-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"></path>
            <path d="M12 16a4 4 0 0 1-4-4"></path>
            <path d="M12 16a4 4 0 0 0 4-4"></path>
          </svg>
        </button>
        <button className="header-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <path d="M7 7h10"></path>
            <path d="M7 12h10"></path>
            <path d="M7 17h7"></path>
          </svg>
        </button>
        <div className="header-avatar">
          <img src="https://via.placeholder.com/32/4d9eff/ffffff?text=U" alt="Usuario" />
        </div>
      </div>
    </header>
  );
};

export default Header