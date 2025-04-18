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
        "VerbiQ evaluates cultural fit by creating real-world scenarios that simulate workplace interactions across different cultural contexts. Through these situation-based assessments, we observe how candidates respond, adapt, and communicate, ensuring they align naturally with the organization's cultural values.",
    },
    {
      question: "How does VerbiQ prevent bias in assessments?",
      answer:
        "At VerbiQ, we’ve engineered our AI assessment system to focus strictly on language proficiency, communication skills, and cultural understanding — not personal attributes. Our models are trained to evaluate responses based solely on objective linguistic parameters, without regard to gender, ethnicity, nationality, or personal background. By anonymizing inputs and applying standardized evaluation metrics, we ensure every candidate is assessed fairly, consistently, and without unconscious bias, setting a new benchmark for ethical language assessment.",
    },
    {
      question: "What reporting and analytics does VerbiQ provide?",
      answer:
        "VerbiQ provides detailed reporting across key language dimensions — Grammar, Fluency, Efficacy, Cultural Understanding, and Business Acumen. Each candidate receives a comprehensive performance report highlighting strengths, areas for improvement, and role-specific suitability. Our analytics empower organizations to make data-driven hiring decisions with deeper insights into a candidate’s real-world communication abilities.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-end justify-center h-auto">
      <div className="sm:grid sm:grid-cols-2 gap-4 flex flex-col items-center justify-center w-screen sm:pr-30 sm:pl-48 py-34">
        <div className="sm:col-span-1 sm:text-[40px] text-[22px] sm:font-normal text-[#0e128b] leading-[100%] flex justify-center w-full">
          Frequently Asked <br className="sm:flex hidden" /> Questions
        </div>
        <div className="sm:col-span-1 pl-3 sm:pr-28 h-auto w-full">
          {faqData.map((item, index) => (
            <div key={index} className=" border-b border-b-gray-300 ">
              <button
                className={`w-full text-left py-4 px-5 flex items-center justify-between transition-colors  duration-700 ${
                  activeIndex === index ? " text-indigo-700" : " text-gray-700"
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`text-wrap flex justify-between items-center font-medium  w-full sm:text-[17px] text-[12px] transition-all duration-700 ${
                    activeIndex === index ? "text-[#161a85]" : "text-[#969696]"
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
                    className="sm:h-6 sm:w-6 h-5 w-5 "
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
                className={` transition-all duration-1000 ease-in-out overflow-hidden px-6 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-[#1015b4] opacity-100 sm:text-[15px] text-[9px]  ">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
