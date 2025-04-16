// import React, { useEffect, useRef, useState } from 'react';
// import styles from './Graph.module.css';

// const Graph = () => {
//   const graphRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
//           setInView(true); // Add animation when in view
//         } else {
//           setInView(false); // Remove animation when out of view
//         }
//       },
//       {
//         threshold: [0, 0.7],
//       }
//     );

//     if (graphRef.current) {
//       observer.observe(graphRef.current);
//     }

//     return () => {
//       if (graphRef.current) {
//         observer.unobserve(graphRef.current);
//       }
//     };
//   }, []);
//   const [autoIndex, setAutoIndex] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setAutoIndex((prev) => (prev + 1) % 4); // 4 subheadings
//   }, 1500); // every 2 seconds

//   return () => clearInterval(interval);
// }, []);

  

//   return (
//     <div className={styles.wrapper}>
//       {/* Left Section: Graph */}
//       <div className={styles.sectionBox} ref={graphRef}>
//         <div className={styles.barGraph}>
//           <div className={styles.barWrapper}>
//             <span className={`${styles.label} ${styles.bar1Text}`}>Grammar</span>
//             <div
//               className={`${styles.bar} ${styles.bar1} ${inView ? styles.expand : ''}`}
//             ></div>
//           </div>
//           <div className={styles.barWrapper}>
//             <span className={`${styles.label} ${styles.bar2Text}`}>Vocabulary</span>
//             <div
//               className={`${styles.bar} ${styles.bar2} ${inView ? styles.expand : ''}`}
//             ></div>
//           </div>
//           <div className={styles.barWrapper}>
//             <span className={`${styles.label} ${styles.bar3Text}`}>Fluency</span>
//             <div
//               className={`${styles.bar} ${styles.bar3} ${inView ? styles.expand : ''}`}
//             ></div>
//           </div>
//           <div className={styles.barWrapper}>
//             <span className={`${styles.label} ${styles.bar4Text}`}>Cultural</span>
//             <div
//               className={`${styles.bar} ${styles.bar4} ${inView ? styles.expand : ''}`}
//             ></div>
//           </div>
//         </div>
//         <h3 className={styles.heading}>Best in class assessment structure</h3>
//         <p className={styles.subText}>
//           We don’t just assess language skills<br />
//           We value cultural authenticity
//         </p>
//       </div>

//       {/* Right Section: Text Info */}
//       <div className={styles.sectionBox}>
//       {[
//   "Scenario Based Assessment",
//   "Domain Based Assessment",
//   "Assessment by Native Speaker",
//   "Business and culture ethics",
// ].map((text, index) => (
//   <h4
//     key={index}
//     className={`${styles.subHeading} ${autoIndex === index ? styles.active : ''}`}
//   >
//     {text}
//   </h4>
// ))}

//         <div className={styles.hrLine}></div>
//         <h3 className={styles.subHeading1}>Assessments personalized for you</h3>
//         <p className={`${styles.subText} ${styles.subText2}`}>
//           Tailored evaluations that align with your unique hiring needs and cultural expectations.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Graph;import React from 'react';
import styles from './graph.module.css';

const Graph1 = () => {
  return (
    <div className={styles.container}>
      {/* LEFT PANE */}
      <div className={styles.leftPane}>
        <div className={styles.matrixWrapper}>
          {/* Labels */}
          <span className={`${styles.label} ${styles.grammar}`}>Grammar</span>
          <span className={`${styles.label} ${styles.fluency}`}>Fluency</span>
          <span className={`${styles.label} ${styles.cultural}`}>Cultural</span>
          <span className={`${styles.label} ${styles.vocabulary}`}>Vocabulary </span>

          {/* Matrix */}
          <div className={styles.matrixBox}>
            <div className={styles.horizontalDivider}></div>
            <div className={styles.verticalDivider}></div>

            {/* Top-left */}
            <div className={`${styles.column} ${styles.topLeft}`}>
              <p>Sentence Structure</p>
              <p>Tense & Agreement</p>
              <p>Error Identification & Correction</p>
            </div>

            {/* Top-right */}
            <div className={`${styles.column} ${styles.topRight}`}>
              <p>Speech Flow & Coherence</p>
              <p>Pace & Clarity</p>
              <p>Spontaneous Expression</p>
            </div>

            {/* Bottom-right */}
            <div className={`${styles.column} ${styles.bottomRight}`}>
            <p>Contextual Sensitivity</p>
              <p>Interpersonal Adaptability</p>
              <p>Cultural References</p>
            </div>

            {/* Bottom-left */}
            <div className={`${styles.column} ${styles.bottomLeft}`}>
              <p>Range & Precision</p>
              <p>Word Appropriateness</p>
              <p>Collocations & Idioms</p>
            </div>
          </div>
        </div>

        <div className={styles.leftFooter}>
          <h3>Best in class assessment structure</h3>
          <p>
            We don’t just assess language skills <br />
            We value cultural authenticity
          </p>
        </div>
      </div>

      {/* RIGHT PANE */}
      <div className={styles.rightPane}>
        <div className={styles.iconRow}>
          <div className={styles.iconBox}>
            <img src="/assets/Graph1.png" alt="Icon 1" />
            <p>Assessment by a <br /> Native Speaker</p>
          </div>
          <div className={styles.iconBox}>
            <img src="/assets/Graph2.png" alt="Icon 2" />
            <p>Business and <br /> Culture ethics</p>
          </div>
          <div className={styles.iconBox}>
            <img src="/assets/Graph3.png" alt="Icon 3" />
            <p>Scenario Based <br /> Assessment</p>
          </div>
          <div className={styles.iconBox}>
            <img src="/assets/Graph4.png" alt="Icon 4" />
            <p>Domain based <br /> Assessment</p>
          </div>
        </div>
     <hr className={styles.hrline} />
        <div className={styles.rightFooter}>
          <h3>Assessments personalized for you</h3>
          <p>
            Tailored evaluations that align with your
            unique hiring needs and cultural expectations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Graph1;
