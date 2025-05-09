import React, { useState, useEffect } from 'react';
import TimerSet from './TimerSet';


const Speaking = ({ onSubmit }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  
  useEffect(() => {
    if (isRecording) {
      // Request access to the microphone
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          const recorder = new MediaRecorder(stream);
          setMediaRecorder(recorder);

          recorder.ondataavailable = (event) => {
            setAudioBlob(event.data); // Save the recorded audio blob
          };

          recorder.start();
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
        });
    } else if (mediaRecorder) {
      mediaRecorder.stop(); // Stop recording
    }
  }, [isRecording]);

  const handleRecordingToggle = () => {
    setIsRecording((prev) => !prev);
  };

  const handlePlayAudio = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play(); // Play the recorded audio
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-10 relative">
    <TimerSet />
      <div className="bg-[#000949] flex justify-center py-2 px-4 rounded-full mx-auto w-[629px]">
        <div className="flex space-x-8">
          <a className="text-white text-sm ">Reading</a>
          <a className="text-white text-sm ">Writing</a>
          <a className="text-white text-sm underline">Speaking</a>
          <a className="text-white text-sm ">Listening</a>
          <a className="text-white text-sm ">Final submission</a>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 text-center">
        {/* Heading */}
        <h1 className="text-[#ADADAD] text-md font-medium underline">Respond to the given context basis of task</h1>

        {/* Context */}
        <div className="mt-6">
          <h2 className="text-[#00475D] text-sm font-medium">Context</h2>
          <p className="mt-2 max-w-3xl text-[#00475D] text-sm leading-relaxed mx-auto">
            You are in a job interview for a customer support position, and the interviewer asks you to explain the process of submitting an expense report.
          </p>
        </div>

        {/* Task */}
        <div className="mt-6">
          <h2 className="text-[#B0181B] text-sm font-medium">Task</h2>
          <p className="mt-2 max-w-3xl text-[#B0181B] text-sm leading-relaxed mx-auto">
            Describe the steps involved in submitting an expense report, including where to find the necessary forms, how to fill them out, and the submission process.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center">
                  <button  onClick={handleRecordingToggle} className={`rounded-full shadow focus:outline-none 
            }`}>
                    <img src={isRecording ?  '/assets/Voicestart.png':'/assets/Voice.png' }
                                  alt={isRecording ? 'Stop Recording' : 'Start Recording'}
                           className="w-15 h-15" // Adjust width and height as needed 
                           />
                   </button>
                 </div>
       
        {/* Submit Button */}
        <div className="mt-6">
          <button  onClick={onSubmit} className="bg-[#B0181B] hover:bg-[#EEEEEE] text-white hover:text-black text-sm font-medium px-8 py-2 rounded shadow">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speaking;