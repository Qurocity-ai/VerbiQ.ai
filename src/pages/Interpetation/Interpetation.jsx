import React from "react";
import {
  Briefcase,
  Globe,
  BookOpen,
  Users,
  Layers,
  ShieldCheck,
  FileText,
  Cpu,
} from "lucide-react";

const Interpetation = () => {
  return (
    <div className="w-full px-4 md:px-16 py-10 bg-white text-gray-800">
      {/* Header Section */}
      <h2 className="text-center text-lg font-semibold text-red-600 mb-4">
        Areas of Specialization
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 border rounded hover:shadow">
          <Briefcase className="mx-auto mb-2" />
          <p>Corporate & Commercial Laws</p>
        </div>
        <div className="p-4 border rounded hover:shadow">
          <Globe className="mx-auto mb-2" />
          <p>Litigation & Disputes</p>
        </div>
        <div className="p-4 border rounded hover:shadow">
          <BookOpen className="mx-auto mb-2" />
          <p>Execution Risk Planning</p>
        </div>
        <div className="p-4 border rounded hover:shadow">
          <Users className="mx-auto mb-2" />
          <p>Virtual General Counsel</p>
        </div>
        <div className="p-4 border rounded hover:shadow">
          <Layers className="mx-auto mb-2" />
          <p>Industries & Sectors</p>
        </div>
        <div className="p-4 border rounded hover:shadow">
          <FileText className="mx-auto mb-2" />
          <p>Panel Boards and Tenders</p>
        </div>
        <div className="p-4 border rounded hover:shadow">
          <ShieldCheck className="mx-auto mb-2" />
          <p>Compliance & Governance</p>
        </div>
      </div>

      {/* Icons with Descriptions */}
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <Briefcase className="mx-auto text-red-600" size={32} />
          <h4 className="font-semibold mt-2">Operational Integration</h4>
          <p className="text-sm mt-1">
            Integrated into client operations ensuring alignment with legal
            strategy.
          </p>
        </div>
        <div className="text-center">
          <Layers className="mx-auto text-red-600" size={32} />
          <h4 className="font-semibold mt-2">Holistic Auditing & Strategy</h4>
          <p className="text-sm mt-1">
            Comprehensive evaluation for regulatory risk mitigation.
          </p>
        </div>
        <div className="text-center">
          <Users className="mx-auto text-red-600" size={32} />
          <h4 className="font-semibold mt-2">Client Team Collaboration</h4>
          <p className="text-sm mt-1">
            Seamlessly works alongside client teams to streamline legal
            functions.
          </p>
        </div>
        <div className="text-center">
          <ShieldCheck className="mx-auto text-red-600" size={32} />
          <h4 className="font-semibold mt-2">Secure & Compliant</h4>
          <p className="text-sm mt-1">
            Dedicated to data privacy and legal compliance for all processes.
          </p>
        </div>
      </div>

      {/* Two Column Info Sections */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-800">
            Our Services
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Commercial contract management, legal structuring</li>
            <li>Legal advisory and compliance assessments</li>
            <li>Regulatory representation, arbitration support</li>
            <li>Litigation strategy and documentation</li>
            <li>Startup, SME, and MNC legal services</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-800">
            Industries We Serve and Real Applications
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>FinTech, HealthTech, EdTech companies</li>
            <li>International companies expanding in India</li>
            <li>Startup and investor legal frameworks</li>
            <li>Dispute resolution and litigation support</li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded overflow-hidden shadow">
          <img
            src="https://via.placeholder.com/400x250?text=Image+1"
            alt="Client Discussion"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm">
            We believe in Client-centered strategies with ongoing support and
            engagement.
          </p>
        </div>
        <div className="rounded overflow-hidden shadow">
          <img
            src="https://via.placeholder.com/400x250?text=Image+2"
            alt="Digital Governance"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm">
            Our systems promote transparency and automation for informed
            decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interpetation;
