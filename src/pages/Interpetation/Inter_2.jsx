import React from "react";
import { Briefcase, Users, Layers, ShieldCheck } from "lucide-react";

function Inter_2() {
  return (
    <div className="px-4 md:px-16">
      {/* Icons with Descriptions */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <img
            src="\assets\speicilized.png"
            className="mx-auto h-16 w-18 sm:mr-40 sm:mb-16 "
          />
          <h4 className="font-semibold text-[15px] mt-2 text-red-700 text-left text-wrap">
            Specialized Interpreters
          </h4>
          <p className="text-sm mt-1 text-left">
            From legal experts to technical linguists, we match your sessions
            with interpreters who understand your domain inside out.
          </p>
        </div>
        <div className="text-center">
          <img
            src="\assets\Global.png"
            className="mx-auto h-16 w-18 sm:mr-40 sm:mb-16"
          />
          <h4 className="font-semibold text-[15px] mt-2 text-red-700 text-left text-wrap">
            Global & Multilingual Coverage
          </h4>
          <p className="text-sm mt-1 text-left">
            10,000+ interpreters across 100+ languages—available for onsite,
            virtual, and hybrid formats worldwide.
          </p>
        </div>
        <div className="text-center">
          <img
            src="\assets\real.png"
            className="mx-auto h-16 w-18 sm:mr-40 sm:mb-16"
          />
          <h4 className="font-semibold text-[15px] mt-2 text-red-700 text-left text-wrap">
            Real-Time Precision
          </h4>
          <p className="text-sm mt-1 text-left">
            Simultaneous or consecutive—our interpreters deliver fluent,
            context-aware communication across high-stakes settings.
          </p>
        </div>
        <div className="text-center">
          <img
            src="\assets\secure.png"
            className="mx-auto h-16 w-18 sm:mr-40 sm:mb-16"
          />
          <h4 className="font-semibold text-[15px] mt-2 text-red-700 text-left text-wrap">
            Secure & Compliant
          </h4>
          <p className="text-sm mt-1 text-left">
            Strict NDAs, GDPR & HIPAA-ready protocols, and encrypted
            conferencing tools ensure your sessions stay confidential.
          </p>
        </div>
      </div>
      <hr className="text-gray-300 mt-6" />
      <p className="pt-9">
        With over 5 years of experience in{" "}
        <a href="#" className="text-blue-700">
          enterprise language solutions
        </a>{" "}
        , VerbiQ powers seamless multilingual communication through{" "}
        <a href="#" className="text-blue-700">
          certified interpreters
        </a>{" "}
        across domains—
        <a href="#" className="text-blue-700">
          from Courtrooms and Tech Conferences to Global Boardrooms
        </a>
        . Whether{" "}
        <a href="#" className="text-blue-700">
          on-site or virtual
        </a>
        , we ensure every conversation lands with{" "}
        <a href="#" className="text-blue-700">
          clarity, accuracy, and impact
        </a>
        .
      </p>
    </div>
  );
}

export default Inter_2;
