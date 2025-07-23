import React from "react";
import Navbar from "./componants/Navbar/Navbar";
import Navbar2 from "./componants/Navbar2/Navbar2";
import ALLRoutes from "./routes/AllRoutes";
import Footer from "./componants/Footer/Footer";
import { useLocation } from "react-router-dom";
// import AssessmentsRoutes from "./routes/AssessmentsRoutes";

const App = () => {
  const location = useLocation();

  // Check if the current path starts with '/dashboard' or '/assessment'
  const hideNavbarFooter = [
    "/candidatedashboard",
    "/assessment",
    "/companydashboard",
    "/interpetation",
    "/translation",
  ].some((path) => location.pathname.startsWith(path));
  const Interpetation = location.pathname === "/interpetation";
  const Translation = location.pathname === "/translation";
  return (
    <>
      {Interpetation && <Navbar2 />}
      {Translation && <Navbar2 />}
      {!hideNavbarFooter && <Navbar />}
      <ALLRoutes />
      {!hideNavbarFooter && <Footer />}
      {Translation && <Footer />}

      {/* <AssessmentsRoutes /> */}

      {/* <Dashboard/> */}

      {/* There are some  */}
    </>
  );
};
export default App;
