import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lenisInstance, setLenisInstance] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setLenisInstance(window.lenis);

    // Set up intersection observer with adjusted options
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Section in view:', entry.target.id);
          setActiveItem(entry.target.id);
        }
      });
    }, {
      threshold: 0.2, // Lower threshold - triggers earlier
      rootMargin: '-100px 0px -100px 0px' // Adjust the observation area
    });

    // Observe all sections
    ['projects', 'activities', 'outcomes', 'partners', 'footer'].forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      } else {
        console.log('Could not find element with id:', id);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (element && lenisInstance) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;
      const offset = -150;

      lenisInstance.scrollTo(element, {
        duration: 1.2,
        offset,
        // Using a custom easing that starts very smoothly
        easing: (t) => {
          // Quintic easing function
          return 1 - Math.pow(1 - t, 5);
          // Alternative: return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
      });
      
      // Close menu after clicking
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (sectionId) => {
    setActiveItem(sectionId);
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    console.log('Changing language to:', lang);
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.absoluteLogo} src={logo} alt="VOICE Logo" />
      </div>
      
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuItems_container}>
          <div 
            className={`${styles.nav_item} ${activeItem === 'projects' ? styles.active : ''}`}
            onClick={() => handleMenuClick('projects')}
          >
            {t('nav.projects')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'activities' ? styles.active : ''}`}
            onClick={() => handleMenuClick('activities')}
          >
            {t('nav.activities')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'outcomes' ? styles.active : ''}`}
            onClick={() => handleMenuClick('outcomes')}
          >
            {t('nav.outcomes')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'partners' ? styles.active : ''}`}
            onClick={() => handleMenuClick('partners')}
          >
            {t('nav.partners')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'footer' ? styles.active : ''}`}
            onClick={() => handleMenuClick('footer')}
          >
            {t('nav.contact')}
          </div>
          <nav className={styles.language}>
            <span 
              className={`${styles.nav_item} ${currentLang === 'pt' ? styles.active : ''}`}
              onClick={() => changeLanguage('pt')}
            >
              pt
            </span>
            <div className={styles.nav_item_separator}>/</div>
            <span 
              className={`${styles.nav_item} ${currentLang === 'en' ? styles.active : ''}`}
              onClick={() => changeLanguage('en')}
            >
              en
            </span>
            <div className={styles.nav_item_separator}>/</div>
            <span 
              className={`${styles.nav_item} ${currentLang === 'nl' ? styles.active : ''}`}
              onClick={() => changeLanguage('nl')}
            >
              nl
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;