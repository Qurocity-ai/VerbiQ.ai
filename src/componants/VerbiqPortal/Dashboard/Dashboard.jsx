import React from 'react'
import PortalNavbar from '../PortalNavbar/PortalNavbar'
import Sidebar from '../Sidebar/Sidebar'
import PortalRoutes from '../../../routes/PortalRoutes'

function Dashboard() {
  return (
  //   <div>
  //  <PortalNavbar/> 
  //   <Sidebar/>
   
  //   <PortalRoutes/>
  //   </div>
  // )
  <div className="flex min-h-screen">
      <Sidebar />
      <PortalRoutes/>
      <main className="flex-1 p-4">
      <PortalNavbar/>
      </main>
      </div>
  )
}

export default Dashboard;
