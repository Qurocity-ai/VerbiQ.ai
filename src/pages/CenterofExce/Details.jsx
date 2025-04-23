// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useLocation } from "react-router-dom";
// import styles from './Details.module.css'

// function Details() {
//   const { id } = useParams(); // Get user ID from URL
//   const location = useLocation();
//   // const navigate = useNavigate();
//   const [user, setUser] = useState(location.state?.user || null);
//   const [loading, setLoading] = useState(!user);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!user) {
//       axios
//         .get(`https://recrutory-new-website-backend.onrender.com/user/${id}`)
//         .then((response) => {
//           setUser(response.data);
//           setLoading(false);
//           console.log(user);
//         })
//         .catch((error) => {
//           console.error("Error fetching user details:", error);
//           setError("Failed to load user data.");
//           setLoading(false);
//         });
//     }
//   }, [id, user]);

//   if (!user) {
//     return <div>User not found</div>;
//   }

//   if (loading) return <div className="text-xl text-black">Loading...</div>;
//   if (error) return <div className="text-xl text-red-800">{error}</div>;

//   return (
//     <div className=" text-blue-950 overflow-hidden mb-18">
//       {/* Profile Header Section */}
//       <div className="flex flex-col items-center justify-center p-6  mt-40">
//         <div className="md:mr-6 mb-4 md:mb-0">
//           <div className="relative rounded-full overflow-hidden w-64 h-64 ">
//             {/* Replace with an actual image URL for the profile picture */}
//             <img
//               src={user.profile_image || "https://via.placeholder.com/150"} // Placeholder image
//               alt={user.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="text-center sm:flex sm:items-center sm:pl-40 sm:mt-6">
//           <h1 className="text-[30px] font-semibold text-blue-950 sm:text-nowrap">
//             {user.name}
//           </h1>
//           <p className="text-blue-800 sm:text-[25px] text-[20px] sm:pl-8 sm:text-nowrap">
//             {user.languages_spoken?.[0]}
//           </p>
//           <p className="text-blue-800 sm:text-[25px] text-[20px] sm:pl-8 sm:text-nowrap">
//             <span className="text-[#0c0f6a] font-extrabold text-[20px] sm:text-[25px] ">
//               Proficiency :{" "}
//             </span>
//             {user.proficiency}
//           </p>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="sm:grid sm:grid-cols-4 sm:gap-x-16 sm:pl-[20%] pl-7 w-screen">
//         {/* Professional Summary Section */}
//         <div className="mb-3 sm:col-span-2">
//           <h2 className="text-lg font-bold text-[#0c0f6a] mb- flex items-center">
//             Professional Summary
//           </h2>
//           <p className="text-blue-900 text-[18px] leading-relaxed pl-3">
//             <span className="mr-1 text-[20px]">•</span>
//             {user.professional_summary || "No summary available"}
//           </p>
//         </div>

//         {/* Skills & Proficiency Section */}
//         <div className="mb-8  col-span-2">
//           <h2 className="text-lg font-bold text-[#0c0f6a] mb-3 flex items-center">
//             Skills & Proficiency
//           </h2>
//           <ul className="flex flex-col justify-start items-start gap-2 text-blue-900 text-[18px] pl-3">
//             <li className="flex items-center">
//               <span className="mr-1">•</span>
//               {user.skills?.[0] || "Content Moderation & Compliance"}
//             </li>
//             <li className="flex items-center">
//               <span className="mr-1">•</span>
//               {user.skills?.[1] || "Customer Support & Operations"}
//             </li>
//             <li className="flex items-center">
//               <span className="mr-1">•</span>
//               {user.skills?.[2] || "Communication & Interpersonal Skills"}
//             </li>

