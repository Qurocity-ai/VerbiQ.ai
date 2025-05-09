
import React from 'react';
import styles from './SignIn.module.css';

import image from '../../../public/assets/Frame.png'; 
import logo from '../../../public/assets/VerbiQ Logo 5.png';

function SignIn({onSubmit}) {
  

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={image} alt="Illustration" />
      </div>
      <div className={styles.right}>
      <img src={logo} alt="Verbiw Logo" className={styles.logo} />
        <div className={styles.inputContainer}>
          <label className={styles.label}>Candidate Registration Number</label>
          <input placeholder="Enter Registration Number" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Password</label>
          <input placeholder="Enter Password" type="password" className={styles.input} />
        </div>
        <button onClick={onSubmit} className={styles.button}>Sign-In</button>
        <p className={styles.trouble}>Trouble signing in ?</p>
      </div>
    </div>
  );
}

export default SignIn;

