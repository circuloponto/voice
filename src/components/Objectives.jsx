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
      <h3 className={styles.subTitle0}>{t('objectives.subTitle0')}</h3>
      <p>{t('objectives.paragraph1')}</p>
      <p>{t('objectives.paragraph2')}</p>
      <h3 className={styles.subTitle}>{t('objectives.subTitle')}</h3>
      <ul className={styles.bulletList}>
        <li className={styles.bullet}>{t('objectives.bullet1')}</li>
        <li className={styles.bullet}>{t('objectives.bullet2')}</li>
        <li className={styles.bullet}>{t('objectives.bullet3')}</li>
      </ul>
        </div>
      
    </section>
  );
};

export default Objectives; 