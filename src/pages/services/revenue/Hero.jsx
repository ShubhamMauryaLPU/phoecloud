import React, { useState } from "react";

const Hero = () => {
  return (
    <React.Fragment className="  h-[110vh]">
      <div className=' bg-[url("/image/servicesImg.webp")]  h-[60vh]  bg-cover bg-no-repeat'></div>
      <div className="h-[50vh] flex flex-col text-white justify-center items-center bg-gray-900">
        <h1 className="text-4xl text-center font-bold  font-serif w-[90%] lg:w-[80%]  ">
          Elevate Your Business with PhoeTech's Revenue Based Financing(RBF)
        </h1>
        <p className="text-xl text-center pt-4  font-serif w-[85%] lg:w-[70%] ">
          Welcome to the future of D2C success! PhoeTech's Revenue Based
          Financing (RBF) are designed to revolutionize your online business,
          propelling your brand to new heights of revenue and customer
          engagement.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Hero;
