import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Results.module.css';
import project from '../assets/project.jpg';

const Project = () => {
  const { t } = useTranslation();

  return (
    <section id="results" className={styles.resultsSection}>
      <div className={styles.label}>
        <span>{t('nav.results')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.tint}></div>
      <div className={styles.resultsContainer}>
        
        <div className={styles.text}>
          <p>{t('results.paragraph1')}</p>
          <p className={styles.subTitle}>{t('results.subTitle')}</p>
          <ul className={styles.bulletList}>
         
          
          <li>{t('results.bullet1')}</li>
          <li>{t('results.bullet2')}</li>
          <li>{t('results.bullet3')}</li>
          <li>{t('results.bullet4')}</li>
          <li>{t('results.bullet5')}</li>
          <li>{t('results.bullet6')}</li>
          <li>{t('results.bullet7')}</li>
          <li>{t('results.bullet8')}</li>
          <li>{t('results.subTitle2')}</li>
          <li>{t('results.bullet9')}</li>
          <li>{t('results.bullet10')}</li>
          <li>{t('results.bullet11')}</li>
          <li>{t('results.bullet12')}</li>
          <li>{t('results.bullet13')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project; 