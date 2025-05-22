import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobPostForm = () => {
  const navigate = useNavigate();
  const initialState = {
    jobTitle: "",
    languages: [],
    duration: "",
    tags: [],
    price: "",
    companyName: "",
    jobDescription: "",
    emailId: "",
    employmentType: [],
    experienceLevel: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      // Check if token exists
      if (!token) {
        setError("Please login first");
        setIsLoading(false);
        navigate("/candidatelogin");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://verbiq-backend1-1.onrender.com/jobs/createJob",
        formData,
        config
      );
      console.log("Job posted successfully:", response.data);
      setFormData(initialState);
      navigate("/companydashboard");
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Session expired. Please login again");
        localStorage.removeItem("token");
        navigate("/login"); // Replace with your actual login route
      } else {
        setError(err.response?.data?.message || "Failed to post job");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center w-max mx-auto -ml-20 sm:-ml-0 mt-[30%] sm:mt-0">
      <div className="max-w-6xl w-full ">
        <div className="pt-42 sm:pt-0">
          <img src="\assets\virbiqlogo.png" className="pb-7 h-20 w-52" />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <p className="text-left text-sm text-[#C92A2D] font-semibold">
              Post a New Job
              <hr className="-mt-2.5 ml-28 text-gray-200" />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8 ">
              <div>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white "
                  placeholder="Job Title"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="languages"
                  value={formData.languages.join(", ")}
                  onChange={handleArrayInput}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                  placeholder="Languages (comma-separated)"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                  placeholder="Duration (e.g., 6 months)"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                  placeholder="Salary/Price Range"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleInputChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                  placeholder="Contact Email"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="employmentType"
                  value={formData.employmentType.join(", ")}
                  onChange={handleArrayInput}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                  placeholder="Employment Type (Full-time, Part-time)"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="experienceLevel"
                  value={formData.experienceLevel.join(", ")}
                  onChange={handleArrayInput}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                  placeholder="Experience Level (Entry, Senior)"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <input
                type="text"
                name="tags"
                value={formData.tags.join(", ")}
                onChange={handleArrayInput}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                placeholder="Tags (Remote, AI, Machine Learning)"
              />
            </div>

            <div className="mt-6">
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                rows={4}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent focus:bg-white"
                placeholder="Job Description"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-[#C92A2D] text-sm font-medium">{error}</div>
          )}

          <div className="flex items-center justify-start">
            <button
              type="reset"
              className="w-40 py-2 px-4 border border-transparent text-sm shadow-md font-medium rounded-md text-black focus:outline-none sm:mr-7 mr-3"
              onClick={() => setFormData(initialState)}
            >
              Clear Form
            </button>
            <button
              type="submit"
              className={`text-sm font-medium rounded-md text-white 
                ${
                  isLoading
                    ? "bg-[#d85e61] cursor-not-allowed w-40 py-2 px-4"
                    : "bg-[#B0181B] hover:bg-[#a31518] w-40 py-2 px-4"
                }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              ) : (
                "Post Job"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
