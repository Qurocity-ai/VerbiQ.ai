import React from 'react'
import HeroSection from './HeroSection/HeroSection';
import StatsSection from './StatsSection/StatsSection';
import Wave from './Wave/Wave';
import CarousalOne from './Carousal/CarousalOne';
import FAQ from './FAQ/FAQ';

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