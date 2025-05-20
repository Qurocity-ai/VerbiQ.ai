// import React, { useState } from 'react';
// import CompanySidebar from './CompanySidebar/CompanySidebar';
// import PortalRoutes from '../../../routes/PortalRoutes';
// import styles from './CompanySidebar/CompanySidebar.module.css';
// import PortalNavbar from '../PortalNavbar/PortalNavbar';

// function CompanyDashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <CompanySidebar isSidebarOpen={isSidebarOpen} />
//       <div className="lg:pl-[272px] flex flex-col flex-1">
//       <PortalNavbar/>
//         <main className={`${styles.pageWrapper} flex-1 p-4 overflow-auto bg-white`}>
//           <PortalRoutes />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default CompanyDashboard;

import React from "react";
import PortalNavbar from "../PortalNavbar/PortalNavbar";
import { useNavigate } from "react-router-dom";
import PortalRoutes from "../../../routes/PortalRoutes";
import styles from "../Sidebar/Sidebar.module.css"; // Import the CSS module
import { useState } from "react";
import CompanySidebar from "./CompanySidebar/CompanySidebar";
import JobDashboard from "../../../portalpages/JobDashboard/JobDashboard";


function CompanyDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  return (
   
    <div className="min-h-screen flex flex-col">
      <CompanySidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="lg:pl-[272px] flex flex-col flex-1 bg-white">
        <PortalNavbar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />

       
        <button
          className="absolute top-20 right-7 flex items-center text-red-700 font-semibold border border-gray-200 bg-transparent py-3 px-4 rounded-lg text-nowrap text-md cursor-pointer"
          onClick={() => {
            navigate("/companydashboard/JobPostForm");
          }}
        >
          Post a jobs
          <img
            src="/assets/cloud-upload.jpg"
            alt="cloud-upload"
            className="w-6 h-6 ml-3"
          />
        </button>
        <hr className="text-gray-200" />
        <main
          className={`${styles.pageWrapper} flex-1 p-4 overflow-auto bg-white`}
        >
          <PortalRoutes />
          <JobDashboard />
           </main>
          {/*<div className={`$ flex-1 p-4 pt-0.5 overflow-auto bg-white`}>
        <JobDashboard />
      </div>*/}
      </div>
      </div>
  );
}

export default CompanyDashboard;
