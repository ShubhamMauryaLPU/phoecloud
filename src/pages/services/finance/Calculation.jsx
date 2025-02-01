import React from "react";
import { Link } from "react-router-dom";
const Calculation = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-white bg-black  h-[50vh] sticky-b">
      <h1 className="text-center text-2xl lg:text-4xl font-bold font-serif w-[80%]">Ready to Elevate Your Revenue?</h1>
      <p className="text-center w-[90%] lg:w-[80%] text-lg py-4">
        PhoeTech's Digital Transformation Suite is your passport to a future
        where your business not only survives but thrives. Embrace innovation,
        efficiency, and success like never before.
      </p>
      <Link to={"/contact"} className="pt-2 p-3 lg:p-2 hover:bg-blue-800 bg-gray-800 rounded-lg ">
        <button>Contact Us to Get Started &nbsp; <i class="fa-solid fa-arrow-right-long"></i></button>
      </Link>
    </div>
  );
};

export default Calculation;
