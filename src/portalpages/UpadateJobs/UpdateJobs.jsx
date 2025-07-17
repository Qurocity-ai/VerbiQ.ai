
// // src/pages/Registration/DashboardRegistration/JobsPostForm.jsx
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./UpdatesJobs.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateJobForm = () => {
  const {jobId} = useParams(); 
  console.log({jobId})
  // get job id from route
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  duration: "",
  employmentType: [],
  price: "",
  experienceLevel: [],  
  jobDescription: ""
});

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
         toast.error("Job not found.");

        alert("Job not found");
        navigate("/companydashboard");
      }
    } catch (err) {
      console.error("Failed to fetch job", err);
    }}

useEffect(() => {
  fetchJob();
}, [jobId,navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: name === "price" ? Number(value) : value
  }));}

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
      setLoading(true);
      const cleanedData = {
  ...formData,
  duration: formData.duration.trim(),
  jobDescription: formData.jobDescription.trim(),
};

    try {
      await axios.put(
        `https://verbiq-backend1-1.onrender.com/jobs/updateJob/${jobId}`,cleanedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
          toast.success("Job updated successfully!");

      alert("Job updated!");
      navigate("/companydashboard", { state: { updated: true } });

      // navigate("/companydashboard");
    } catch (err) {
      console.error("Update failed", err);
          toast.error("Failed to update job.");

      // alert("Failed to update job.");
    }
      finally {
    setLoading(false);
  } 

  };
console.log("UpdateJobForm rendered");

  return (
  <>
  <div className={styles.centeredContainer}>

    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <fieldset disabled={loading}>
        <div className={styles.fieldGroup}>
          <label htmlFor="duration">Duration</label>
          <input id="duration" name="duration" value={formData.duration} onChange={handleChange} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="employmentType">Employment Type</label>
          <input id="employmentType" name="employmentType"          
           value={formData.employmentType.join(", ")}
               onChange={(e) =>
      setFormData((prev) => ({
        ...prev,
       employmentType : e.target.value.split(",").map(str => str.trim())
      }))
    }

  />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="price">Price</label>
          <input id="price" name="price" type="number" step="100" value={formData.price} onChange={handleChange} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="experienceLevel">Experience Level</label>
          <input id="experienceLevel" 
          value={formData.experienceLevel.join(", ")}
          name="experienceLevel"   onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
     experienceLevel : e.target.value.split(",").map(item => item.trim())
    }))
  }
/>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="jobDescription">Job Description</label>
          <textarea id="jobDescription" rows="10" name="jobDescription" value={formData.jobDescription} onChange={handleChange} />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton} onClick={handleSubmit}>
            {loading ? "Updating..." : "Update"}
          </button>
          <button type="button" className={styles.cancelButton} onClick={() => navigate("/companydashboard")}>
            Cancel
          </button>
        </div>
      </fieldset>
    </form>

    {loading && <div className={styles.spinner}></div>}
    <ToastContainer position="top-right" autoClose={3000} />
    </div>
  </>
);
}
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

