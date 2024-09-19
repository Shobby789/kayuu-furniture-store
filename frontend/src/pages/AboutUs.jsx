import React, { useEffect } from "react";
import CommonHeader from "../components/Globals/CommonHeader";
import SubscribeSection from "../components/Home/SubscribeSection";
import About from "../components/AboutUs/About";
import AboutSection from "../components/AboutUs/AboutSection";
import BestQualitySection from "../components/AboutUs/BestQualitySection";

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About - Furniture Store';
  }, []); 
  return (
    <div>
      <CommonHeader title={"About Us"} />
      <AboutSection />
      <About />
      <BestQualitySection/>
      <SubscribeSection />
    </div>
  );
};

export default AboutUs;
