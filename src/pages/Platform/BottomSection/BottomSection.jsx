import React from "react";

const BottomSection = () => {
  return (
    <div className="bg-[#F8FAFF] text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-8 sm:py-10 lg:px-8 lg:py-20">
        {/* Platform Image Section */}
         <div className="mb-10 sm:mb-20">
          <div className="max-w-9xl h-60 overflow-y-scroll rounded-xl shadow-2xl relative bg-white 
                          sm:overflow-auto sm:overflow-y-scroll">
            <img
              src="/assets/PlatformImage.png"
              alt="VerbiQ Platform Interface"
              className="w-full min-w-[800px] h-auto min-h-[600px] object-contain cursor-grab active:cursor-grabbing"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hidden w-full min-h-[600px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl items-center justify-center text-white text-center">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  VerbiQ Platform Interface
                </h3>
                <p className="text-indigo-100">
                  Scrolling platform demonstration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl text-gray-800 mb-6 sm:mb-15 leading-tight">
            How VerbiQ Maps You to the Right Role
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-x-16 sm:gap-y-12 text-left max-w-5xl mx-auto">
            {/* All feature cards with hover animations */}
           <div className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 bg-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">
                Skill & Proficiency Matching
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                We analyze your verified language scores (grammar, fluency,
                vocabulary, cultural fit) alongside your self-declared skills to
                pinpoint roles where you'll excel.
              </p>
            </div>

         <div className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 bg-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">
                Cost & Value Optimization
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                By factoring in your expected rates and market benchmarks,
                VerbiQ recommends opportunities that maximize your earnings
                while staying competitive.
              </p>
            </div>

           <div className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 bg-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">
                Role-Specific Filters
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                Our smart engine weighs your domain expertise—AI training,
                content creation, SAP support—and surfaces jobs that align with
                both your language and technical strengths.
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 bg-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">
                Real-Time Shortlisting
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                Once matched, hiring managers see your profile within minutes.
                Top candidates receive interview invites in under 24 hours, so
                you land roles faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;