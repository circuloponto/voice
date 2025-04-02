import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Objectives.module.css';

const Objectives = () => {
  const { t } = useTranslation();

  return (
    <section id="objectives" className={styles.objectivesSection}>
        <div className={styles.label}>
        <span>{t('objectives.title')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.text}>
     {/*  <h2 className={styles.title}>{t('objectives.title')}</h2> */}
      <p>{t('objectives.paragraph1')}</p>
      <h3 className={styles.subTitle}>{t('objectives.subTitle')}</h3>
      <ul className={styles.bulletList}>
        <li>{t('objectives.bullet1')}</li>
        <li>{t('objectives.bullet2')}</li>
        <li>{t('objectives.bullet3')}</li>
      </ul>
        </div>
      
    </section>
  );
};

export default Objectives; 