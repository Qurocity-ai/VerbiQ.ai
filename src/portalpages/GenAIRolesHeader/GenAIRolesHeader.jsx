

// import { useState } from "react";
// import { Calendar, CalendarIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
// import { useLocation } from "react-router-dom";
// export default function GenAIRolesHeader({ title }) {
//   const [date, setDate] = useState("13 Jan, 2024");
//   const location = useLocation();

//  const routeTitles = {
//   "/candidatedashboard/typeofemployement": "Type of Employment",
//   "/candidatedashboard/freelancer": "Freelance GenAI Roles",
//   "/candidatedashboard/contractual": "Contractual GenAI Roles",
//   "/candidatedashboard/experiencelevel": "Experience Level",
//   "/candidatedashboard/entrylevel": "Entry Level Roles",
//   "/candidatedashboard/intermediate": "Intermediate Level Roles",
//   "/candidatedashboard/expert": "Expert Level Roles",
//   "/candidatedashboard/language": "Language Preferences",
//   "/candidatedashboard/french": "French Language Roles",
//   "/candidatedashboard/german": "German Language Roles",
//   "/candidatedashboard/czech": "Czech Language Roles",
//   "/candidatedashboard/spanish": "Spanish Language Roles",
//   "/candidatedashboard/italian": "Italian Language Roles",
//   "/candidatedashboard/mandarin": "Mandarin Language Roles",
//   "/candidatedashboard/korean": "Korean Language Roles",
//   "/candidatedashboard/japanese": "Japanese Language Roles",
// };


//   const pageTitle = routeTitles[location.pathname] || "GenAI Roles";

//   return (
//     <div className="p-4">
    
//       {/* Title Row with Horizontal Line */}
//       <div className="flex items-center gap-4">
//         <h2 className="text-sm font-semibold text-[#B0181B] whitespace-nowrap">
//           {pageTitle}
//         </h2>
//         <div className="flex-1 h-px bg-gray-300" />
//       </div>

//       {/* Flex Container */}
//       <div className="flex items-center justify-between gap-4 mt-2">
//         {/* Left: Search Bar */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search by name, role, department..."
//               className="py-2 pl-10 pr-4 text-sm border rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#000949]"
//             />
//             <SearchIcon className="absolute left-0 top-4.5 h-4 w-5 text-[#000949]" />
//             <span className="absolute right-3 top-4.5 text-[#000949] text-sm">⌘ K</span>
//           </div>
//         </div>

//         {/* Right: Sort and Date */}
//         <div className="flex items-center gap-2">
//           <button className="flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
//             Sort <ChevronDownIcon className="h-4 w-4" />
//           </button>
//           <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
//             <CalendarIcon className="h-4 w-4" />
//             {date}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  CalendarIcon,
  ChevronDownIcon,
  SearchIcon,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import "./CustomCalendar.module.css";

export default function GenAIRolesHeader({ title }) {
  const [date, setDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortOptions, setSortOptions] = useState([
    { key: "experience", label: "Experience", count: 120, checked: false },
    { key: "language", label: "Language", count: 78, checked: true },
  ]);
  const sortRef = useRef(null);
  const calendarRef = useRef(null);
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target)
      ) {
        setSortOpen(false);
      }
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionChange = (idx) => {
    setSortOptions((options) =>
      options.map((opt, i) =>
        i === idx ? { ...opt, checked: !opt.checked } : opt
      )
    );
  };

  return (
    <div className="p-4">
      {/* Title Row */}
      <div className="flex items-center gap-4">
        <h2 className="text-sm font-semibold text-[#B0181B] whitespace-nowrap">
          {pageTitle}
        </h2>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Controls Row */}
      <div className="flex items-center justify-between gap-4 mt-2">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name, role, department..."
            className="py-2 pl-10 pr-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000949]"
          />
          <SearchIcon className="absolute left-0 top-4.5 h-4 w-5 text-[#000949]" />
          <span className="absolute right-3 top-4.5 text-[#000949] text-sm">⌘ K</span>
        </div>

        {/* Sort and Calendar */}
        <div className="flex items-center gap-2 relative" ref={sortRef}>
          {/* Sort Button */}
          <button
            onClick={() => setSortOpen((v) => !v)}
            className="flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            Sort <ChevronDownIcon className="h-4 w-4" />
          </button>

          {/* Sort Dropdown */}
          {sortOpen && (
            <div className="absolute top-full right-0 mt-2 z-30 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[300px] py-3 px-2">
              <div className="flex flex-col gap-2">
                {sortOptions.map((opt, idx) => (
                  <label
                    key={opt.key}
                    className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition border ${
                      opt.checked
                        ? "bg-[#F5F7FD] border-[#000949]"
                        : "hover:bg-gray-50 border-transparent"
                    }`}
                  >
                    <span className="flex items-center justify-center h-8 w-8">
                      <input
                        type="checkbox"
                        checked={opt.checked}
                        onChange={() => handleOptionChange(idx)}
                        className="peer sr-only"
                      />
                      <span
                        className={` w-7 h-7 rounded-md border-2 flex items-center justify-center ${
                          opt.checked
                            ? "bg-[#000949] border-[#000949]"
                            : "bg-white border-[#BFC6D9]"
                        }`}
                      >
                        {opt.checked && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 10 18 4 12" />
                          </svg>
                        )}
                      </span>
                    </span>
                    <span
                      className={`text-base ${
                        opt.checked
                          ? "font-semibold text-[#000949]"
                          : "text-gray-700"
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span
                      className={`ml-auto text-base ${
                        opt.checked
                          ? "text-[#8A8F98] font-semibold"
                          : "text-gray-400"
                      }`}
                    >
                      ({opt.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Calendar Button */}
          <div className="relative" ref={calendarRef}>
            <button
              onClick={() => setCalendarOpen((v) => !v)}
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              <CalendarIcon className="h-4 w-4" />
              {date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </button>
            {calendarOpen && (
              <div className="absolute right-0 mt-2 z-40 rounded-lg shadow-xl bg-white p-4">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="rounded-lg shadow calendar-container"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
