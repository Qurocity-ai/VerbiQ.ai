import React from 'react'
import PortalNavbar from '../PortalNavbar/PortalNavbar'
import Sidebar from '../Sidebar/Sidebar'
import PortalRoutes from '../../../routes/PortalRoutes'
import styles from '../Sidebar/Sidebar.module.css'; // Import the CSS module
import { useState } from "react";
function Dashboard() { 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="min-h-screen flex flex-col">
       <Sidebar  
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
        isSidebarOpen={isSidebarOpen}  />
        <div className="lg:pl-[272px] flex flex-col flex-1">
          <PortalNavbar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen}  />
        
        <main className={`${styles.pageWrapper} flex-1 p-4 overflow-auto bg-white`}>
          <PortalRoutes />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

