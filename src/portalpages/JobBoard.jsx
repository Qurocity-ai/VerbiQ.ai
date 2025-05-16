import React, { useEffect, useState } from "react";
import axios from "axios";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        const result = await axios.get("https://verbiq-backend1-1.onrender.com/jobs/getJob", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setJobs(result.data.allPosts);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="border border-[#F0F0F0] p-4 rounded-md shadow-sm hover:shadow-md bg-white relative"
        >
          {/* Heart and Check Icons */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
            {/* Heart Icon */}
            <img
              src="/assets/heart-icon.png"
              alt="Favorite"
              className="w-5 h-4"
            />
            {/* Check Icon */}
            <img
              src="/assets/check-icon.png"
              alt="Verified"
              className="w-5 h-5"
            />
          </div>

          {/* Job Title and Language */}
          <h3 className="text-lg font-bold text-[#004A6E]">{job.jobTitle}</h3>
          <p className="text-sm font-semibold text-[#B0181B]">{job.languages.join(" & ")}</p>

          {/* Generalized Topics and Duration */}
          <div className="flex justify-between text-sm text-[#004A6E] mt-1">
            <p>Generalized topics</p>
            <p>Duration: {job.duration}</p>
          </div>

          {/* Space between Generalized Topics and Tags */}
          <div className="mt-6"></div> {/* Adjust space as necessary */}

          {/* Tags */}
         <div className="text-sm flex">
            <p className="font-bold  text-[#004A6E]">Tags:</p>{" "}
            <p className=" text-[#004A6E]">{job.tags.join(", ")}</p>
         </div>


          {/* Horizontal Line */}
          <div className="border-t border-1 border-[#D9D9D9] my-3"></div>

          {/* Payout and Details Button */}
          <div className="flex justify-between items-center">
            <p className="font-bold text-[#004A6E]">${job.price}/hr</p>
            <button
              onClick={() => {
                setSelectedJob(job);
                setShowPopup(true);
              }}
              className="text-[#004A6E] font-medium underline"
            >
              Details
            </button>
          </div>
        </div>
      ))}

    {showPopup && selectedJob && (
  <div className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
    <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-lg shadow-xl">
      
     <div className="sticky top-0 z-10 bg-[#00475D] text-white flex rounded-t-lg overflow-hidden">
  {/* Left: Job Title */}
  <div className="flex-grow p-4">
    <h2 className="text-lg font-bold">{selectedJob.jobTitle}</h2>
  </div>

  {/* Right: Full-height Apply Button */}
  <button className="bg-[#007599] hover:bg-[#007580] px-6 text-sm font-medium text-white flex items-center justify-center rounded-tr-lg">
    Apply now
  </button>
</div>

      {/* Scrollable Content */}
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-64px)] text-[10px] text-[#000949] whitespace-pre-line">
        {selectedJob.jobDescription}
      </div>

      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute -top-0.5 right-0.5 text-gray-600 text-2xl font-bold z-10"
      >
        &times;
      </button>
    </div>
  </div>
)}


    </div>
  );
}

export default JobBoard;
