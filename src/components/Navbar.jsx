import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import disclaimerEn from '../assets/EN_Disclaimer.png';
import disclaimerPt from '../assets/PT_Disclaimer.png';
import disclaimerRo from '../assets/RO_Disclaimer.png';
import ContactsSidebar from './ContactsSidebar';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getDisclaimerImage = () => {
    switch (currentLang) {
      case 'pt':
        return disclaimerPt;
      case 'ro':
        return disclaimerRo;
      default:
        return disclaimerEn;
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img className={styles.absoluteLogo} src={logo} alt="VOICE Logo" />
          </Link>
        </div>

        <div className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.menuItems_container}>
            <Link 
              to="/" 
              className={`${styles.nav_item} ${isActive('/') ? styles.active : ''}`}
              onClick={handleMenuClick}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/objectives" 
              className={`${styles.nav_item} ${isActive('/objectives') ? styles.active : ''}`}
              onClick={handleMenuClick}
            >
              {t('nav.objectives')}
            </Link>
            <Link 
              to="/target-groups" 
              className={`${styles.nav_item} ${isActive('/target-groups') ? styles.active : ''}`}
              onClick={handleMenuClick}
            >
              {t('nav.targetGroups')}
            </Link>
            <Link 
              to="/activities" 
              className={`${styles.nav_item} ${isActive('/activities') ? styles.active : ''}`}
              onClick={handleMenuClick}
            >
              {t('nav.activities')}
            </Link>
            <Link 
              to="/results" 
              className={`${styles.nav_item} ${isActive('/results') ? styles.active : ''}`}
              onClick={handleMenuClick}
            >
              {t('nav.results')}
            </Link>
            <Link 
              to="/partners" 
              className={`${styles.nav_item} ${isActive('/partners') ? styles.active : ''}`}
              onClick={handleMenuClick}
            >
              {t('nav.partners')}
            </Link>
            <Link 
              to="/news" 
              className={`${styles.nav_item} ${isActive('/news') ? styles.active : ''}`}
              onClick={handleMenuClick}
            >
              {t('nav.news')}
            </Link>
            <button 
              className={`${styles.nav_item} ${styles.contactsButton}`}
              onClick={() => setIsContactsOpen(true)}
            >
              {t('nav.contacts')}
            </button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.language}>
            <span 
              className={`${styles.nav_item} ${currentLang === 'pt' ? styles.active : ''}`}
              onClick={() => changeLanguage('pt')}
            >
              pt
            </span>
            <span className={styles.nav_item_separator}>|</span>
            <span 
              className={`${styles.nav_item} ${currentLang === 'en' ? styles.active : ''}`}
              onClick={() => changeLanguage('en')}
            >
              en
            </span>
            <span className={styles.nav_item_separator}>|</span>
            <span 
              className={`${styles.nav_item} ${currentLang === 'ro' ? styles.active : ''}`}
              onClick={() => changeLanguage('ro')}
            >
              ro
            </span>
          </div>

          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={styles.disclaimerImageContainer}>
            <img 
              src={getDisclaimerImage()} 
              alt={`Disclaimer ${currentLang.toUpperCase()}`} 
              className={styles.disclaimerImage} 
            />
          </div>
        </div>
      </header>
      <ContactsSidebar 
        isOpen={isContactsOpen} 
        onClose={() => setIsContactsOpen(false)} 
      />
    </>
  );
};

export default Navbar;