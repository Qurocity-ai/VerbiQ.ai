// import { useLocation } from "react-router-dom";

// export default function GenAIRolesHeader() {
//   const location = useLocation();

//   // Map paths to titles
//   const routeTitles = {
//      "/typeofemployement": "Type of Employment",
//     "/freelancer": "Freelance GenAI Roles",
//     "/contractual": "Contractual GenAI Roles",

//     "/experiencelevel": "Experience Level",
//     "/entrylevel": "Entry Level Roles",
//     "/intermediate": "Intermediate Level Roles",
//     "/expert": "Expert Level Roles",

//     "/language": "Language Preferences",
//     "/french": "French Language Roles",
//     "/german": "German Language Roles",
//     "/czech": "Czech Language Roles",
//     "/spanish": "Spanish Language Roles",
//     "/italian": "Italian Language Roles",
//     "/mandarin": "Mandarin Language Roles",
//     "/korean": "Korean Language Roles",
//     "/japanese": "Japanese Language Roles",
//   };

//   // Get current route's title or fallback
//   const pageTitle = routeTitles[location.pathname] || "GenAI Roles";

//   return (
//     <div className="flex items-center justify-between gap-4 p-4 border-b">
//       {/* Left: Title and Search */}
//       <div className="flex items-center gap-4">
//         <h2 className="text-sm font-semibold text-red-600 whitespace-nowrap">
//           {pageTitle}
//         </h2>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search by name, role, department..."
//             className="pl-8 pr-12 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <span className="absolute left-2 top-2.5 h-4 w-4 text-gray-400">
//             🔍
//           </span>
//           <span className="absolute right-2 top-2.5 text-gray-400 text-xs">
//             ⌘ K
//           </span>
//         </div>
//       </div>

//       {/* Right: Sort and Date */}
//       <div className="flex items-center gap-2">
//         <button className="flex items-center gap-1 border rounded-lg px-3 py-2 text-sm text-blue-900 hover:bg-gray-100">
//           Sort <span className="ml-1">▼</span>
//         </button>
//         <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm text-blue-900 hover:bg-gray-100">
//           📅 13 Jan, 2024
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Calendar, CalendarIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
export default function GenAIRolesHeader({ title }) {
  const [date, setDate] = useState("13 Jan, 2024");
  const location = useLocation();

 const routeTitles = {
  "/dashboard/typeofemployement": "Type of Employment",
  "/dashboard/freelancer": "Freelance GenAI Roles",
  "/dashboard/contractual": "Contractual GenAI Roles",
  "/dashboard/experiencelevel": "Experience Level",
  "/dashboard/entrylevel": "Entry Level Roles",
  "/dashboard/intermediate": "Intermediate Level Roles",
  "/dashboard/expert": "Expert Level Roles",
  "/dashboard/language": "Language Preferences",
  "/dashboard/french": "French Language Roles",
  "/dashboard/german": "German Language Roles",
  "/dashboard/czech": "Czech Language Roles",
  "/dashboard/spanish": "Spanish Language Roles",
  "/dashboard/italian": "Italian Language Roles",
  "/dashboard/mandarin": "Mandarin Language Roles",
  "/dashboard/korean": "Korean Language Roles",
  "/dashboard/japanese": "Japanese Language Roles",
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