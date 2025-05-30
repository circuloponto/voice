import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HeadlineObjectives.module.css'; 

const HeadlineObjectives = () => {
  const { t } = useTranslation();

  return (
    <section id="headlineObjectives" className={styles.headlineObjectivesSection}>
     {/*  <div className={styles.label}>
        <span>{t('objectives.title')}</span>
      </div>
       */}
       <div className={styles.line}></div>
           <div className={styles.tint}></div>
      <div className={styles.projectsContainer}>
        <div className={styles.headline}>VOICE</div>
        <div className={styles.text}>
        Volunteering Opportunities for Inclusion and Competence development of disabled individuals within supported Employment (2024-2-PT01-KA210-VET-000270713) 
        </div>
      </div>
     
    </section>
  );
};

export default HeadlineObjectives; 