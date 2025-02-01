import React from "react";

const Hero = () => {
  return (
    <React.Fragment className="  h-[110vh]">
      <div className=' bg-[url("/image/finance1.webp")]  h-[60vh]  bg-cover bg-no-repeat'></div>
      <div className="h-[50vh] flex flex-col text-white justify-center items-center bg-gray-900">
        <h1 className="text-4xl text-center font-bold  font-serif w-[90%] lg:w-[80%]  ">
          Unveiling the Crescendo of Seamless Financial Excellence
        </h1>
        <p className="text-xl text-center pt-4  font-serif w-[85%] lg:w-[70%] ">
          Step into the world of PhoeTech CommerceSuite, where financial
          intricacies harmonize into a symphony of efficiency tailored for D2C
          brilliance. Immerse yourself in the transformative notes of integrated
          accounting, expense ballets, and effortless payment sonatas.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Hero;
