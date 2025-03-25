import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HeadlineResults.module.css';

const HeadlineResults = () => {
  const { t } = useTranslation();

  return (
    <section id="headlineResults" className={styles.resultsSection}>
      {/* <div className={styles.label}>
        <span>{t('results.title')}</span>
      </div> */}
      <div className={styles.line}></div>
      <div className={styles.tint}></div>
      <div className={styles.outcomesContainer}>
        <div className={styles.headline}>VOICE</div>
        <div className={styles.text}>
          {t('results.headline')}
        </div>
      </div>
    </section>
  );
};

export default HeadlineResults; 