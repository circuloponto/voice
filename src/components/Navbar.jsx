import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import disclaimerEn from '../assets/EN_Disclaimer.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Debounce function to prevent rapid state updates
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    // Set up intersection observer with optimized options
    const observer = new IntersectionObserver(
      debounce((entries) => {
        // Find the section that is most visible
        let maxIntersection = 0;
        let mostVisibleSection = null;

        entries.forEach(entry => {
          const intersectionRatio = entry.intersectionRatio;
          if (intersectionRatio > maxIntersection) {
            maxIntersection = intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          setActiveItem(mostVisibleSection);
        }
      }, 100), // 100ms debounce
      {
        threshold: [0.2, 0.4, 0.6, 0.8], // Multiple thresholds for smoother transitions
        rootMargin: '-80px 0px -80px 0px' // Adjusted margin to account for header height
      }
    );

    // Observe all sections
    const sections = ['headlineObjectives', 'targetGroups', 'activities', 'results', 'partners', 'news', 'footer'];
    sections.forEach(id => {
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
    
    if (element) {
      const offset = -150;
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (sectionId) => {
    setActiveItem(sectionId);
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.absoluteLogo} src={logo} alt="VOICE Logo" />
      </div>
      
      {/* <div className={styles.decorativeSquare}>
        <div className={styles.stripe1}></div>
        <div className={styles.stripe2}></div>
        <div className={styles.stripe3}></div>
        <div className={styles.stripe4}></div>
      </div> */}

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
            className={`${styles.nav_item} ${activeItem === 'headlineObjectives' ? styles.active : ''}`}
            onClick={() => handleMenuClick('headlineObjectives')}
          >
            {t('nav.objectives')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'targetGroups' ? styles.active : ''}`}
            onClick={() => handleMenuClick('targetGroups')}
          >
            {t('nav.targetGroups')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'activities' ? styles.active : ''}`}
            onClick={() => handleMenuClick('activities')}
          >
            {t('nav.activities')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'results' ? styles.active : ''}`}
            onClick={() => handleMenuClick('results')}
          >
            {t('nav.results')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'partners' ? styles.active : ''}`}
            onClick={() => handleMenuClick('partners')}
          >
            {t('nav.partners')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'news' ? styles.active : ''}`}
            onClick={() => handleMenuClick('news')}
          >
            {t('nav.news')}
          </div>
          <div 
            className={`${styles.nav_item} ${activeItem === 'footer' ? styles.active : ''}`}
            onClick={() => handleMenuClick('footer')}
          >
            {t('nav.footer')}
          </div>
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
        </div>
      </div>

      <div className={styles.disclaimerImageContainer}>
        <img src={disclaimerEn} alt="Disclaimer" className={styles.disclaimerImage} />
      </div>
    </header>
  );
};

export default Navbar;