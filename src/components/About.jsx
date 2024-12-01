import React from 'react'

const About = () => {
  return (
    <div>
      <section className='min-h-[700px] bg-center bg-cover flex justify-center items-center'>
          <div className="p-6 md:p-10 lg:p-20 ">
            <span className="text-4xl md:text-6xl font-semibold">About Us</span><br/><br/>
            <h1 className="text-xl md:text-3xl text-center  antialiased  leading-relaxed">
              <span className="text-orange-700">Welcome to Fresh4You!</span> We're your go-to source for top-quality fruits and unbeatable
              freshness. Founded by Asidu, we're passionate about providing you with the best fruits
              for every occasion. With fair prices and a commitment to social responsibility,
              Fresh4You is your trusted partner for vibrant living. Explore our website and
              experience the taste of freshness today!
              <br /><br />
              <hr className="h- border-t border-gray-400" />
              <br />
              <span className="text-5xl">🍎🍌🍇</span>
            </h1>
            <br />
          </div>
      </section>
    </div>
  )
}

export default About