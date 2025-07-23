import React, { useState } from "react";

function Inter_4() {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <div className=" grid md:grid-cols-2 gap-6 px-4 md:px-16">
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
          <button
            className="text-red-700 border-b-1 border-red-700 pb-1 text-sm text-center cursor-pointer"
            onClick={() => setActiveModal("Simultaneous")}
          >
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
          <button
            className="text-red-700 border-b-1 border-red-700 pt-2 pb-1 text-sm text-center cursor-pointer"
            onClick={() => setActiveModal("Domain")}
          >
            Read Article
          </button>
        </div>
      </div>

      {/* Modal for Simultaneous Interpretation */}
      {activeModal === "Simultaneous" && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center 
             px-4 py-10 pt-30 shadow-xl rounded-t"
          onClick={() => setActiveModal(null)}
        >
          <article
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-lg shadow-xl 
             overflow-y-auto font-pop text-[22px] leading-[1] tracking-[-1px] 
             text-justify text-gray-800"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <header className="sticky top-0 z-1000 px-6 pt-4 pb-3 border-b border-gray-200 flex items-start justify-between shadow-md rounded-t-lg bg-white">
              <div>
                <h2 className="text-xl font-bold text-[#0056A3] leading-tight tracking-wide">
                  Certified Translators vs. Generalists:
                </h2>
                <p className="text-lg text-[#007AC1] mt-1 tracking-wide">
                  Why Expertise Matters
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 flex items-center justify-center text-[#007AC1] text-[18px] font-bold rounded-full shadow-md hover:bg-blue-100 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </header>

            <div className="px-15 py-6 space-y-4 text-base tracking-wide">
              <p>
                In the global marketplace, translation errors can carry hefty
                consequences—misinterpretations in a patent application or
                safety manual could lead to legal disputes, regulatory fines, or
                even endanger lives. Yet many vendors rely on generalist
                translators who lack domain-specific certifications, opting for
                cost savings over quality.
              </p>

              <p>
                At VerbiQ, we've observed that certified specialists
                consistently deliver superior results, especially in high-stakes
                industries. Below, we explore the data-backed differences,
                real-world pitfalls, and why certified expertise should be your
                first choice.
              </p>

              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Accuracy&Compliance
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      Certified translators hold credentials like ATA, CIOL/ITI,
                      or ISO 17100. Studies show up to 99% accuracy in technical
                      and legal texts (TechTrans 2023).
                    </li>
                    <li>
                      Generalists often miss industry jargon, compliance
                      clauses, or nuanced terms—introducing risk in regulated
                      sectors.
                    </li>
                  </ul>
                </li>

                <li>
                  Speed vs. Quality Trade-off
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      Generalist providers advertise fast turnarounds but
                      require 2-3 revision cycles, extending delivery 30-50%.
                    </li>
                    <li>
                      Certified experts leverage glossaries and QA protocols to
                      get it right the first time (95% first-pass acceptance).
                    </li>
                  </ul>
                </li>

                <li>
                  Specialized Knowledge
                  <p className="mt-1">
                    Domains like aerospace demand precise terminology ("thrust
                    vector control"). Certified linguists often have engineering
                    backgrounds that generalists lack.
                  </p>
                </li>

                <li>
                  Real-World Failure Modes
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      A global manufacturer's mistranslated safety manual caused
                      a recall and $2M liability.
                    </li>
                    <li>
                      Poor marketing localization cut an e-commerce conversion
                      rate by 20%.
                    </li>
                  </ul>
                </li>

                <li>
                  ROI&Trust
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Higher confidence for audit trails and regulators.</li>
                    <li>Fewer revisions → lower total cost of ownership.</li>
                  </ul>
                </li>
              </ol>

              <p className="pt-2 pb-15">
                In critical sectors—legal, pharma, aerospace—expertise isn't
                optional. Certified translators deliver the precision,
                compliance, and speed that generalists can't match. Choose
                certification, not compromise.
              </p>
            </div>
          </article>
        </div>
      )}

      {/* Human vs Machine Translation Modal */}
      {activeModal === "Domain" && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center 
             px-4 py-10 pt-30 shadow-xl rounded-t"
          onClick={() => setActiveModal(null)}
        >
          <article
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-lg shadow-xl 
             overflow-y-auto font-pop text-[22px] leading-[1] tracking-[-1px] 
             text-justify text-gray-800"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <header className="sticky top-0 z-1000 px-6 pt-4 pb-3 border-b border-gray-200 flex items-start justify-between shadow-md rounded-t-lg bg-white">
              <div>
                <h2 className="text-xl font-bold text-[#0056A3] leading-tight tracking-wide">
                  Human vs Machine Translation:
                </h2>
                <p className="text-lg text-[#007AC1] mt-1 tracking-wide">
                  Finding the Right Balance for Your Needs
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 flex items-center justify-center text-[#007AC1] text-[18px] font-bold rounded-full shadow-md hover:bg-blue-100 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </header>

            <div className="px-15 py-6 space-y-4 text-base tracking-wide">
              <p>
                In today's globalized world, businesses face a critical choice:
                human translation, machine translation, or a hybrid approach.
                While AI-powered tools have made significant strides, they still
                can't match human nuance in many scenarios. Here's a detailed
                comparison to help you make an informed decision.
              </p>

              <h3 className="font-semibold text-[#0056A3] mt-4">
                When Machine Translation Excels:
              </h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Speed & Volume
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      Machines can process thousands of words in seconds, ideal
                      for real-time chat or high-volume, low-risk content.
                    </li>
                    <li>
                      Cost-effective for internal communications or getting the
                      gist of foreign documents.
                    </li>
                  </ul>
                </li>

                <li>
                  Consistency
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      AI maintains perfect consistency with terminology when
                      properly trained on glossaries.
                    </li>
                    <li>
                      Best for technical documentation with repetitive phrases.
                    </li>
                  </ul>
                </li>
              </ol>

              <h3 className="font-semibold text-[#0056A3] mt-4">
                Where Human Translation is Essential:
              </h3>
              <ol className="list-decimal pl-5 space-y-2" start="3">
                <li>
                  Cultural Nuance
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      Humans understand idioms, humor, and local references that
                      machines often butcher (e.g., "break a leg" literally
                      translated to Chinese).
                    </li>
                    <li>
                      Critical for marketing, literature, and customer-facing
                      content.
                    </li>
                  </ul>
                </li>

                <li>
                  Complex Subject Matter
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      Legal contracts, medical documents, and technical manuals
                      require precise terminology that AI frequently
                      misinterprets.
                    </li>
                    <li>
                      Human experts understand context and can research
                      specialized terms.
                    </li>
                  </ul>
                </li>

                <li>
                  Quality Assurance
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      Professional translators provide certified accuracy (up to
                      99.9% for human-reviewed content vs. 85-90% for raw MT).
                    </li>
                    <li>
                      Humans catch subtle errors that could lead to costly
                      misunderstandings.
                    </li>
                  </ul>
                </li>
              </ol>

              <h3 className="font-semibold text-[#0056A3] mt-4">
                The VerbiQ Hybrid Approach:
              </h3>
              <p>
                We combine the best of both worlds with our Human+AI
                methodology:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>First Pass:</strong> AI handles the bulk translation
                  with custom-trained engines
                </li>
                <li>
                  <strong>Human Polish:</strong> Native-speaking experts refine
                  for accuracy and tone
                </li>
                <li>
                  <strong>Final QA:</strong> Industry specialists verify
                  technical correctness
                </li>
              </ul>

              <p className="pt-4">
                This approach delivers <strong>60% faster</strong> turnaround
                than pure human translation at <strong>40% lower cost</strong>,
                while maintaining <strong>human-level quality</strong> where it
                matters most.
              </p>

              <p className="pt-2 pb-15">
                <strong>The Bottom Line:</strong> For casual use or internal
                communications, machine translation may suffice. But for
                customer-facing, legal, or technical content, human expertise
                remains irreplaceable. Our hybrid model gives you the perfect
                balance of speed, cost, and quality.
              </p>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}

export default Inter_4;
