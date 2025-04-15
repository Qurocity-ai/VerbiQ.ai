"use client";
import React from "react";
import { motion } from "framer-motion"; 

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, 0.2) 0, hsla(210, 100%, 55%, 0.1) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.15) 0, hsla(210, 100%, 55%, 0.1) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.12) 0, hsla(210, 100%, 45%, 0.1) 80%, transparent 100%)",
  translateY = -350,
  width = "560px",     
  height = "120vh",     
  smallWidth = "240px",   
  duration = 7,
  xOffset = 100,
} = {}) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      
      {/* Left Spotlight */}
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full z-40 pointer-events-none">
        
        <div style={{
          transform: `translateY(${translateY}px) rotate(-45deg)`,
          background: gradientFirst,
          width,
          height,
        }} className="absolute top-0 left-0" />

        <div style={{
          transform: "rotate(-45deg) translate(5%, -50%)",
          background: gradientSecond,
          width: smallWidth,
          height,
        }} className="absolute top-0 left-0 origin-top-left" />

        <div style={{
          transform: "rotate(-45deg) translate(-180%, -70%)",
          background: gradientThird,
          width: smallWidth,
          height,
        }} className="absolute top-0 left-0 origin-top-left" />
      </motion.div>

      {/* Right Spotlight */}
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 right-0 w-full h-full z-40 pointer-events-none">

        <div style={{
          transform: `translateY(${translateY}px) rotate(45deg)`,
          background: gradientFirst,
          width,
          height,
        }} className="absolute top-0 right-0" />

        <div style={{
          transform: "rotate(45deg) translate(-5%, -50%)",
          background: gradientSecond,
          width: smallWidth,
          height,
        }} className="absolute top-0 right-0 origin-top-right" />

        <div style={{
          transform: "rotate(45deg) translate(180%, -70%)",
          background: gradientThird,
          width: smallWidth,
          height,
        }} className="absolute top-0 right-0 origin-top-right" />
      </motion.div>
    </motion.div>
  );
};
