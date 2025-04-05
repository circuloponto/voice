import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoConsultis from '../assets/consultis.png';
import logoPista from '../assets/logo_pistamagica.png';
import logoHAO from '../assets/HAO_logo for web.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img src={logoConsultis} alt="Consultis Logo" className={styles.footerLogo} />
          <img src={logoPista} alt="Pista Logo" className={styles.footerLogoPista} />
          <img src={logoHAO} alt="HAO Logo" className={styles.footerLogoHAO} />
          
        </div>
        
        <div className={styles.disclaimer}>
              <p>{t('sidebar.disclaimer.text')}</p>
          </div>

        
      </div>
      <div className={styles.footerRights}>
        2024 VOICE. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;