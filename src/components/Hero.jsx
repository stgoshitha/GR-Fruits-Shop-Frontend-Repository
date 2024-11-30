import React from 'react'
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
import client3 from '../assets/client3.jpg'
import fruits from '../assets/fruits.png'
import { NavLink } from 'react-router-dom'
import { MdOutlineShareLocation } from 'react-icons/md'
import { GiFruitBowl } from 'react-icons/gi'

const Hero = () => {
  return (
      <section className='mx-auto max-w-full'>
        <div className='relative bg-hero bg-cover bg-no-repeat lg:h-[850px] sm:h-[1000px] flex justify-center items-center gap-8 '>
          <div className='mt-16'>
            <div className='mx-auto max-w-[1440px] px-6 lg:px-12 relative sm-top-72 text-white '>
        
              {/* Title Section */}
              <h1 className='text-[45px] leading-tight md:text-[55px] md:leading-[1.3] mb-4 font-bold max-w-[44rem] capitalize'>
                Locally produced delivered direct <span className='text-secondary'>to your door</span>
              </h1>
              <p className='text-white text-[25px] font-[400] mt-6 max-w-[33rem]'>Explore our fresh, delicious fruits sourced from local farms. Let's make healthy snacking easy and delightful! Happy browsing!</p>
              <span className='text-4xl'>🍎🍌🍇</span>

              <div className='flex justify-start !items-center gap-x-4 my-10'>
                <div className='flex relative'>
                  {/* client images */}
                  <img src={client1} alt={'client1'} className='h-[46px]  shadow-sm rounded-full'/>
                  <img src={client2} alt={'client2'} className='h-[46px]  shadow-sm rounded-full absolute left-8'/>
                  <img src={client3} alt={'client3'} className='h-[46px]  shadow-sm rounded-full absolute left-16'/>
                </div>
                <div className='text-[16px] font-[700] sm:text-[24px] sm:font-[700] sm:leading-[120%] ml-14 relative top-1'>
                  176k <span className='text-[16px] font-[400] sm:text-[20px] sm:font-[400]'>Excellent Reviews</span>
                </div>
              </div>

              {/* shop now and track order buttons */}
              <div className='max-xs:flex-col flex gap-2'>
                  <NavLink to={''} className={'medium-14 bg-white text-tertiary px-7 py-2.5 rounded-full flex items-center justify-center gap-x-2'}>
                    <GiFruitBowl className='text-xl'/>Shop now
                  </NavLink>
                  <NavLink to={''} className={'medium-14 bg-white text-tertiary px-7 py-2.5 rounded-full flex items-center justify-center gap-x-2'}>
                    <MdOutlineShareLocation className='text-xl'/>Track Order
                  </NavLink>
              </div>

            </div>
          </div>

          {/* main image in hero section */}
          <div className='mt-16'>
            <img src={fruits} alt={'client1'} className='h-[600px] hidden md:flex'/>
          </div>

        </div>
      </section>
  )
}

export default Hero