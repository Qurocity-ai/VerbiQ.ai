import React, { useState } from 'react';
import styles from './ResetPassword.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

      const navigate = useNavigate();
  
        
  

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    const storedEmail = localStorage.getItem('otpEmail');
  
    if (!storedEmail) {
      setError("Email not found. Please restart the reset process.");
      return;
    }
  
    try {
      setError('');
  
      const response = await axios.post("https://verbiq-backend1-1.onrender.com/reset/reset-password", {
        emailId: storedEmail,
        password,
        confirmPassword
      });
  
      alert("Password has been successfully reset!");
      localStorage.removeItem('otpEmail');
      navigate('/Sign-In');

    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Something went wrong.");
      } else {
        setError("Server error. Please try again later.");
      }
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <img src="/assets/half-r.png" alt="Half R Logo"  className={styles.halfR} />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          <img src="/assets/verbiq-logo.png" alt="VerbiQ Logo" className={styles.logoRight} />
          <h2>Reset Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={handleSubmit}>Set Password</button>
        </div>
      </div>
    </div>
  );
}
