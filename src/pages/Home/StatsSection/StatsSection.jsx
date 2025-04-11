import React, { useRef } from "react";
// import TiltedCard from "../ReactBits/TiltedCard";

const StatsSection = () => {
  // Create a reference for the video element
  const videoRef = useRef(null);

  // Handler when the video ends
  const handleVideoEnded = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play(); // Play the video again
      }
    }, 2500); //2.5 seconds delay
  };

  return (
    <div className="min-h-screen bg-white flex items-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-6 ">
        {/* Video Container */}
        <div className="w-full relative " style={{ height: "600px" }}>
          <video
            ref={videoRef}
            src="/assets/T02.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="absolute w-[760px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 bg-white rounded-lg h-full transform transition duration-300 hover:scale-110"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 className="text-xl font-bold text-[#f4ad28] mb-2">
              ONE PLATFORM, EASY HIRE
            </h3>
            <p className="text-gray-600">
              82% faster hiring and 40% lower costs with automated, end-to-end
              language assessments.
            </p>
          </div>
          <div
            className="p-6 bg-white rounded-lg h-full transform transition duration-300 hover:scale-110"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 className="text-xl font-bold text-[#f4ad28] mb-2">
              CULTURAL & LINGUISTIC ASSESSMENT
            </h3>
            <p className="text-gray-600">
              95% accuracy in language proficiency and 80% better cultural fit
              for stronger, retention-driven hires.
            </p>
          </div>

          <div
            className="p-6 bg-white rounded-lg h-full transform transition duration-300 hover:scale-110"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 className="text-xl font-bold text-[#f4ad28] mb-2">
              DATA-DRIVEN RESULTS
            </h3>
            <p className="text-gray-600">
              97% prediction accuracy and 5x hiring efficiency with real-time AI
              assessments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
