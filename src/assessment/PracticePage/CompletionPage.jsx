import React from 'react';

const CompletionPage = () => {
    const handleCloseTab = () => {
        const isClosed = window.close();
        if (!isClosed) {
          alert("Please close this tab manually as the browser has blocked automatic closing.");
        }
      };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-1">
      {/* Top Line */}
      {/* <div className="w-full border-t border-[#00475D]" /> */}

      {/* Logo */}
      <div className="mt-4">
        <img
          src="/assets/virbiqlogo.png" // Replace with the actual logo path
          alt="Virbiq Logo"
          className="w-full h-auto"
        />
      </div>

      {/* Message */}
      <div className="mt-8 text-center">
        <p className="text-[#00475D] text-[18px]">
          You’ve completed your assessment. Your report will be sent to your E-mail ID.
        </p>
        <p className="text-[#00475D] text-[18px] mt-2">
          For any discrepancies or queries, Please reach out on <strong>partner@recruitory.com</strong>
        </p>
      </div>

      {/* Close Tab Link */}
      <div className="mt-6">
        <button
          onClick={handleCloseTab}
          className="text-[#B0181B] text-[15px] font-medium underline"
        >
          Close tab
        </button>
      </div>
    </div>
  );
};

export default CompletionPage;