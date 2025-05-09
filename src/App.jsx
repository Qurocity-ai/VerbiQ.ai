import React from "react";
import Navbar from "./componants/Navbar/Navbar";
import ALLRoutes from "./routes/AllRoutes";
import Footer from "./componants/Footer/Footer";
import { useLocation } from "react-router-dom";
//import AssessmentsRoutes from "./routes/AssessmentsRoutes";


const App = () => {
  const location = useLocation();
  
  // Check if the current path is '/dashboard'
  const hideNavbarFooter = location.pathname.startsWith("/dashboard");

   // Hide Navbar and Footer on '/assessments' routes
   //const hideNavbarFooter = location.pathname.startsWith("/assessments","/form2");
   /*const hideNavbarFooterRoutes = ["/assessment","/form", "/form2"];
const hideNavbarFooter = hideNavbarFooterRoutes.some((path) =>
  location.pathname.startsWith(path)
);*/


  return (
    <>
        {!hideNavbarFooter &&<Navbar />}
     <ALLRoutes />

     {!hideNavbarFooter &&<Footer />}
     
     {/*<AssessmentsRoutes />*/}
      
         {/* <Dashboard/> */}

      {/* There are some  */}
    </>
  );
};

export default App;
