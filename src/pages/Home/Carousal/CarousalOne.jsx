

import React, { useRef, useState, useEffect } from "react";
import styles from "./CarousalOne.module.css";

export default function CarousalOne() {
  const totalCards = 13;

  const contentArray = [
    [
      "AI-powered, unbaised assessments with 97% accuracy",
      "42% reduction in mismatched hires",
      "Reliable identification of true proficiency and cultural fit",
    ],
    [
      "94% positive candidate feedback",
      "Seamless, human like assesments",
      "Enhanced comfort and authencity during evaluations",
    ],
    [
      "80% consistency across multiple languages and regions ",
      "65% reduction in subjective biases",
      "Reliable, repeatable assesments",
    ],
    [
      "15+ languages with native level accuracy",
      "3x increase in global hiring capabalities  ",
      "58% fewer communications gaps",
    ],
    [
      "90% accuracy in evaluating tone and communication style",
      "45% improvement in employee retention",
      "better alignment with company culture",
    ],
    [
      "60% faster model improvement cycles",
      "Continous AI learning and refinements",
      "Adaptive, future-ready language assesments",
    ],
  ];

  const headingArray = [
    "Enhancing Accuracy",
    "Drive Candidate Confidence",
    "Ensure Consistent Quality",
    "Expand Global Reach",
    "Foster Cultural Compatibility",
    "Future-Proof Your Workforce",
  ];

  const oddHeadings = [
    "Precision",
    "Authencity",
    "Consistency",
    "Expansion",
    "Connection",
    "Evolution",
  ];

  const cardRefs = useRef([]);
  const sliderRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollBy = isMobile ? 1 : 4;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - scrollBy, 0));
  };

  const handleNext = () => {
    if (isMobile) {
      let next = index + 1;
      while (next < totalCards && (next + 1) % 2 !== 0) {
        next++; 
      }
      if (next < totalCards) setIndex(next);
    } else {
      setIndex((prev) => Math.min(prev + scrollBy, totalCards - scrollBy));
    }
  };

  const getTranslateX = (index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      if (isMobile && (i + 1) % 2 !== 0) continue; 
      offset += cardRefs.current[i]?.offsetWidth || 0;
    }
    return offset;
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    const offset = getTranslateX(index);
    sliderRef.current.style.transform = `translateX(-${offset}px)`;
  }, [index, isMobile]);

  return (
    <>
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>
          Elevating Language Proficiency with{" "}
          <span className={styles.mainHeadingSpan}> Precision</span> and{" "}
          <span className={styles.mainHeadingSpan}>Insight</span>
        </h1>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <div
              className={styles.slider}
              ref={sliderRef}
            >
              {Array.from({ length: totalCards }, (_, i) => {
                const isEven = (i + 1) % 2 === 0;

                if (isEven) {
                  return (
                    <div
                      key={i}
                      className={styles.evenWrapper}
                      ref={(el) => (cardRefs.current[i] = el)}
                    >
                      <h3 className={styles.cardHeading}>
                        {headingArray[Math.floor(i / 2)]}
                      </h3>
                      <div className={`${styles.card} ${styles.evenCard}`}>
                        <div className={styles.cardContent}>
                          <ul className={styles.cardList}>
                            {contentArray[Math.floor(i / 2)].map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  const oddIndex = Math.floor(i / 2);
                  return (
                    <div
                      key={i}
                      className={styles.evenWrapper}
                      ref={(el) => (cardRefs.current[i] = el)}
                    >
                      <h3 className={styles.cardHeadingOdd}>
                        {oddHeadings[oddIndex]}
                      </h3>
                      <div className={`${styles.card} ${styles.oddCard}`} />
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button className={styles.navButton} onClick={handlePrev}>
              ←
            </button>
            <button className={styles.navButton} onClick={handleNext}>
              →
            </button>
          </div>
        </div>

    </div>
      
    </>
  );
}
