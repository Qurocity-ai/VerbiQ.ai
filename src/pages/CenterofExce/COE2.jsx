import React, { useState, useEffect } from "react";

function COE2() {
  const images = [
    {
      name: "Rebecca",
      language: "French | Native",
      src: "/assets/Frame 2609102.png",
    },
    {
      name: "Micha",
      language: "German | Native",
      src: "/assets/Frame 2609103.png",
    },
    {
      name: "Dr. Hosey",
      language: "Sank",
      src: "/assets/Frame 2609104.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalImages]);

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const getPositionClasses = (index) => {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    const nextIndex = (currentIndex + 1) % totalImages;

    if (index === currentIndex) {
      return "left-1/2 -translate-x-1/2 scale-100 z-10";
    }
    if (index === prevIndex) {
      return "left-0 -translate-x-1/2 scale-75 z-0";
    }
    if (index === nextIndex) {
      return "right-0 translate-x-1/2 scale-75 z-0";
    }
    return "opacity-0";
  };
  return (
    <div className="flex items-center justify-center h-full py-14">
      <div className="relative h-96 w-1/2  ">
        <div className="absolute top-40 w-full z-0 flex items-center justify-center">
          <div className="w-screen border-t-2 border-gray-200"></div>
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${getPositionClasses(
              index
            )}`}
          >
            <div className="bg-white sm:bg-transparent w-screen h-96 sm:w-64 sm:h-64 flex flex-col items-center justify-center">
              <img
                src={image.src}
                alt="crosel-image"
                className="sm:h-fit sm:w-fit h-72 w-72 rounded-full mb-3"
              />
              <h2
                className={`text-[20px] ${
                  currentIndex === index
                    ? "text-[#0c0f6a] font-medium"
                    : "text-gray-300"
                } mb-2`}
              >
                {image.name}
              </h2>
              <p
                className={`text-[20px] text-center ${
                  currentIndex === index
                    ? "text-[#0c0f6a] opacity-95"
                    : "text-gray-300"
                }`}
              >
                {image.language}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute sm:-bottom-20 -bottom-26 w-full z-20 flex justify-center px-4 -translate-y-1/2">
          <button
            onClick={handlePrevClick}
            className="bg-white rounded-full p-2  hover:bg-gray-100 transition-all"
            aria-label="Previous image"
          >
            <img
              src="\assets\thin_big_left.svg"
              alt="Left-arrow"
              className="w-10"
            />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white rounded-full p-2  hover:bg-gray-100 transition-all"
            aria-label="Next image"
          >
            <img
              src="\assets\thin_big_right.svg"
              alt="Right-arrow"
              className="w-10 "
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default COE2;
