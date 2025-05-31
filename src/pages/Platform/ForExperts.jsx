import React from "react";

const ForExperts = () => {
  return (
    <div className="bg-[#F8FAFF] py-6 sm:py-8 px-4"> 
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12"> 
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-2">For Experts</h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-900 leading-tight max-w-6xl mx-auto">
            Land Your Next Role with AI-Verified Language & Cultural Credentials
          </h1>
        </div>

        {/* Get Discovered & Secure Role - Stack on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Get Discovered Section */}
          <div className="flex gap-4 md:ml-10 w-full">
            <div className="flex-shrink-0 w-12 sm:w-16">
              <img 
                src="public/assets/discover.png" 
                alt="Discovery icon" 
                className="w-10 sm:w-12" 
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
                Get Discovered
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li className="leading-relaxed">
                  Create a profile highlighting your languages, domain
                  expertise & experience
                </li>
                <li className="leading-relaxed">
                  Smart-tags boost visibility to hiring managers
                </li>
              </ul>
            </div>
          </div>

          {/* Secure the Role Section */}
          <div className="flex gap-4 w-full">
            <div className="flex-shrink-0 w-12 sm:w-16">
              <img 
                src="public/assets/secure.png" 
                alt="Security icon" 
                className="w-10 sm:w-12" 
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
                Secure the Role
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li className="leading-relaxed">
                  Receive interview invites & offers within 24hrs
                </li>
                <li className="leading-relaxed">
                  Choose full-time, project, or freelance engagements
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How VerbiQ Works Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Profile Enrichment */}
            <div className=" p-4 sm:p-6 rounded-lg shadow-sm hover: transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
            <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              1. Profile Enrichment
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Import CV, LinkedIn, portfolios—auto-tag your language skills
              & industry experience
            </p>
          </div>

          {/* Assessment & Certification */}
            <div className=" p-4 sm:p-6 rounded-lg shadow-sm hover: transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
            <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              2. Assessment & Certification
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              360° evaluation: grammar, fluency, vocabulary, business
              context & culture
            </p>
          </div>

          {/* Smart Matching */}
            <div className=" p-4 sm:p-6 rounded-lg shadow-sm hover: transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
            <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              3. Smart Matching
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Role-specific filters: AI training, SAP support, content
              creation, interpretation
            </p>
          </div>

          {/* Seamless Engagement */}
          <div className=" p-4 sm:p-6 rounded-lg shadow-sm hover: transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
            <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
              4. Seamless Engagement
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Built-in contract templates and secure payment processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForExperts;