import React from 'react'
import PortalNavbar from '../PortalNavbar/PortalNavbar'
import Sidebar from '../Sidebar/Sidebar'
import PortalRoutes from '../../../routes/PortalRoutes'
import styles from '../Sidebar/Sidebar.module.css'; // Import the CSS module

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
    <Sidebar />
        <div className="lg:pl-[272px] flex flex-col flex-1">
        <PortalNavbar />
        
        <main className={`${styles.pageWrapper} flex-1 p-4 overflow-auto`}>
          <PortalRoutes />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

