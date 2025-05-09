import React from "react";
import { useState, useEffect } from "react";
import Instructions from "../Instructions/Instructions ";
 import ClozeQuestion from "../ClozeQuestion/ClozeQuestion";

const GrammarAndEfficacy = () => {
  const [navigateToInstructions, setNavigateToInstructions] = useState(false);
  const [showClozeQuestion, setShowClozeQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300); 
   

  // Timer functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Navigation handling
  useEffect(() => {
    const handlePopState = () => {
      setNavigateToInstructions(true);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleSubmit = () => {
    setShowClozeQuestion(true);
  };

  // Format time display
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  if (navigateToInstructions) {
    return <Instructions />;
  }

  if (showClozeQuestion) {
    return <ClozeQuestion />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12">


      <div className="flex justify-between items-center border-b border-gray-300 py-6">
        <h1 className="text-2xl font-medium text-teal-800">Grammar and Efficacy</h1>
        <div className="text-gray-800">{formattedTime} mins</div>
      </div>
      
      <div className="mt-16 mb-12">
        <h2 className="text-xl text-teal-800 text-center mb-12">Vous lisez un article sur la protection de l'environnement. Quel est le point principal de l'article?</h2>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {['A', 'B', 'C', 'D'].map((option) => (
            <button
              key={option}
              className={`border ${
                selectedOption === option 
                  ? 'bg-teal-800 border-teal-800 text-white' 
                  : 'border-gray-300 text-teal-800'
              } rounded p-4 w-full text-left`}
              onClick={() => setSelectedOption(option)}
            >
              {option === 'A' && "A) Les avantages de l'énergie renouvelable par rapport aux énergies fossiles."}
              {option === 'B' && "B) Les conséquences de la déforestation sur les écosystèmes locaux."}
              {option === 'C' && "C) Les stratégies pour réduire les déchets plastiques dans les océans."}
              {option === 'D' && "D) Les initiatives gouvernementales pour promouvoir le recyclage."}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-16">
        <div className="flex space-x-4">
          <button 
            onClick={handleBackClick} 
            className="border border-gray-300 text-gray-500 px-4 py-2 rounded"
          >
            Back
          </button>
          <button className="border border-red-500 text-red-500 flex items-center px-4 py-2 rounded">
            <span className="mr-2">🔖</span> Bookmark
          </button>
        </div>
        
        <button 
          onClick={handleSubmit}
          className="bg-red-600 text-white px-12 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
    
  );
};

export default GrammarAndEfficacy;
