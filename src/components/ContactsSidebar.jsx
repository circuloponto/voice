import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactsSidebar.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import ptLogo from '../assets/PT_Disclaimer.png';
import enLogo from '../assets/EN_Disclaimer.png';
import roLogo from '../assets/RO_Disclaimer.jpg';




const ContactsSidebar = ({ isOpen, onClose }) => {
  const { t,i18n } = useTranslation();
  const getLogo = () => {
    switch (i18n.language) {
        case 'pt':
            return ptLogo;
        case 'en':
            return enLogo;
        case 'ro':
            return roLogo;
        default:
            return enLogo;
    }
  };
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose} />
      )}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.content}>

          <div className={styles.title}>
            {t('sidebar.title')}
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href={`mailto:${t('sidebar.consultis.email')}`}>{t('sidebar.consultis.email')}</a>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href={`tel:${t('sidebar.consultis.mobile')}`}>{t('sidebar.consultis.mobile')}</a>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>{t('sidebar.consultis.morada')}</span>
              </div>
            </div>
          </div>

          <div className={styles.partnerCard}>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href={`mailto:${t('sidebar.consultis.email')}`}>{t('sidebar.consultis.email')}</a>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href={`tel:${t('sidebar.consultis.mobile')}`}>{t('sidebar.consultis.mobile')}</a>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>{t('sidebar.consultis.morada')}</span>
              </div>
            </div>
          </div>

          <div className={styles.partnerCard}>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href={`mailto:${t('sidebar.HAO.email')}`}>{t('sidebar.HAO.email')}</a>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href={`tel:${t('sidebar.HAO.mobile')}`}>{t('sidebar.HAO.mobile')}</a>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>{t('sidebar.HAO.morada')}</span>
              </div>
            </div>
          </div>
        <div className={styles.EuDisclaimer}>

          <div className={styles.euLogo}>
              <img src={getLogo()} alt="EU Logo" />
          </div>

          <div className={styles.disclaimer}>
              <p>{t('sidebar.disclaimer.text')}</p>
          </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default ContactsSidebar;
