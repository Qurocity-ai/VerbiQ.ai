import React from "react";
import { useState } from "react";

function ProjectBasedHiring() {
  const [active, setActive] = useState("contentTraining");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? 2 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1);
  };

  function handleActive(status) {
    setActive(status);
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 gap-7 px-[40px] lg:px-0">
        <div className="w-full flex flex-col items-center text-center">
          
          <div className="lg:w-[60%]">
            <h1 className="text-2xl mt-[70px]  lg:text-[40px] text-blue-900 ">
              Flexible Workforce Solutions for Your Business Needs
            </h1>
            <div className="lg:w-[95%] mx-auto mt-6 text-gray-500 text-[18px] lg:text-[23px]">
              <p>
                Whether you need{" "}
                <span className="text-red-800 font-bold">
                  short-term specialists
                </span>{" "}
                or
                <span className="text-red-800 font-bold">
                  {" "}
                  dedicated project-based professionals
                </span>
                ,
              </p>
              <p>We offer the right talent at the right time.</p>
            </div>
          </div>
        </div>

        
        <div className="hidden md:flex flex-row w-full md:w-[85%] lg:w-[75%] md:ml-[100px] lg:ml-[340px] mt-8">
         
          <div className="lg:w-1/3 text-gray-500 space-y-2 text-center md:text-left">
            <div className="lg:leading-[25px]">
              <div
                onClick={() => handleActive("contentTraining")}
                className={`cursor-pointer p-2 ${
                  active === "contentTraining"
                    ? "text-blue-900 font-bold"
                    : "text-gray-500"
                }`}
              >
                Content & Editorial Experts
              </div>
              <hr />
              <div
                onClick={() => handleActive("professional")}
                className={`cursor-pointer p-2 ${
                  active === "professional"
                    ? "text-blue-900 font-bold"
                    : "text-gray-500"
                }`}
              >
                Professional Interpreters & Translators
              </div>
              <hr />
              <div
                onClick={() => handleActive("aimodel")}
                className={`cursor-pointer p-2 ${
                  active === "aimodel"
                    ? "text-blue-900 font-bold"
                    : "text-gray-500"
                }`}
              >
                AI Model Training & Annotation Specialists
              </div>
            </div>
          </div>

         
          <div className="w-full md:w-2/3 lg:ml-[130px] mt-4 md:mt-0 md:pl-6 text-blue-900 font-bold text-center md:text-left">
            {active === "contentTraining" && (
              <ul className="list-disc space-y-2">
                <li>
                  Content Writers – Crafting audience-driven, multilingual
                  content
                </li>
                <li>
                  Copywriters & Editors – Precision-driven writing for various
                  industries
                </li>
                <li>
                  Technical & Instructional Writers – Simplifying complex topics
                </li>
                <li>Video Subtitle Creators – Enhancing multimedia content</li>
              </ul>
            )}
            {active === "professional" && (
              <ul className="list-disc space-y-2">
                <li>
                  Simultaneous & Consecutive Interpreters – Real-time
                  translations
                </li>
                <li>Document Translators – Certified translation services</li>
                <li>
                  Localization Specialists – Adapting content for cultural
                  relevance
                </li>
                <li>
                  Voiceover & Dubbing Artists – Natural, region-specific
                  narration
                </li>
              </ul>
            )}
            {active === "aimodel" && (
              <ul className="list-disc space-y-2">
                <li>
                  Speech & Text Data Annotators – Labeling data for AI models
                </li>
                <li>Transcription Experts – Converting audio to text</li>
                <li>
                  Language Quality Auditors – Reviewing AI-generated outputs
                </li>
                <li>
                  Sentiment & Contextual Analysts – Fine-tuning AI for better
                  intent recognition
                </li>
              </ul>
            )}
          </div>

          
        </div>

        <div className="relative w-full max-w-md mx-auto md:hidden">
            
            {currentIndex === 0 && (
              <div className="bg-white p-4 rounded-lg shadow-md text-blue-900 font-bold text-center">
                <h2 className="text-lg text-red-800">Content & Editorial Experts</h2>
                <ul className="mt-2 text-gray-700 text-sm list-none text-left">
                  <li className="mt-1.5">
                    <span className="text-[17px]">SEO & Digital Content Writers</span>
                    <p>Crafting audience driven, multilingual content</p>
                  </li>
                  <li className="mt-1.5">
                    <span className="text-[17px]">Copywriters & Editors</span> – Precision-driven writing for various
                    industries
                  </li>
                  <li className="mt-1.5">
                    <span className="text-[17px]">Technical & Instructional Writers</span>  – Simplifying complex
                    topics
                  </li>
                  <li className="mt-1.5">
                    <span className="text-[17px]">Video Subtitle Creators</span> – Enhancing multimedia content
                  </li>
                </ul>
              </div>
            )}

            
            {currentIndex === 1 && (
              <div className="bg-white p-4 rounded-lg shadow-md text-blue-900 font-bold text-center">
                <h2 className="text-lg text-red-800">
                  Professional Interpreters & Translators
                </h2>
                <ul className="mt-2 text-gray-700 text-sm list-none text-left">
                  <li className="mt-1.5">
                    <span className="text-[17px]">Simultaneous & Consecutive Interpreters</span> – Real-time
                    translations
                  </li>
                  <li className="mt-1.5"><span className="text-[17px]">Document Translators </span>– Certified translation services</li>
                  <li className="mt-1.5">
                    <span className="text-[17px]">Localization Specialists</span> – Adapting content for cultural
                    relevance
                  </li>
                  <li className="mt-1.5">
                   <span className="text-[17px]">Voiceover & Dubbing Artists</span>  – Natural, region-specific
                    narration
                  </li>
                </ul>
              </div>
            )}

           
            {currentIndex === 2 && (
              <div className="bg-white p-4 rounded-lg shadow-md text-blue-900 font-bold text-center">
                <h2 className="text-lg text-red-800">
                  AI Model Training & Annotation Specialists
                </h2>
                <ul className="mt-2 text-gray-700 text-sm list-none text-left">
                  <li className="mt-1.5">
                   <span className="text-[17px]">Speech & Text Data Annotators</span>  – Labeling data for AI models
                  </li>
                  <li className="mt-1.5"><span className="text-[17px]">Transcription Experts</span> – Converting audio to text</li>
                  <li className="mt-1.5">
                    <span className="text-[17px]">Language Quality Auditors</span> – Reviewing AI-generated outputs
                  </li>
                  <li className="mt-1.5">
                    <span className="text-[17px]">Sentiment & Contextual Analysts</span> – Fine-tuning AI for better
                    intent recognition
                  </li>
                </ul>
              </div>
            )}

           
            <button
              onClick={handlePrev}
              className="absolute left-[-35px] top-1/2 transform -translate-y-1/2  p-2 rounded-full"
            >
              <img src="/assets/arrowleft.svg" className="w-5 h-5  "/>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[-35px] top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:text-blue-400"
            >
               <img src="/assets/arrowright.svg" className="w-5 h-5   "/>
            </button>
          </div>

      
      </div>
    </>
  );
}

export default ProjectBasedHiring;
