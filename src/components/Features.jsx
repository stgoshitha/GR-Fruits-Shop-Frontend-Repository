import React from 'react';
import shippingfast from '../assets/shipping-fast.svg';

const Features = () => {
  return (
    <div>
      <section className="bg-benifit bg-cover bg-no-repeat p-16 bg-benifit-opacity-35">
        {/* Section Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">Benifits</h1>
        </div>

        {/* Features */}
        <div className="flex flex-col items-center justify-center gap-16 px-4 2xl:h-[600px] sm:h-[1000px]">
          <div className="flex flex-wrap gap-12 justify-center">
            {/* Feature Card */}
            <div className="flex flex-col items-center justify-center gap-4 shadow-xl p-8 sm:p-10 md:p-12 lg:p-16 bg-white rounded-lg max-w-[350px] duration-700 transform hover:scale-110 hover:shadow-2xl">
              <img src={shippingfast} alt="" className="h-16 w-16 sm:h-20 sm:w-20" />
              <div className="flex items-center justify-center flex-col">
                <h5 className="text-xl md:text-2xl lg:text-[25px] font-bold">Fresh Fruit</h5>
                <hr className="w-16 md:w-20 bg-secondary h-1 rounded-full border-none" />
              </div>
              <p className="text-sm md:text-base lg:text-lg text-center text-gray-700">
                Indulge in freshness. Hand-picked and delivered for you to enjoy. Taste the difference today.
              </p>
            </div>

            {/* Feature Card */}
            <div className="flex flex-col items-center justify-center gap-4 shadow-xl p-8 sm:p-10 md:p-12 lg:p-16 bg-white rounded-lg max-w-[350px] duration-700 transform hover:scale-110 hover:shadow-2xl">
              <img src={shippingfast} alt="" className="h-16 w-16 sm:h-20 sm:w-20" />
              <div className="flex items-center justify-center flex-col">
                <h5 className="text-xl md:text-2xl lg:text-[25px] font-bold">Fast Delivery</h5>
                <hr className="w-16 md:w-20 bg-secondary h-1 rounded-full border-none" />
              </div>
              <p className="text-sm md:text-base lg:text-lg text-center text-gray-700">
                Experience lightning-fast delivery with us. Get what you need, when you need it. Your satisfaction, our priority.
              </p>
            </div>

            {/* Feature Card */}
            <div className="flex flex-col items-center justify-center gap-4 shadow-xl p-8 sm:p-10 md:p-12 lg:p-16 bg-white rounded-lg max-w-[350px] duration-700 transform hover:scale-110 hover:shadow-2xl">
              <img src={shippingfast} alt="" className="h-16 w-16 sm:h-20 sm:w-20" />
              <div className="flex items-center justify-center flex-col">
                <h5 className="text-xl md:text-2xl lg:text-[25px] font-bold">Fruit Offer</h5>
                <hr className="w-16 md:w-20 bg-secondary h-1 rounded-full border-none" />
              </div>
              <p className="text-sm md:text-base lg:text-lg text-center text-gray-700">
                Discover fresh delights with our fruit offer. Premium picks at unbeatable prices. Don't miss out!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
