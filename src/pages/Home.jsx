import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero />
      <div className="flex justify-center">
        <button 
          onClick={scrollToFeatures} 
          className="absolute flex justify-center items-center -my-7 px-4 py-4 w-16 h-16 bg-orange-100 text-black rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md hover:bg-orange-200"
        >
          <FaArrowDown className="text-2xl animate-bounce" />
        </button>
      </div>
      <hr className="h-1" />
      <div ref={featuresRef}>
        <Features />
      </div>
    </div>
  );
};

export default Home;
