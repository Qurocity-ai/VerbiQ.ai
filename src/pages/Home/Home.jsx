import React from 'react'
import HeroSection from './HeroSection/HeroSection';
import StatsSection from './StatsSection/StatsSection';
import Wave from './Wave/Wave';
import { useEffect } from 'react';
import CarousalOne from "./Carousal/CarousalOne";
import Chat from "./Chat/Chat";
import Graph from "./Graph/Graph";
import FeedbackCarousel from './FeedbackSection/FeedbackCarousel';
import FAQ from "./FAQ/FAQ";
import NewGraph from '../NewGraph/NewGraph';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
{/* Home */}
 <HeroSection/>
 <StatsSection/>
 <Wave/>
 <CarousalOne/>
 <Chat/>
 {/* <Graph/> */}
 
  <NewGraph/>
 <FeedbackCarousel />
 <FAQ/>
 
 
</>
  )
}

export default Home;
