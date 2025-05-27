
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const JobDetailPage = () => {
  const { state } = useLocation();
  const job = state?.job;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    number: "",
    language: "",
    experience: "",
    summary: "",
    cv: "",
  });

  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "emailId") {
      if (!value.endsWith("@gmail.com")) {
        setEmailError("Please enter a valid Gmail address.");
      } else {
        setEmailError("");
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.emailId.endsWith("@gmail.com")) {
      setEmailError("Please enter a valid Gmail address.");
      return;
    }

    if (!formData.cv) {
      alert("Please provide your CV link.");
      return;
    }

    const payload = {
      ...formData,
      jobId: job?._id,
    };

    const token = localStorage.getItem("token");
    setLoading(true);

    // Simulate 10 second loading
    setTimeout(async () => {
      try {
        await axios.post(
          "https://verbiq-backend1-1.onrender.com/applications/apply",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate("/candidatedashboard");
      } catch (error) {
        console.error("Submission error:", error);
        alert("Submission failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] p-1 pl-0 space-y-6">
      {/* Upper Card */}
      <div className="relative bg-white border border-[#F0F0F0] rounded-lg shadow-sm p-4 w-[350px] mb-4 mx-auto right-[400px]">
        <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
          <img src="/assets/heart-icon.png" alt="Favorite" className="w-4 h-3" />
          <img src="/assets/check-icon.png" alt="Verified" className="w-4 h-4" />
        </div>
        <h1 className="text-base font-bold text-[#004A6E]">{job?.jobTitle}</h1>
        <p className="text-xs font-semibold text-[#B0181B]">
          {job?.languages?.join(" & ")}
        </p>
        <div className="flex justify-between text-xs text-[#004A6E] mt-1">
          <p>Generalized topics</p>
          <p>Duration: {job?.duration}</p>
        </div>
        <div className="mt-2 text-xs flex">
          <p className="font-semibold text-[#004A6E]">Tags:&nbsp;</p>
          <p className="text-[#004A6E]">{job?.tags?.join(", ")}</p>
        </div>
        <div className="border-t border-[#D9D9D9] my-2" />
        <p className="font-bold text-sm text-[#004A6E]">${job?.price}/hr</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6 bg-[#ffffff] min-h-screen">
        {/* Left Side: Job Description */}
        <div className="md:w-1/2 bg-white border border-gray-300 rounded-lg shadow px-0 py-0 text-[#004A6E]">
          <div className="bg-[#00475D] text-white text-2xl font-bold rounded-t-lg px-6 py-4 ">
            {job?.jobTitle}
          </div>
          <p className="text-lg font-semibold text-[#B0181B] mb-2 ml-2">
            {job?.languages?.join(" & ")}
          </p>
          <div className="flex justify-between text-s mb-2 ml-2">
            <p>Generalized topics</p>
            <p className="mr-2">Duration: {job?.duration}</p>
          </div>
          <div className="mb-3 ml-2">
            <p className="font-bold">Tags:</p>
            <p>{job?.tags?.join(", ")}</p>
          </div>
          <p className="font-bold text-sm mb-3 ml-2">${job?.price}</p>
          <div className="whitespace-pre-line text-[12px] leading-relaxed ml-2 mr-2">
            {job?.jobDescription}
          </div>
          <div className="mt-4 ml-2 mr-2">
            {job?.company && (
              <div className="text-xs text-[#666] mb-1">
                <span className="font-bold">Company:</span> {job.company}
              </div>
            )}
            {job?.location && (
              <div className="text-xs text-[#666] mb-1">
                <span className="font-bold">Location:</span> {job.location}
              </div>
            )}
            {job?.postedDate && (
              <div className="text-xs text-[#666] mb-1">
                <span className="font-bold">Posted:</span> {job.postedDate}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Application Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-white border border-gray-300 rounded-lg shadow px-6 py-6 flex flex-col gap-4"
        >
          <fieldset disabled={loading} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col w-full min-w-0">
              <label className="text-sm font-medium mb-1 text-[#004A6E]">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                className="w-full min-w-0 border border-gray-300 rounded-md p-2 text-sm"
                style={{ width: "100%" }}
              />
            </div>

            {/* Email (as emailId) */}
            <div className="flex flex-col w-full min-w-0">
              <label className="text-sm font-medium mb-1 text-[#004A6E]">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="emailId"
                onChange={handleChange}
                required
                className={`w-full min-w-0 border rounded-md p-2 text-sm ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                style={{ width: "100%" }}
              />
              {emailError && (
                <p className="text-red-600 text-xs mt-1">{emailError}</p>
              )}
            </div>

            {/* Number */}
            <div className="flex flex-col w-full min-w-0">
              <label className="text-sm font-medium mb-1 text-[#004A6E]">
                Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="number"
                onChange={handleChange}
                required
                className="w-full min-w-0 border border-gray-300 rounded-md p-2 text-sm"
                style={{ width: "100%" }}
              />
            </div>

            {/* Language */}
            <div className="flex flex-col w-full min-w-0">
              <label className="text-sm font-medium mb-1 text-[#004A6E]">
                Language <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="language"
                onChange={handleChange}
                required
                className="w-full min-w-0 border border-gray-300 rounded-md p-2 text-sm"
                style={{ width: "100%" }}
              />
            </div>

            {/* Upload CV */}
            <div className="flex flex-col w-full min-w-0">
              <label className="text-sm font-medium mb-1 text-[#004A6E]">
                Upload CV Link <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="cv"
                onChange={handleChange}
                required
                placeholder="Paste your CV link here"
                className="w-full min-w-0 border border-gray-300 rounded-md p-2 text-sm"
                style={{ width: "100%" }}
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col w-full min-w-0">
              <label className="text-sm font-medium mb-1 text-[#004A6E]">
                Experience <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="experience"
                onChange={handleChange}
                required
                className="w-full min-w-0 border border-gray-300 rounded-md p-2 text-sm"
                style={{ width: "100%" }}
              />
            </div>

            {/* Summary */}
            <div className="flex flex-col w-full min-w-0">
              <label className="text-sm font-medium mb-1 text-[#004A6E]">
                Summary <span className="text-red-600">*</span>
              </label>
              <textarea
                name="summary"
                onChange={handleChange}
                required
                className="w-full min-w-0 border border-gray-300 rounded-md p-2 text-sm min-h-[100px]"
                style={{ width: "100%" }}
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#00CD15] text-white font-bold py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4A8 8 0 014 12z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Apply Now"
              )}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobDetailPage;