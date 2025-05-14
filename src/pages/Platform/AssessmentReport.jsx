import React from 'react';
import styles from './AssessmentReport.module.css';

const AssessmentReport = () => {
  return (
     <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>For Businesses <br/>Smart, Secure, and Scalable Language Evaluation for Global Readiness</h1>
      </div>
    <div className={styles.container}>
      <div className={styles.leftSection}>
        

        <div className={styles.section}>
          <h4>Precision-Led Assessments.</h4>
          <p>
            Our AI-enhanced platform delivers unbiased, scenario-based language evaluations designed by native speakers and linguistic professionals. We assess candidates across:
            <ul>
              <li> 360° Language Proficiency Mapping</li>
              <li> Business and Role-Specific Communication Skills</li>
              <li> Real-time, Adaptive Assessments for 12+ global languages and dialects</li>
            </ul>
            Each assessment is mapped to CEFR and industry benchmarks, ensuring recruiter confidence and talent accuracy for both global and local hiring.
          </p>
        </div>

        <div className={styles.section}>
          <h4>Built for Enterprise Scale and Speed</h4>
          <p>
            From single candidates to high-volume enterprise testing, VerbiQ empowers you to:
            <ul>
              <li> Deploy assessments in under 60 seconds</li>
              <li> Receive verified results in less than 10 minutes</li>
              <li> Track progress via an intuitive analytics dashboard</li>
            </ul>
            Our platform integrates seamlessly with your HR tools, enabling borderless hiring decisions backed by linguistically validated data 10x faster than legacy tools.
          </p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.card}>
         <div className={styles.headerRow}>
  <h4 className={styles.heading}>Assessment Report</h4>
  <img src="./assets/verbiq-logo.png" alt="Logo" className={styles.reportImage} />
</div>

          <div className={styles.summary}>
            <p><strong>Candidate Summary</strong></p>
            <p>Name: Akshay</p>
            <p>Language Assessed: Spanish (Mexico)</p>
            <p>Role Applied: Bilingual Customer Success Associate</p>
            <p>Assessment Type: Business Scenario</p>
            <p>Date: May 2025</p>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Score</th>
                <th>Insight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grammar</td>
                <td>4.2/5</td>
                <td>Consistently correct sentence structure, minor article/preposition slips.</td>
              </tr>
              <tr>
                <td>Fluency</td>
                <td>4.5/5</td>
                <td>Speaks clearly with natural pacing and smooth transitions.</td>
              </tr>
              <tr>
                <td>Vocabulary</td>
                <td>4.2/5</td>
                <td>Uses relevant business and contextual terms confidently.</td>
              </tr>
              <tr>
                <td>Business Proficiency</td>
                <td>4.3/5</td>
                <td>Understands service terminology and applies it correctly.</td>
              </tr>
              <tr>
                <td>Cultural Fitment</td>
                <td>3.8/5</td>
                <td>Displays awareness of tone and interpersonal nuance, with minor gaps.</td>
              </tr>
              <tr>
                <td>Acumen & Reasoning</td>
                <td>4.2/5</td>
                <td>Provides sound responses during role-based scenarios.</td>
              </tr>
              <tr>
                 <th>Grammar:</th>
                <th>4.2/5</th>
                <th>(Aligned with CEFR Level C1 – Advanced User)</th>
              </tr>
            </tbody>
          </table>

         <div className={styles.footer}>
  <div className={styles.column}>
    <p><strong>Strengths:</strong></p>
    <ul>
      <li>High fluency and confident delivery</li>
      <li>Demonstrates domain vocabulary and business understanding</li>
    </ul>
  </div>
  <div className={styles.column}>
    <p><strong>VerbiQ Recommendation:</strong></p>
    <ul>
      <li>Fit for Role: ✔ Strong Match</li>
      <li>Training Required: ❌ Not Required</li>
      <li>Deployment Timeline: ⏱ Within 24–48 hours</li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default AssessmentReport;
