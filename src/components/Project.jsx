import React from 'react';
import styles from './Project.module.css';
import project from '../assets/project.jpg';

const Project = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.label}>
        <span>Projects</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.tint}></div>
      <div className={styles.projectsContainer}>
        <div className={styles.headline}>VOICE</div>
        <div className={styles.text}>IS AN INNOVATIVE PLATFORM ENABLING TARGET GROUPS TO PROSPER IN THEIR UNIQUENESS, SUPPORTING THEIR INDIVIDUALITY TO MAKE THEM REACH FURTHER IN THEIR CAREERS.</div>
      </div>
    </section>
  );
};

export default Project; 