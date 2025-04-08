import React from "react";
import styles from "./LangaugeAssesmentB.module.css";


const LangaugeAssesmentB = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Unmatched Accuracy</h2>
      <div className={styles.assessmentContainer}>
        <div className={styles.assessmentBox}>
          <img src={"/assets/Precisionmaking.png"} alt="Precision Icon" className={styles.icon} />
          <h3 className={styles.subtitle}>97% Precision in Assessments:</h3>
          <p className={styles.description}>
            Our AI-driven evaluations achieve near-perfect accuracy by analyzing speech, grammar, and cultural context.
            </p>
            <p className={styles.description}>
            With precise scoring, you can trust that every candidate's true language proficiency is revealed.
          </p>
        </div>
        <div className={styles.assessmentBox}>
          <img src={"/assets/DataDrivenLangaugeAsses.png"} alt="Decision Making Icon" className={styles.icon} />
          <h3 className={styles.subtitle}>Data-Driven Decision Making:</h3>
          <p className={styles.description}>
            Leveraging millions of data points from diverse linguistic sources, VerbiQ’s assessments minimize errors
            and eliminate biases. 
            </p>
            <p className={styles.description}>
            This means you see an objective, consistent evaluation across all candidates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LangaugeAssesmentB;
