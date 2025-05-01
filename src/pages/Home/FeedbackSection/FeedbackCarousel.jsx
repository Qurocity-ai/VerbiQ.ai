


import React, { useState, useEffect } from "react";
import styles from "./FeedbackCarousel.module.css";

const FeedbackCarousel = () => {
  const feedbacks = [
    {
      name: "Puja Kumari - AMH GBS",
      feedback:
        "Thank you so much for your help in supporting me during the whole interview process. You are very kind and supportive recruiter.",
    },
    {
      name: "Tarun, French Expert",
      feedback:
        "My experience with Recurtory has been genuinely positive from start to finish. The entire process, from the initial interview rounds to onboarding, was handled with great professionalism and clarity. I especially appreciated the timely communication, clear briefings for the interview rounds, and smooth coordination throughout the process. A special thanks to Ms. Amisha for being incredibly helpful and responsive whenever needed. Her support made the entire journey much easier and more comfortable. Overall, I felt well-guided and valued at every step. Thank you so much once again, Ms. Amisha, for this wonderful journey!",
    },
    {
      name: "Rushikesh",
      feedback:
        "Hi Suhani & Amisha, I just wanted to take a moment to thank you both for your incredible support throughout the hiring process. Everything went so smoothly, and I’m excited about my new role at Teleperformance. I’m looking forward to staying in touch.",
    },
    {
      name: "Suryanarayana Vadde, Customer Support Executive",
      feedback:
        "I just wanted to take a moment to thank you and the Recrutory team for the smooth and well-coordinated experience throughout the entire process. From the initial interview rounds to the onboarding and regular updates, everything was handled professionally and with genuine care. A special thanks to you for being approachable, responsive, and helpful whenever I had queries. Your support made the entire process a lot more comfortable and stress-free. Wishing you and your team continued success!",
    },
    {
      name: "Tarun Kumar, Customer Support Executive",
      feedback:
        "My experience with VerbiQ has really been genuinely positive from start to finish. I mean, the entire process from initial interview rounds to onboarding was handled with great professionalism and clarity. I especially loved the timely communication, clear briefings for clearing the interview rounds, and smooth coordination throughout the process. A special thanks to Ms. Amisha ma'am for being incredibly helpful and responsive whenever needed. Her support made the entire journey much easier and more comfortable. Overall, I felt well-guided and valued during every step. Thank you so much for this journey.",
    },
    {
      name: "Zubair Ahmad",
      feedback:
        "I appreciate your work and your assistance, help and guidance. I am very happy 😊. I appreciate your professionalism. I am thankful to Suhani as well. I am thankful to her for her supportive words. During the interview process both supported me well. Thanks and regards.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState("");

  const handleNext = () => {
    setFlipDirection("right");
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setFlipDirection("left");
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (flipDirection) {
      const timeout = setTimeout(() => setFlipDirection(""), 600);
      return () => clearTimeout(timeout);
    }
  }, [flipDirection]);

  const visibleFeedbacks = [];
  for (let i = 0; i < 3; i++) {
    visibleFeedbacks.push(feedbacks[(currentIndex + i) % feedbacks.length]);
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {visibleFeedbacks.map((feedback, index) => (
          <div
            key={index}
            className={`${styles.card} 
              ${index === 1 ? styles.active : ""} 
              ${flipDirection === "right" ? styles.flipRight : ""} 
              ${flipDirection === "left" ? styles.flipLeft : ""}`}
          >
            <div className={styles.message}>
              <span role="img" aria-label="feedback-icon">💬</span> “{feedback.feedback}”
            </div>
            <div className={styles.stars}>
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} style={{ color: "green" }}>★</span>
                ))}
            </div>
            <p className={styles.name}>— {feedback.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.arrow}>&larr;</button>
        <button onClick={handleNext} className={styles.arrow}>&rarr;</button>
      </div>
    </div>
  );
};

export default FeedbackCarousel;

