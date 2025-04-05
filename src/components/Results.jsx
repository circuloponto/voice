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
          <p className={styles.subTitle}>{t('results.subTitle1')}</p>
          <ul className={styles.bulletList}>
         
          
          <li className={styles.bullet}>{t('results.bullet1')}</li>
          <li className={styles.bullet}>{t('results.bullet2')}</li>
          <li className={styles.bullet}>{t('results.bullet3')}</li>
          <li className={styles.bullet}>{t('results.bullet4')}</li>
          <li className={styles.bullet}>{t('results.bullet5')}</li>
          <li className={styles.bullet}>{t('results.bullet6')}</li>
          <li className={styles.bullet}>{t('results.bullet7')}</li>
          <li className={styles.bullet}>{t('results.bullet8')}</li>
          </ul>
         
          <p className={styles.subTitle}>{t('results.subTitle2')}</p>
          <ul className={styles.bulletList}>
          <li className={styles.bullet}>{t('results.bullet9')}</li>
          <li className={styles.bullet}>{t('results.bullet10')}</li>
          <li className={styles.bullet}>{t('results.bullet11')}</li>
          <li className={styles.bullet}>{t('results.bullet12')}</li>
          <li className={styles.bullet}>{t('results.bullet13')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project; 