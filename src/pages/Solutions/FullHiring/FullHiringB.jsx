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


// import React from "react";
// import styles from "./FullHiringB.module.css"; 

// const features = [
//   {
//     imgSrc: "/assets/AiDriven.png", 
//     title: "AI-Driven Candidate Screening",
//     description: "Get 97% accurate language & skill assessments",
//   },
//   {
//     imgSrc: "/assets/FasterTime.png",
//     title: "Faster Time-to-Hire",
//     description: "Cut hiring timelines by 50% with automated shortlisting",
//   },
//   {
//     imgSrc: "/assets/Databackend.png",
//     title: "Data-Backed Hiring Decisions",
//     description: "Reduce mis-hiring by 42% with smart profiling",
//   },
//   {
//     imgSrc: "/assets/Culturalfiteva.png",
//     title: "Cultural Fit Evaluation",
//     description: "Improve retention by 45% with communication & soft skills analysis",
//   },
// ];

// const FullHiringB = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.grid}>
//         {features.map((feature, index) => (
//           <div key={index} className={styles.feature}>
//             <img src={feature.imgSrc} alt={feature.title} className={styles.icon} />
//             <h3 className={styles.title}>{feature.title}</h3>
//             <p className={styles.description}>{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FullHiringB;



// import React from "react";
// import styles from "./FullHiringB.module.css";
// import { delay, motion } from "framer-motion";

// const features = [
//   {
//     imgSrc: "/assets/AI-Driven Candidate Screening.png",
//     title: "AI-Driven Candidate Screening",
//     description: "Get 97% accurate language & skill assessments",
//   },
//   {
//     imgSrc: "/assets/Faster Time-to-Hire.png",
//     title: "Faster Time-to-Hire",
//     description: "Cut hiring timelines by 50% with automated shortlisting",
//   },
//   {
//     imgSrc: "/assets/Data-Backed Hiring Decisions.png",
//     title: "Data-Backed Hiring Decisions",
//     description: "Reduce mis-hiring by 42% with smart profiling",
//   },
//   {
//     imgSrc: "/assets/Cultural Fit Evaluation.png",
//     title: "Cultural Fit Evaluation",
//     description: "Improve retention by 45% with communication & soft skills analysis",
//   },
// ];

// // Parent container animation
// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.1,
//     },
//   },
// };

// // Each card animation
// const cardVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.98 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: 1,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// const FullHiringB = () => {
//   return (
//     <motion.div
//       className={styles.container}
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div className={styles.grid}>
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className={styles.feature}
//             variants={cardVariants}
//           >
//             <img src={feature.imgSrc} alt={feature.title} className={styles.icon} />
//             <h3 className={styles.title}>{feature.title}</h3>
//             <p className={styles.description}>{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default FullHiringB;


import React from "react";
import styles from "./FullHiringB.module.css";
import { motion } from "framer-motion";

const features = [
  {
    imgSrc: "/assets/AI-Driven Candidate Screening.png",
    title: "AI-Driven Candidate Screening",
    description: "Get 97% accurate language & skill assessments",
  },
  {
    imgSrc: "/assets/Faster Time-to-Hire.png",
    title: "Faster Time-to-Hire",
    description: "Cut hiring timelines by 50% with automated shortlisting",
  },
  {
    imgSrc: "/assets/Data-Backed Hiring Decisions.png",
    title: "Data-Backed Hiring Decisions",
    description: "Reduce mis-hiring by 42% with smart profiling",
  },
  {
    imgSrc: "/assets/Cultural Fit Evaluation.png",
    title: "Cultural Fit Evaluation",
    description: "Improve retention by 45% with communication & soft skills analysis",
  },
];

const FullHiringB = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.feature}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.6, // staggered delay
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={feature.imgSrc} alt={feature.title} className={styles.icon} />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FullHiringB;




// carousal code

// import React, { useState } from "react";
// import Slider from "react-slick";
// import styles from "./FullHiringB.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const features = [
//   {
//     imgSrc: "/assets/AiDriven.png",
//     title: "AI-Driven Candidate Screening",
//     description: "Get 97% accurate language & skill assessments",
//   },
//   {
//     imgSrc: "/assets/FasterTime.png",
//     title: "Faster Time-to-Hire",
//     description: "Cut hiring timelines by 50% with automated shortlisting",
//   },
//   {
//     imgSrc: "/assets/Databackend.png",
//     title: "Data-Backed Hiring Decisions",
//     description: "Reduce mis-hiring by 42% with smart profiling",
//   },
//   {
//     imgSrc: "/assets/Culturalfiteva.png",
//     title: "Cultural Fit Evaluation",
//     description: "Improve retention by 45% with communication & soft skills analysis",
//   },
// ];

// const FullHiringB = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: "0px",
//     focusOnSelect: true,
//     autoplay: true, 
//     autoplaySpeed: 3000,
//     beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
//     responsive: [
//       {
//         breakpoint: 510,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false, 
//         },
//       },
//     ],
//   };

//   return (
//     <div className={styles.container}>
//       <Slider {...settings} className={styles.slider}>
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`${styles.feature} ${
//               index === activeSlide ? styles.active : styles.inactive
//             }`}
//           >
//             <img src={feature.imgSrc} alt={feature.title} className={styles.icon} />
//             <h3 className={styles.title}>{feature.title}</h3>
//             <p className={styles.description}>{feature.description}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default FullHiringB;



// import React from "react";
// import styles from "./FullHiringB.module.css";
// import { motion } from "framer-motion";

// const features = [
//   {
//     imgSrc: "/assets/AI-Driven Candidate Screening.png",
//     title: "AI-Driven Candidate Screening",
//     description: "Get 97% accurate language & skill assessments",
//   },
//   {
//     imgSrc: "/assets/Faster Time-to-Hire.png",
//     title: "Faster Time-to-Hire",
//     description: "Cut hiring timelines by 50% with automated shortlisting",
//   },
//   {
//     imgSrc: "/assets/Data-Backed Hiring Decisions.png",
//     title: "Data-Backed Hiring Decisions",
//     description: "Reduce mis-hiring by 42% with smart profiling",
//   },
//   {
//     imgSrc: "/assets/Cultural Fit Evaluation.png",
//     title: "Cultural Fit Evaluation",
//     description: "Improve retention by 45% with communication & soft skills analysis",
//   },
// ];

// // Card variants with directional entry (no stagger)
// const cardVariants = {
//   hiddenLeft: { opacity: 0, x: -50, scale: 0.98 },
//   hiddenRight: { opacity: 0, x: 50, scale: 0.98 },
//   show: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const FullHiringB = () => {
//   return (
//     <motion.div
//       className={styles.container}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div className={styles.grid}>
//         {features.map((feature, index) => {
//           const isLeft = index < 2;
//           return (
//             <motion.div
//               key={index}
//               className={styles.feature}
//               initial={isLeft ? "hiddenLeft" : "hiddenRight"}
//               animate="show"
//               variants={cardVariants}
//             >
//               <img src={feature.imgSrc} alt={feature.title} className={styles.icon} />
//               <h3 className={styles.title}>{feature.title}</h3>
//               <p className={styles.description}>{feature.description}</p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// };

// export default FullHiringB;
