import React from 'react';
import styles from './Outcomes.module.css';

const Outcomes = () => {
  return (
    <section id="outcomes" className={styles.outcomes}>
        <div className={styles.line}></div>
      <div className={styles.label}>
        <span>Outcomes</span>
      </div>
      <div className={styles.tint}></div>
      <div className={styles.outcomesContainer}>
        <div className={styles.headline}>VOICE</div>
        <div className={styles.text}>CREATES OPPORTUNITIES FOR PROFESSIONAL GROWTH AND DEVELOPMENT, ENABLING INDIVIDUALS TO ACHIEVE THEIR CAREER GOALS AND REACH THEIR FULL POTENTIAL.</div>
      </div>
    </section>
  );
};

export default Outcomes; 