
import React, { useState } from 'react';
import CompanySidebar from './CompanySidebar/CompanySidebar';
import PortalRoutes from '../../../routes/PortalRoutes';
import styles from './CompanySidebar/CompanySidebar.module.css';
import PortalNavbar from '../PortalNavbar/PortalNavbar';

function CompanyDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <CompanySidebar isSidebarOpen={isSidebarOpen} />
      <div className="lg:pl-[272px] flex flex-col flex-1">
      <PortalNavbar/>
        <main className={`${styles.pageWrapper} flex-1 p-4 overflow-auto bg-white`}>
          <PortalRoutes />
        </main>
      </div>
    </div>
  );
}

export default CompanyDashboard;
