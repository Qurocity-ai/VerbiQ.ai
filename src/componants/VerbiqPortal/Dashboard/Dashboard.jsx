import React from 'react'
import PortalNavbar from '../PortalNavbar/PortalNavbar'
import Sidebar from '../Sidebar/Sidebar'
import PortalRoutes from '../../../routes/PortalRoutes'

function Dashboard() {
  return (
    <div>
      Dashboard 
      <PortalNavbar/>
      <Sidebar/>
      <PortalRoutes/>
      
    </div>
    
  )
}

export default Dashboard;
