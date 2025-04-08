import React from "react";
import Footer from "./componants/Footer/Footer";
import FAQ from "./pages/Home/FAQ/FAQ";
// function App() {
//   return (
//     <>
     
      
//     </>
//   );
// }

// export default App;

// import React from 'react'
import Navbar from './componants/Navbar/Navbar';
import ALLRoutes from './routes/AllRoutes';
import HeroSection from "./pages/Home/HeroSection/HeroSection";
import AnimatedContent from "./pages/Home/ReactBits/AnimatedContent";
import Threads from "./pages/Home/ReactBits/Threads";
import CarousalOne from "./pages/Home/Carousal/CarousalOne";
import Wave from "./pages/Home/Wave/Wave";
import { Home } from "lucide-react";


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
