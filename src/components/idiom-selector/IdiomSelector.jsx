import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './IdiomSelector.css';

const IdiomSelector = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '/src/assets/img/flags/1f1ea-1f1f8.svg' },
    { code: 'en', name: 'English', flag: '/src/assets/img/flags/1f1ec-1f1e7.svg' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={` ${isMobile ? 'idiom-selector-mobile' : 'idiom-selector'}`}>
      <button
        className="mobile-menu-item-main" //Cambiado para heredar del menu de HeaderMobile | Cambiar a idiom-selector-button para un uso normal
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Seleccionar idioma"
      >
        <span className="mobile-menu-item-icon">
          {isOpen ? (
            <i className="fas fa-chevron-down"></i>
          ) : (
            <i className="fas fa-chevron-right"></i>
          )}
        </span>
        <img
          src={currentLang.flag}
          alt={currentLang.name}
          className="idiom-selector-flag"
        />
      </button>

      <ul className={`idiom-selector-menu ${isOpen ? 'idiom-selector-menu-open' : ''}`}>
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className="idiom-selector-option"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.name} className="idiom-selector-flag" />
              <span className="idiom-selector-name">{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdiomSelector;