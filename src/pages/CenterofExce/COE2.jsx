import React, { useState, useEffect } from "react";

function COE2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/public/assets/Frame 2609104.png",
    "/public/assets/Frame 2609102.png",
    "/public/assets/Frame 2609103.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-full h-[500px] flex items-center justify-center">
        {/* Line connecting images */}
        <div className="absolute w-[80%] h-[2px]  top-1/2 transform -translate-y-1/2" />

        {/* Image container */}
        <div className="relative flex items-center justify-center gap-4 w-full">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            const position = index - activeIndex;

            return (
              <div
                key={index}
                className={`
                transition-all duration-500 ease-in-out
                ${
                  isActive
                    ? "w-[400px] h-[300px] z-20"
                    : "w-[200px] h-[150px] z-10"
                }
                ${
                  position === -1
                    ? "-translate-x-1/4"
                    : position === 1
                    ? "translate-x-1/4"
                    : ""
                }
              `}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`
                  rounded-full h-fit w-fit p-5
                  ${!isActive && "opacity-50"}
                `}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
              w-3 h-3 rounded-full transition-all
              ${activeIndex === index ? "bg-blue-600 w-6" : "bg-gray-400"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default COE2;
