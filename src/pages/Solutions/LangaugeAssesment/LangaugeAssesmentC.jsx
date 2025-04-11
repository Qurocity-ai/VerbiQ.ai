import React from "react";
import styles from "./LangaugeAssesmentC.module.css";

const LangaugeAssesmentC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Real Impact on Hiring</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3 className={styles.title}>Reduced Mismatches:</h3>
          <p className={styles.description}>
            With a <strong className={styles.percent}>42%</strong> reduction in mismatched hires, our precise evaluations
            help you avoid costly hiring mistakes, ensuring that every new team
            member is a perfect fit for your culture and role requirements.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Enhanced Candidate Insights:</h3>
          <p className={styles.description}>
            Detailed, data-backed reports provide actionable insights into each
            candidate's strengths and areas for improvement, empowering your
            hiring team to make informed decisions.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Faster Time-to-Hire:</h3>
          <p className={styles.description}>
            Our streamlined process cuts down recruitment time significantly, so
            you can secure top talent without the typical delays, all while
            maintaining high standards of quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LangaugeAssesmentC;
