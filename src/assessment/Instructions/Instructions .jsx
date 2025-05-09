import React from 'react';
import { useState } from 'react';
import GrammarAndEfficacy from '../GrammarAndEfficacy/GrammarAndEfficacy.jsx';
const Instructions = () => {
  const [navigateToGrammar, setNavigateToGrammar] = useState(false);
  
  const handleContinue = () => {
    // Add history entry for back button functionality
    window.history.pushState({ page: 'grammar' }, '');
    setNavigateToGrammar(true);
    window.scrollTo(0, 0);
  };
  
  // If we've navigated to grammar, render the Grammar component
  if (navigateToGrammar) {
    return <GrammarAndEfficacy />;
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4  pb-12">
      <div className="border-b border-teal-600  py-6 ">
        <h1 className="text-2xl font-medium text-teal-800">Instructions</h1>
      </div>
      
      <div className="mt-8">
        <div className="mb-8">
          <h2 className="text-teal-800 font-medium mb-4">Quiet Room and Technical Check:</h2>
          <ul className="space-y-4">
            <li className="flex">
              
              <p className="text-teal-800">Ensure that you are in a quiet room free from interruptions and background noise. Inform family members or housemates of your assessment schedule to minimize disturbances.</p>
            </li>
            <li className="flex">
              
              <p className="text-teal-800">Check your internet connection to ensure it is stable and reliable. Make sure your device is fully charged or connected to a power source.</p>
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-teal-800 font-medium mb-4">Enabled Camera and Working Microphone:</h2>
          <ul className="space-y-4">
            <li className="flex">
             
              <p className="text-teal-800">Your camera must be enabled and positioned to clearly show your face throughout the assessment. Ensure that your camera is functioning properly before the assessment begins</p>
            </li>
            <li className="flex">
              
              <p className="text-teal-800">Maintain eye contact with the camera throughout the assessment. If you are distracted or look away from the camera even slightly, the assessment will automatically stop, and you will not be able to retake it.</p>
            </li>
            <li className="flex">
              
              <p className="text-teal-800">A working microphone is essential. Test your microphone beforehand to ensure it is clear and operational. Please note that if your microphone is not clear, it may impact the evaluation of your interview performance.</p>
            </li>
            <li className="flex">
              
              <p className="text-teal-800">Make sure your background is appropriate and free from distractions.</p>
            </li>
            <li className="flex">
              
              <p className="text-teal-800">Sit in a well-lit area to ensure your face is clearly visible.</p>
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-teal-800 font-medium mb-4">Assessment Instructions:</h2>
          <ul className="space-y-4">
            <li className="flex">
              
              <p className="text-teal-800">Carefully read all instructions provided before and during the assessment.</p>
            </li>
            <li className="flex">
              
              <p className="text-teal-800">Follow the guidelines and rules set forth by the assessment platform.</p>
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-teal-800 font-medium mb-4">Software and Browser:</h2>
          <ul className="space-y-4">
            <li className="flex">
              
              <p className="text-teal-800">Use the recommended browser and ensure it is up to date.</p>
            </li>
            <li className="flex">
              
              <p className="text-teal-800">Download and install any necessary software or plugins well in advance of the assessment.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-center mt-12">
        <button 
          onClick={handleContinue}
          className="bg-blue-900 text-white font-medium px-6 py-3 rounded w-full max-w-sm"
        >
          Confirm & Continue
        </button>
      </div>
    </div>
  );
};
export default Instructions;