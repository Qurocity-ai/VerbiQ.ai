import React from "react";
import Footer from "./componants/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
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
