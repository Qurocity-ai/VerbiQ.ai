import React from "react";

function Footer() {
  return (
    <footer className="w-ful">
      <div className="flex sm:justify-evenly justify-center shadow-[0_-3px_8px_rgba(0,0,0,0.1)] items-center sm:flex-row flex-col w-full pt-5 sm:pb-10">
        <img
          src="./assets/Group 514676.png"
          alt="VerbiQ.ai"
          className="sm:w-40 sm:h-10"
        />

        <div className="flex flex-col flex-wrap items-center justify-center sm:grid sm:grid-cols-6 sm:gap-7 gap-4 sm:pl-[50px] py-5 sm:w-[50%] ">
          <div className="flex sm:col-span-2">
            <div className="sm:flex sm:flex-col sm:w-36 sm:h-[73px] ">
              <a href="#" className="sm:pb-4 pr-2.5 text-[#00046C]">
                Careers
              </a>
              <a href="/blog" className="text-[#00046C]">
                Blogs
              </a>
            </div>
            <div className="sm:flex sm:flex-col sm:w-36 sm:h-[70px] pl-4">
              <a href="#" className="sm:pb-4 pr-4 text-[#00046C]">
                Jobs
              </a>
              <a
                href="https://www.linkedin.com/company/recrutorycompany/posts/?feedView=articles"
                target="_blank"
                className="text-[#00046C] text-nowrap"
              >
                News Letters
              </a>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:flex-col sm:col-span-2 sm:w-[134px] sm:h-[73px] sm:pl-10 px-5 sm:p-0 justify-center sm:pt-11 ">
            <a
              href="https://www.linkedin.com/company/recrutorycompany/"
              target="_blank"
              className="flex sm:pb-4 items-center pr-6"
            >
              <img
                src=".\assets\image 213.png"
                alt="LinkedIn-logo"
                className="w-7 h-7 mr-3"
              />
              <span className="text-[#00046C]"> LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/recrutory/?igsh=MXkxM3Y3am1qYTdhbg%3D%3D#"
              target="_blank"
              className="flex items-center"
            >
              <img
                src=".\assets\image 214.png"
                alt="Instagram-logo"
                className="w-7 h-7 mr-3"
              />
              <span className="text-[#00046C]">Instagram</span>
            </a>
            <a href="#" target="_blank" className="flex items-center sm:pt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"
                alt="facebook-icon"
                className="w-7 h-7 mr-3"
              />
              <span className="text-[#00046C]">Facebook</span>
            </a>
          </div>

          <div className="sm:flex sm:flex-col sm:h-[73px] sm:pl-6 sm:col-span-2">
            <a href="#" className="sm:pb-5 pr-4 text-[#00046C] font-medium">
              9373902340
            </a>
            <a href="#" className="text-[#00046C] font-medium">
              hr@verbiq.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
