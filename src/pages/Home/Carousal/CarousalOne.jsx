

// import React, { useState, useEffect, useRef } from "react";
// import styles from "./CarousalOne.module.css";

// const CarousalOne = () => {
//   const [currentPosition, setCurrentPosition] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [itemWidth, setItemWidth] = useState(470);

//   const [activeIndex, setActiveIndex] = useState(0);

//   const scrollIntervalRef = useRef(null);
//   const containerRef = useRef(null);

 
//   const headings = [
//     "Enhance Hiring Accuracy",
//     "Drive Candidate Confidence",
//     "Ensure Consistent Quality",
//     "Expand Global Reach",
//     "Foster Cultural Compatibility",
//     "Future-Proof Your Workforce",
//   ];

//   const contents = [
//     [
//       "AI-powered, unbiased assessments with 97% accuracy",
//       "42% reduction in mismatch hires",
//       "Reliable identification of true proficiency and cultural fit",
//     ],
//     [
//       "94% positive candidate feedback",
//       "seamless, human like assessments",
//       "Enhanced comfort and authenticity during evaluations",
//     ],
//     [
//       "80% consistency across multiple languages and regions",
//       "65% reduction in subjective biases",
//       "Reliable, repeatable assessments",
//     ],
//     [
//       "15+ languages with native-level accuracy",
//       "3x increase in global hiring capabalities",
//       "58% fewer communication gaps",
//     ],
//     [
//       "90% accuracy in evaluating tone and communication style",
//       "45% improvement in employee retention ",
//       "Better alignment with company culture",
//     ],
//     [
//       "60% faster model improvement cycles",
//       "Continuous AI learning and refinements",
//       "Adaptive, future-ready language assessments",
//     ],
//   ];

//   const highlightNumbers = (text) => {
//     return text.split(/(\d+%|\d+x|\d+\+|\d+)/g).map((part, i) => {
//       if (/(\d+%|\d+x|\d+\+|\d+)/g.test(part)) {
//         return (
//           <span key={i} className={styles.highlightNumber}>
//             {part}
//           </span>
//         );
//       }
//       return part;
//     });
//   };

//   const items = [1, 2, 3, 4, 5, 6];
 
//   const [visibleItems, setVisibleItems] = useState(0);

//   const highlightDuration = 2000;



//   const startAutoScroll = () => {
//     if (scrollIntervalRef.current) {
//       clearInterval(scrollIntervalRef.current);
//     }

//     scrollIntervalRef.current = setInterval(() => {
//       if (isVisible) {
//         setActiveIndex(prev => {
//           const newIndex = (prev + 1) % items.length;
          
         
//           const newPosition = Math.min(
//             newIndex * itemWidth,
//             (items.length - visibleItems) * itemWidth
//           );
          
//           setCurrentPosition(newPosition);
          
//           return newIndex;
//         });
//       }
//     }, highlightDuration);
//   };

 

//   useEffect(() => {
//     const calculateVisibleItems = () => {
//       const containerWidth = window.innerWidth - 100;
//       const isMobile = window.innerWidth <= 768;
//       const updatedItemWidth = isMobile ? window.innerWidth - 20 : 470;
//       setItemWidth(updatedItemWidth);

//       const visibleCount = isMobile
//         ? 1
//         : Math.floor(containerWidth / updatedItemWidth);
//       setVisibleItems(visibleCount);
//     };

//     calculateVisibleItems();
//     window.addEventListener("resize", calculateVisibleItems);

//     return () => {
//       window.removeEventListener("resize", calculateVisibleItems);
//       if (scrollIntervalRef.current) {
//         clearInterval(scrollIntervalRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(entry.isIntersecting);
//         });
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (visibleItems === 0) return;
//     startAutoScroll();

//     return () => {
//       if (scrollIntervalRef.current) {
//         clearInterval(scrollIntervalRef.current);
//       }
//     };
//   }, [visibleItems, items.length, isVisible]);

//   return (
//     <div className={styles.container} ref={containerRef}>
//       <h1 className={styles.mainheading}>
//         Elevating Language Proficiency with{" "}
//         <span className={styles.spanheading}>Precision</span> and{" "}
//         <span className={styles.spanheading}>Insight</span>
//       </h1>
//       <div
//         className={styles.scrollContainer}
//         style={{
//           transform: `translateX(-${currentPosition}px)`,
//           width: `${items.length * itemWidth}px`,
//         }}
//       >
//         {items.map((item, index) => (
//           <div key={item} 
//           className={`${styles.item} ${activeIndex === index ? styles.highlighted : ''}`}>
//             <h3 className={styles.heading}>{headings[index]}</h3>
//             <ul className={styles.contentList}>
//               {contents[index].map((point, i) => (
//                 <li key={i} className={styles.listItem}>
//                   {highlightNumbers(point)}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarousalOne;










import React, { useState, useEffect, useRef } from "react";
import styles from "./CarousalOne.module.css";

