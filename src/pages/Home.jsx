import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import NavigationButton from '../components/NavigationButton';


const Home = ({heroRef,featuresRef,aboutRef,scrollToSection}) => {
  return (
    <div>
      
      <div ref={heroRef}>
        <Hero />
      </div>

      <NavigationButton scrollTo={ ()=> scrollToSection(aboutRef)}/>
      
      <div ref={aboutRef}>
        <About />
      </div>

      <NavigationButton scrollTo={()=> scrollToSection(featuresRef)}/>

      <div ref={featuresRef}>
      <Features/>
      </div>

      <NavigationButton scrollTo={()=>scrollToSection(heroRef)} className={"rotate-180"}/>
    </div>
  );
};

export default Home;
