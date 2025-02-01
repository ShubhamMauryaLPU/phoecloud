import React from 'react'
import { HoverEffect } from "../../ui/card-hover-effect";
const CoreValues = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-950">
          <h1 className="text-center my-3 mt-4 text-white text-3xl font-bold">
          Core Values
          </h1>
          <div className="text-xl lg:w-[90%] ">
            <HoverEffect items={projects} />
          </div>
        </div>
  )
}
export const projects = [
    {
      title: "Innovation",
      description:
        "We embrace creativity and curiosity, constantly seeking new and better ways to drive success for our clients.",
    },
    {
      title: "Integrity",
      description:
        "Trust is the foundation of any successful partnership. We prioritize honesty, transparency, and ethical business practices.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, setting high standards for ourselves and our solutions.",
    },
    {
      title: "Empowerment",
      description:
        "PhoeTech is dedicated to empowering businesses by providing the tools and knowledge needed for sustainable growth.",
    },
    {
      title: "Adaptability",
      description:
        "In a rapidly changing world, we pride ourselves on being agile and adaptable. We tailor our solutions to meet the unique needs of each client.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the strength of teamwork and collaboration, both within our team and with our clients. By fostering open communication and shared goals.",
    },
  ];

export default CoreValues