
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./JobDashboard.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  //console.log("📍 Current Path:", location.pathname);


  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "https://verbiq-backend1-1.onrender.com/jobs/getJob",

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        /*console.log("📦 API Response:", response.data);
console.log("📦 Setting jobs to:", response.data.allPosts);*/


        setJobs(response.data.allPosts || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [location.state?.updated]);

  //delete function

  const handleDelete = async (jobId) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(
        `https://verbiq-backend1-1.onrender.com/jobs/deleteJob/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Job deleted successfully!");
      setJobs((prev) => prev.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error("Failed to delete job", err);
      alert("Failed to delete job.");
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {location.pathname === "/companydashboard" ? (

        jobs.length === 0 ? (
          <p className={styles.noJobs}>No jobs found.</p>
        ) : (
          <div className={styles.jobGrid}>
            {jobs.map((job) => (
              <div key={job._id} className={styles.jobCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{job.jobTitle}</h3>
                  <p className={styles.duration}>{job.duration}</p>
                </div>
                <div className={styles.details}>
                  <p>
                    <strong>Languages:</strong> {job.languages?.join(", ")}
                  </p>
                  <p>
                    <strong>Total Payout:$319</strong> {job.payout || "-"}
                  </p>
                </div>
                {/*<div className={styles.company}>{job.company}</div>*/}
                <div className={styles.tagsWrapper}>
                  {job.tags?.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => navigate(`testupdatejob/${job._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                  <button
                    className={styles.viewBtn}
                    onClick={() => navigate(`view/${job._id}`)}
                  >
                    View candidate <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
};

export default JobDashboard;


//|| "Company name"