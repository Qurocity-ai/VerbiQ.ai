import React, { useState } from "react";
import useSharedTimer from "../UseTimer/UseTimer.jsx";
import GrammarSection from "../GrammarAndEfficacy/GrammarAndEfficacy.jsx";
import Comprehension from "../Comprehension/Comprehension.jsx";


const ClozeQuestion = ({onSubmit}) => {
  const timeLeft = useSharedTimer(300); 
  const [answer, setAnswer] = useState("");
  const [showComprehension, setShowComprehension] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);

  const handleSubmit = () => {
    setShowComprehension(true);
  };
  
  const handleBackClick = () => {
    setShowGrammar(true);
  };

  const formattedTime = `${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
    .toString()
    .padStart(2, "0")}`;

  if (showComprehension) {
    return <Comprehension />;
  }
  
  if (showGrammar) {
    return <GrammarSection />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* French flag at top */}
      <div className="flex justify-end">
        <div className="flex">
          <div className="w-8 h-6 bg-blue-900"></div>
          <div className="w-8 h-6 bg-white"></div>
          <div className="w-8 h-6 bg-red-600"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-12 ">
        <div className="flex justify-between items-center py-6 ">
          <h1 className="text-2xl font-medium text-teal-800">Cloze Questions</h1>
          <div className="text-gray-800">{formattedTime} mins</div>
        </div>

        <div className="mt-16 mb-12">
          <div className="flex items-center justify-center gap-4">
            <p className="text-lg text-teal-800">Il est essentiel que nous</p>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="border-b border-gray-300 w-64 text-center outline-none"
              placeholder="Type your answer here"
            />
            <p className="text-lg text-teal-800">des mesures pour protéger notre planète.</p>
          </div>
        </div>

        <div className="flex justify-between mt-32">
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
           onClick={() => {
    handleSubmit();
    onSubmit();
  }}
            className="bg-red-600 text-white px-12 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default ClozeQuestion;
