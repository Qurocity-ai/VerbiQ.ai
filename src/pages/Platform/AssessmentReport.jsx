import React from 'react';

const AssessmentReport = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] p-8 m-15">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl  text-gray-800 mb-2">For Businesses</h1>
          <h2 className="text-3xl font- text-gray-800 max-w-6xl mx-auto leading-tight">
            Smart, Secure, and Scalable Language Evaluation for Global Readiness
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid max-w-5xl grid-cols-2 gap-32 mb-16 ml-14">
          {/* Left Column - Precision-Led Assessments */}
          <div>
            <h3 className="text-lg  font-medium text-gray-800 mb-4">
              Precision-Led Assessments.
            </h3>
            <p className="text-2sm text-gray-600 mb-6 leading-relaxed">
              Our AI-enhanced platform delivers unbiased, scenario-based language evaluations designed by native speakers and linguistic professionals. We assess candidates across:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-2sm text-gray-700">360° Language Proficiency Mapping</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-2sm text-gray-700">Business and Role-Specific Communication Skills</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-2sm text-gray-700">Real-time, Adaptive Assessments for 12+ global languages and dialects</span>
              </div>
            </div>
          </div>

          {/* Right Column - Built for Enterprise */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Built for Enterprise Scale and Speed
            </h3>
            <p className="text-2sm text-gray-600 mb-6 leading-relaxed">
              From single candidates to high-volume enterprise testing, VerbIQ empowers you to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-2sm text-gray-700">Deploy assessments in under 60 seconds</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-2sm text-gray-700">Receive verified results in less than 10 minutes</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-2sm text-gray-700">Track progress via an intuitive analytics dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Report Card */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-8 relative">
          {/* Report Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-medium text-[#00046c]">Assessment Report</h3>
            {/* VerbIQ Logo - Top Right Corner */}
            <div className="absolute top-8 right-8">
              <img 
                src="public/assets/VerbiQ Logo 5.png" 
                alt="VerbIQ Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - Candidate Summary and Scores */}
            <div className="col-span-2">
              {/* Candidate Summary */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Candidate Summary</h4>
                <div className="space-y-0.5 text-sm text-gray-600">
                  <div>• Name: Akshay</div>
                  <div>• Language Assessed: Spanish (Mexico)</div>
                  <div>• Role Applied: Bilingual Customer Success Associate</div>
                  <div>• Assessment Type: Business Scenario (Automated Evaluation)</div>
                  <div>• Date: May 2025</div>
                </div>
              </div>

              {/* Scores Table */}
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-sm font-semibold text-gray-800 w-1/4">Category</th>
                    <th className="text-center py-2 text-sm font-semibold text-gray-800 w-1/6 px-4">Score</th>
                    <th className="text-left py-2 text-sm font-semibold text-gray-800 w-7/12 pl-6">Insight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-700 w-1/4">Grammar</td>
                    <td className="text-center py-3 text-sm text-gray-700 w-1/6 px-4">4.2/5</td>
                    <td className="py-3 text-sm text-gray-600 w-7/12 pl-6">Consistently correct sentence structure; minor article/preposition slips.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-700 w-1/4">Fluency</td>
                    <td className="text-center py-3 text-sm text-gray-700 w-1/6 px-4">4.5/5</td>
                    <td className="py-3 text-sm text-gray-600 w-7/12 pl-6">Speaks clearly with natural pacing and smooth transitions.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-700 w-1/4">Vocabulary</td>
                    <td className="text-center py-3 text-sm text-gray-700 w-1/6 px-4">4.2/5</td>
                    <td className="py-3 text-sm text-gray-600 w-7/12 pl-6">Uses relevant business and contextual terms confidently. </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-700 w-1/4">Business Proficiency</td>
                    <td className="text-center py-3 text-sm text-gray-700 w-1/6 px-4">4.3/5</td>
                    <td className="py-3 text-sm text-gray-600 w-7/12 pl-6">
                    Understands service terminology and applies it correctly.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-700 w-1/4">Cultural Fluent</td>
                    <td className="text-center py-3 text-sm text-gray-700 w-1/6 px-4">3.8/5</td>
                    <td className="py-3 text-sm text-gray-600 w-7/12 pl-6">Displays awareness of tone and interpersonal nuances, with minor gaps.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-700 w-1/4">Acumen & Reasoning</td>
                    <td className="text-center py-3 text-sm text-gray-700 w-1/6 px-4">4.2/5</td>
                    <td className="py-3 text-sm text-gray-600 w-7/12 pl-6">Provides sound responses during role-based scenarios.</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm font-semibold text-gray-800 w-1/4">Overall</td>
                    <td className="text-center py-3 text-sm font-semibold text-gray-800 w-1/6 px-4">4.2/5</td>
                    <td className="py-3 text-sm font-semibold text-gray-800 w-7/12 pl-6">Aligned with CEFR Level C1 – Advanced User</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Column - Recommendations */}
            <div className="col-span-1">
              {/* Align strengths section with candidate summary */}
              <div className="mt-[2px]">
                {/* Strengths */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Strengths:</h4>
                  <div className="space-y-0.5 text-sm text-gray-600">
                    <div>• High fluency and confident delivery</div>
                    <div>• Demonstrates domain vocabulary and business understanding</div>
                  </div>
                </div>

                {/* Improvements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Improvements:</h4>
                  <div className="space-y-0.5 text-sm text-gray-600">
                    <div>• Could refine prepositional usage under time pressure</div>
                    <div>• Slight improvement needed in cultural expressions for casual business chats</div>
                  </div>
                </div>

                {/* VerbIQ Recommendation */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">VerbIQ Recommendation</h4>
                  <div className="space-y-0.5 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span>• Fit for Role: </span>
                      <span className="text-green-600 font-medium ml-1">✓ Strong Match</span>
                    </div>
                    <div className="flex items-center">
                      <span>• Training Required: </span>
                      <span className="text-red-500 font-medium ml-1">✗ Not Required</span>
                    </div>
                    <div>• Deployment Timeline: ⏱ Within 24-48 hours</div>
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