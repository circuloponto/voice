import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Disclaimer.module.css'; // Ensure you create a corresponding CSS file

// Import images
import disclaimerEn from '../assets/EN_Disclaimer.png';
import disclaimerPt from '../assets/PT_Disclaimer.png';
import disclaimerRo from '../assets/RO_Disclaimer.jpg';

const Disclaimer = () => {
  const { i18n } = useTranslation();

  // Determine which image to display based on the current language
  const getImageForLanguage = (language) => {
    switch (language) {
      case 'pt':
        return disclaimerPt;
      case 'ro':
        return disclaimerRo;
      case 'en':
      default:
        return disclaimerEn;
    }
  };

  return (
    <div className={styles.disclaimerContainer}>
      <img
        src={getImageForLanguage(i18n.language)}
        alt="Disclaimer"
        className={styles.disclaimerImage}
      />
    </div>
  );
};

export default Disclaimer; 