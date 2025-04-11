import React from 'react';
import styles from './Graph.module.css';

const Graph = () => {
  return (
    <div className={styles.wrapper}>
      {/* Left: Bar Graph Section */}
      <div className={styles.sectionBox}>
        <div className={styles.barGraph}>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar1Text}`}>Grammar</span>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
          </div>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar2Text}`}>Vocabulary</span>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
          </div>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar3Text}`}>Fluency</span>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
          </div>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar4Text}`}>Cultural</span>
            <div className={`${styles.bar} ${styles.bar4}`}></div>
          </div>
        </div>

        <h3 className={styles.heading}>Best in class assessment structure</h3>
        <p className={styles.subText}>
          We don’t just assess language skills<br />We value cultural authenticity
        </p>
      </div>

      {/* Right: Text Section */}
      <div className={styles.sectionBox}>
        <h4 className={styles.subHeading}>Scenario Based Assessment</h4>
        <h4 className={styles.subHeading}>Domain Based Assessment</h4>
        <h4 className={styles.subHeading}>Assessment by Native Speaker</h4>
        <h4 className={styles.subHeading}>Business and culture ethics</h4>
        <div className={styles.hrLine}></div>
        <h3 className={styles.subHeading1}>Assessments personalized for you</h3>
        <p className={`${styles.subText} ${styles.subText2}`}>
          Tailored evaluations that align with your unique hiring needs and cultural expectations.
        </p>
      </div>
    </div>
  );
};

export default Graph;
