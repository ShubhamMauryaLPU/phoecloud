import React from "react";
import { BackgroundGradient } from "../../../ui/background-gradient";
const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-white bg-gray-900">
      <h1 className="text-center text-2xl lg:text-3xl pt-6 font-bold font-serif">
        Key Features
      </h1>
      <div className="my-10 mx-8 w-full">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-1 justify-center items-center">
          <div className="mt-4 flex justify-center h-[18rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <h2 className="lg:text-2lg text-2xl text-bold text-black mt-4 text-center dark:text-neutral-200">
                  Financial Maestro - Integrated Accounting Solutions
                </h2>
                <p className=" text-neutral-600 pt-1 dark:text-neutral-400 text-center flex-grow lg:text-base text-[1.1rem]">
                  Unleash the financial maestro within your business.
                  CommerceSuite orchestrates a harmonious blend of features,
                  allowing you to manage transactions, track expenses, and
                  conduct insightful financial performances effortlessly.
                </p>
              </div>
            </BackgroundGradient>
          </div>
          <div className="mt-4 flex justify-center h-[18rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <h2 className="lg:text-2lg text-2xl  text-black mt-4 text-center dark:text-neutral-200">
                  Expense Ballet - Choreographed Management
                </h2>
                <p className=" text-neutral-600 pt-1 dark:text-neutral-400 text-center flex-grow lg:text-base text-[1.1rem]">
                  Bid farewell to the dance of complexity in expense management.
                  CommerceSuite choreographs your expense processes, ensuring a
                  graceful performance of automation and precision. Keep your
                  budget in rhythm with optimal efficiency.
                </p>
              </div>
            </BackgroundGradient>
          </div>
          <div className="mt-4 flex justify-center h-[18rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                <h2 className="lg:text-2lg text-2xl  text-black mt-4 text-center dark:text-neutral-200">
                  Payment Sonata - Effortless Processing
                </h2>
                <p className=" text-neutral-600 dark:text-neutral-400 pt-1 text-center flex-grow lg:text-base text-[1.1rem]">
                  PhoeTech's CommerceSuite conducts a seamless payment sonata.
                  Accept payments gracefully across various channels,
                  orchestrating a melody of options for your customers. Elevate
                  their experience with secure and seamless transactions.
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
