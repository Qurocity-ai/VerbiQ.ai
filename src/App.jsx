import React from "react";
import Navbar from "./componants/Navbar/Navbar";
import ALLRoutes from "./routes/AllRoutes";
import Footer from "./componants/Footer/Footer";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  
  // Check if the current path starts with '/dashboard' or '/assessment'
  const hideNavbarFooter = ["/dashboard", "/assessment"].some(path =>
    location.pathname.startsWith(path)
  );
  return (
    <>
        {!hideNavbarFooter &&<Navbar />}
     <ALLRoutes />
     {!hideNavbarFooter &&<Footer />}
      
         {/* <Dashboard/> */}

      {/* There are some  */}
    </>
  );
};
export default App;