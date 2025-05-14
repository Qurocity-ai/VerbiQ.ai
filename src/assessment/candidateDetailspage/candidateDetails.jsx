



import React from 'react';
import styles from './candidateDetails.module.css';

import verbiqLogo from '../../../public/assets/VerbiQ Logo 5.png';

function CandidatureForm({onSubmit}) {
 

  return (
    <div className={styles.page}>
      <div className={styles.logoSection}>
        <img src={verbiqLogo} alt="VerbiQ Logo" className={styles.logo} />
        <hr className={styles.fullDivider} />
      </div>
      

      <div className={styles.container}>
        <h2 className={styles.title}>Candidature Details</h2>
        <hr className={styles.sectionDivider} />

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>First Name</label>
            <input placeholder="Aditya" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name</label>
            <input placeholder="Muthane" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Contact Number</label>
            <input placeholder="9309866010" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>E-mail ID</label>
            <input placeholder="aditya@recrutory.com" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Language</label>
            <input placeholder="French" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Proficiency</label>
            <input placeholder="B2" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Process</label>
            <input placeholder="Recrutory" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label><u>Client</u></label>
            <input placeholder="Hopper" className={styles.input} />
          </div>
        </div>

        <button className={styles.button} onClick={onSubmit}>
          Confirm & Continue
        </button>
      </div>
    </div>
  );
}

export default CandidatureForm;

