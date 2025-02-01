import React from "react";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-3 flex-grow text-white bg-gray-900 items-center justify-center">
      <div className="lg:w-1/3 m-4">
        <img src="/image/about.webp" alt="" className="rounded-2xl" />
      </div>
      <div className="lg:w-2/3 ml-5 lg:place-items-center ">
        <div className="w-[80%]  lg:ml-2 border-l-4 pl-4">
          <p className="uppercase">Who we are?</p>
          <h1 className="text-4xl font-extrabold">Our Story</h1>
        </div>
        <p className="w-[80%] my-3  lg:mt-3">
          Welcome to PhoeTech, where innovation meets growth in the dynamic
          world of Direct-to-Consumer (D2C) businesses. Founded with a passion
          for transforming digital landscapes, PhoeTech is more than just a
          technology company &ndash; we are your strategic partner in achieving
          unprecedented success.
        </p>
        
      </div>
      
    </div>
  );
};

export default Hero;
