import { useState } from "react";
import styles from "./registration.module.css";


const CompanyRegistration = () => {
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    companyName: "",
  });



  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, role: "Company" };

    try {
      const response = await fetch("https://verbiq-backend1-1.onrender.com/candidate/candidateRegister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Company registered successfully!");
      
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h3>Company Registration</h3>
      <input
        type="email"
        name="emailId"
        placeholder="Email ID"
        value={formData.emailId}
        onChange={handleChange}
        className={styles.inputField}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className={styles.inputField}
        required
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        className={styles.inputField}
        required
      />
      <button type="submit" className={styles.submitButton}>
        Register Company
      </button>
    </form>

    </div>
    
  );
};

export default CompanyRegistration;
