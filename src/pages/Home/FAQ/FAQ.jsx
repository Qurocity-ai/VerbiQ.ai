import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How accurate are the AI-powered language assessments?",
      answer:
        "VerbiQ’s AI models are trained on large, high-quality multilingual datasets, ensuring 98%+ accuracy in language proficiency evaluation and consistent scoring across candidates.",
    },
    {
      question: "How does VerbiQ evaluate cultural fit?",
      answer:
        "VerbiQ’s AI models are trained on large, high-quality multilingual datasets, ensuring 98%+ accuracy in language proficiency evaluation and consistent scoring across candidates.",
    },
    {
      question: "How does VerbiQ prevent bias in assessments?",
      answer:
        "VerbiQ’s AI models are trained on large, high-quality multilingual datasets, ensuring 98%+ accuracy in language proficiency evaluation and consistent scoring across candidates.",
    },
    {
      question: "What reporting and analytics does VerbiQ provide?",
      answer:
        "VerbiQ’s AI models are trained on large, high-quality multilingual datasets, ensuring 98%+ accuracy in language proficiency evaluation and consistent scoring across candidates.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen ">
      <div className="sm:grid sm:grid-cols-12 gap-4 flex flex-col items-center justify-center w-screen  sm:pr-38 sm:pl-72 py-34">
        <div className="sm:col-span-5 sm:text-[52px] text-[22px] sm:font-normal text-[#0e128b] leading-[100%] flex justify-center w-full">
          Frequently Asked <br className="sm:flex hidden" /> Questions
        </div>
        <div className="sm:col-span-7 sm:pl-40 pl-3 pr-3 w-full">
          {faqData.map((item, index) => (
            <div key={index} className=" border-b border-b-gray-300">
              <button
                className={`w-full text-left py-4 px-5 flex items-center justify-between transition-colors duration-300 ${
                  activeIndex === index ? " text-indigo-700" : " text-gray-700"
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`sm:leading-[100%]   font-[Helvetica] text-wrap flex justify-between items-center w-full ${
                    activeIndex === index
                      ? "text-[#0e128b] font-bold"
                      : "text-[#969696]"
                  }`}
                >
                  {item.question}
                </span>
                {activeIndex === index ? (
                  ""
                ) : (
                  <svg
                    role="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    data-test-icon="add-small"
                    className="sm:h-7 sm:w-7 h-5 w-5"
                  >
                    <path
                      d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"
                      fill="#969696
"
                    />
                  </svg>
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "py-2 px-5" : "h-0"
                }`}
              >
                <p className="text-[#0e128b] opacity-95">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
