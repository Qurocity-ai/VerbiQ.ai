import React from "react";
import { useState } from "react";

function Translation() {
const [activeModal, setActiveModal] = useState(null); // null | 'certified' | 'human-vs-machine'

  return (
    <div className="mb-30">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/Translation.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-50 "></div>

        {/* Hero Content */}
        <div className="relative z-10 text-white flex flex-col justify-center h-full sm:pl-40 px-10 max-w-2xl">
          <p className="sm:text-xl text-lg uppercase mb-2 text-gray-200 border-b-4 border-gray-200 font-light sm:w-39 w-34">
            TRANSLATION
          </p>
          <h1 className="text-3xl sm:text-6xl font-light leading-snug text-nowrap">
            Accuracy And Clarity On
            <br />
            Every Page
          </h1>
          <p className="mt-4 sm:text-lg text-sm text-gray-200">
            Solutions for your niche. From technical to legal, defense, more...
          </p>
          <button className="mt-6 bg-transparent border sm:w-80 w-40 border-gray-200 text-white px-2 py-2 rounded-full font-normal sm:text-2xl text-sm hover:bg-gray-200 hover:text-black transition">
            Get Quote
          </button>
        </div>
      </div>
      <h1 className="text-center text-2xl text-red-800 font-normal p-5">
        Area of Translation
      </h1>
      <div className="flex justify-center items-center min-h-screen">
        <div className="h-auto grid grid-cols-4 gap-x-6 gap-y-0 p-2">
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img
              src="/assets/Industry and Technology.png"
              alt="Industry and Technology"
              className="h-16 w-20"
            />
            <p className="text-center text-md text-red-800 font-normal">
              Industry and Technology
            </p>
          </div>
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img
              src="/assets/Confidential.png"
              alt="Confidential"
              className="h-16 w-20"
            />
            <p className="text-center text-md text-red-800 font-normal">
              Confidential
            </p>
          </div>
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img src="/assets/Legal.png" alt="Legal" className="h-16 w-20" />
            <p className="text-center text-md text-red-800 font-normal">
              Legal
            </p>
          </div>
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img
              src="/assets/Digital and Creative.png"
              alt="Digital and Creative"
              className="h-16 w-20"
            />
            <p className="text-center text-md text-red-800 font-normal">
              Digital and Creative
            </p>
          </div>
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img
              src="/assets/Pharma and Healthcare.png"
              alt="Pharma and Healthcare"
              className="h-16 w-20"
            />
            <p className="text-center text-md text-red-800 font-normal">
              Pharma and Healthcare
            </p>
          </div>
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img
              src="/assets/Education.png"
              alt="Education"
              className="h-16 w-20"
            />
            <p className="text-center text-md text-red-800 font-normal">
              Education
            </p>
          </div>
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img
              src="/assets/Marketing and Sales.png"
              alt="Marketing and Sales"
              className="h-16 w-20"
            />
            <p className="text-center text-md text-red-800 font-normal">
              Marketing and Sales
            </p>
          </div>
          <div className="h-64 border border-gray-50 w-64 flex flex-col items-center justify-center space-y-2">
            <img
              src="/assets/Finance and Economy.png"
              alt="Finance and Economy"
              className="h-16 w-20"
            />
            <p className="text-center text-md text-red-800 font-normal">
              Finance and Economy
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-lg text-gray-800 font-normal ">
        <div>
          IT & SaaS | Pharma & Healthcare | Aerospace & Defense | Automotive &
          Manufacturing | Legal & Finance
        </div>
        <div className="max-w-7xl mx-auto px-6 text-base">
          Our <span className="text-blue-600 ">“Center of Excellence”</span>{" "}
          blend sector knowledge with linguistic mastery to deliver content
          that’s{" "}
          <span className="text-blue-600 ">
            technically accurate and market‑ready
          </span>
          .
        </div>
      </div>

      <div className="flex justify-center items-center h-auto mt-52 gap-5">
        <div className="flex-col flex h-80 w-72 p-4 shadow-md ">
          <img
            className="h-20 w-20 mt-6"
            alt="Human+AI Hybrid"
            src="/assets/Human.png"
          />
          <p className="mt-14 text-red-800 font-normal text-xl ">
            Human+AI Hybrid
          </p>
          <p className="mt-4">
            Fast machine‑assist, perfected by native‑speaker linguists for
            accuracy and tone.
          </p>
        </div>
        <div className="flex-col flex h-80 w-72 p-4 shadow-md ">
          <img
            className="h-20 w-20 mt-6"
            alt="Global Network"
            src="/assets/Global.png"
          />
          <p className="mt-14 text-red-800 font-normal text-xl ">
            Global Network
          </p>
          <p className="mt-4">
            20,000+ vetted translators and interpreters covering every major
            language and dialect.
          </p>
        </div>
        <div className="flex-col flex h-80 w-72 p-4 shadow-md ">
          <img
            className="h-20 w-20 mt-6"
            alt="Enterprise‑Graded"
            src="/assets/Enterprise.png"
          />
          <p className="mt-14 text-red-800 font-normal text-xl ">
            Enterprise‑Grade Quality
          </p>
          <p className="mt-4">
            ISO 17100 workflows, encrypted channels, full compliance (GDPR,
            HIPAA where needed).
          </p>
        </div>

        <div className="flex-col flex h-80 w-72 p-4 shadow-md ">
          <img
            className="h-20 w-20 mt-6"
            alt="95% On‑Time Delivery"
            src="/assets/Time Delivery.png"
          />
          <p className="mt-14 text-red-800 font-normal text-xl ">
            95% On‑Time Delivery
          </p>
          <p className="mt-4">
            Rigorous project management ensures your deadlines are met - every
            time.
          </p>
        </div>
      </div>
      <div className="text-lg mt-8 text-center font-normal">
        <div className="max-w-7xl mx-auto p-4">
          VerbiQ combines 5+ years of{" "}
          <span className="text-blue-600 "> language services experience</span>{" "}
          with <span className="text-blue-600 ">cutting‑edge AI </span> to
          deliver{" "}
          <span className="text-blue-600 ">
            {" "}
            100% human‑vetted translations{" "}
          </span>{" "}
          in 20+ global and Indian languages. With a 95%{" "}
          <span className="text-blue-600 "> on‑time delivery </span>record and
          certified security, we help you communicate flawlessly—everywhere.
        </div>

        {/* Divide Portion */}
        <div className="max-w-screen-xl mx-auto flex justify-start items-center mt-20 px-8 gap-150 px-4">
          <div className="flex items-center gap-2">
            <img src="/assets/services.png" className="w-9 h-9" />
            <p className="text-blue-600 text-md">Our Service</p>
          </div>
          <div className="flex items-center gap-2 ml-[-76px] ">
            <img src="/assets/Industires.png" className="w-9 h-9" />
            <p className="text-blue-600 text-md">
              Industries We Serve and their experiences
            </p>
          </div>
        </div>
        <hr className="border-t-[1px] border-black w-4/5 mt-4 mx-auto "></hr>

        {/* Content two side */}
        <div className=" max-w-screen-xl mx-auto flex justify-between items-start  mt-5 m-4 h-100% gap-18 px-4">
          <div className=" w-3/6 h-auto pr-2 pl-4">
            <ul className="text-base text-start">
              <li>
                {" "}
                <span className="text-blue-600 ">
                  Technical & Documentation:
                </span>{" "}
                Industry‑expert translators ensure error‑free manuals,
                blueprints, and training guides.
              </li>
              <li>
                {" "}
                <span className="text-blue-600 ">
                  Legal & Confidential:
                </span>{" "}
                Certified linguists handle contracts, patents, and court filings
                under strict NDAs.
              </li>
              <li>
                {" "}
                <span className="text-blue-600 ">
                  Life Sciences & Healthcare:
                </span>{" "}
                Compliance‑ready translations for clinical trials, medical
                devices, and pharma labeling.
              </li>
              <li>
                {" "}
                <span className="text-blue-600 ">
                  Marketing & Multimedia:
                </span>{" "}
                Culturally tuned localization, voice‑overs, and transcreation
                for global campaigns.
              </li>
            </ul>
            <p className="text-base text-blue-600 ">
              “Our clients see 40% fewer support tickets and 60% faster market
              rollout”{" "}
            </p>
            <p className="text-red-800 text-left p-2">Why VerbIQ </p>
            <ul className="text-base text-start">
              <li>
                Human & AI Hybrid: Fast machine‑assist, perfected by native
                experts.
              </li>
              <li>
                {" "}
                Global Network: 20,000+ linguists delivering local nuance.
              </li>
            </ul>
          </div>

          <div className=" w-3/6 p-4">
            <p className="text-blue-600 font-semibold text-base mb-2 text-left -mt-4">
              IT & SaaS
            </p>
            <p className="text-gray-700 text-sm text-left">
              We launched in 6 new markets in under 30 days — VerbiQ’s precision
              in technical translation cut user confusion by 40%.
            </p>
            <div className="border-t border-gray-300 mt-2"></div>
            {/* 2 */}
            <p className="text-blue-600 font-semibold text-base mb-2 text-left mt-4">
              Aerospace & Defense
            </p>
            <p className="text-gray-700 text-sm text-left">
              With VerbiQ, we reduced critical documentation errors by 60%,
              ensuring faster deployment and audit readiness.
            </p>
            <div className="border-t border-gray-300 mt-2"></div>
            {/* 3 */}
            <p className="text-blue-600 font-semibold text-base mb-2 text-left mt-4">
              Automotive & Manufacturing
            </p>
            <p className="text-gray-700 text-sm text-left">
              Assembly-line downtimes dropped 35% after multilingual SOPs and
              manuals were deployed with VerbiQ’s native expertise.{" "}
            </p>
            <div className="border-t border-gray-300 mt-2"></div>
            {/* 4 */}
            <p className="text-blue-600 font-semibold text-base mb-2 text-left mt-4">
              Pharma & Healthcare
            </p>
            <p className="text-gray-700 text-sm text-left">
              Their compliance ready translations helped us pass EU regulatory
              audits on first submission—zero rework, zero delays.{" "}
            </p>
            <div className="border-t border-gray-300 mt-2"></div>
            {/* 5 */}
            <p className="text-blue-600 font-semibold text-base mb-2 text-left mt-4">
              Life Sciences
            </p>
            <p className="text-gray-700 text-sm text-left">
              Clinical trial localization that used to take 3 weeks was done in
              4 days—VerbiQ became an extension of our global ops.
            </p>
            <div className="border-t border-gray-300 mt-2"></div>
            <p className="text-blue-600 font-semibold text-base mb-2 text-left mt-4">
              Logistics & Business Services
            </p>
            <p className="text-gray-700 text-sm text-left">
              We saved 120+ support hours monthly with multilingual chat scripts
              that VerbiQ localized and interpreted across 8 regions.
            </p>
            <div className="border-t border-gray-300 mt-2"></div>
          </div>
        </div>
      </div>

      {/* Last section with 2 image */}
      <div className=" max-w-screen-xl mx-auto flex justify-between items-start  mt-20 mb-4 h-auto gap-18 px-6 ">
        <div className=" w-2/5 h-auto pr-2 pl-4  h-auto p-6 mt-20">
          <p className="font-semibold text-lg">Market Pain Points</p>
          <ul className="mt-2 text-sm	">
            <li>
              {" "}
              Many providers rely solely on MT or junior linguists leading to
              errors in technical or legal contexts.
            </li>
            <li>
              Separate vendors for translation, review, and localization create
              delays and inconsistencies.
            </li>
            <li>
              {" "}
              Non‑specialized translators miss critical industry jargon,
              increasing risk and rework.
            </li>
          </ul>
        </div>
        <div className="w-3/5 mt-10 flex flex-row gap-5">
          <div className="w-3/6 ">
            <img
              className="w-80 h-96 mb-5"
              src="/assets/Certified.png"
              alt="Certified Translators"
            />
            <p className="text-gray-800	">
              Certified Translators vs generalists ?
            </p>
            <p className="text-gray-800	"> Where it truly matters.</p>
           <p
  className="text-red-800 underline cursor-pointer hover:underline flex items-center gap-1"
  onClick={() => setActiveModal('certified')}
>
  Read Article
  <span className="text-sm">🖱️</span>
</p>
          </div>
          <div className="w-3/6">
            <img
              className="w-80 h-96 mb-5"
              src="/assets/Machine Translation.png"
              alt="Certified Translators"
            />
            <p className="text-gray-800	">Human vs Machine Translation: </p>
            <p className="text-gray-800	"> What is right for you ?</p>
          <p
  className="text-red-800 underline cursor-pointer hover:underline flex items-center gap-1"
  onClick={() => setActiveModal('human-vs-machine')}
>
  Read Article
  <span className="text-sm">🖱️</span>
</p>
          </div>
        </div>
      </div>

           {activeModal === 'certified' && (
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
                      or ISO 17100. Studies show up to 99% accuracy in
                      technical and legal texts (TechTrans 2023).
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
      {activeModal === 'human-vs-machine' && (
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
                      require precise terminology that AI frequently misinterprets.
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

export default Translation;
