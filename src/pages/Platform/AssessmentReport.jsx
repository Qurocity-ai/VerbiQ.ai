import React, { useEffect, useState } from 'react';

const AssessmentReport = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFF] p-4 sm:p-8">
      {/* Header Section */}
      <div className={`max-w-6xl mx-auto mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
        isLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        <div className=" mt-15 text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-2">For Businesses</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 max-w-6xl mx-auto leading-tight">
            Smart, Secure, and Scalable Language Evaluation for Global Readiness
          </h2>
        </div>

        {/* Features Grid - Stack on mobile, grid on larger screens */}
        <div className="flex flex-col sm:grid max-w-5xl sm:grid-cols-2 gap-8 sm:gap-32 mb-10 sm:mb-16 sm:ml-14">
          {/* Left Column - Precision-Led Assessments */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Precision-Led Assessments.
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Our AI-enhanced platform delivers unbiased, scenario-based language evaluations designed by native speakers and linguistic professionals. We assess candidates across:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-sm sm:text-base text-gray-700">360° Language Proficiency Mapping</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-sm sm:text-base text-gray-700">Business and Role-Specific Communication Skills</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-sm sm:text-base text-gray-700">Real-time, Adaptive Assessments for 12+ global languages and dialects</span>
              </div>
            </div>
          </div>

          {/* Right Column - Built for Enterprise */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Built for Enterprise Scale and Speed
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              From single candidates to high-volume enterprise testing, VerbIQ empowers you to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-sm sm:text-base text-gray-700">Deploy assessments in under 60 seconds</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-sm sm:text-base text-gray-700">Receive verified results in less than 10 minutes</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-sm sm:text-base text-gray-700">Track progress via an intuitive analytics dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Report Card */}
      <div className={`max-w-6xl mx-auto transition-all duration-1200 ease-out delay-300 ${
        isLoaded 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}>
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-8 relative">
          {/* Report Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg sm:text-xl font-medium text-[#00046c]">Assessment Report</h3>
            {/* VerbIQ Logo - Top Right Corner */}
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
              <img 
                src="public/assets/VerbiQ Logo 5.png" 
                alt="VerbIQ Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
          </div>
          
          {/* Content - Stack on mobile, grid on larger screens */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
            {/* Left Column - Candidate Summary and Scores */}
            <div className="col-span-2 order-1">
              {/* Candidate Summary */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Candidate Summary</h4>
                <div className="space-y-0.5 text-xs sm:text-sm text-gray-600">
                  <div>• Name: Akshay</div>
                  <div>• Language Assessed: Spanish (Mexico)</div>
                  <div>• Role Applied: Bilingual Customer Success Associate</div>
                  <div>• Assessment Type: Business Scenario (Automated Evaluation)</div>
                  <div>• Date: May 2025</div>
                </div>
              </div>

              {/* Scores Table - Horizontal scroll on mobile */}
              <div className="overflow-x-auto">
                <table className="w-full table-fixed min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-xs sm:text-sm font-semibold text-gray-800 w-1/4">Category</th>
                      <th className="text-center py-2 text-xs sm:text-sm font-semibold text-gray-800 w-1/6 px-2 sm:px-4">Score</th>
                      <th className="text-left py-2 text-xs sm:text-sm font-semibold text-gray-800 w-7/12 pl-2 sm:pl-6">Insight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-xs sm:text-sm text-gray-700 w-1/4">Grammar</td>
                      <td className="text-center py-3 text-xs sm:text-sm text-gray-700 w-1/6 px-2 sm:px-4">4.2/5</td>
                      <td className="py-3 text-xs sm:text-sm text-gray-600 w-7/12 pl-2 sm:pl-6">Consistently correct sentence structure; minor article/preposition slips.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-xs sm:text-sm text-gray-700 w-1/4">Fluency</td>
                      <td className="text-center py-3 text-xs sm:text-sm text-gray-700 w-1/6 px-2 sm:px-4">4.5/5</td>
                      <td className="py-3 text-xs sm:text-sm text-gray-600 w-7/12 pl-2 sm:pl-6">Speaks clearly with natural pacing and smooth transitions.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-xs sm:text-sm text-gray-700 w-1/4">Vocabulary</td>
                      <td className="text-center py-3 text-xs sm:text-sm text-gray-700 w-1/6 px-2 sm:px-4">4.2/5</td>
                      <td className="py-3 text-xs sm:text-sm text-gray-600 w-7/12 pl-2 sm:pl-6">Uses relevant business and contextual terms confidently. </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-xs sm:text-sm text-gray-700 w-1/4">Business Proficiency</td>
                      <td className="text-center py-3 text-xs sm:text-sm text-gray-700 w-1/6 px-2 sm:px-4">4.3/5</td>
                      <td className="py-3 text-xs sm:text-sm text-gray-600 w-7/12 pl-2 sm:pl-6">
                      Understands service terminology and applies it correctly.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-xs sm:text-sm text-gray-700 w-1/4">Cultural Fluent</td>
                      <td className="text-center py-3 text-xs sm:text-sm text-gray-700 w-1/6 px-2 sm:px-4">3.8/5</td>
                      <td className="py-3 text-xs sm:text-sm text-gray-600 w-7/12 pl-2 sm:pl-6">Displays awareness of tone and interpersonal nuances, with minor gaps.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-xs sm:text-sm text-gray-700 w-1/4">Acumen & Reasoning</td>
                      <td className="text-center py-3 text-xs sm:text-sm text-gray-700 w-1/6 px-2 sm:px-4">4.2/5</td>
                      <td className="py-3 text-xs sm:text-sm text-gray-600 w-7/12 pl-2 sm:pl-6">Provides sound responses during role-based scenarios.</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-xs sm:text-sm font-semibold text-gray-800 w-1/4">Overall</td>
                      <td className="text-center py-3 text-xs sm:text-sm font-semibold text-gray-800 w-1/6 px-2 sm:px-4">4.2/5</td>
                      <td className="py-3 text-xs sm:text-sm font-semibold text-gray-800 w-7/12 pl-2 sm:pl-6">Aligned with CEFR Level C1 – Advanced User</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column - Recommendations - Moves below on mobile */}
            <div className="col-span-1 order-2 md:order-2">
              {/* Align strengths section with candidate summary */}
              <div className="mt-0 md:mt-[2px]">
                {/* Strengths */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Strengths:</h4>
                  <div className="space-y-0.5 text-xs sm:text-sm text-gray-600">
                    <div>• High fluency and confident delivery</div>
                    <div>• Demonstrates domain vocabulary and business understanding</div>
                  </div>
                </div>

                {/* Improvements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Improvements:</h4>
                  <div className="space-y-0.5 text-xs sm:text-sm text-gray-600">
                    <div>• Could refine prepositional usage under time pressure</div>
                    <div>• Slight improvement needed in cultural expressions for casual business chats</div>
                  </div>
                </div>

                {/* VerbIQ Recommendation */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">VerbIQ Recommendation</h4>
                  <div className="space-y-0.5 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center">
                      <span>• Fit for Role: </span>
                      <span className="text-green-600 font-medium ml-1">✓ Strong Match</span>
                    </div>
                    <div className="flex items-center">
                      <span>• Training Required: </span>
                      <span className="text-red-500 font-medium ml-1">✗ Not Required</span>
                    </div>
                    <div className="flex items-center">
                      <span>• Deployment Timeline: </span>
                      <span className="font-medium ml-1">⏱ Within 24-48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentReport;