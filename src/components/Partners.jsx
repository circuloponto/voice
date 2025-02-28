import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
  return (
    <section id="partners" className={styles.partners}>
      <div className={styles.line}></div>
      <div className={styles.label}>
        <span>Partners</span>
      </div>
      <div className={styles.partnersContainer}>
        <div className={styles.text}>
          At its core, VOICE transforms traditional employment support models by recognizing that lived experience creates uniquely qualified mentors. Participants with disabilities undergo comprehensive training to become employment specialists, learning to provide personalized career guidance, workplace accommodation strategies, and ongoing support to fellow disabled job seekers.
          <br /><br />
          The program follows a structured pathway: first identifying candidates with strong communication skills and employment experience, then providing specialized training in career coaching, disability legislation, workplace assessment, and advocacy techniques. Graduates of the program become certified employment coaches who work directly with disabled job seekers to identify strengths, overcome barriers, and navigate the employment landscape.
          <br /><br />
          What makes VOICE particularly effective is its peer-to-peer approach. Coach-client relationships are built on shared understanding and authentic empathy. This creates safe spaces where job seekers can discuss workplace challenges openly, develop confidence, and benefit from practical solutions that have worked for others with similar disabilities.
          <br /><br />
          The project has established partnerships with employers across various sectors, creating pathways to meaningful employment while simultaneously educating businesses about inclusive practices. This dual focus creates sustainable change in workplace cultures while opening doors for individual participants.
          <br /><br />
          Since its inception, VOICE has demonstrated impressive outcomes: higher job placement rates, greater job satisfaction, and longer employment retention compared to traditional support services. For the coaches themselves, the program offers meaningful employment and professional development, creating a virtuous cycle of empowerment and opportunity.
          <br /><br />
          The VOICE Project stands as a testament to the EU's commitment to inclusive employment practices and demonstrates how lived experience, when properly channeled, can become a powerful catalyst for social and economic change.
        </div>
      </div>
    </section>
  );
};

export default Partners; 