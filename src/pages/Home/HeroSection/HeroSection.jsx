import React from "react";
import styles from "./HeroSection.module.css";
import AnimatedContent from "../ReactBits/AnimatedContent";

const HeroSection = () => {
  return (
    <>
      <div
        className={` flex items-start justify-center px-4 sm:px-6 lg:px-8  ${styles.container}`}
      >
        <div className="max-w-7xl w-full mx-auto space-y-6 sm:space-y-8">
          {/* Main Heading with Animation */}
          <div className={`w-full text-center ${styles.txtContainer}`}>
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <h1
                className={`text-4xl sm:text-4xl md:text-5xl font-bold text-[#2D3748] ${styles.heading}`}
              >
                <span className="block">
                  Smarter Language Hiring,{" "}
                  <span className="text-[#1b3d86] block sm:inline">
                    Beyond Just Scores
                  </span>
                </span>
              </h1>
            </AnimatedContent>
          </div>

          <div className={`w-full text-center  -mt-5 ${styles.secHeading}`}>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-medium text-[#2b4879]">
              Fast, Fair, and Flawless
            </h2>
          </div>

          <div className="w-full text-center px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-3xl text-[#686868] max-w-7xl mx-auto">
              Experience unbiased, culturally aligned hiring, 60% faster, with
              3X improved retention.
            </p>
          </div>

          <div className="w-full text-center py-8 sm:py-12 md:py-16">
            <img
              src="/assets/Group 514638.png"
              alt=""
              className="max-w-full h-auto mx-auto px-4 sm:px-0"
            />
          </div>

          <div className={`w-full text-center px-2 sm:px-0 ${styles.lastPara}`}>
            <p className="font-bold text-base sm:text-lg md:text-xl text-[#647285] max-w-5xl mx-auto leading-tight">
              With <span className="font-medium text-[#f6b609]">AI-powered</span>,{" "}
              <span className="font-medium text-[#ef5016]">Data-backed</span>,{" "}
              <span className="font-medium text-[#6996d1]">
              360 Language Assessment
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[#b10606]">VerbiQ.ai</span> breaks the mold
              with a platform that delivers measurable results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
