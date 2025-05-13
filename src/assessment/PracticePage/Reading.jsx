import React, { useState, useEffect } from 'react';
import TimerSet from './TimerSet';


const Reading = ({ onSubmit }) => {
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
          <a className="text-white text-sm underline">Reading</a>
          <a className="text-white text-sm ">Writing</a>
          <a className="text-white text-sm ">Speaking</a>
          <a className="text-white text-sm ">Listening</a>
          <a className="text-white text-sm ">Final submission</a>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 text-center">
        {/* Heading */}
        <h1 className="text-[#ADADAD] text-md font-medium underline ">Read below paragraph</h1>
          {/* <div className="w-full border-t border-[#ADADAD]" /> */}
        {/* Paragraph */}
        <p className="mt-4 max-w-3xl text-[#00475D] text-sm leading-relaxed mx-auto text-left">
        Bien que l'étude de la linguistique puisse sembler aride et académique à première vue, elle dévoile en réalité des aspects profondément fascinants de la communication humaine. Par exemple, la phonétique, qui analyse les sons produits par les êtres humains pour former des mots, révèle des subtilités incroyablement complexes. Chaque langue a ses propres nuances phonétiques, et une maîtrise parfaite de celles-ci est souvent ce qui distingue un locuteur natif d'un apprenant. De plus, la syntaxe, l'étude de la structure des phrases, expose les règles sous-jacentes qui guident notre utilisation quotidienne de la langue. Comprendre ces structures peut non seulement améliorer notre capacité à apprendre de nouvelles langues, mais aussi enrichir notre appréciation des nuances et des beautés inhérentes à notre propre langue maternelle. Ainsi, la linguistique, loin d'être un domaine obscur réservé aux érudits, offre des perspectives inestimables sur les mécanismes et la richesse de la communication humaine.
        </p>
        <div className="mt-6 flex flex-col items-center">
                  <button  onClick={handleRecordingToggle} className={`rounded-full shadow focus:outline-none 
            }`}>
                    <img src={isRecording ?  '/assets/Voicestart.png':'/assets/Voice.png' }
                                  alt={isRecording ? 'Stop Recording' : 'Start Recording'}
                           className="w-14 h-14" // Adjust width and height as needed 
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

export default Reading;