import React from "react";
import { styles } from "../../styles/styles";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} py-6 flex flex-col gap-y-10`}
    >
      <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
          TESTIMONIALS
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">What People Say</h2>
        <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
          view all testimonials
        </button>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default TestimonialsSection;