const CarousalOne = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(470);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const scrollIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const containerRef = useRef(null);

  // Data arrays
  const headings = [
    "Enhance Hiring Accuracy",
    "Drive Candidate Confidence",
    "Ensure Consistent Quality",
    "Expand Global Reach",
    "Foster Cultural Compatibility",
    "Future-Proof Your Workforce",
  ];

  const contents = [
    [
      "AI-powered, unbiased assessments with 97% accuracy",
      "42% reduction in mismatch hires",
      "Reliable identification of true proficiency and cultural fit",
    ],
    [
      "94% positive candidate feedback",
      "seamless, human like assessments",
      "Enhanced comfort and authenticity during evaluations",
    ],
    [
      "80% consistency across multiple languages and regions",
      "65% reduction in subjective biases",
      "Reliable, repeatable assessments",
    ],
    [
      "15+ languages with native-level accuracy",
      "3x increase in global hiring capabalities",
      "58% fewer communication gaps",
    ],
    [
      "90% accuracy in evaluating tone and communication style",
      "45% improvement in employee retention ",
      "Better alignment with company culture",
    ],
    [
      "60% faster model improvement cycles",
      "Continuous AI learning and refinements",
      "Adaptive, future-ready language assessments",
    ],
  ];

  const highlightNumbers = (text) => {
    return text.split(/(\d+%|\d+x|\d+\+|\d+)/g).map((part, i) => {
      if (/(\d+%|\d+x|\d+\+|\d+)/g.test(part)) {
        return (
          <span key={i} className={styles.highlightNumber}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const items = [1, 2, 3, 4, 5, 6];

  const moveToNextSlide = () => {
    if (isTransitioning) return;
    
    setActiveIndex(prev => {
      const newIndex = (prev + 1) % items.length;
      const newPosition = newIndex * itemWidth;
      setCurrentPosition(newPosition);
      return newIndex;
    });
  };

  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    scrollIntervalRef.current = setInterval(moveToNextSlide, 4000);
  };

  const pauseAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const resumeAutoScroll = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 1500);
  };

  const handlePrevClick = () => {
    if (isTransitioning || buttonsDisabled) return;
    setButtonsDisabled(true);
    setIsTransitioning(true);
    
    setActiveIndex(prev => {
      const newIndex = prev === 0 ? items.length - 1 : prev - 1;
      const newPosition = newIndex * itemWidth;
      setCurrentPosition(newPosition);
      return newIndex;
    });

    pauseAutoScroll();
    setTimeout(() => {
      setIsTransitioning(false);
      setButtonsDisabled(false);
      resumeAutoScroll();
    }, 500);
  };

  const handleNextClick = () => {
    if (isTransitioning || buttonsDisabled) return;
    setButtonsDisabled(true);
    setIsTransitioning(true);
    
    setActiveIndex(prev => {
      const newIndex = (prev + 1) % items.length;
      const newPosition = newIndex * itemWidth;
      setCurrentPosition(newPosition);
      return newIndex;
    });

    pauseAutoScroll();
    setTimeout(() => {
      setIsTransitioning(false);
      setButtonsDisabled(false);
      resumeAutoScroll();
    }, 500);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      const updatedItemWidth = mobile ? window.innerWidth - 30 : 470;
      setItemWidth(updatedItemWidth);
      
      // Reset position when switching to mobile
      if (mobile) {
        const newPosition = activeIndex * updatedItemWidth;
        setCurrentPosition(newPosition);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      pauseAutoScroll();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [activeIndex]);

  useEffect(() => {
    // Start auto-scroll when component mounts
    startAutoScroll();
    
    // Cleanup on unmount
    return () => {
      pauseAutoScroll();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Add effect to restart auto-scroll when activeIndex changes
  useEffect(() => {
    if (!isTransitioning && !buttonsDisabled) {
      startAutoScroll();
    }
    return () => pauseAutoScroll();
  }, [activeIndex, isTransitioning, buttonsDisabled]);

  return (
    <div className={styles.container} ref={containerRef}>
      <h1 className={styles.mainheading}>
        Elevating Language Proficiency with{" "}
        <span className={styles.spanheading}>Precision</span> and{" "}
        <span className={styles.spanheading}>Insight</span>
      </h1>
      <div
        className={styles.scrollContainer}
        style={{
          transform: `translateX(-${currentPosition}px)`,
          width: `${items.length * itemWidth}px`,
          transition: 'transform 0.5s ease-in-out'
        }}
      >
        {items.map((item, index) => (
          <div key={item} 
          className={`${styles.item} ${activeIndex === index ? styles.highlighted : ''}`}>
            <h3 className={styles.heading}>{headings[index]}</h3>
            <ul className={styles.contentList}>
              {contents[index].map((point, i) => (
                <li key={i} className={styles.listItem}>
                  {highlightNumbers(point)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.navigationContainer}>
        <button 
          className={styles.navButton} 
          onClick={handlePrevClick}
          aria-label="Previous slide"
          disabled={buttonsDisabled}
        >
          <img src="/assets/thin_big_left.png"/>
        </button>
        <button 
          className={styles.navButton} 
          onClick={handleNextClick}
          aria-label="Next slide"
          disabled={buttonsDisabled}
        >
          <img src="/assets/thin_big_right.png"/>
        </button>
      </div>
    </div>
  );
};

export default CarousalOne;







