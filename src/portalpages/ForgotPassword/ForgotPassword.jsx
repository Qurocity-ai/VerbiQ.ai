import React from 'react';
import { useState } from 'react';
import styles from './ForgotPassword.module.css';
import axios from "axios";


import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
    const [showOtpUI, setShowOtpUI] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [emailId, setEmailId] = useState("");
    const navigate = useNavigate();



    const handleSendOtp = async () => {
        try {
          setLoading(true);
          const response = await axios.post('https://verbiq-backend1-1.onrender.com/reset/send-otp', { emailId });
          localStorage.setItem('otpEmail', emailId);
          console.log('OTP Sent:', response.data);
          setShowOtpUI(true);
        } catch (error) {
          console.error('Error sending OTP:', error.response?.data || error.message);
          alert('Failed to send OTP. Please try again.');
        } finally {
          setLoading(false);
        }
      };
    
        

    const handleOtpChange = (e, index) => {
        let value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);
    
        if (value && index < 5) {
          document.getElementById(`otp-${index + 1}`).focus();
        }
      };
    
      const handleConfirmOtp = async () => {
        const enteredOtp = otp.join('');
        try {
          setLoading(true);
          const storedEmail = localStorage.getItem('otpEmail');

          const response = await axios.post('https://verbiq-backend1-1.onrender.com/reset/verify-otp', {
            emailId: storedEmail,
            otp: enteredOtp
          });
          console.log('OTP Verified:', response.data);
          alert('OTP verified successfully!');
        //   localStorage.removeItem('otpEmail');
          navigate('/reset-password');
        } catch (error) {
          console.error('OTP Verification Failed:', error.response?.data || error.message);
          alert('Invalid OTP. Please try again.');
        } finally {
          setLoading(false);
        }
      };
          
  return (
    <div className={styles.container}>
    {/* Left Panel */}
    <div className={styles.leftPanel}>
      <img src="/half-r.png" alt="Half R Logo" className={styles.halfR} />
    </div>

    {/* Right Panel */}
    <div className={styles.rightPanel}>
      <div className={styles.topRow}>
        <img src="/verbiq-logo.png" alt="VerbiQ Logo" className={styles.verbiqLogo} />
        <div className={styles.separator}>|</div>

        <Link to="/ForgotPassword" className={styles.forgotPasswordLink}>
          <span className={styles.arrow}>&#8592;</span> Forgot Password
        </Link>
      </div>

      {/* Horizontal Line */}
      <hr className={styles.separator} />

      {/* Input and Button */}
      {!showOtpUI ? (
          <>
            {/* Email Input and Send OTP */}
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}

              placeholder="Enter your mail ID"
              className={styles.inputField}
            />
             <button className={styles.sendOtpBtn} onClick={handleSendOtp} disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>

          </>
        ) : (
          <>
            {/* OTP Boxes and Confirm Button */}
            <div className={styles.otpContainer}>
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  className={styles.otpInput}
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div>
            <button className={styles.confirmOtpBtn} onClick={handleConfirmOtp} disabled={loading}>
              {loading ? "Verifying..." : "Confirm OTP"}
            </button>

          </>
        )}

    </div>
  </div>
);

  
};

export default ForgotPassword;
