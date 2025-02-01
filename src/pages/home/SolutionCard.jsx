import React from "react";
import { Link } from "react-router-dom";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
const SolutionCard = () => {
  const words =
    "Whether you're a startup or an enterprise, PhoeTech provides scalable and adaptable solutions to meet your unique needs.";
  return (
    <div className="bg-gray-900 h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center text-center text-white">
      <h1 className="font-bold text-3xl lg:text-4xl font-serif px-0.5 py-2">
        Tailored Solutions for Every Business Size
      </h1>
      <div>
      <TextGenerateEffect words={words} />{" "}
      </div>
      <button className="p-2 px-3 mt-1 text-xl rounded-lg hover:bg-black">
        <Link to={"/about/finance"}>
          Get Started &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </button>
    </div>
  );
};

export default SolutionCard;
