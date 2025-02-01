import React from "react";
import { BackgroundGradient } from "../../../ui/background-gradient";
const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-white bg-gray-900">
      <h1 className="text-center text-2xl lg:text-3xl pt-6 font-bold font-serif">
        Key Features
      </h1>
      <div className="my-10 mx-8 w-full">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-1 justify-center items-center">
          <div className="mt-4 flex justify-center h-[16rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <h2 className="lg:text-2lg text-2xl text-bold text-black mt-4 text-center dark:text-neutral-200">
                  Comprehensive Business Overhaul
                </h2>
                <p className=" text-neutral-600 pt-1 dark:text-neutral-400 text-center flex-grow lg:text-base text-[1.1rem]">
                  PhoeTech's Digital Transformation Suite is your all-in-one
                  solution for a comprehensive business overhaul. Seamlessly
                  integrate digital technologies into every facet of your
                  operations to enhance productivity.
                </p>
              </div>
            </BackgroundGradient>
          </div>
          <div className="mt-4 flex justify-center h-[16rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <h2 className="lg:text-2lg text-2xl  text-black mt-4 text-center dark:text-neutral-200">
                  Strategic Data Utilization
                </h2>
                <p className=" text-neutral-600 pt-1 dark:text-neutral-400 text-center flex-grow lg:text-base text-[1.1rem]">
                  Harness the power of data like never before. Our suite
                  empowers you to strategically utilize data to make informed
                  decisions, predict trends, and gain a competitive edge in your
                  industry.
                </p>
              </div>
            </BackgroundGradient>
          </div>
          <div className="mt-4 flex justify-center h-[16rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <h2 className="lg:text-2lg text-2xl  text-black mt-4 text-center dark:text-neutral-200">
                  Cloud Integration for Seamless Collaboration
                </h2>
                <p className=" text-neutral-600 dark:text-neutral-400 pt-1 text-center flex-grow lg:text-base text-[1.1rem]">
                  Break free from traditional constraints with cloud
                  integration. Collaborate effortlessly, enhance flexibility,
                  and ensure the security of your valuable business data.
                </p>
              </div>
            </BackgroundGradient>
          </div>
          <div className="mt-4 flex justify-center h-[16rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <h2 className="lg:text-2lg text-2xl  text-black mt-4 text-center dark:text-neutral-200">
                  Agile Customer Experiences
                </h2>
                <p className=" text-neutral-600 dark:text-neutral-400 pt-1 text-center flex-grow lg:text-base text-[1.1rem]">
                  Deliver unparalleled customer experiences with agility at the
                  core. PhoeTech's suite enables you to adapt swiftly to
                  changing customer expectations and preferences.
                </p>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