//             <li className="flex items-center">
//               <span className="mr-1">•</span>
//               {user.skills?.[3] || "Problem Solving & Critical Thinking"}
//             </li>
//             <li className="flex items-center">
//               <span className="mr-1">•</span>
//               {user.skills?.[4] || "Team Collaboration & Training"}
//             </li>
//             <li className="flex items-center">
//               <span className="mr-1">•</span>
//               {user.skills?.[5] || "Adaptability & Flexibility"}
//             </li>
//           </ul>
//         </div>
//         {/* Work Experience Section */}
//         <div className="sm:col-span-2 w-full">
//           <h2 className="text-lg font-bold text-[#0c0f6a] mb-4 flex items-center">
//             Work Experience
//           </h2>
//           {user.work_experience.map((work, index) => (
//             <div className="space-y-6" key={index}>
//               <div>
//                 <h3 className="text-md font-medium text-blue-950 flex items-center pl-2">
//                   <span className="mr-1 text-[25px]">•</span>
//                   {work.company || "Amazon"}
//                 </h3>
//                 <ul className="list-disc list-inside text-blue-900 text-[18px] space-y-1 pl-6">
//                   <li className=" mb-1">
//                     Role : {work.role || "Customer Service Associate"}
//                   </li>
//                   <li>
//                     {work.responsibilities?.[0] ||
//                       "Provided exceptional customer service to enhance customer satisfaction."}
//                   </li>
//                   <li>
//                     {work.responsibilities?.[1] ||
//                       "Resolved customer inquiries and issues in a timely manner."}
//                   </li>
//                   <li>
//                     {work.responsibilities?.[2] ||
//                       "Collaborated with cross-functional teams to improve service quality."}
//                   </li>
//                   <li>
//                     {work.responsibilities?.[3] ||
//                       "Trained new team members on customer service protocols."}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import styles from "./Details.module.css"
import styles from "./Details.module.css";

const Details = () => {
  const { id } = useParams(); // Get user ID from URL
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(location.state?.user || null);
  const [loading, setLoading] = useState(!user);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      axios
        .get(`https://recrutory-new-website-backend.onrender.com/user/${id}`)
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          setError("Failed to load user data.");
          setLoading(false);
        });
    }
  }, [id, user]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  // Handle missing data safely
  const frenchProficiency = user.language_proficiency?.French || {};
  const skills = frenchProficiency.skills || {};
  const certifications = user.certifications || [];
  const workExperience = user.work_experience || [];

  return (
    <div className={styles.main}>
      {/* <img src="/assets/RecutoryVerbiqLogo.png" alt="Logo" className={styles.logo} /> */}
      <div className={styles.detailsContainer}>
        {/* Left Section: User Details */}

        <div className={styles.leftSection}>
          <div className={styles.detailsCard}>
            <div className={styles.top}>
              <h2 className={styles.name}>
                {user.name} |{" "}
                <span>
                  Total work experience: {user.total_experience} Years
                </span>
              </h2>
            </div>
            <div className={styles.cDetails}>
              <p className={styles.proficiency}>
                <strong>Proficiency:</strong> {frenchProficiency.level} |{" "}
                {frenchProficiency.certification}
              </p>

              <p className={styles.languageSkills}>
                <strong>French Language Skills:</strong> Spoken -{" "}
                {skills.spoken || "N/A"} | Vocabulary (
                {skills.vocabulary || "N/A"}) | Grammar (
                {skills.grammar || "N/A"}) | Fluency ({skills.fluency || "N/A"})
              </p>

              <h3 className={styles.sectionTitle}>Professional Summary</h3>
              <p className={styles.summary}>
                {user.professional_summary || "No summary available"}
              </p>

              <h3 className={styles.sectionTitle}>Skills & Proficiency</h3>
              <ul>
                {user.skills?.length > 0 ? (
                  user.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))
                ) : (
                  <li>No skills listed</li>
                )}
              </ul>

              <h3 className={styles.sectionTitle}>Work Experience</h3>
              {workExperience.length > 0 ? (
                workExperience.map((job, index) => (
                  <div key={index} className={styles.job}>
                    <h4>{job.company}</h4>
                    <p>
                      <strong>Role:</strong> {job.role}
                    </p>
                    <ul>
                      {job.responsibilities?.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>No work experience listed</p>
              )}

              <h3 className={styles.sectionTitle}>Language Certifications</h3>
              {certifications.length > 0 ? (
                <ul>
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      {cert.name} ({cert.level}) - {cert.institution}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No certifications listed</p>
              )}

              <button
                className={styles.backButton}
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Picture */}
        <div className={styles.rightSection}>
          <div className={styles.profileCard}>
            <img
              src={user.profile_image || "https://via.placeholder.com/150"}
              alt={user.name}
              className={styles.profileImage}
            />
            <h3 className={styles.profileName}>{user.name}</h3>
            <p className={styles.profileLanguage}>
              <em>
                Languages:{" "}
                {user.languages_spoken?.join(", ") || "Not specified"}
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
