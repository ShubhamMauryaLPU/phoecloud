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
      title: "Tailored Transformation Roadmaps",
      description:
        "No two businesses are the same, and neither should their transformation journey be. PhoeTech creates customized roadmaps, ensuring that your Digital Transformation journey aligns perfectly with your unique goals and challenges.",
    },
    {
      title: "Scalable Solutions for Every Business Size",
      description:
        "Whether you're a startup or an enterprise, our suite scales seamlessly to meet your evolving needs. Future-proof your business with solutions that grow with you.",
    },
    {
      title: "Expert Guidance Every Step of the Way",
      description:
        "Embark on your Digital Transformation journey with confidence. PhoeTech's team of experts provides dedicated guidance, ensuring a smooth transition and maximum value extraction from our suite of services.",
    },
  ];

export default OurServices;
