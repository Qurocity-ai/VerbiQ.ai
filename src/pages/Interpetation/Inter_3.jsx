import React from "react";

function Inter_3() {
  return (
    <div className="px-4 md:px-16">
      {/* Two Column Info Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium flex justify-start text-lg mb-2 text-blue-600 ">
            <img src="\assets\service.png" className="h-6 w-6" />
            <span className="ml-4">Our Services</span>
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-800">
            <li>
              <a href="#" className="text-blue-700">
                Simultaneous & Remote Interpretation:
              </a>
              Real‑time audio for conferences, webinars, and virtual
              events—seamless integration with major platforms.
            </li>
            <li>
              <a href="#" className="text-blue-700">
                Consecutive & Whisper Interpretation:
              </a>
              Precise turn‑taking or discreet on‑the‑fly support for boardrooms,
              press briefings, and VIP tours.
            </li>
            <li>
              <a href="#" className="text-blue-700">
                Technical & Workshop Support:
              </a>
              Domain‑trained linguists for live product demos, engineering
              training, plant visits, and technical Q&A.
            </li>
            <li>
              <a href="#" className="text-blue-700">
                Legal & Court Interpretation:
              </a>
              Certified experts for depositions, arbitrations, and trials—100%
              confidentiality and protocol compliance.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium flex justify-start text-lg mb-2 text-blue-600 ">
            <img src="\assets\industries.png" className="h-6 w-6" />
            <span className="ml-4">
              Industries We Serve and Real Applications
            </span>
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-800">
            <li className="flex flex-col items-start">
              <span className="text-blue-800 font-semibold">IT & SaaS</span>
              <span>
                Real-time interpreter support during product demos helped us
                secure 3 global enterprise deals in under a week
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="text-blue-800 font-semibold">
                Aerospace & Defense
              </span>
              <span>
                Simultaneous interpretation during defense briefings eliminated
                delays and ensured classified information was accurately
                conveyed.
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="text-blue-800 font-semibold">
                Automotive & Manufacturing
              </span>
              <span>
                Factory training sessions in 4 languages, delivered with on-site
                interpreters, reduced production errors by 30% in the first
                month
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="text-blue-800 font-semibold">
                Pharma & Healthcare
              </span>
              <span>
                Certified medical interpreters ensured zero miscommunication
                during critical regulatory audits and patient interviews.
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="text-blue-800 font-semibold">Life Sciences</span>
              <span>
                Live interpretation during investigator meetings improved
                protocol understanding across 5 trial sites—cutting onboarding
                time by 50%.
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="text-blue-800 font-semibold">
                Logistics & Business Services
              </span>
              <span>
                VerbiQ interpreters bridged 6 language gaps in real-time during
                a global vendor arbitration—settled in one session.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Inter_3;
