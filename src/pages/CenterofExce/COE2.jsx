import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function COE2() {
  const [users, setUsers] = useState([]);
  const [activeButton, setActiveButton] = useState("right");
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = users.length;
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % users.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [users]);

  useEffect(() => {
    axios
      .get("https://recrutory-new-website-backend.onrender.com/user")
      .then((response) => {
        setUsers(response.data);
        console.log(users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    setActiveButton("left");
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
    setActiveButton("right");
  };

  const handleUserClick = (user) => {
    navigate(`/details/${user._id}`, {
      state: { user },
    });
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
    <div className="flex items-center justify-center h-full py-18">
      <div className="relative h-96 w-1/2  ">
        <div className="absolute top-40 w-full z-0 flex items-center justify-center">
          <div className="w-screen border-t-2 border-gray-200"></div>
        </div>
        {users.map((user, index) => (
          <div
            key={user._id}
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${getPositionClasses(
              index
            )}`}
          >
            <div
              className="bg-white sm:bg-transparent w-screen h-96 sm:w-64 sm:h-64 flex flex-col items-center justify-center"
              onClick={() => handleUserClick(user)}
            >
              <img
                src={user.profile_image || "https://via.placeholder.com/150"}
                alt={user.name}
                className="sm:h-fit sm:w-fit h-72 w-72 rounded-full mb-3"
              />
              <h2
                className={`text-[20px] ${
                  currentIndex === index
                    ? "text-[#0c0f6a] font-medium"
                    : "text-gray-300"
                } mb-2`}
              >
                {user.name}
              </h2>
              <p
                className={`text-[20px] text-center ${
                  currentIndex === index
                    ? "text-[#0c0f6a] opacity-95"
                    : "text-gray-300"
                }`}
              >
                {user.languages_spoken?.[0]} | {user.proficiency}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute sm:-bottom-28 -bottom-26 w-full z-20 flex justify-center px-4 -translate-y-1/2">
          <button
            onClick={handlePrevClick}
            className=" rounded-full p-2  transition-all"
            aria-label="Previous image"
          >
            <img
              src="\assets\thin_big_left.svg"
              alt="Left-arrow"
              className={`w-10 ${
                activeButton === "left" ? "filter brightness-50" : ""
              }`}
            />
          </button>
          <button
            onClick={handleNextClick}
            className=" rounded-full p-2   transition-all"
            aria-label="Next image"
          >
            <img
              src="\assets\thin_big_left.svg"
              alt="Right-arrow"
              className={`w-10 rotate-180 ${
                activeButton === "right" ? "filter brightness-50" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default COE2;
