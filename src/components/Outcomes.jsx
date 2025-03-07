import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Outcomes.module.css';

const Outcomes = () => {
  const { t } = useTranslation();

  return (
    <section id="outcomes" className={styles.outcomes}>
      <div className={styles.line}></div>
      <div className={styles.label}>
        <span>{t('outcomes.title')}</span>
      </div>
      <div className={styles.tint}></div>
      <div className={styles.outcomesContainer}>
        <div className={styles.headline}>VOICE</div>
        <div className={styles.text}>
          {t('outcomes.mainText')}
        </div>
      </div>
    </section>
  );
};

export default Outcomes; 