import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img src={logo} alt="VOICE Logo" className={styles.footerLogo} />
          <div className={styles.logoText}>VOICE</div>
        </div>
        
        <div className={styles.footerCenter}>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Navigation</h4>
              <a href="#projects">Projects</a>
              <a href="#activities">Activities</a>
              <a href="#outcomes">Outcomes</a>
              <a href="#partners">Partners</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>Contact</h4>
              <a href="mailto:info@voice.eu">info@voice.eu</a>
              <a href="tel:+351123456789">+351 123 456 789</a>
              <p>Lisbon, Portugal</p>
            </div>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.social}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        
      </div>
     {/*  <div className={styles.footerBottom}>
        <p>© 2024 VOICE. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div> */}
      <p className={styles.footerRights}>© 2024 VOICE. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 