import React, { useState } from "react";

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

  const [roles, setRoles] = useState({
    interpretation: false,
    translation: false,
    contentRoles: false,
    aiModelTraining: false,
    customerSupportRoles: false,
  });
  const [areas, setAreas] = useState({
    contentRating: false,
    contentModeration: false,
    dataAnnotation: false,
    promptAndResponseTraining: false,
    promptEvaluationAnalyst: false,
  });

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
  const handleRoleChange = (role) => {
    setRoles({ ...roles, [role]: !roles[role] });
  };

  const handleAreaChange = (area) => {
    setAreas({ ...areas, [area]: !areas[area] });
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-20">
      <div className="max-w-4xl w-full p-8">
        <div>
          <img src="\assets\virbiqlogo.png" className="pb-7 h-20 w-52" />
        </div>
        <form className="mt-8 space-y-6 ">
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
                  />
                  <span className="text-[#C92A2D] sm:ml-32 ml-36">*</span>
                </div>
                <div>
                  <select
                    id={`proficiencyNative-${lang.id}`}
                    name="proficiencyNative"
                    className="mt-1 block w-52 pl-3 py-2 text-base border border-gray-300 sm:text-sm rounded-md text-gray-300"
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
                  />
                  <span className="text-[#C92A2D] sm:ml-36 ml-38">*</span>
                </div>
                <div>
                  <select
                    id={`proficiencyL2-${lang.id}`}
                    name="proficiencyL2"
                    className="mt-1 block w-52 pl-3 py-2 text-base border border-gray-300 sm:text-sm rounded-md text-gray-300"
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
                  checked={roles.interpretation}
                  onChange={() => handleRoleChange("interpretation")}
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
                  checked={roles.translation}
                  onChange={() => handleRoleChange("translation")}
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
                  checked={roles.contentRoles}
                  onChange={() => handleRoleChange("contentRoles")}
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
                  checked={roles.aiModelTraining}
                  onChange={() => handleRoleChange("aiModelTraining")}
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
                  checked={roles.customerSupportRoles}
                  onChange={() => handleRoleChange("customerSupportRoles")}
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
                  checked={areas.contentRating}
                  onChange={() => handleAreaChange("contentRating")}
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
                  checked={areas.contentModeration}
                  onChange={() => handleAreaChange("contentModeration")}
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
                  checked={areas.dataAnnotation}
                  onChange={() => handleAreaChange("dataAnnotation")}
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
                  checked={areas.promptAndResponseTraining}
                  onChange={() => handleAreaChange("promptAndResponseTraining")}
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
                  checked={areas.promptEvaluationAnalyst}
                  onChange={() => handleAreaChange("promptEvaluationAnalyst")}
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
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <button
              type="reset"
              className="w-40 py-2 px-4 border border-transparent text-sm shadow-md font-medium rounded-md text-black focus:outline-none sm:mr-7 mr-3"
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
