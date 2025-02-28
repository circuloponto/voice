import React from 'react';
import styles from './Framing.module.css';

const Framing = () => {
  return (
    <div className={styles.framing}>
      <div className={styles.label} style={{ top: '200px' }}>
        <span>Projects</span>
      </div>
      <div className={styles.label} style={{ top: '500px' }}>
        <span>Activities</span>
      </div>
      <div className={styles.label} style={{ top: '800px' }}>
        <span>Outcomes</span>
      </div>
      <div className={styles.label} style={{ top: '1100px' }}>
        <span>Partners</span>
      </div>
      <div className={styles.label} style={{ top: '1400px' }}>
        <span>Contacts</span>
      </div>
    </div>
  );
};

export default Framing; 