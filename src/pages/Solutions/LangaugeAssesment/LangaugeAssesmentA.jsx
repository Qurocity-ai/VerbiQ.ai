// import React from "react";
// import styles from "./LangaugeAssesmentA.module.css";

// const LanguageAssessmentA = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>
//         Precision That Drives Perfect Hiring Decisions
//       </h2>
//       <p className={styles.highlight}>
//         We don't settle for average, Neither should you.
//       </p>
//       <p className={styles.description}>
//         Our platform is engineered to deliver language assessments that are not only highly
//         accurate but also deeply insightful.
//       </p>
//     </div>
//   );
// };

// export default LanguageAssessmentA;



import React from "react";
import styles from "./LangaugeAssesmentA.module.css";
import { motion } from "framer-motion";

const title = "Precision That Drives Perfect Hiring Decisions";

const LanguageAssessmentA = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title.split(" ").map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.4,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            style={{ display: "inline-block", marginRight: "0.4rem" }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.p
        className={styles.highlight}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        We don't settle for average, Neither should you.
      </motion.p>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our platform is engineered to deliver language assessments that are not only highly
        accurate but also deeply insightful.
      </motion.p>
    </div>
  );
};

export default LanguageAssessmentA;




// import React from "react";
// import styles from "./LangaugeAssesmentA.module.css";
// import { motion } from "framer-motion";

// const title = "Precision That Drives Perfect Hiring Decisions";

// const LanguageAssessmentA = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>
//         {title.split(" ").map((word, idx) => (
//           <motion.span
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: idx * 0.1,
//               duration: 0.4,
//               ease: "easeOut"
//             }}
//             viewport={{ once: true }}
//             style={{ display: "inline-block", marginRight: "0.4rem" }}
//           >
//             {word}
//           </motion.span>
//         ))}
//       </h2>

//       <motion.p
//   className={styles.highlight}
//   initial={{ opacity: 0, x: -50 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
//   viewport={{ once: true }}
// >
//   We don't settle for average, Neither should you.
// </motion.p>

// <motion.p
//   className={styles.description}
//   initial={{ opacity: 0, x: 50 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
//   viewport={{ once: true }}
// >
//   Our platform is engineered to deliver language assessments that are not only highly
//   accurate but also deeply insightful.
// </motion.p>

//     </div>
//   );
// };

// export default LanguageAssessmentA;
