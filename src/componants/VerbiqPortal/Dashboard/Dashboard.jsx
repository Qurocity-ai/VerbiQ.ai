import React from 'react'
import { useLocation } from "react-router-dom";
import PortalNavbar from '../PortalNavbar/PortalNavbar'
import Sidebar from '../Sidebar/Sidebar'
import PortalRoutes from '../../../routes/PortalRoutes'
import { useState } from "react";
import JobBoard from '../../../portalpages/JobBoard';
import GenAIRolesHeader from '../../../portalpages/GenAIRolesHeader/GenAIRolesHeader';
function Dashboard() { 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   const location = useLocation();

  // Check if the current path is exactly '/candidatedashboard'
  const showJobBoard = location.pathname === "/candidatedashboard";
  return (
    <div className="min-h-screen flex flex-col">
       <Sidebar  
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
        isSidebarOpen={isSidebarOpen}  />
        <div className="lg:pl-[273px] flex flex-col flex-1    bg-white">
          <PortalNavbar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen}  />
          <GenAIRolesHeader />
        <main className={`$ flex-1 p-4 pt-0.5 overflow-auto bg-white`}>
          {showJobBoard && <JobBoard />}
        <PortalRoutes />
          
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
