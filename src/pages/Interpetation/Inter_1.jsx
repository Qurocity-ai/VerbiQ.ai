import React from "react";

function Inter_1() {
  return (
    <div className="px-4 md:px-16">
      {/* Header Section */}
      <h2 className="text-center text-lg font-light text-red-600 mb-4">
        Areas of Specialization
      </h2>

      {/* Grid Section */}
      <div className="flex flex-wrap justify-center text-center">
        <div className="p-4 h-40 w-60 border-2 border-gray-200 rounded hover:shadow ">
          <img
            src="/assets/conference.png"
            className="mx-auto h-20 w-20 mb-2 "
          />
          <p className="text-red-700 font-normal text-wrap text-[15px]">
            Conferences & Workshops
          </p>
        </div>
        <div className="p-4 rounded h-40 w-60 hover:shadow border-2 border-gray-200">
          <img src="/assets/Legal.png" className="mx-auto h-20 w-20 mb-2" />
          <p className="text-red-700 font-normal text-wrap text-[15px]">
            Legal & Courtroom
          </p>
        </div>
        <div className="p-4 h-40 w-60 rounded hover:shadow border-2 border-gray-200">
          <img src="/assets/executive.png" className="mx-auto h-20 w-20 mb-2" />
          <p className="text-red-700 font-normal text-wrap text-[15px]">
            Executive & Board Meetings
          </p>
        </div>
        <div className="p-4 h-40 w-60 rounded hover:shadow border-2 border-gray-200">
          <img src="/assets/virtual.png" className="mx-auto h-20 w-20 mb-2" />
          <p className="text-red-700 font-normal text-wrap text-[15px]">
            Virtual Summits & Webinars
          </p>
        </div>
        <div className="p-4 h-40 w-60 rounded hover:shadow border-2 border-gray-200">
          <img src="/assets/medical.png" className="mx-auto h-20 w-20 mb-2" />
          <p className="text-red-700 font-normal text-wrap text-[15px]">
            Medical & Healthcare
          </p>
        </div>
        <div className="p-4 h-40 w-60 rounded hover:shadow border-2 border-gray-200">
          <img src="/assets/plant.png" className="mx-auto h-20 w-20 mb-2" />
          <p className="text-red-700 font-normal text-wrap text-[15px]">
            Plant Tours & Site Visits
          </p>
        </div>
        <div className="p-4 h-40 w-60 rounded hover:shadow border-2 border-gray-200">
          <img src="/assets/emergency.png" className="mx-auto h-20 w-20 mb-2" />
          <p className="text-red-700 font-normal text-wrap text-[15px]">
            Emergency & On-Demand Services
          </p>
        </div>
      </div>
      <p className="text-gray-600 text-center pt-9">
        Legal & Compliance | Healthcare & Pharma | Manufacturing & Engineering |
        Government & Defense | IT & Business Services
      </p>
      <p className="text-gray-600 text-center ">
        Our interpreters bring cultural intelligence and subject-matter command
        to every interaction—onsite, on-call, or online.
      </p>
    </div>
  );
}

export default Inter_1;
