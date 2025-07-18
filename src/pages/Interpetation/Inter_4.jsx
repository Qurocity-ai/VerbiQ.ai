import React from "react";

function Inter_4() {
  return (
    <div className=" grid md:grid-cols-2 gap-6 pb-18">
      <div className="mt-12 md:grid-cols-2 gap-6">
        <h3 className="font-semibold">Market Pain Points</h3>
        <ul className="list-disc list-inside text-sm text-gray-800">
          <li>
            Many vendors supply{" "}
            <a href="#" className="text-blue-700">
              generalist linguists
            </a>{" "}
            without domain expertise—
            <a href="#" className="text-blue-700">
              leading to misunderstandings
            </a>{" "}
            in technical briefings, legal proceedings, or medical consultations.{" "}
          </li>
          <li>
            <a href="#" className="text-blue-700">
              Inconsistent Quality & Compliance:
            </a>{" "}
            Without certified specialists, sessions often suffer from{" "}
            <a href="#" className="text-blue-700">
              inaccuracies
            </a>
            , confidentiality{" "}
            <a href="#" className="text-blue-700">
              breaches
            </a>{" "}
            , and{" "}
            <a href="#" className="text-blue-700">
              non-compliant
            </a>{" "}
            with industry or legal standards.
          </li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded md:col-span-1 overflow-hidden shadow">
          <img
            src="\assets\Group.jpg"
            alt="Client Discussion"
            className="w-fit h-auto"
          />
          <p className="p-1 text-sm text-start">
            Simultaneous vs. Consecutive Interpretation: Choosing the Right Mode
            for You ?
          </p>
          <button className="text-red-700 border-b-1 border-red-700 pb-1 text-sm text-center cursor-pointer">
            Read Article
          </button>
        </div>
        <div className="rounded md:col-span-1 overflow-hidden shadow">
          <img
            src="\assets\Domain.jpg"
            alt="Digital Governance"
            className="w-fit h-auto"
          />
          <p className="p-1 text-sm text-start">
            Why Domain Expertise in Interpretation Makes or Breaks Critical
            Conversations
          </p>
          <button className="text-red-700 border-b-1 border-red-700 pb-1 text-sm text-center cursor-pointer">
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inter_4;
