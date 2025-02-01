import React from "react";
import { HoverBorderGradient } from "../../../ui/hover-border-gradient";
import { Link } from "react-router-dom";
const Calculation = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-gray-900 h-[50vh] lg:h-[70vh]">
      <h1 className="text-2xl lg:text-4xl text-center font-bold font-serif lg:w-[70%]">
        Ready to Elevate Your Revenue?
      </h1>
      <p className="text-base lg:text-xl my-3 text-center  font-serif lg:w-[70%] w-[90%]">
        PhoeTech's RBF solutions are not just a product; they are a gateway to
        unlocking your brand's full potential. Join the ranks of successful D2C
        businesses that have embraced innovation and achieved remarkable growth
        with PhoeTech.
      </p>
      <HoverBorderGradient
        containerClassName="rounded-full mt-3"
        as={Link}
        to="/contact"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Contact Us to Get Started &nbsp; <i class="fa-solid fa-arrow-right-long"></i></span>
      </HoverBorderGradient>
    </div>
  );
};
export default Calculation;
