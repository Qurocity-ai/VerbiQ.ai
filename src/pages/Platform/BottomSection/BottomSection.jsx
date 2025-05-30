// import React from "react";
// import styles from "./BottomSection.module.css";

// export default function BottomSection() {
//   return (
//     <div className={styles.container}>
//       {/* Scrollable Image Section */}
//       <div className={styles.verticalScrollBox}>
//         <img
//           src="/assets/PlatformImage.png"
//           alt="Platform"
//           className={styles.standingImage}
//         />
//       </div>

//       {/* Text Section */}
//       <div className={styles.textSection}>
//         <h2 className={styles.heading}>
//           How VerbiQ Maps You to the Right Role
//         </h2>

//         <div className={styles.columns}>
//           {/* Left Column */}
//           <div className={styles.column}>
//             <div className={styles.block}>
//               <h3>Skill & Proficiency Matching</h3>
//               <li>
//                 We analyze your verified language scores (grammar, fluency,
//                 vocabulary, cultural fit) alongside your self‑declared skills to
//                 pinpoint roles where you’ll excel.
//               </li>
//             </div>

//             <div className={styles.block}>
//               <h3>Role‑Specific Filters</h3>
//               <li>
//                 Our smart engine weighs your domain expertise—AI training,
//                 content creation, SAP support—and surfaces jobs that align with
//                 both your language and technical strengths.
//               </li>
//             </div>
//           </div>

//           <div className={styles.column}>
//             <div className={styles.block}>
//               <h3>Cost & Value Optimization</h3>
//               <li>
//                 By factoring in your expected rates and market benchmarks,
//                 VerbiQ recommends opportunities that maximize your earnings
//                 while staying competitive.
//               </li>
//             </div>

//             <div className={styles.block}>
//               <h3>Real-Time Shortlisting</h3>
//               <li>
//                 Once matched, hiring managers see your profile within minutes.
//                 Top candidates receive interview invites in under 24 hours, so
//                 you land roles faster.
//               </li>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';

const BottomSection = () => {
  return (
    <div className="bg-[#F8FAFF] text-gray-800">
      <div className="max-w-6xl mx-auto px-5 py-10 lg:px-8 lg:py-20">
        {/* Platform Image Section */}
        <div className="mb-20">
          <div className="max-w-9xl h-60 overflow-y-scroll rounded-xl shadow-2xl relative bg-white">
            <img 
              src="/assets/PlatformImage.png" 
              alt="VerbiQ Platform Interface" 
              className="w-full h-auto min-h-[600px] object-cover cursor-grab active:cursor-grabbing"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl items-center justify-center text-white text-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">VerbiQ Platform Interface</h3>
                <p className="text-indigo-100">Scrolling platform demonstration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-3xl  text-gray-800 mb-15 leading-tight lg:text-3xl">
            How VerbiQ Maps You to the Right Role
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left mt-15 max-w-5xl mx-auto">
            {/* Skill & Proficiency Matching */}
            <div className=' rounded-2xl shadow-lg p-5 bg-[white]' >
              <h3 className="text-xl text-gray-900 mb-4">
                Skill & Proficiency Matching
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                We analyze your verified language scores (grammar, fluency, vocabulary, cultural fit) alongside your self-declared skills to pinpoint roles where you'll excel.
              </p>
            </div>
            
            {/* Cost & Value Optimization */}
            <div className=' rounded-2xl shadow-lg p-5 bg-[white]' >
              <h3 className="text-xl text-gray-900 mb-4">
                Cost & Value Optimization
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                By factoring in your expected rates and market benchmarks, VerbiQ recommends opportunities that maximize your earnings while staying competitive.
              </p>
            </div>

            {/* Role-Specific Filters */}
            <div className=' rounded-2xl shadow-lg p-5 bg-[white]' >
              <h3 className="text-xl text-gray-900 mb-4">
                Role-Specific Filters
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                Our smart engine weighs your domain expertise—AI training, content creation, SAP support—and surfaces jobs that align with both your language and technical strengths.
              </p>
            </div>
            
            {/* Real-Time Shortlisting */}
            <div className=' rounded-2xl shadow-lg p-5 bg-[white]' >
              <h3 className="text-xl text-gray-900 mb-4">
                Real-Time Shortlisting
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                Once matched, hiring managers see your profile within minutes. Top candidates receive interview invites in under 24 hours, so you land roles faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;