import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Partners.module.css';

const Partners = () => {
  const { t, i18n } = useTranslation();
  const [content, setContent] = useState('');

  useEffect(() => {
    const consultisText = t('partners.consultis');
    const pistaMagicaText = t('partners.pistaMágica');
    const haoText = t('partners.hao');

    // Create the HTML with highlighting
    const html = `
      <p >
        ${consultisText.replace(/(Consultis)/, `<span class="${styles.partnerName}">$1</span>`)}
        <a class="${styles.link}" href="https://consultis.pt/pt_index.html" target="_blank" rel="noopener noreferrer">${t('partners.consultisLink')}</a>
      </p>
      <p>
        ${pistaMagicaText.replace(/(PISTA MÁGICA)/, `<span class="${styles.partnerName}">$1</span>`)}
        <a class="${styles.link}" href="https://www.pista-magica.pt" target="_blank" rel="noopener noreferrer">${t('partners.pistaMágicaLink')}</a>
      </p>
      <p>
 ${haoText.replace(/(HEALTH ACTION OVERSEAS ROMANIA \(HAO\) )/, `<span class="${styles.partnerName}">$1</span>`)}
 <a class="${styles.link}" href="https://www.hao.org.ro" target="_blank" rel="noopener noreferrer">${t('partners.haoLink')}</a>
</p>
    `;
    setContent(html);
  }, [t, i18n.language]);

  return (
    <section id="partners" className={styles.partnersSection}>
      <div className={styles.label}>
        <span>{t('partners.title')}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.tint}></div>
      <div className={styles.partnersContainer}>
        <div 
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default Partners;