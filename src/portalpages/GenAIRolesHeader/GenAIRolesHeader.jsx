

import { useState } from "react";
import { Calendar, CalendarIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
export default function GenAIRolesHeader({ title }) {
  const [date, setDate] = useState("13 Jan, 2024");
  const location = useLocation();

 const routeTitles = {
  "/candidatedashboard/typeofemployement": "Type of Employment",
  "/candidatedashboard/freelancer": "Freelance GenAI Roles",
  "/candidatedashboard/contractual": "Contractual GenAI Roles",
  "/candidatedashboard/experiencelevel": "Experience Level",
  "/candidatedashboard/entrylevel": "Entry Level Roles",
  "/candidatedashboard/intermediate": "Intermediate Level Roles",
  "/candidatedashboard/expert": "Expert Level Roles",
  "/candidatedashboard/language": "Language Preferences",
  "/candidatedashboard/french": "French Language Roles",
  "/candidatedashboard/german": "German Language Roles",
  "/candidatedashboard/czech": "Czech Language Roles",
  "/candidatedashboard/spanish": "Spanish Language Roles",
  "/candidatedashboard/italian": "Italian Language Roles",
  "/candidatedashboard/mandarin": "Mandarin Language Roles",
  "/candidatedashboard/korean": "Korean Language Roles",
  "/candidatedashboard/japanese": "Japanese Language Roles",
};


  const pageTitle = routeTitles[location.pathname] || "GenAI Roles";

  return (
    <div className="p-4">
    
      {/* Title Row with Horizontal Line */}
      <div className="flex items-center gap-4">
        <h2 className="text-sm font-semibold text-[#B0181B] whitespace-nowrap">
          {pageTitle}
        </h2>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Flex Container */}
      <div className="flex items-center justify-between gap-4 mt-2">
        {/* Left: Search Bar */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, role, department..."
              className="py-2 pl-10 pr-4 text-sm border rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#000949]"
            />
            <SearchIcon className="absolute left-0 top-4.5 h-4 w-5 text-[#000949]" />
            <span className="absolute right-3 top-4.5 text-[#000949] text-sm">⌘ K</span>
          </div>
        </div>

        {/* Right: Sort and Date */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
            Sort <ChevronDownIcon className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
            <CalendarIcon className="h-4 w-4" />
            {date}
          </button>
        </div>
      </div>
    </div>
  );
}