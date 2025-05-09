import { TimerResetIcon } from 'lucide-react';
import React, { useState } from 'react';
import TimerSet from './TimerSet';


const Listening = ({ onSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handlePlayAudio = () => {
    // Logic to play the audio
    const audio = new Audio('/assets/sample-audio.mp3'); // Replace with the actual audio file path
    audio.play();
  };

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-10 relative">
      <TimerSet/>
      <div className="bg-[#000949] flex justify-center py-2 px-4 rounded-full mx-auto w-[629px]">
        <div className="flex space-x-8">
          <a className="text-white text-sm ">Reading</a>
          <a className="text-white text-sm ">Writing</a>
          <a className="text-white text-sm ">Speaking</a>
          <a className="text-white text-sm underline ">Listening</a>
          <a className="text-white text-sm ">Final submission</a>
        </div>
      </div>
      {/* Content */}
      
        {/* Heading */}
        <h1 className="text-[#ADADAD] text-md font-medium underline mt-10">Listen to the audio given below and write your answer</h1>

        {/* Play Button */}
        <div className="mt-18 flex justify-center ">
          <button onClick={handlePlayAudio} className="focus:outline-none">
            <img
              src="/assets/PlayButton.png" // Replace with the actual play button image path
              alt="Play Audio"
              className="w-16 h-16 " // Adjust the size of the play button
            />
          </button>
        </div>

        
          {/* Answer Section */}
          <div className="mt-8 w-full max-w-3xl text-left">
          <label className="inline-block text-left text-white bg-[#00475D] px-4 py-2 rounded-t-lg font-medium mb-0">Answer</label>
          <textarea
            className="w-full h-66 border border-[#CACACA] rounded-b-lg px-4 py-2 text-sm text-gray-600 focus:outline-none "
            placeholder="Notre Politique d'Engagement Commercial est conçue pour favoriser des relations transparentes, éthiques et mutuellement bénéfiques avec toutes les parties prenantes, y compris les clients, les partenaires, les fournisseurs et les employés. Nous nous engageons à maintenir les normes les plus élevées de professionnalisme et d'intégrité dans chaque interaction. Cette politique garantit que toutes les activités commerciales sont menées en conformité avec les lois et réglementations applicables, en soulignant l'importance de l'équité, du respect et de la responsabilité. Nous encourageons une communication ouverte et une collaboration afin de comprendre et de répondre efficacement aux besoins de nos parties prenantes. À travers cette politique, nous visons à établir et à maintenir des partenariats à long terme qui stimulent l'innovation, la croissance et le succès partagé tout en respectant nos valeurs fondamentales d'excellence et de conduite éthique."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            onClick={onSubmit}
            className="bg-[#B0181B] hover:bg-[#8B1214] text-white text-sm font-medium px-8 py-2 rounded shadow transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </div>
      
    </div>
  );
};

export default Listening;