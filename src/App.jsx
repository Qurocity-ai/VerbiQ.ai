import React from 'react'
import Navbar from './componants/Navbar/Navbar';
import ALLRoutes from './routes/AllRoutes';
import Footer from "./componants/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <ALLRoutes/>
      <Footer />
    </>
    
  )
}

export default App;
