import React from "react";
import Footer from "./components/Footer/Footer";
import FAQ from "./pages/Home/FAQ/FAQ";
function App() {
  return (
    <>
      <FAQ />
      <Footer />
    </>
  );
}

export default App;

import React from 'react'
import Navbar from './componants/Navbar/Navbar';
import ALLRoutes from './routes/AllRoutes';


const App = () => {
  return (
    <>
      <Navbar/>
      <ALLRoutes/>
    </>
    
  )
}

export default App;
