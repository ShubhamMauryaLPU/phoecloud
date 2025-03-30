import React from "react";

const Hero = () => {
  return (
    <React.Fragment className="  h-[110vh]">
      <div className=' bg-[url("/image/digital2.webp")]  h-[60vh]  bg-cover bg-no-repeat'></div>
      <div className="h-[50vh] flex flex-col text-white justify-center items-center bg-gray-900">
        <h1 className="text-4xl text-center font-bold  font-serif w-[90%] lg:w-[80%]  ">
          Unleash Limitless Potential with PhoeTech's Digital Transformation
          Suite
        </h1>
        <p className="text-xl text-center pt-4  font-serif w-[85%] lg:w-[70%] ">
          Welcome to the future of business evolution. PhoeTech's Digital
          Transformation Suite is not just a service; it's a catalyst for
          unparalleled growth, efficiency, and innovation. Embrace the power to
          reshape your business landscape and thrive in the digital age.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Hero;
