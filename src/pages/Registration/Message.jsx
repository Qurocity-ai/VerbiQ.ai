import React from "react";
import { useNavigate } from "react-router-dom";

function Message() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="text-[#686868] h-screen w-full flex flex-col items-center justify-center sm:text-[35px] text-[20px] text-center p-9 sm:p-0 font-light">
      <p>Thank you for registering with us.</p>
      <p>
        Our team will connect with you shortly with relevant job opportunities.
      </p>{" "}
      <p>
        We soon plan to launch a portal where you can access the job listings
        through VerbiQ.
      </p>
      <p> Stay tuned on LinkedIn for updates.</p>
      <button
        onClick={handleClick}
        className="bg-[#00475D] text-white sm:py-4 sm:px-8 py-2 px-6 rounded-lg mt-6 font-semibold"
      >
        Go to Home
      </button>
    </div>
  );
}

export default Message;
