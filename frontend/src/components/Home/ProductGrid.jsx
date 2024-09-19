import React from "react";
import ProductCard from "./ProductCard";
import { styles } from "../../styles/styles";
import { homeproducts1 } from "../../constants/homeproducts";

const ProductGrid = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 lg:pb-28`}
    >
      {homeproducts1.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductGrid;
