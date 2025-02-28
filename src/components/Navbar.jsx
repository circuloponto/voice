import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [lenisInstance, setLenisInstance] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setLenisInstance(window.lenis);
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
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.lineHorizontal}></div>
      <div className={styles.lineVertical}></div>
      <div className={styles.backgroundLogo}></div>
      <div className={styles.logo}>
        <div className={styles.placeholder} />
        <img className={styles.absoluteLogo} src={logo} alt="VOICE Logo" />
      </div>
      <div className={styles.logoName}>VOICE</div>
      
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuItems_container}>
          <div className={styles.nav_item} onClick={() => scrollToSection('projects')}>
            Projects
          </div>
          <div className={styles.nav_item} onClick={() => scrollToSection('activities')}>
            Activities
          </div>
          <div className={styles.nav_item} onClick={() => scrollToSection('outcomes')}>
            Outcomes
          </div>
          <div className={styles.nav_item} onClick={() => scrollToSection('partners')}>
            Partners
          </div>
          <div className={styles.nav_item} onClick={() => scrollToSection('footer')}>
            Contact
          </div>
        </div>
      </div>
      <nav className={styles.language}>
        <span className={styles.nav_item}>PT</span>
        <span className={styles.nav_item}>EN</span>
      </nav>
    </header>
  )
}

export default Navbar