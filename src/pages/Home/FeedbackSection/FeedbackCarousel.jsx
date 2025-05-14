


import React, { useState, useEffect } from "react";


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
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleNext = () => {
   
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
  }, []);


   const visibleFeedbacksDesktop = [];
  for (let i = 0; i < 3; i++) {
    visibleFeedbacksDesktop.push(feedbacks[(currentIndex + i) % feedbacks.length]);
  }

  return (
 <div className="w-full flex flex-col items-center py-8 px-4 relative bg-gray-50">
      {/* Mobile View: Single Card */}
      <div className="block sm:hidden relative w-full max-w-md">
        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start cursor-pointer h-60"
          onClick={() => setSelectedFeedback(feedbacks[currentIndex])}
        >
          <blockquote className="text-[#8F8F8F] text-base italic mb-4 overflow-hidden line-clamp-5">
            “{feedbacks[currentIndex].feedback}”
          </blockquote>
         

          {/* 5-Star Ratings for Mobile View */}
          <div className="flex text-green-500 text-lg">
            {Array(5)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
           <p className="font-medium text-black-800 mb-2">
            — {feedbacks[currentIndex].name}
          </p>
        </div>
      </div>

      {/* Desktop View: Three Cards */}
      <div className="hidden sm:grid grid-cols-3 gap-4 justify-items-center pt-10 ">
        {visibleFeedbacksDesktop.map((feedback, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-lg  p-6  w-full sm:w-72 h-70 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedFeedback(feedback)}
          >
            <p className="text-[#8F8F8F] text-sm overflow-hidden line-clamp-5">
             “{feedback.feedback}”
            </p>
            <div className="flex text-green-500 mt-2 text-m">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <p className="mt-1 text-m font-medium text-black-600">
              — {feedback.name}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}

      <div className="flex mt-6 gap-4">
        <button
        onClick={handlePrev}
        className="text-2xl px-3 py-1 border rounded-full transition duration-200 ease-in-out transform hover:bg-gray-200 hover:scale-110 active:bg-gray-300 active:scale-95"
        >
        &larr;
        </button>
        <button
        onClick={handleNext}
        className="text-2xl px-3 py-1 border rounded-full transition duration-200 ease-in-out transform hover:bg-gray-200 hover:scale-110 active:bg-gray-300 active:scale-95"
        >
       &rarr;
       </button>
      </div>
      {/* Pop-Up Modal */}
      {selectedFeedback && (
        <div className="absolute inset-0 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow p-6 w-[90vw] max-w-lg  h-[60vh] overflow-y-auto relative">
            <button
              className="absolute top-3 right-4 text-gray-500 text-xl"
              onClick={() => setSelectedFeedback(null)}
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-2 text-black-700">
              {selectedFeedback.name}
            </h3>
            <div className="flex text-green-500 mb-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <hr className="mb-2" />
            <p className="text-[#8F8F8F] text-sm whitespace-pre-line">
              "{selectedFeedback.feedback}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackCarousel;