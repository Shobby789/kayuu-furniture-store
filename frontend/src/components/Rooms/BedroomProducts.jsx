import React from "react";
import { styles } from "../../styles/styles";
import ProductCard from "../Home/ProductCard";

const BedroomProducts = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 lg:py-16 bodyBg`}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default BedroomProducts;
