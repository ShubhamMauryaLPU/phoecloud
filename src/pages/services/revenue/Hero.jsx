import React, { useState } from "react";

const Hero = () => {
  return (
    <div className='bg-[url("/image/servicesImg.webp")] h-[90vh] bg-cover lg:h-[80vh] bg-no-repeat relative overflow-hidden flex flex-col justify-center items-center'>
      <h1 className="font-serif text-2xl md:text-4xl lg:text-4xl w-[80%] text-center text-transparent bg-clip-text font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
        Elevate Your Business with PhoeTech's Revenue Based Financing(RBF)
      </h1>
      <p className="font-serif mt-4 lg:mt-6 font-bold text-xl md:text-3xl lg:text-2xl w-[70%] text-center text-white">
        Welcome to the future of D2C success! PhoeTech's Revenue Based Financing
        (RBF) are designed to revolutionize your online business, propelling
        your brand to new heights of revenue and customer engagement.
      </p>
    </div>
  );
};

export default Hero;
