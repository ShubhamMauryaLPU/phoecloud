import React from "react";
import { HoverEffect } from "../../../ui/card-hover-effect";
const OurServices = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-white bg-gray-950">
      <React.Fragment className="text-center">
        <p className="text-center pt-4 text-lg">Our Service </p>
        <h1 className="text-2xl lg:text-3xl font-bold font-serif py-2">
          Unique Selling Propositions
        </h1>
        <h5 className="text-lg font-bold ">
          &ndash; Unleash Your Revenue Potential
        </h5>
      </React.Fragment>
      <div className="text-xl lg:w-[90%]">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};
export const projects = [
  {
    title: "Symphony of Simplicity",
    description:
      "CommerceSuite orchestrates an all-in-one symphony, simplifying the complexities of financial management. Experience the convenience of a unified platform, harmonizing accounting, expenses, and payments in one beautiful composition.",
  },
  {
    title: "Melodic Customization for D2C Brilliance",
    description:
      "Craft your financial masterpiece. CommerceSuite provides a palette of features tailored for D2C brilliance, allowing you to compose your financial processes in harmony with the melody of your unique business needs.",
  },
  {
    title: "Crescendo of Scalability",
    description:
      "Whether your business is a delicate sonnet or a powerful symphony, CommerceSuite crescendos with you. Scale effortlessly, conducting financial harmony that resonates with the evolving needs of your business.",
  },
];

export default OurServices;
