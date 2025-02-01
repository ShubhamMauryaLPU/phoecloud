import React from "react";
import { BackgroundGradient } from "../../ui/background-gradient";
import { Link } from "react-router-dom";
const RevenueBoost = () => {
  return (
    <div className="py-12 bg-gray-950 flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-4xl mt-4 text-center lg:w-[80%] text-[olive] dark:text-white  font-bold font-serif">
        Elevate Your Revenue with PhoeTech's RBF Solutions
      </h1>
      <p className="text-base text-center px-7 w-[90%] lg:w-[80%] mt-3 text-white font-bold font-serif">
        At PhoeTech, we specialize in Revenue Based Financing (RBF) tailored for
        Direct-to-Consumer (D2C) businesses. Discover innovative strategies
        designed to propel your brand's growth, from dynamic pricing models to
        personalized customer experiences.
      </p>
      <div className="mt-10 mx-8 w-full">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-1 justify-center items-center">
          <div className="mt-4 flex justify-center h-[18rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <i className="fa-solid fa-rocket dark:text-white float-start text-6xl"></i>
                <h2 className="text-lg sm:text-xl text-black mt-4 text-center dark:text-neutral-200">
                  RBF Expertise for Explosive Growth
                </h2>
                <p className=" text-neutral-600 dark:text-neutral-400 text-center flex-grow text-base">
                  Unlock the potential of your brand with our custom RBF
                  strategies. Watch your revenue soar as we implement dynamic
                  pricing models and create personalized customer experiences.
                </p>
                <Link to={"/"} className="text-black dark:text-white ">
                  <button className="hover:bg-gray-950 rounded-lg m-2 p-1">
                    Discover RBF <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
          </div>

          <div className="flex justify-center mt-4 h-[18rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <i className="fa-solid fa-people-arrows dark:text-white float-start text-6xl"></i>
                <h2 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  Comprehensive SaaS Solutions
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  PhoeTech goes beyond RBF, offering a suite of Supporting SaaS
                  Solutions to optimize every aspect of your business.
                </p>
                <Link to={"/"} className="text-black dark:text-white ">
                  <button className="hover:bg-gray-950 rounded-lg m-2 p-1">
                    EXPLORE SASS SOLUTIONS{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueBoost;
