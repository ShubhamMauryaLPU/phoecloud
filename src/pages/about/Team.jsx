import React from "react";
import { AnimatedTestimonials } from "../../ui/animated-testimonials";
const Team = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Amrit Kumar Maurya",
      designation: "Director",
      src: "./image/amritImg.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Devendra Singh",
      designation: "Director",
      src: "./image/amritImg.webp",
    },
  ];
  return (
    <div className="bg-gray-950">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Team;
