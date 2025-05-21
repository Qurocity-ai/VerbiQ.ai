
// // src/pages/Registration/DashboardRegistration/JobsPostForm.jsx
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./UpdatesJobs.module.css";

const UpdateJobForm = () => {
  const {jobId} = useParams(); 
  console.log({jobId})
  // get job id from route
  const navigate = useNavigate();
const [formData, setFormData] = useState({
  duration: "",
  employmentType: [],
  price: "",
  experienceLevel: [],  
  jobDescription: ""
});

useEffect(() => {
  const fetchJob = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`https://verbiq-backend1-1.onrender.com/jobs/getSingleJob/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(res.data);

      const job = res.data.job
      if (job) {
        setFormData({
          duration: job.duration || "",
          employmentType: job.employmentType || [],
          price: job.price || "",
          experienceLevel: job.experienceLevel || [],
          jobDescription: job.jobDescription || ""
        });
      } else {
        alert("Job not found");
        navigate("/companydashboard");
      }
    } catch (err) {
      console.error("Failed to fetch job", err);
    }
  };

  fetchJob();
}, [jobId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `https://verbiq-backend1-1.onrender.com/jobs/updateJob/${jobId}`,
    
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Job updated!");
      navigate("/companydashboard");
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update job.");
    }
  };
console.log("UpdateJobForm rendered");

  return (
    
    <div className={styles.formContainer}>
      <h2>Update Job</h2>

      <label>Duration:
        <input name="duration" value={formData.duration} onChange={handleChange} />
      </label>

      <label>Employment Type:
        <input name="employmentType" value={formData.employmentType} onChange={handleChange} />
      </label>

      <label>Price:
        <input name="price" value={formData.price} onChange={handleChange} type="number" />
      </label>

      <label>Experience Level:
        <input name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} />
      </label>

      <label>Job Description:
        <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} />
      </label>

      <div className={styles.buttons}>
        <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
        <button onClick={() => navigate("/companydashboard")} className={styles.cancelButton}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateJobForm;




// import React from "react";
// import { useParams } from "react-router-dom";

// const UpdateJobs = () => {
//   const { jobId } = useParams();

//   return (
//     <div style={{ padding: "2rem", fontSize: "1.5rem", color: "green" }}>
//       <h1>Update Job Page</h1>
//       <p>Job ID: {jobId}</p>
//     </div>
//   );
// };

// export default UpdateJobs;

