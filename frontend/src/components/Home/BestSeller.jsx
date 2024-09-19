import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import ProductCard from "./ProductCard";
import { homeproducts2 } from "../../constants/homeproducts";
import { useFetchProductsQuery } from "../../features/productsSlice/productsSlice";

const BestSeller = () => {
  const { data, error, isLoading } = useFetchProductsQuery();
  const [bestProducts, setBestProducts] = useState([])
  
  useEffect(() => {
    if (data && data.data) {
      // Set bestProducts state after data is available
      setBestProducts(data.data.slice(0, 8));
    }
  }, [data]);
  // console.log("best products >> ", bestProducts)

  return (
    <div
      className={`${styles.paddingHorizontal} w-full py-6 lg:py-24 flex flex-col gap-y-8`}
    >
      <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
          BEST SELLER
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
          Discover Our <br /> Most Selling Products
        </h2>
        <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
          view all best sellers
        </button>
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6`}
      >
        {bestProducts?.map((product, index) => {
            return (
              <ProductCard
                title={product.title}
                price={product.price}
                id={product._id}
                category={product.category}
                image={`http://localhost:3001/uploads/${product.image}`}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BestSeller;
