import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Partners.module.css';

const Partners = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const partnerNames = ['Consultis', 'PISTA MÁGICA', 'Health Action Overseas Romania \\(HAO\\)'];
    const textElements = document.querySelectorAll(`.${styles.text} p`);

    textElements.forEach((element) => {
      partnerNames.forEach((name) => {
        const regex = new RegExp(`(${name})`, 'g');
        console.log(`Checking for: ${name} in element:`, element.innerHTML);
        element.innerHTML = element.innerHTML.replace(regex, `<span class="${styles.partnerName}">$1</span>`);
      });
    });
  }, []);

  return (
    <section id="partners" className={styles.partnersSection}>
      <div className={styles.label}>
        <span>{t('partners.title')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.tint}></div>
      <div className={styles.partnersContainer}>
      
        <div className={styles.text}>
          <p> {t('partners.consultis')} <a className={styles.link} href={t('partners.consultisLink')} target="_blank" rel="noopener noreferrer">{t('partners.consultisLink')}</a></p>
          <p> {t('partners.pistaMágica')} <a className={styles.link} href={t('partners.pistaMágicaLink')} target="_blank" rel="noopener noreferrer">{t('partners.pistaMágicaLink')}</a></p>
          <p> {t('partners.hao')} <a className={styles.link} href={t('partners.haoLink')} target="_blank" rel="noopener noreferrer">{t('partners.haoLink')}</a></p>
        </div>
      </div>
    </section>
  );
};

export default Partners; 