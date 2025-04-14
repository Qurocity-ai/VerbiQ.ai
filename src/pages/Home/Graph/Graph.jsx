import React, { useEffect, useRef, useState } from 'react';
import styles from './Graph.module.css';

const Graph = () => {
  const graphRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          setInView(true); // Add animation when in view
        } else {
          setInView(false); // Remove animation when out of view
        }
      },
      {
        threshold: [0, 0.7],
      }
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => {
      if (graphRef.current) {
        observer.unobserve(graphRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Left Section: Graph */}
      <div className={styles.sectionBox} ref={graphRef}>
        <div className={styles.barGraph}>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar1Text}`}>Grammar</span>
            <div
              className={`${styles.bar} ${styles.bar1} ${inView ? styles.expand : ''}`}
            ></div>
          </div>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar2Text}`}>Vocabulary</span>
            <div
              className={`${styles.bar} ${styles.bar2} ${inView ? styles.expand : ''}`}
            ></div>
          </div>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar3Text}`}>Fluency</span>
            <div
              className={`${styles.bar} ${styles.bar3} ${inView ? styles.expand : ''}`}
            ></div>
          </div>
          <div className={styles.barWrapper}>
            <span className={`${styles.label} ${styles.bar4Text}`}>Cultural</span>
            <div
              className={`${styles.bar} ${styles.bar4} ${inView ? styles.expand : ''}`}
            ></div>
          </div>
        </div>
        <h3 className={styles.heading}>Best in class assessment structure</h3>
        <p className={styles.subText}>
          We don’t just assess language skills<br />
          We value cultural authenticity
        </p>
      </div>

      {/* Right Section: Text Info */}
      <div className={styles.sectionBox}>
        <h4 className={styles.subHeading}>Scenario Based Assessment</h4>
        <h4 className={styles.subHeading}>Domain Based Assessment</h4>
        <h4 className={styles.subHeading}>Assessment by Native Speaker</h4>
        <h4 className={styles.subHeading}>Business and culture ethics</h4>
        <div className={styles.hrLine}></div>
        <h3 className={styles.subHeading1}>Assessments personalized for you</h3>
        <p className={`${styles.subText} ${styles.subText2}`}>
          Tailored evaluations that align with your unique hiring needs and cultural expectations.
        </p>
      </div>
    </div>
  );
};

export default Graph;
