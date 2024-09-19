import React from "react";
import { styles } from "../../styles/styles";
import Navbar from "../Globals/Navbar";
import HomeNavbar from "./HomeNavbar";

const Hero = () => {
  return (
    <div className={`home-hero w-full h-screen `}>
      <HomeNavbar />
      <div
        className={`w-full h-[calc(100vh-5rem)] flex flex-col ${styles.paddingHorizontal} gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-start  `}
      >
        <div className="flex items-center justify-start gap-x-3">
          <div className="border w-10 border-yellow-500" />
          <p className="text-yellow-500 font-normal text-sm">
            KAYUU FURNITURE STORE
          </p>
        </div>
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-6xl">
          Make Yourself At Homez
        </h1>
        <p className="text-white font-medium text-sm md:text-base leading-5 md:leading-7 lg:w-3/5">
          Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
          tellus aliquet tellus iaculis tempus, sollicitudin massa duis eleifend
          egestas turpis sit etiam commodo viverra lacinia ipsum convallis sed
          augue purus scelerisque non vestibulum elementum mi, pellentesque leo
          tincidunt integer.
        </p>
        <div>
          <button className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
