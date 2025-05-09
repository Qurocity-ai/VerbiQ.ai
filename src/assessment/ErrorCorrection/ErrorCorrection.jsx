import React, { useState } from "react";
import useSharedTimer from "../UseTimer/UseTimer";
import Comprehension from "../Comprehension/Comprehension";

const ErrorCorrection = ({onSubmit}) => {
  const timeLeft = useSharedTimer(300); // 80 seconds = 1:20 mins
  const [selectedOption, setSelectedOption] = useState("");
  const [showPreviousComponent, setShowPreviousComponent] = useState(false);

  const formattedTime = `${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
    .toString()
    .padStart(2, "0")}`;

  const handleBackClick = () => {
    setShowPreviousComponent(true);
  };

  if (showPreviousComponent) {
    return <Comprehension />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12">
      <div className="flex justify-between items-center border-b border-gray-300 py-6">
        <h1 className="text-2xl font-medium text-teal-800">Error Correction</h1>
        <div className="text-gray-800">{formattedTime} mins</div>
      </div>

      <div className="mt-16 mb-12">
        <h2 className="text-xl text-teal-800 text-center mb-12">
          Identify the correct sentence:
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {["A", "B", "C", "D"].map((option) => (
            <button
              key={option}
              className={`border rounded p-4 w-full text-left ${
                selectedOption === option
                  ? "bg-teal-800 text-white border-teal-800"
                  : "border-gray-300 text-teal-800"
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option === "A" &&
                "A) Je vais à la bibliothèque pour emprunter des livres et étudier pour mes examens, mais je n'ai pas trouvé aucune place libre."}
              {option === "B" &&
                "B) Je vais à la bibliothèque pour emprunter des livres et étudier pour mes examens, mais je n'ai trouvé pas une place libre."}
              {option === "C" &&
                "C) Je vais à la bibliothèque pour emprunter des livres et étudier pour mes examens, mais je n'ai pas trouvé de place libre."}
              {option === "D" &&
                "D) Je vais à la bibliothèque pour emprunter des livres et étudier pour mes examens, mais je n'ai pas trouvée une place libre."}
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

        <button  onClick={onSubmit} className="bg-red-600 text-white px-12 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ErrorCorrection;
