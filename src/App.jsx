import Navbar from './componants/Navbar/Navbar';
import ALLRoutes from './routes/AllRoutes';
import HeroSection from "./pages/Home/HeroSection/HeroSection";
import AnimatedContent from "./pages/Home/ReactBits/AnimatedContent";
import Threads from "./pages/Home/ReactBits/Threads";
import Wave from "./pages/Home/Wave/Wave";
import { Home } from "lucide-react";
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <ALLRoutes/>
      <Home/>
      <Footer />
    </>
    
  )
}

export default App;