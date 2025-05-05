import React from "react";
import Navbar from "./componants/Navbar/Navbar";
import ALLRoutes from "./routes/AllRoutes";
import Footer from "./componants/Footer/Footer";
import { useLocation } from "react-router-dom";
import PortalRoutes from "./routes/PortalRoutes";
const App = () => {
  const location = useLocation();
  
  // Check if the current path is '/dashboard'
  const hideNavbarFooter = location.pathname.startsWith("/dashboard");
  return (
    <>
      <Navbar />
      <ALLRoutes />
      <PortalRoutes/>
      <Footer />


      {/* There are some  */}
    </>
  );
};
export default App;

