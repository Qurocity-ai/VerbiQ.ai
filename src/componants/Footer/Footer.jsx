import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-11 sm:h-[166px] w-full">
      <div className="flex justify-evenly  items-center sm:flex-row flex-col w-full sm:pr-40 sm:pl-16 pb-4">
        <img
          src="\Footer\assets\Group 514676.png"
          alt="VerbiQ.ai"
          className="w-40 h-10"
        />

        <div className="flex flex-wrap items-center justify-center sm:grid sm:grid-cols-4 gap-6 sm:pl-[50px] py-5">
          <div className="sm:flex sm:flex-col sm:w-36 sm:h-[73px]">
            <a href="#" className="sm:pb-4 pr-2.5 text-[#00046C]">
              Careers
            </a>
            <a href="#" className="text-[#00046C]">
              Blogs
            </a>
          </div>
          <div className="sm:flex sm:flex-col sm:w-36 sm:h-[70px] sm:pl-[20px] ">
            <a href="#" className="sm:pb-4 pr-4 text-[#00046C]">
              Jobs
            </a>
            <a href="#" className="text-[#00046C]">
              News Letters
            </a>
          </div>
          <div className=" sm:flex  sm:flex-col sm:col-span-1 hidden sm:w-[134px] sm:h-[73px] sm:pl-16">
            <a href="#" className="sm:flex sm:pb-4 items-center">
              <img
                src="\Footer\assets\image 213.png"
                alt="LinkedIn-logo"
                className="w-7 h-7 mr-2"
              />
              <span className="text-[#00046C]"> LinkedIn</span>
            </a>
            <a href="#" className="sm:flex items-center">
              <img
                src="\Footer\assets\image 214.png"
                alt="Instagram-logo"
                className="w-7 h-7 mr-2"
              />
              <span className="text-[#00046C]">Instagram</span>
            </a>
          </div>
          <div className="sm:flex sm:flex-col sm:w-[112px] sm:h-[73px] sm:pl-[124px] ">
            <a href="#" className="sm:pb-4 pr-4 text-[#00046C]">
              9373902340
            </a>
            <a href="#" className="text-[#00046C]">
              hr@verbiq.ai
            </a>
          </div>
        </div>
        {/* <div className=" sm:flex flex-col sm:col-span-1"></div> */}
      </div>
    </footer>
  );
}

export default Footer;
