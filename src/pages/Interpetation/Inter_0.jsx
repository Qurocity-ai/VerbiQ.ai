import React from "react";

const Inter_0 = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/Interpetation.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-50 "></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white flex flex-col justify-center h-full sm:pl-40 px-10 max-w-2xl">
        <p className="sm:text-xl text-lg uppercase mb-2 text-gray-200 border-b-4 border-gray-200 font-light sm:w-39 w-34">
          Interpretation
        </p>
        <h1 className="text-3xl sm:text-6xl font-light leading-snug text-nowrap">
          Fluent Connections In
          <br />
          Every Conversation
        </h1>
        <p className="mt-4 sm:text-lg text-sm text-gray-200">
          Expert interpretation for your niche – technical briefings, legal
          proceedings, defense dialogues, and more.
        </p>
        <button className="mt-6 bg-transparent border sm:w-80 w-40 border-gray-200 text-white px-2 py-2 rounded-full font-normal sm:text-2xl text-sm hover:bg-gray-200 hover:text-black transition">
          Request a callback
        </button>
      </div>
    </div>
  );
};

export default Inter_0;
