import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './TargetGroups.module.css'; // Ensure you have a corresponding CSS file

const TargetGroups = () => {
  const { t } = useTranslation();

  return (
    <section id="targetGroups" className={styles.targetGroupsSection}>
        <div className={styles.label}>
           <span>{t('targetGroups.title')}</span>
        </div>
        <div className={styles.line}></div>
      {/* <h2>{t('targetGroups.title')}</h2> */}
        <div className={styles.text}>
          <p>{t('targetGroups.paragraph1')}</p>
          <ul className={styles.bulletList}>
            <li className={styles.bullet}>{t('targetGroups.bullet1')}</li>
            <li className={styles.bullet}>{t('targetGroups.bullet2')}</li>
            <li className={styles.bullet}>{t('targetGroups.bullet3')}</li>
            <li className={styles.bullet}>{t('targetGroups.bullet4')}</li>
          </ul>
        </div>
      
    </section>
  );
};

export default TargetGroups; 