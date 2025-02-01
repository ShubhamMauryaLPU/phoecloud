import React from "react";
import { Link } from "react-router-dom";
const GrowthBanner = () => {
  return (
    <div className="lg:h-[100vh] h-[80vh] bg-[#b0c4f0] flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl lg:text-3xl font-bold font-serif">
        Elevate Your Business with PhoeTech's Services
      </h1>
      <p className="text-2xl my-3 lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-600">
        Your Path to Unprecedented Growth
      </p>
      <button className="bg-sky-950 text-white py-3 lg:py-2 text-base px-10 ">
        <Link to={"/about"}>
          Explore our Services &nbsp;{" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </button>
    </div>
  );
};

export default GrowthBanner;
