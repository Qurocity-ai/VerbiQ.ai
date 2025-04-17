// import React from "react";
// import styles from "./LangaugeAssesmentB.module.css";


// const LangaugeAssesmentB = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Unmatched Accuracy</h2>
//       <div className={styles.assessmentContainer}>
//         <div className={styles.assessmentBox}>
//           <img src={"/assets/Precisionmaking.png"} alt="Precision Icon" className={styles.icon} />
//           <h3 className={styles.subtitle}><strong className={styles.percent}>97%</strong> Precision in Assessments:</h3>
//           <p className={styles.description}>
//             Our AI-driven evaluations achieve near-perfect accuracy by analyzing speech, grammar, and cultural context.
//             </p>
//             <p className={styles.description}>
//             With precise scoring, you can trust that every candidate's true language proficiency is revealed.
//           </p>
//         </div>
//         <div className={styles.assessmentBox}>
//           <img src={"/assets/DataDrivenLangaugeAsses.png"} alt="Decision Making Icon" className={styles.icon} />
//           <h3 className={styles.subtitle}>Data-Driven Decision Making:</h3>
//           <p className={styles.description}>
//             Leveraging millions of data points from diverse linguistic sources, VerbiQ’s assessments minimize errors
//             and eliminate biases. 
//             </p>
//             <p className={styles.description}>
//             This means you see an objective, consistent evaluation across all candidates.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LangaugeAssesmentB;



// import React, { useState, useEffect } from "react";
// import styles from "./LangaugeAssesmentB.module.css";

// const LangaugeAssesmentB = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = 97;
//     const duration = 1500; // total animation duration in ms
//     const intervalTime = 20; // update every 20ms
//     const increment = end / (duration / intervalTime);

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         clearInterval(counter);
//         start = end;
//       }
//       setCount(Math.floor(start));
//     }, intervalTime);

//     return () => clearInterval(counter);
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Unmatched Accuracy</h2>
//       <div className={styles.assessmentContainer}>
//         <div className={styles.assessmentBox}>
//           <img
//             src={"/assets/Precisionmaking.png"}
//             alt="Precision Icon"
//             className={styles.icon}
//           />
//           <h3 className={styles.subtitle}>
//             <strong className={styles.percent}>{count}%</strong> Precision in Assessments:
//           </h3>
//           <p className={styles.description}>
//             Our AI-driven evaluations achieve near-perfect accuracy by analyzing speech,
//             grammar, and cultural context.
//           </p>
//           <p className={styles.description}>
//             With precise scoring, you can trust that every candidate's true language
//             proficiency is revealed.
//           </p>
//         </div>
//         <div className={styles.assessmentBox}>
//           <img
//             src={"/assets/DataDrivenLangaugeAsses.png"}
//             alt="Decision Making Icon"
//             className={styles.icon}
//           />
//           <h3 className={styles.subtitle}>Data-Driven Decision Making:</h3>
//           <p className={styles.description}>
//             Leveraging millions of data points from diverse linguistic sources, VerbiQ’s
//             assessments minimize errors and eliminate biases.
//           </p>
//           <p className={styles.description}>
//             This means you see an objective, consistent evaluation across all candidates.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LangaugeAssesmentB;


import React, { useState, useEffect } from "react";
import styles from "./LangaugeAssesmentB.module.css";
import { motion } from "framer-motion";

const LangaugeAssesmentB = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 97;
    const duration = 3500; // total animation duration in ms
    const intervalTime = 20; // update every 20ms
    const increment = end / (duration / intervalTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className={styles.container}>
      {/* <h2 className={styles.title}>Unmatched Accuracy</h2> */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Unmatched Accuracy
      </motion.h2>
      <motion.div
        className={styles.assessmentContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.assessmentBox}>
          <img
            src={"/assets/Precisionmaking.png"}
            alt="Precision Icon"
            className={styles.icon}
          />
          <h3 className={styles.subtitle}>
            <strong className={styles.percent}>{count}%</strong> Precision in Assessments:
          </h3>
          <p className={styles.description}>
            Our AI-driven evaluations achieve near-perfect accuracy by analyzing speech,
            grammar, and cultural context.
          </p>
          <p className={styles.description}>
            With precise scoring, you can trust that every candidate's true language
            proficiency is revealed.
          </p>
        </div>
        <div className={styles.assessmentBox}>
          <img
            src={"/assets/DataDrivenLangaugeAsses.png"}
            alt="Decision Making Icon"
            className={styles.icon}
          />
          <h3 className={styles.subtitle}>Data-Driven Decision Making:</h3>
          <p className={styles.description}>
            Leveraging millions of data points from diverse linguistic sources, VerbiQ’s
            assessments minimize errors and eliminate biases.
          </p>
          <p className={styles.description}>
            This means you see an objective, consistent evaluation across all candidates.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LangaugeAssesmentB;

