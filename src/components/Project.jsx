import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Project.module.css';
import project from '../assets/project.jpg';

const Project = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.label}>
        <span>{t('nav.projects')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.tint}></div>
      <div className={styles.projectsContainer}>
        <div className={styles.headline}>VOICE</div>
        <div className={styles.text}>
          {t('projects.mainText')}
        </div>
      </div>
    </section>
  );
};

export default Project; 