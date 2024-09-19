import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import NewCollection from "../components/Home/NewCollection";
import ProductGrid from "../components/Home/ProductGrid";
import CategoryGrid from "../components/Home/CategoryGrid";
import BestSeller from "../components/Home/BestSeller";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import SubscribeSection from "../components/Home/SubscribeSection";
import Footer from "../components/Globals/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Furniture Store";
  }, []);
  return (
    <>
      <Hero />
      <NewCollection />
      <CategoryGrid />
      <BestSeller />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Home;
