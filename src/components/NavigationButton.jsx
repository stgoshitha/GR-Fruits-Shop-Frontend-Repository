import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

const NavigationButton = ({scrollTo,className}) => {
  return (
    <div>
      <div className={`flex justify-center ${className}`}>
        <button 
          onClick={scrollTo} 
          className={`absolute flex justify-center items-center -my-7 px-4 py-4 w-16 h-16 bg-secondary text-black rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md hover:bg-orange-200`}
        >
          <FaArrowDown className={`text-2xl animate-bounce`}/>
        </button>
      </div>
    </div>
  )
}

export default NavigationButton