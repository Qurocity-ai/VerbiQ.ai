import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFF] shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden sm:flex flex-col">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            {/* Logo */}
            <img
              src="./assets/Group 514676.png"
              alt="VerbiQ.ai"
              className="h-10 w-40 shrink-0"
            />

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {/* Left Column */}
              <div className="space-y-4">
                <a href="#" className="block text-[#00046C] hover:text-opacity-80">
                  Careers
                </a>
                <a href="/blog" className="block text-[#00046C] hover:text-opacity-80">
                  Blogs
                </a>
              </div>

              {/* Middle Column */}
              <div className="space-y-4">
                <a href="/registration" className="block text-[#00046C] hover:text-opacity-80">
                  Register as Candidate
                </a>
                <a
                  href="https://www.linkedin.com/newsletters/7185962989202669569/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#00046C] hover:text-opacity-80"
                >
                  News Letters
                </a>
              </div>

              {/* Right Column - Social Links */}
              <div className="col-span-2 space-y-4 md:col-span-1">
                <div className="flex flex-col space-y-4">
                  <a
                    href="https://www.linkedin.com/company/recrutorycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#00046C] hover:text-opacity-80"
                  >
                    <img src="./assets/image 213.png" alt="LinkedIn" className="h-6 w-6" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/verbiq.ai/?igsh=YjJ1Z2V1aTV2d2Vq#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#00046C] hover:text-opacity-80"
                  >
                    <img src="./assets/image 214.png" alt="Instagram" className="h-6 w-6" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FcCEmyUsp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#00046C] hover:text-opacity-80"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"
                      alt="Facebook"
                      className="h-6 w-6"
                    />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-right">
              <div className="block text-[#00046C] font-medium">9373902340</div>
              <div className="block text-[#00046C] font-medium">hr@verbiq.ai</div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-base text-[#00046C]">
              &copy; {new Date().getFullYear()} VerbiQ.ai. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          <div className="flex flex-col">
            {/* Logo */}
            <img
              src="./assets/Group 514676.png"
              alt="VerbiQ.ai"
              className="h-10 w-40 mx-auto mb-6"
            />

            {/* Mobile Links in specified order */}
            <div className="space-y-3 mb-6 text-left">
              <a href="/registration" className="block text-[#00046C] hover:text-opacity-80">
                Register as Candidate
              </a>
              <a href="/blog" className="block text-[#00046C] hover:text-opacity-80">
                Blogs
              </a>
              <a
                href="https://www.linkedin.com/newsletters/7185962989202669569/"
                className="block text-[#00046C] hover:text-opacity-80"
              >
                News Letters
              </a>
              <a href="#" className="block text-[#00046C] hover:text-opacity-80">
                Careers
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-6 text-left">
              <div className="block text-[#00046C] font-medium">9373902340</div>
              <div className="block text-[#00046C] font-medium">hr@verbiq.ai</div>
            </div>

            {/* Horizontal Social Links */}
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.linkedin.com/company/recrutorycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./assets/image 213.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/verbiq.ai/?igsh=YjJ1Z2V1aTV2d2Vq#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./assets/image 214.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1FcCEmyUsp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
            </div>

            {/* Bottom Border section*/}
            <div className="mt-8 border-t border-gray-200 pt-8 text-center">
              <p className="text-base text-[#00046C]">
                &copy; {new Date().getFullYear()} VerbiQ.ai. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;