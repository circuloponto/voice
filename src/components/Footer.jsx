import React from 'react';
import { useTranslation } from 'react-i18next';
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
        
        <div className={styles.footerCenter}>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>{t('nav.navigation')}</h4>
              <a href="#projects">{t('nav.projects')}</a>
              <a href="#activities">{t('nav.activities')}</a>
              <a href="#outcomes">{t('nav.outcomes')}</a>
              <a href="#partners">{t('nav.partners')}</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>{t('footer.contact')}</h4>
              <a href="mailto:info@voice.eu">{t('footer.email')}</a>
              <a href="tel:+351123456789">{t('footer.phone')}</a>
              <p>{t('footer.address')}</p>
            </div>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.social}>
            <h4>{t('footer.followUs')}</h4>
            <div className={styles.socialLinks}>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footerRights}>© 2024 VOICE. {t('footer.rights')}</p>
    </footer>
  );
};

export default Footer; 