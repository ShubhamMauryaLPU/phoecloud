import React from "react";
import { HoverEffect } from "../../../ui/card-hover-effect";
const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-950">
      <h1 className="text-center my-3 mt-4 text-white text-3xl font-bold">
        Key Features
      </h1>
      <div className="text-xl lg:w-[90%]">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};
export const projects = [
  {
    title: "Dynamic Pricing Models",
    description:
      "PhoeTech's RBF incorporates advanced dynamic pricing models that adapt in real-time to market trends, competitor pricing, and consumer behavior. Maximize revenue and stay competitive without manual intervention.",
  },
  {
    title: "Personalized Customer Experiences",
    description:
      "Our RBF solutions create personalized customer journeys, enhancing user engagement and fostering brand loyalty. Tailor your offerings to individual preferences, turning one-time buyers into lifelong customers.",
  },
  {
    title: "Predictive Analytics for Strategic Decision-Making",
    description:
      "PhoeTech's RBF harnesses the power of predictive analytics, providing valuable insights into market trends and customer behavior. Make informed decisions to stay ahead of the curve and capitalize on emerging opportunities.",
  },
];
export default Feature;
