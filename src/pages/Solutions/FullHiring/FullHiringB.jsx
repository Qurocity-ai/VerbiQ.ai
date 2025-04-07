// import React from "react";

// const features = [
//   {
//     imgSrc: "/path-to-icon1.svg", // Replace with actual image path
//     title: "AI-Driven Candidate Screening",
//     description: "Get 97% accurate language & skill assessments",
//   },
//   {
//     imgSrc: "/path-to-icon2.svg",
//     title: "Faster Time-to-Hire",
//     description: "Cut hiring timelines by 50% with automated shortlisting",
//   },
//   {
//     imgSrc: "/path-to-icon3.svg",
//     title: "Data-Backed Hiring Decisions",
//     description: "Reduce mis-hiring by 42% with smart profiling",
//   },
//   {
//     imgSrc: "/path-to-icon4.svg",
//     title: "Cultural Fit Evaluation",
//     description: "Improve retention by 45% with communication & soft skills analysis",
//   },
// ];

// const FullHiringB = () => {
//   return (
//     <div className="bg-gray-100 py-10 px-5">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
//         {features.map((feature, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <img src={feature.imgSrc} alt={feature.title} className="w-20 h-20 mb-4" />
//             <h3 className="text-lg font-bold text-[#0b1545]">{feature.title}</h3>
//             <p className="text-gray-600 mt-2">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FullHiringB;


import React from "react";
import styles from "./FullHiringB.module.css"; 

const features = [
  {
    imgSrc: "/assets/AiDriven.png", 
    title: "AI-Driven Candidate Screening",
    description: "Get 97% accurate language & skill assessments",
  },
  {
    imgSrc: "/assets/FasterTime.png",
    title: "Faster Time-to-Hire",
    description: "Cut hiring timelines by 50% with automated shortlisting",
  },
  {
    imgSrc: "/assets/Databackend.png",
    title: "Data-Backed Hiring Decisions",
    description: "Reduce mis-hiring by 42% with smart profiling",
  },
  {
    imgSrc: "/assets/Culturalfiteva.png",
    title: "Cultural Fit Evaluation",
    description: "Improve retention by 45% with communication & soft skills analysis",
  },
];

const FullHiringB = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <img src={feature.imgSrc} alt={feature.title} className={styles.icon} />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullHiringB;
