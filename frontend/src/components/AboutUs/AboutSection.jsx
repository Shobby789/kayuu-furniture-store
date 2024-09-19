import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section-1 w-full relative flex justify-center">
      <div className="w-full lg:w-4/5 h-auto py-4 lg:py-0 lg:h-44 bg-white absolute bottom-0 grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-gray-500 text-4xl lg:text-6xl font-bold">1982</p>
          <p className="text-gray-500 text-base uppercase font-normal">
            founded
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-gray-500 text-4xl lg:text-6xl font-bold">400</p>
          <p className="text-gray-500 text-base uppercase font-normal">
            EMPLOYEES
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-gray-500 text-4xl lg:text-6xl font-bold">1000+</p>
          <p className="text-gray-500 text-base uppercase font-normal">
            PRODUCTS
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-gray-500 text-4xl lg:text-6xl font-bold">5</p>
          <p className="text-gray-500 text-base uppercase font-normal">
            stores
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
