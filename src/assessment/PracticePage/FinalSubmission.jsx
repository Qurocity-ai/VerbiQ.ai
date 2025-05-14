
import React from 'react';

const FinalSubmission = ({ onSubmit }) => {
  const sections = [
    { title: 'Reading', attempted: '13 of 13', isCompleted: true },
    { title: 'Writing', attempted: '13 of 13', isCompleted: true },
    { title: 'Listening', attempted: '15 of 15', isCompleted: true },
    { title: 'Speaking', attempted: '6 of 6', isCompleted: true },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-white rounded-md  w-[600px] p-10">
        {/* Section List */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-[#C9C9C9] pb-3"
            >
              <div>
                <h2 className="text-[#00475D] text-base font-medium">{section.title}</h2>
                <p className="text-[#ADADAD] text-sm">{section.attempted} attempted</p>
              </div>
              <img
                src={section.isCompleted ? '/assets/list_check.png' : '/assets/list_uncheck.png'}
                alt={section.isCompleted ? 'Completed' : 'Incomplete'}
                className="w-6 h-5"
              />
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="mt-8 text-center">
          <p className="text-[#00475D] text-[16px] leading-snug">
            All questions have been answered. Please proceed to submit the<br />
            assessment
          </p>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            onClick={onSubmit}
            className="w-full bg-[#B0181B] hover:bg-[#8B1214] text-white text-base font-medium py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalSubmission;
