import React from "react";
import TiltedCard from "../ReactBits/TiltedCard";

const StatsSection = () => {
  return (
    <div
      className= "min-h-screen bg-white flex items-center px-4 sm:px-6 lg:px-8 "
    >
      <div className="mx-auto space-y-6">
        {/*  Image Container */}
        <div
          className="w-full"
          style={{ position: "relative", height: "600px" }}
        >
          
          <img
            src="/assets/Group 514833.png"
            alt="Assessment Platform"
            className="absolute w-190 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Tilted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltedCard 
            containerHeight="100%"
            containerWidth="100%"
            rotateAmplitude={5}
            scaleOnHover={1.06}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
            
          >
            <div className="p-6 bg-gray-100 rounded-lg h-full" >
              <div className="" >

              <h3 className="text-xl font-bold text-[#f4ad28] mb-2" >
                ONE PLATFORM, EASY HIRE
              </h3>
              <p className="text-gray-600">
                82% faster hiring and 40% lower costs with automated, end-to-end
                language assessments.
              </p>
              </div>
            </div>
          </TiltedCard>

          <TiltedCard
            containerHeight="100%"
            containerWidth="100%"
            rotateAmplitude={5}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          >
            <div className="p-6 bg-gray-100  rounded-lg h-full">
              <h3 className="text-xl font-bold text-[#f4ad28] mb-2">
                CULTURAL & LINGUISTIC ASSESSMENT
              </h3>
              <p className="text-gray-600">
                95% accuracy in language proficiency and 80% better cultural fit
                for stronger, retention-driven hires.
              </p>
            </div>
          </TiltedCard>

          <TiltedCard
            containerHeight="100%"
            containerWidth="100%"
            rotateAmplitude={5}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          >
            <div className="p-6 bg-gray-100  rounded-lg h-full">
              <h3 className="text-xl font-bold text-[#f4ad28] mb-2">
                DATA-DRIVEN RESULTS
              </h3>
              <p className="text-gray-600">
                97% prediction accuracy and 5x hiring efficiency with real-time
                AI assessments.
              </p>
            </div>
          </TiltedCard>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
