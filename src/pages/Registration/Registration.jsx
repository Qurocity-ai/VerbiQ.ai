import React, { useState, useEffect } from "react";
import axios from "axios";

function Registration() {
  const [languages, setLanguages] = useState([
    {
      id: 1,
      nativeLanguage: "",
      proficiencyNative: "",
      certifications: "",
    },
  ]);

  const [foreignLanguages, setForeignLanguages] = useState([
    {
      id: 1,
      foreignLanguage: "",
      proficiencyL2: "",
      certifications: "",
    },
  ]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    contactNumber: "",
    location: "",
    currentCtc: "",
    linkedInProfile: "",
    nativeLanguages: [],
    foreignLanguages: [],
    roles: {},
    areas: {},
    workExperience: "",
    languageCertifications: "",
    preferredLocations: "",
    preferredProcesses: "",
    weeklyCommitment: "",
    hourlyCharge: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fetch existing registration data
  useEffect(() => {
    const fetchRegistrationData = async () => {
      try {
        const response = await axios.get(
          "https://verbiq-backend1.onrender.com/registration/getRegister"
        );
        if (response.data) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error("Error fetching registration data:", error);
      }
    };

    fetchRegistrationData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const submitData = {
      ...formData,
      nativeLanguages: languages.map((lang) => ({
        language: lang.nativeLanguage,
        proficiency: lang.proficiencyNative,
        certifications: lang.certifications,
      })),
      foreignLanguages: foreignLanguages.map((lang) => ({
        language: lang.foreignLanguage,
        proficiency: lang.proficiencyL2,
        certifications: lang.foreignCertifications,
      })),
    };

    try {
      const response = await axios.post(
        "https://verbiq-backend1.onrender.com/registration/postRegister",
        submitData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Registration successful!");
        // Optionally reset form or redirect
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleAddLanguage = () => {
    setLanguages([
      ...languages,
      {
        id: languages.length + 1,
        nativeLanguage: "",
        proficiencyNative: "",
        certifications: "",
      },
    ]);
  };

  const handleAddForeignLanguage = () => {
    setForeignLanguages([
      ...foreignLanguages,
      {
        id: foreignLanguages.length + 1,
        foreignLanguage: "",
        proficiencyL2: "",
        certifications: "",
      },
    ]);
  };
  const handleRemoveForeignLanguage = (idToRemove) => {
    if (foreignLanguages.length > 1) {
      // Only remove if there's more than one language
      setForeignLanguages(
        foreignLanguages.filter((lang) => lang.id !== idToRemove)
      );
    }
  };
  const handleRemoveLanguage = (idToRemove) => {
    if (languages.length > 1) {
      // Only remove if there's more than one language
      setLanguages(languages.filter((lang) => lang.id !== idToRemove));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-20">
      <div className="max-w-4xl w-full p-8">
        <div>
          <img src="\assets\virbiqlogo.png" className="pb-7 h-20 w-52" />
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <div className=" space-y-4">
            <p className="mt-2 text-left text-sm text-[#C92A2D] font-semibold">
              Candidate Credential
              <hr className="-mt-2.5 ml-44 text-gray-200" />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
              <div>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300  text-gray-900 placeholder-gray-300 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Email-ID "
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-[75px] ml-[95px]">*</span>
              </div>
              <div>
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Enter Password "
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-[130px] ml-[144px]">
                  *
                </span>
              </div>
              <div>
                <input
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-[139px] ml-[80px]">
                  *
                </span>
              </div>
            </div>
            <p className="mt-10 text-left text-sm text-[#C92A2D] font-semibold">
              Candidate Registration
              <hr className="-mt-2.5 ml-44 text-gray-200" />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
              <div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300  text-gray-900 placeholder-gray-300 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Full Name "
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-[85px] ml-[95px]">*</span>
              </div>
              <div>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Contact Number "
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-[130px] ml-[144px]">
                  *
                </span>
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Email ID "
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-[70px] ml-[80px]">*</span>
              </div>
              <div>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-[70px] ml-[80px]">*</span>
              </div>
              <div>
                <input
                  id="currentCtc"
                  name="currentCtc"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                  placeholder="Current CTC"
                  value={formData.currentCtc}
                  onChange={handleInputChange}
                />
                <span className="text-[#C92A2D] sm:ml-24 ml-28">*</span>
              </div>

              <div>
                <input
                  id="linkedInProfile"
                  name="linkedInProfile"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Link to Portfolio"
                  value={formData.linkedInProfile}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {languages.map((lang) => (
              <div
                key={lang.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div>
                  <input
                    id={`nativeLanguage-${lang.id}`}
                    name="nativeLanguage"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                    placeholder="Native Language "
                    value={lang.nativeLanguage}
                    onChange={(e) => {
                      const updatedLanguages = languages.map((l) => {
                        if (l.id === lang.id) {
                          return { ...l, nativeLanguage: e.target.value };
                        }
                        return l;
                      });
                      setLanguages(updatedLanguages);
                    }}
                  />
                  <span className="text-[#C92A2D] sm:ml-32 ml-36">*</span>
                </div>
                <div>
                  <select
                    id={`proficiencyNative-${lang.id}`}
                    name="proficiencyNative"
                    className="mt-1 block w-52 pl-3 py-2 text-base border border-gray-300 sm:text-sm rounded-md text-gray-300"
                    value={lang.proficiencyNative}
                    onChange={(e) => {
                      const updatedLanguages = languages.map((l) => {
                        if (l.id === lang.id) {
                          return { ...l, proficiencyNative: e.target.value };
                        }
                        return l;
                      });
                      setLanguages(updatedLanguages);
                    }}
                  >
                    <option>Proficiency-Native</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Native</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <select
                    id={`certifications-${lang.id}`}
                    name="certifications"
                    className="mt-1 block w-52 pl-3 py-2 pr-11 text-base border border-gray-300 sm:text-sm rounded-md text-gray-300 ml-2"
                    value={lang.certifications}
                    onChange={(e) => {
                      const updatedLanguages = languages.map((l) => {
                        if (l.id === lang.id) {
                          return { ...l, certifications: e.target.value };
                        }
                        return l;
                      });
                      setLanguages(updatedLanguages);
                    }}
                  >
                    <option>Certifications (if any)</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  {lang.id === languages.length && (
                    <>
                      <button
                        type="button"
                        onClick={handleAddLanguage}
                        className="ml-6 p-2 text-white rounded-md bg-blue-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemoveLanguage(lang.id);
                        }}
                        className="ml-2 p-2 text-white rounded-md bg-[#B0181B]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                        >
                          <line
                            x1="5"
                            y1="12"
                            x2="20"
                            y2="12"
                            stroke="white"
                            strokeWidth="3"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
            {foreignLanguages.map((lang) => (
              <div
                key={lang.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div>
                  <input
                    id={`foreignLanguage-${lang.id}`}
                    name="foreignLanguage"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-52 px-2 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm -mb-9 bg-transparent focus:bg-white"
                    placeholder="Foreign Language "
                    value={lang.foreignLanguage}
                    onChange={(e) => {
                      const updatedLanguages = foreignLanguages.map((l) => {
                        if (l.id === lang.id) {
                          return { ...l, foreignLanguage: e.target.value };
                        }
                        return l;
                      });
                      setForeignLanguages(updatedLanguages);
                    }}
                  />
                  <span className="text-[#C92A2D] sm:ml-36 ml-38">*</span>
                </div>
                <div>
                  <select
                    id={`proficiencyL2-${lang.id}`}
                    name="proficiencyL2"
                    className="mt-1 block w-52 pl-3 py-2 text-base border border-gray-300 sm:text-sm rounded-md text-gray-300"
                    value={lang.proficiencyL2}
                    onChange={(e) => {
                      const updatedLanguages = foreignLanguages.map((l) => {
                        if (l.id === lang.id) {
                          return { ...l, proficiencyL2: e.target.value };
                        }
                        return l;
                      });
                      setForeignLanguages(updatedLanguages);
                    }}
                  >
                    <option>Proficiency L2</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Native</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <select
                    id={`foreignCertifications-${lang.id}`}
                    name="foreignCertifications"
                    className="mt-1 ml-2 block w-52 pl-3 py-2 pr-11 text-base border border-gray-300 sm:text-sm rounded-md text-gray-300"
                    value={lang.foreignCertifications}
                    onChange={(e) => {
                      const updatedLanguages = foreignLanguages.map((l) => {
                        if (l.id === lang.id) {
                          return {
                            ...l,
                            foreignCertifications: e.target.value,
                          };
                        }
                        return l;
                      });
                      setForeignLanguages(updatedLanguages);
                    }}
                  >
                    <option>Certifications (if any)</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  {lang.id === foreignLanguages.length && (
                    <>
                      <button
                        type="button"
                        onClick={handleAddForeignLanguage}
                        className="ml-6 p-2 text-white bg-blue-700 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemoveForeignLanguage(lang.id);
                        }}
                        className="ml-2 p-2 text-white rounded-md bg-[#B0181B]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                        >
                          <line
                            x1="5"
                            y1="12"
                            x2="20"
                            y2="12"
                            stroke="white"
                            strokeWidth="3"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#002279]">
              What are the roles that you have experience in?{" "}
              <span className="text-[#C92A2D] font-bold text-lg">*</span>
            </label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className=" flex items-center">
                <input
                  type="checkbox"
                  name="interpretation"
                  id="interpretation"
                  checked={formData.interpretation}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      interpretation: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />

                <label
                  htmlFor="interpretation"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Interpretation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="translation"
                  name="translation"
                  type="checkbox"
                  checked={formData.translation}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      translation: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="translation"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Translation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="contentRoles"
                  name="contentRoles"
                  type="checkbox"
                  checked={formData.contentRoles}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      contentRoles: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="contentRoles"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Content Roles
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="aiModelTraining"
                  name="aiModelTraining"
                  type="checkbox"
                  checked={formData.aiModelTraining}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      aiModelTraining: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="aiModelTraining"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  AI Model Training
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="customerSupportRoles"
                  name="customerSupportRoles"
                  type="checkbox"
                  checked={formData.customerSupportRoles}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      customerSupportRoles: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="customerSupportRoles"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Customer Support Roles
                </label>
              </div>
            </div>
          </div>

          <div>
            <textarea
              id="workExperience"
              name="workExperience"
              rows={3}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Notes about your work experience"
              value={formData.workExperience}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2 text-[#C92A2D]">
              Extra candidature details (optional)
              <hr className="-mt-2 sm:-mt-3 ml-68 text-gray-200" />
            </p>
            <p className="text-sm text-[#C92A2D]">
              <span className="font-extrabold">Note:</span> A detailed profiling
              will help us personalize jobs fit for your profile and preference.
              Hence, We request you to answer all questions if possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
              <div>
                <label
                  htmlFor="languageCertifications"
                  className="block text-sm font-bold text-[#002279] "
                >
                  Language certifications (If Any)
                </label>
                <select
                  id="languageCertifications"
                  name="languageCertifications"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300  text-gray-300 sm:text-sm rounded-md"
                  value={formData.languageCertifications}
                  onChange={handleInputChange}
                >
                  <option>Select</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="preferredLocations"
                  className="block text-sm font-bold text-[#002279] "
                >
                  Preferred Locations
                </label>
                <select
                  id="preferredLocations"
                  name="preferredLocations"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300   sm:text-sm rounded-md text-gray-300"
                  value={formData.preferredLocations}
                  onChange={handleInputChange}
                >
                  <option>Select</option>
                  <option>Location 1</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="preferredProcesses"
                  className="block text-sm font-bold text-[#002279] "
                >
                  Preferred Processes
                </label>
                <select
                  id="preferredProcesses"
                  name="preferredProcesses"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300  sm:text-sm rounded-md text-gray-300"
                  value={formData.preferredProcesses}
                  onChange={handleInputChange}
                >
                  <option>Select</option>
                  <option>Process 1</option>
                  <option>Process 2</option>
                  <option>Process 3</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#002279]">
              Have you given any of the assessments listed below?
            </label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center">
                <input
                  id="amcatSvar"
                  name="amcatSvar"
                  type="checkbox"
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                  checked={formData.amcatSvar}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      amcatSvar: e.target.checked,
                    }))
                  }
                />
                <label
                  htmlFor="amcatSvar"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  AMCAT / SVAR
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="versant"
                  name="versant"
                  type="checkbox"
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                  checked={formData.versant}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      versant: e.target.checked,
                    }))
                  }
                />
                <label
                  htmlFor="versant"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Versant
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="berlitz"
                  name="berlitz"
                  type="checkbox"
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                  checked={formData.berlitz}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      berlitz: e.target.checked,
                    }))
                  }
                />
                <label
                  htmlFor="berlitz"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Berlitz
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="pipplet"
                  name="pipplet"
                  type="checkbox"
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                  checked={formData.pipplet}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      pipplet: e.target.checked,
                    }))
                  }
                />
                <label
                  htmlFor="pipplet"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Pipplet
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#002279]">
              If you have worked in Content roles or training Al Models , Please
              select the areas of the Al Model
            </label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-center">
                <input
                  id="contentRating"
                  name="contentRating"
                  type="checkbox"
                  checked={formData.contentRating}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      contentRating: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="contentRating"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Content Rating
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="contentModeration"
                  name="contentModeration"
                  type="checkbox"
                  checked={formData.contentModeration}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      contentModeration: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="contentModeration"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Content Moderation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="dataAnnotation"
                  name="dataAnnotation"
                  type="checkbox"
                  checked={formData.dataAnnotation}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dataAnnotation: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="dataAnnotation"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Data Annotation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="promptAndResponseTraining"
                  name="promptAndResponseTraining"
                  type="checkbox"
                  checked={formData.promptAndResponseTraining}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      promptAndResponseTraining: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="promptAndResponseTraining"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Prompt and Response Training
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="promptEvaluationAnalyst"
                  name="promptEvaluationAnalyst"
                  type="checkbox"
                  checked={formData.promptEvaluationAnalyst}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      promptEvaluationAnalyst: e.target.checked,
                    }))
                  }
                  className=" w-4 h- accent-red-800 border-none cursor-pointer focus:outline-none "
                />
                <label
                  htmlFor="promptEvaluationAnalyst"
                  className="ml-2 block text-sm font-medium text-[#002279]"
                >
                  Prompt Evaluation Analyst
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#002279]">
                  For Project based / freelancing roles, <br /> How much time
                  can you commit weekly?
                </label>
              </div>
              <div>
                <input
                  id="weeklyCommitment"
                  name="weeklyCommitment"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 -mb-7 bg-transparent text-center te focus:bg-whitext-gray-900 focus:outline-none  focus:z-10 sm:text-sm"
                  value={formData.weeklyCommitment}
                  onChange={handleInputChange}
                />
                <span className="text-blue-800 ml-60 sm:ml-52 ">Hrs</span>
                <hr className="text-gray-200" />
              </div>
              <div>
                <input
                  id="hourlyCharge"
                  name="hourlyCharge"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Charges/Hour"
                  value={formData.hourlyCharge}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <button
              type="reset"
              className="w-40 py-2 px-4 border border-transparent text-sm shadow-md font-medium rounded-md text-black focus:outline-none sm:mr-7 mr-3"
              onClick={() => setFormData({})}
            >
              Clear Data
            </button>
            <button
              type="submit"
              className="w-40 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#B0181B] "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
