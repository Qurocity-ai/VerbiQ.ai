// import React, { useState, useEffect, useRef } from "react";
// import styles from "./CarousalOne.module.css";

// const CarousalOne = () => {
//   const [currentPosition, setCurrentPosition] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [flippedItems, setFlippedItems] = useState([]);
//   const [isVisible, setIsVisible] = useState(false);

//   const [itemWidth, setItemWidth] = useState(470); // move it to state
//   const scrollIntervalRef = useRef(null);
//   const containerRef = useRef(null);

//   // Data arrays
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
//       "Reliable identification of true proficiency and cultural fir",
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
//     // This regex matches numbers (including percentages, x multipliers, and +)
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

//   // const itemWidth = 470;
//   const scrollStep = itemWidth;
//   const [visibleItems, setVisibleItems] = useState(0);

//   const toggleFlip = (itemId) => {
//     setFlippedItems((prev) =>
//       prev.includes(itemId)
//         ? prev.filter((id) => id !== itemId)
//         : [...prev, itemId]
//     );
//   };

//   const handleMouseLeaveItem = (itemId) => {
//     // Only unflip if the item is currently flipped
//     if (flippedItems.includes(itemId)) {
//       toggleFlip(itemId);
//     }
//   };

//   const startAutoScroll = () => {
//     if (scrollIntervalRef.current) {
//       clearInterval(scrollIntervalRef.current);
//     }

//     scrollIntervalRef.current = setInterval(() => {
//       if (!isPaused && isVisible) {
//         setCurrentPosition((prev) => {
//           const maxScroll = (items.length - visibleItems) * itemWidth;
//           if (prev >= maxScroll) {
//             return 0;
//           }
//           return prev + scrollStep;
//         });
//       }
//     }, 1500);
//   };

//   useEffect(() => {
//     const calculateVisibleItems = () => {
//       // const containerWidth = window.innerWidth - 100;
//       // const visibleCount = Math.floor(containerWidth / itemWidth);
//       // setVisibleItems(visibleCount);

//       const containerWidth = window.innerWidth - 100;
//       const isMobile = window.innerWidth <= 768;
//       const updatedItemWidth = isMobile ? window.innerWidth - 20 : 470; // 20px padding on mobile
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
//   }, [visibleItems, items.length, isPaused, isVisible]);

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

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
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {items.map((item, index) => (
//           <div
//             key={item}
//             className={`${styles.item} ${
//               flippedItems.includes(item) ? styles.flipped : ""
//             }`}
          
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={() => handleMouseLeaveItem(item)}
//             onClick={() => toggleFlip(item)}
//           >
//             <div className={styles.cardFront}>
//               <h3 className={styles.heading}>{headings[index]}</h3>
//             </div>
//             <div className={styles.cardBack}>
//               <ul className={styles.contentList}>
//                 {contents[index].map((point, i) => (
//                   <li key={i} className={styles.listItem}>
//                     {highlightNumbers(point)}
//                   </li>
//                 ))}
//               </ul>
//             </div>
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
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [itemWidth, setItemWidth] = useState(470);
  const scrollIntervalRef = useRef(null);
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
  const scrollStep = itemWidth;
  const [visibleItems, setVisibleItems] = useState(0);

  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }

    scrollIntervalRef.current = setInterval(() => {
      if (!isPaused && isVisible) {
        setCurrentPosition((prev) => {
          const maxScroll = (items.length - visibleItems) * itemWidth;
          if (prev >= maxScroll) {
            return 0;
          }
          return prev + scrollStep;
        });
      }
    }, 2000);
  };

  useEffect(() => {
    const calculateVisibleItems = () => {
      const containerWidth = window.innerWidth - 100;
      const isMobile = window.innerWidth <= 768;
      const updatedItemWidth = isMobile ? window.innerWidth - 20 : 470;
      setItemWidth(updatedItemWidth);

      const visibleCount = isMobile
        ? 1
        : Math.floor(containerWidth / updatedItemWidth);
      setVisibleItems(visibleCount);
    };

    calculateVisibleItems();
    window.addEventListener("resize", calculateVisibleItems);

    return () => {
      window.removeEventListener("resize", calculateVisibleItems);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visibleItems === 0) return;
    startAutoScroll();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [visibleItems, items.length, isPaused, isVisible]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

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
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => (
          <div
            key={item}
            className={styles.item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
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
    </div>
  );
};

export default CarousalOne;