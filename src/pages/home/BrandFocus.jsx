import React from "react";
import { HoverEffect } from "../../ui/card-hover-effect";
const BrandFocus = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:h-[90vh]  bg-black">
      <h1 className="text-center font-bold mt-6 text-3xl lg:text-4xl font-serif text-dark dark:text-white">Why PhoeTech ?</h1>
      <div className="text-lg">
      <HoverEffect items={projects} />
      </div>
    </div>
  );
};
export const projects = [
  {
    title: "Proven Expertise",
    description:
      "Our industry experts deliver measurable results for D2C brands.",
  },
  {
    title: "Innovation at the Core",
    description: "Stay ahead with our commitment to continuous innovation.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your success is our priority; we work closely to align solutions with your vision.",
  },
];
export default BrandFocus;
