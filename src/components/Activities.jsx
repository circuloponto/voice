import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Activities.module.css';

const Activities = () => {
  const { t } = useTranslation();

  return (
    <section id="activities" className={styles.activities}>
      <div className={styles.label}>
        <span>{t('activities.title')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.activitiesContainer}>
        <div className={styles.text}>
          {t('activities.mainText')}
        </div>
      </div>
    </section>
  );
};

export default Activities; 