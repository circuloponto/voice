import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HeadlineTargetGroups.module.css'; 

const HeadlineTargetGroups = () => {
  const { t } = useTranslation();

  return (
    <section id="headlineTargetGroups" className={styles.headlineTargetGroupsSection}>
     {/*  <div className={styles.label}>
        <span>{t('targetGroups.title')}</span>
      </div>
      */}
      <div className={styles.line}></div> 
           <div className={styles.tint}></div>
      <div className={styles.targetGroupsContainer}>
        <div className={styles.headline}>VOICE</div>
        <div className={styles.text}>
          {t('targetGroups.headline')}
        </div>
      </div>
     
    </section>
  );
};

export default HeadlineTargetGroups; 