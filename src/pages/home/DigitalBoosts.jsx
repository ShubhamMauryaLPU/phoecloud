import React from "react";
import { Link } from "react-router-dom";

const DigitalBoosts = () => {
  return (
    <div className="h-[60vh] lg:h-[70vh] flex flex-col justify-center items-center text-center  bg-black text-white">
      <h1 className="font-bold text-3xl lg:text-4xl w-[80%] font-serif ">
        Ready to Transform Your Digital Presence?
      </h1>
      <p className="w-[80%] text-xl lg:text-2xl mt-4">
        PhoeTech is your partner in D2C success. Let's embark on a journey of
        innovation, growth, and unparalleled success together.
      </p>
      <Link to={"/contact"} className="text-black dark:text-white ">
        <button className="hover:bg-blue-950 rounded-lg mt-5 p-2 px-5 text-lg">
          Contact Us Today &nbsp; <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </Link>
    </div>
  );
};

export default DigitalBoosts;
