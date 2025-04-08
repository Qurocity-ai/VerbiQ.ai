import React from 'react'
import HeroSection from './HeroSection/HeroSection';
import StatsSection from './StatsSection/StatsSection';
import Wave from './Wave/Wave';
import FAQ from './FAQ/FAQ';
import CarousalOne from './Carousal/CarousalOne';
const Home = () => {
  return (
<>
 <HeroSection/>
 <StatsSection/>
 <Wave/>
 <CarousalOne/>
 <FAQ />
</>
  )
}

export default Home;