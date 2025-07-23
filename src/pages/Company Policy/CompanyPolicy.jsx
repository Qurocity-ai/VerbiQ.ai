import React from "react";

function CompanyPolicy() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full bg-[#F8FAFF] flex justify-center items-start flex-col">
        {/* Policy Links with smaller text */}
        <a
          href="/public/pdf/Access Revocation Policy.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Revocation Policy
        </a>
        <a
          href="/public/pdf/Code of Conduct.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Code of Conduct
        </a>
        <a
          href="/public/pdf/Data Privacy Policy.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Privacy Policy
        </a>
        <a
          href="/public/pdf/Declaration by Service Provider .pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Service Provider
        </a>
        <a
          href="/public/pdf/Employee & Consultant Privacy Policy.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Employee & Consultant Privacy Policy
        </a>
        <a
          href="/public/pdf/HR Policy.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          HR Policy
        </a>
        <a
          href="/public/pdf/HR Security Policy.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          HR Security Policy
        </a>
        <a
          href="/public/pdf/Information Security Policy.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Information Security Policy
        </a>
        <a
          href="/public/pdf/Modern Slavery and Human Trafficking Policy.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Modern Slavery and Human Trafficking Policy
        </a>
        <a
          href="/public/pdf/Supplier Code of Conduct.pdf"
          target="_blank"
          className="block text-[#00046C] hover:text-opacity-80 text-lg p-4 shadow-lg"
        >
          Supplier Code of Conduct
        </a>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          <div className="flex flex-col">
            {/* Logo */}
            <img
              src="./assets/Group 514676.png"
              alt="VerbiQ.ai"
              className="h-10 w-40 mx-auto mb-6"
            />

            {/* Mobile Links */}
            <div className="space-y-3 mb-6 text-left">
              <a
                href="/registration"
                className="block text-[#00046C] hover:text-opacity-80 text-sm"
              >
                Register as Candidate
              </a>
              <a
                href="/blog"
                className="block text-[#00046C] hover:text-opacity-80 text-sm"
              >
                Blogs
              </a>
              <a
                href="https://www.linkedin.com/newsletters/7185962989202669569/"
                className="block text-[#00046C] hover:text-opacity-80 text-sm"
              >
                News Letters
              </a>
              <a
                href="#"
                className="block text-[#00046C] hover:text-opacity-80 text-sm"
              >
                Careers
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-6 text-left text-sm">
              <div className="block text-[#00046C] font-medium">9373902340</div>
              <div className="block text-[#00046C] font-medium">
                hr@verbiq.ai
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.linkedin.com/company/recrutorycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/image 213.png"
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://www.instagram.com/verbiq.ai/?igsh=YjJ1Z2V1aTV2d2Vq#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/image 214.png"
                  alt="Instagram"
                  className="h-6 w-6"
                />
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

            {/* Bottom Border */}
            <div className="mt-8 border-t border-gray-200 pt-8 text-center">
              <p className="text-sm text-[#00046C]">
                &copy; {new Date().getFullYear()} VerbiQ.ai. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPolicy;