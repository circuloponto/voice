import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Partners.module.css';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id="partners" className={styles.partners}>
      <div className={styles.line}></div>
      <div className={styles.label}>
        <span>{t('partners.title')}</span>
      </div>
      <div className={styles.partnersContainer}>
        <div className={styles.text}>
          {t('partners.content.paragraph1')}
          <br /><br />
          {t('partners.content.paragraph2')}
          <br /><br />
          {t('partners.content.paragraph3')}
          <br /><br />
          {t('partners.content.paragraph4')}
          <br /><br />
          {t('partners.content.paragraph5')}
          <br /><br />
          {t('partners.content.paragraph6')}
        </div>
      </div>
    </section>
  );
};

export default Partners; 