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
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md sm:p-22 p-8">
        <h2 className="text-[35px] text-center font-bold text-red-600 mb-10">
          Post a New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md  shadow-sm border-gray-300 py-3 px-11"
                placeholder="Data Scientist"
                required
              />
            </div>

            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
                required
              />
            </div>

            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 text-nowrap mb-2">
                Languages (comma-separated)
              </label>
              <input
                type="text"
                name="languages"
                value={formData.languages.join(", ")}
                onChange={handleArrayInput}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
                placeholder="Python, SQL, R"
                required
              />
            </div>

            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
                placeholder="12 months"
                required
              />
            </div>

            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
                Price/Salary
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
                required
              />
            </div>

            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
                Employee Type
              </label>
              <input
                type="text"
                name="employmentType"
                value={formData.employmentType.join(", ")}
                onChange={handleArrayInput}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
                placeholder="Enter Employee Type"
                required
              />
            </div>
            <div className="p-2">
              <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
                Experience Level
              </label>
              <input
                type="text"
                name="experienceLevel"
                value={formData.experienceLevel.join(", ")}
                onChange={handleArrayInput}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
                placeholder="Enter Experience Level"
                required
              />
            </div>
          </div>

          <div className="p-2">
            <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags.join(", ")}
              onChange={handleArrayInput}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-11"
              placeholder="Remote, Full-time, Data Analysis"
            />
          </div>

          <div className="p-2">
            <label className="block text-lg sm:text-[20px] font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-lg sm:text-[20px]">{error}</div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg sm:text-[20px] font-medium text-white 
              ${
                isLoading
                  ? "bg-indigo-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
          >
            {isLoading ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
