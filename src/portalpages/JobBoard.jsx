
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        const result = await axios.get(
          "https://verbiq-backend1-1.onrender.com/jobs/getJob",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setJobs(result.data.allPosts);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="border border-[#F0F0F0] p-4 rounded-md shadow-sm hover:shadow-md bg-white relative"
        >
          {/* Heart and Check Icons */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
            <img
              src="/assets/heart-icon.png"
              alt="Favorite"
              className="w-5 h-4"
            />
            <img
              src="/assets/check-icon.png"
              alt="Verified"
              className="w-5 h-5"
            />
          </div>

          {/* Job Title and Language */}
          <h3 className="text-lg font-bold text-[#004A6E]">
            {job.jobTitle}
          </h3>
          <p className="text-sm font-semibold text-[#B0181B]">
            {job.languages.join(" & ")}
          </p>

          {/* Topics and Duration */}
          <div className="flex justify-between text-sm text-[#004A6E] mt-1">
            <p>Generalized topics</p>
            <p>Duration: {job.duration}</p>
          </div>

          {/* Tags */}
          <div className="mt-6 text-sm flex">
            <p className="font-bold text-[#004A6E]">Tags:&nbsp;</p>
            <p className="text-[#004A6E]">{job.tags.join(", ")}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-1 border-[#D9D9D9] my-3"></div>

          {/* Payout and Details Button */}
          <div className="flex justify-between items-center">
            <p className="font-bold text-[#004A6E]">${job.price}/hr</p>
            <button
              onClick={() => navigate(`/candidatedashboard/jobs/${job._id}`, { state: { job } })}
              className="text-[#004A6E] font-medium underline"
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobBoard;
