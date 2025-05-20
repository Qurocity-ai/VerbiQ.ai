

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./JobDashboard.module.css";
import { useLocation } from "react-router-dom";

const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

  /*Agar current route post job form ka hai, toh JobDashboard kuch bhi na show kare
  if (location.pathname === "/companydashboard/JobPostForm") {
    return null;
  }*/

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("https://verbiq-backend1-1.onrender.com/jobs/getJob", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setJobs(response.data.allPosts || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  

  return (
    <div className={styles.jobDashboardContainer}>
      <div className={styles.dashboardWrapper}>

       {window.location.pathname === "/companydashboard" && (
          jobs.length === 0 ? (
       
          <p className={styles.noJobs}>No jobs found.</p>
        ) : (
          <div className={styles.jobGrid}>
            {jobs.map((job) => (
              <div key={job._id} className={styles.jobCard}>
                <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
                <p className={styles.jobInfo}><strong>Languages:</strong> {job.languages?.join(", ")}</p>
                <p className={styles.jobInfo}><strong>Duration:</strong> {job.duration}</p>
                <div className={styles.tagsWrapper}>
                  {job.tags?.map((tag, index) => (
                    <span key={index} className={styles.tagBadge}>{tag}</span>
                  ))}
                </div>
                 <div className={styles.buttonGroup}>
                  <button className={styles.updateButton}>Update</button>
                  <button className={styles.deleteButton}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default JobDashboard;


