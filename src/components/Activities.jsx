import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Activities.module.css'; // Ensure you have a corresponding CSS file

const Objectives = () => {
  const { t } = useTranslation();

  return (
    <section id="activities" className={styles.activitiesSection}>
        <div className={styles.label}>
        <span>{t('activities.title')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.text}>
     {/*  <h2 className={styles.title}>{t('objectives.title')}</h2> */}
      <p  className={styles.subTitle}>{t('activities.paragraph1')}</p>
      {/* <h3 className={styles.subTitle}>{t('activities.subTitle')}</h3> */}
      <ul className={styles.bulletList}>
        <li>{t('activities.bullet1')}</li>
        <li>{t('activities.bullet2')}</li>
        <li>{t('activities.bullet3')}</li>
      </ul>
        </div>
      
    </section>
  );
};

export default Objectives; 