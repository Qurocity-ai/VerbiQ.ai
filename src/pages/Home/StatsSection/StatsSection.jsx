import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const Card = ({ title, desc, imgSrc, alt, reverse }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className={`flex flex-col md:flex-row items-center gap-6 w-full ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-2/3 bg-[#f3f5fa] rounded-xl p-6  duration-300 md:mr-10">
          <h3 className="text-xl font-bold text-[#f4ad28] mb-3">{title}</h3>
          <p className="text-gray-600 text-xl leading-relaxed">{desc}</p>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="w-full md:w-1/3 flex justify-center"
        >
          <img
            src={imgSrc}
            alt={alt}
            className="hidden md:block w-20 h-20 md:w-100 md:h-32 object-contain"
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-16 flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-8 md:gap-10">
          <Card
            title="ONE PLATFORM, EASY HIRE"
           
            desc={
              <>
                <strong className="font-semibold text-xl">82%</strong> faster hiring and{" "}
                <strong className="font-semibold text-xl">40%</strong> lower costs with automated,
                end-to-end language assessments.
              </>
            }
            imgSrc="assets/card1.png"
            alt="Platform benefits"
          />
          <Card
            title="CULTURAL & LINGUISTIC ASSESSMENT"
           
            desc={
              <>
                <strong className="font-semibold text-xl">95%</strong> accuracy in language proficiency and{" "}
                <strong className="font-semibold text-xl">80%</strong> better cultural fit for stronger,
                retention-driven hires.
              </>
            }
            imgSrc="assets/card3.png"
            alt="Cultural assessment"
          
          />
          <Card
            title="DATA-DRIVEN RESULTS"
           
            desc={
              <>
                <strong className="font-semibold text-xl">97%</strong> prediction accuracy and{" "}
                <strong className="font-semibold text-xl">5x</strong> hiring efficiency with real-time AI assessments.
              </>
            }
            imgSrc="assets/card2.png"
            alt="Data results"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
