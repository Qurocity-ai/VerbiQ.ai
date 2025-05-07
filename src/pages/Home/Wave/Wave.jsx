import React, { useState, useEffect } from 'react';


const Wave = () => {
  const slides = [
    {
      id: 1,
      title: "Could you explain how your team resolved a miscommunication with a client?",
      description: "Understand how a candidate structures thoughts, uses verb tenses, connectors, and constructs grammatically sound, professional responses.",
      greetings: ["Hello", "Bonjour"]
    },
    {
      id: 2,
      title: "Tell us how you would describe our product to a non-technical customer.",
      description: "Measures range, precision, and contextual appropriateness of words used in real-life workplace situations.",
      dictionary: "DICTIONARY A-Z"
    },
    {
      id: 3,
      title: "Walk us through your day if you're managing two meetings and a client call back-to-back",
      description: "Evaluates flow, pacing, hesitation patterns, and ability to communicate smoothly under time pressure"
    },
    {
      id: 4,
      title: "Your teammate prefers email updates while you prefer quick calls. How would you handle this difference?",
      description: "Assesses sensitivity to communication styles, workplace expectations, and cross-cultural collaboration—key for global roles."
    }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const illustrations = [
    'assets/Slide1.png',
    'assets/Slide2.png',
    'assets/Slide3.png',
    'assets/Slide2.png',
  ];
  
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Title  */}
        <h1 className="text-2xl font-medium text-center text-gray-800 mx-auto max-w-6xl" >
          {slides[currentSlide].title}
        </h1>
        
        {/* Description */}
        <p className="text-gray-500 text-center mt-2 mb-10 mx-auto max-w-4xl">
          {slides[currentSlide].description}
        </p>
        
        {/* Conditional elements*/}
        {slides[currentSlide].greetings && (
          <div className="flex justify-center gap-4 mb-8">
            {slides[currentSlide].greetings.map((greeting, index) => (
              <span key={index} className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full">
                {greeting}
              </span>
            ))}
          </div>
        )}
        
        {slides[currentSlide].dictionary && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg mb-8 inline-block">
            {slides[currentSlide].dictionary}
          </div>
        )}
        
        {/* Illustration*/}
        <div className="w-full flex justify-center items-center mb-10">
          <img 
            src={illustrations[currentSlide]}
            alt={`Illustration for ${slides[currentSlide].title}`}
            className="max-w-full h-auto max-h-80 object-contain"
          />
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wave;