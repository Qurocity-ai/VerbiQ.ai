import React from "react";

const ForExperts = () => {
  return (
    <div className="bg-[#F8FAFF] py-8 px-4"> 
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12"> 
          <h2 className="text-3xl text-gray-800 mb-2">For Experts</h2>
          <h1 className="text-3xl md:text-3xl text-gray-900 leading-tight max-w-6xl mx-auto">
            Land Your Next Role with AI-Verified Language & Cultural Credentials
          </h1>
        </div>

        {/* Get Discovered & Secure Role */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Get Discovered Section */}
          <div className="flex gap-4  ml-10 w-2sm">
            <div className="flex-shrink-0 w-16">
              <img src="public/assets/discover.png" alt="" className="w-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Get Discovered
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  Create a profile highlighting your languages, domain
                  expertise & experience
                </li>
                <li>
                  Smart-tags boost visibility to hiring managers
                </li>
              </ul>
            </div>
          </div>

          {/* Secure the Role Section */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-16">
              <img src="public/assets/secure.png" alt="" className="w-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Secure the Role
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  Receive interview invites & offers within 24hrs
                </li>
                <li>
                  Choose full-time, project, or freelance engagements
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Points in 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Profile Enrichment */}
          <div className=" p-6 rounded-lg shadow-sm">
            <h3 className="text-xl text-gray-900 mb-3">
              1. Profile Enrichment
            </h3>
            <p className="text-gray-700">
              Import CV, LinkedIn, portfolios—auto-tag your language skills
              & industry experience
            </p>
          </div>

          {/* Assessment & Certification */}
          <div className=" p-6 rounded-lg shadow-sm">
            <h3 className="text-xl text-gray-900 mb-3">
              2. Assessment & Certification
            </h3>
            <p className="text-gray-700">
              360° evaluation: grammar, fluency, vocabulary, business
              context & culture
            </p>
          </div>

          {/* Smart Matching */}
          <div className=" p-6 rounded-lg shadow-sm">
            <h3 className="text-xl text-gray-900 mb-3">
              3. Smart Matching
            </h3>
            <p className="text-gray-700">
              Role-specific filters: AI training, SAP support, content
              creation, interpretation
            </p>
          </div>

          {/* Seamless Engagement */}
          <div className=" p-6 rounded-lg shadow-sm">
            <h3 className="text-xl text-gray-900 mb-3">
              4. Seamless Engagement
            </h3>
            <p className="text-gray-700">
              Built-in contract templates and secure payment processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForExperts;