
import React, { useEffect, useState } from "react";
import styles from "./FeedbackCarousel.module.css";

const FeedbackCarousel = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("https://verbiq-backend1.onrender.com/reviews/getfeedback");
      const result = await response.json();
      if (Array.isArray(result)) {
        setFeedbacks(result);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleNext = () => {
    if (feedbacks.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    if (feedbacks.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  if (loading) return <p className={styles.loading}>Loading feedback...</p>;
  if (!feedbacks.length) return <p className={styles.loading}>No feedback available.</p>;

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
            className={`${styles.card} ${index === 1 ? styles.active : ""}`} 
          >
            <div className={styles.stars}>
              {Array(5).fill().map((_, i) => (
                <span key={i} style={{color:"green"}}>★</span>
              ))}
            </div>
            <p className={styles.message}>“{feedback.feedback}”</p>
            <p className={styles.name}>— {feedback.name}</p>
            <p className={styles.date}>{new Date(feedback.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.arrow}>
          &larr;
        </button>
        <button onClick={handleNext} className={styles.arrow}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default FeedbackCarousel;


