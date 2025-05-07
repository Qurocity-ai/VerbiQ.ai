import React  from "react";
import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import ForgotPassword from "../ForgotPassword/ForgotPassword";


import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

// Eye icon



const SignIn = () => {
    const [emailId, setEmailId] = useState("")
const [password, setPassword] = useState("")
const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(true)


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); 

  try {
    const payload = { emailId, password,};

    const response = await axios.post('https://verbiq-backend1-1.onrender.com/login/userLogin', payload,  {  headers: {
      'Content-Type': 'application/json',
    },});
    localStorage.setItem('token', response.data.token);
    console.log('Success:', response.data);


    // alert('Login successful!');
  } catch (error) {
    console.error('Error:', error);
    // alert('Registration failed , Invaild emailId or password .');
  }
  finally {
    setLoading(false); 
    setEmailId(''); 
    setPassword('');

  }

};

  return (
    <div className={styles.container}>
    <div className={styles.leftPanel}>
      <img src="/half-r.png" alt="Half R" className={styles.halfR} />
    </div>
    <div className={styles.rightPanel}>
    <div className={styles.header}>
    <img src="/verbiq-logo.png" alt="VerbiQ Logo" className={styles.verbiqLogo} />
    <Link to="#" className={styles.signinHeading}>Sign-In</Link>

  </div> 
  <hr className={styles.horizontalLine} />
 
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email-ID / Contact Number"
          className={styles.inputField}
          value={emailId}
    onChange={(e) => setEmailId(e.target.value)}
        />
        <div className={styles.passwordWrapper}>
  <input
    type={showPassword ? "password" : "text"}
    placeholder="Password"
    className={`${styles.inputField} ${styles.passwordField}`}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <span
    className={styles.eyeIcon}
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ?  <IoEye /> :<IoEyeOffSharp /> }
  </span>
</div>

        {/* <a href="#" className={styles.forgotPassword}>Forgot Password?</a> */}
        <Link to="/ForgotPassword" className={styles.forgotPassword}>Forgot Password?</Link>

        <button type="submit" className={styles.submitBtn} disabled={loading} >
        {loading ? (
    <div className={styles.spinnerWrapper}>
      <span className={styles.spinner}></span>
      <span>Submitting...</span>
    </div>
  ) : (
    "Submit"
  )}

        </button>
      </form>
    </div>
  </div>

)};

export default SignIn;
