import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ViewCandidate.module.css";
import axios from "axios";

const ViewCandidate = () => {
  const {jobId} = useParams()
//   console.log(id)
  const location = useLocation();
  const [job, setJob] = useState(location.state || null);
  const [candidates, setCandidates] = useState([]);
console.log("Job ID from URL:", jobId);
console.log("Job from state:", job);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios .get (`https://verbiq-backend1-1.onrender.com/applications/view/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
         console.log(response.data)
        setCandidates(response.data.candidates || []);
      } catch (err) {
        console.error("Error fetching candidates", err);
      }
    };

    fetchCandidates();
  }, [jobId, job]);

  if (!job) {
    return <div>Job information is missing. Please go back to the dashboard.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.jobCard}>
          <div className={styles.row}>
    <img src="/assets/jobTitle.png" alt="Job Icon" className={styles.icon} />
    <h2 className={styles.jobTitle}>{job.jobTitle}</h2>
  </div>

  <div className={styles.row}>
    <img src="/assets/durationjob.png" alt="Duration Icon" className={styles.icon} />
    <p className={styles.dateText}>Duration: {job.duration}</p>
  </div>

  <div className={styles.row}>
    <img src="/assets/payout.png" alt="Payout Icon" className={styles.icon} />
    <p className={styles.payoutText}>Total Payout: ${job.price}</p>
  </div>

        {/* <h2 className={styles.jobTitle}>{job.jobTitle}</h2>
        <p className={styles.dateText}>Duration: {job.duration}</p>
        <p className={styles.payoutText}>Total Payout: ${job.price}</p> */}
      </div>

      <div className={styles.tableBox}>
        <table className={styles.candidateTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Language</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((cand, index) => (
              <tr key={index}>
                <td>{cand.name}</td>
                <td>{cand.emailId}</td>
                <td>{cand.number}</td>
                <td>{cand.language?.join(", ")}</td>
                <td>{cand.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCandidate;
