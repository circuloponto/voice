import React from 'react';
import styles from './Grid.module.css';

const Grid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.verticalLines}>
        {[...Array(16)].map((_, index) => (
          <div key={`v-${index}`} className={styles.verticalLine}></div>
        ))}
      </div>
      <div className={styles.horizontalLines}>
        {[...Array(16)].map((_, index) => (
          <div key={`h-${index}`} className={styles.horizontalLine}></div>
        ))}
      </div>
    </div>
  );
};

export default Grid; 