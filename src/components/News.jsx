import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './News.module.css';
import newsImage from '../assets/news1_alt.jpg';

const News = () => {
  const { t } = useTranslation();

  return (
    <section id="news" className={styles.newsSection}>
      <div className={styles.label}>
        <span>{t('news.title')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.tint}></div>
      <div className={styles.newsContainer}>
        <h3 className={styles.subTitle}>{t('news.subTitle')}</h3>
        <img src={newsImage} alt="News" className={styles.newsImage} />
        <div className={styles.text}>
          <p>{t('news.paragraph1')}</p>
          <br/>
          <p>{t('news.paragraph2')}</p>
          <br/>
          <p>{t('news.paragraph3')}</p>
          <br/>
          <p>{t('news.paragraph4')}</p>
         
        </div>
      </div>
    </section>
  );
};

export default News;