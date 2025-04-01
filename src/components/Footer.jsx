import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img src={logo} alt="VOICE Logo" className={styles.footerLogo} />
          <div className={styles.logoText}>VOICE</div>
        </div>
        
        <nav className={styles.footerNav}>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/objectives">{t('nav.objectives')}</Link>
          <Link to="/target-groups">{t('nav.targetGroups')}</Link>
          <Link to="/activities">{t('nav.activities')}</Link>
          <Link to="/results">{t('nav.results')}</Link>
          <Link to="/partners">{t('nav.partners')}</Link>
          <Link to="/news">{t('nav.news')}</Link>
        </nav>

        <div className={styles.footerRight}>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerRights}>
        2024 VOICE. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;