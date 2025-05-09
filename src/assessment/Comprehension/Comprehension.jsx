import React, { useState } from "react";
import useSharedTimer from "../UseTimer/UseTimer";
import ClozeQuestion from "../ClozeQuestion/ClozeQuestion";
import ErrorCorrection from "../ErrorCorrection/ErrorCorrection";

const Comprehension = ({onSubmit}) => {
  const timeLeft = useSharedTimer(300);
  const [showCloze, setShowCloze] = useState(false);
  const [showErrorCorrection, setShowErrorCorrection] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const formattedTime = `${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
    .toString()
    .padStart(2, "0")}`;

  const handleSubmit = () => {
    setShowErrorCorrection(true);
  };

  const handleBackClick = () => {
    setShowCloze(true);
  };

  if (showCloze) {
    return <ClozeQuestion />;
  }

  if (showErrorCorrection) {
    return <ErrorCorrection />;
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

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-medium text-teal-800">Comprehension</h1>
          <div className="text-gray-800">{formattedTime} mins</div>
        </div>

        <div className="mt-8 flex">
          {/* Left column - Reading passage */}
          <div className="w-1/2 pr-8 border-r">
            <div className="text-teal-800 space-y-4">
              <p>
                La France est l'un des pays les plus visités au monde, attirant des millions de
                touristes chaque année grâce à ses sites historiques, sa culture riche et sa
                cuisine renommée. Paris, la capitale, est célèbre pour ses monuments
                emblématiques comme la Tour Eiffel, le Louvre et la Cathédrale Notre-
                Dame.
              </p>
              <p>
                En dehors de Paris, la Provence offre des paysages pittoresques avec ses
                champs de lavande et ses villages charmants, tandis que la Côte d'Azur
                séduit par ses plages ensoleillées et ses stations balnéaires luxueuses. Les
                amateurs de vin ne manqueront pas de visiter les vignobles de Bordeaux et
                de Bourgogne, connus pour produire certains des meilleurs vins du monde.
                En outre, la France est également un centre d'innovation technologique et
                de développement durable, avec de nombreuses initiatives visant à réduire
                l'empreinte carbone du pays.
              </p>
              <p>
                Que vous soyez intéressé par l'histoire, la gastronomie, ou les avancées
                technologiques, la France a quelque chose à offrir à chaque visiteur.
              </p>
            </div>
          </div>

          {/* Right column - Questions */}
          <div className="w-1/2 pl-8">
            <div>
              <h2 className="text-lg text-teal-800 mb-4">1. Quelle est la capitale de la France?</h2>
              <div className="space-y-4">
                {['A', 'B', 'C', 'D'].map((option) => (
                  <button
                    key={option}
                    className={`border rounded p-3 w-full text-left ${
                      selectedAnswer === option 
                        ? 'bg-teal-800 text-white border-teal-800' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                    onClick={() => setSelectedAnswer(option)}
                  >
                    {option === 'A' && "A) Marseille"}
                    {option === 'B' && "B) Lyon"}
                    {option === 'C' && "C) Paris"}
                    {option === 'D' && "D) Bordeaux"}
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between mt-12">
                <button
                  onClick={handleBackClick}
                  className="border border-gray-300 text-gray-500 px-4 py-2 rounded"
                >
                  Back
                </button>
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
        </div>
      </div>
    </div>
  );
};

export default Comprehension;