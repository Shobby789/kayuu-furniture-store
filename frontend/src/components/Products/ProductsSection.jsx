import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "../Home/ProductCard";
import { RiPlayListAddLine } from "react-icons/ri";
import { products } from "../../constants/products";
import { Link } from "react-router-dom";
import { useFetchProductsQuery } from "../../features/productsSlice/productsSlice";

const ProductsSection = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { data, error, isLoading } = useFetchProductsQuery();

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1>Something went wrong.</h1>
      </div>
    );

  return (
    <div
      className={`w-full py-6 lg:py-12 ${styles.paddingHorizontal} bodyBg relative`}
    >
      <div
        className={`w-full ${
          showFilters ? "-translate-x-0" : "-translate-x-full"
        } h-screen absolute top-0 left-0 right-0 bottom-0 bg-transparent z-40 transition-all duration-500`}
        onClick={() => setShowFilters(!showFilters)}
      >
        <div
          className={`h-screen bg-white shadow-xl w-3/5 md:w-2/5 lg:w-1/5 flex flex-col gap-y-6 items-start px-6 lg:px-10 justify-start pt-20 fixed top-0 left-0 bottom-0 z-50 transition-all duration-500`}
        >
          <h1 className="text-gray-600 text-xl font-semibold">
            Product categories
          </h1>
          <div className="w-full flex flex-col gap-y-3">
            <Link
              to="/products/bathroom"
              className="text-base w-full flex items-center justify-between text-gray-600"
            >
              <span>Bathroom</span>
              <span>(10)</span>
            </Link>
            <Link
              to="/products/bedroom"
              className="text-base w-full flex items-center justify-between text-gray-600"
            >
              <span>Bedroom</span>
              <span>(10)</span>
            </Link>
            <Link
              to="/products/chairs"
              className="text-base w-full flex items-center justify-between text-gray-600"
            >
              <span>Chairs</span>
              <span>(10)</span>
            </Link>
            <Link
              to="/products/home-office"
              className="text-base w-full flex items-center justify-between text-gray-600"
            >
              <span>Home Office</span>
              <span>(10)</span>
            </Link>
            <Link
              to="/products/kitchen"
              className="text-base w-full flex items-center justify-between text-gray-600"
            >
              <span>Kitchen</span>
              <span>(10)</span>
            </Link>
            <Link
              to="/products/living-room"
              className="text-base w-full flex items-center justify-between text-gray-600"
            >
              <span>Living Room</span>
              <span>(10)</span>
            </Link>
            <Link
              to="/products/sofa"
              className="text-base w-full flex items-center justify-between text-gray-600"
            >
              <span>Sofa</span>
              <span>(10)</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6 flex flex-col gap-y-12">
        <div className="w-full relative flex flex-col gap-6 lg:flex-row items-start lg:items-center justify-between">
          <div className="flex items-center gap-x-4">
            <button
              className="px-4 py-2 uppercase text-black hover:text-white transition-all duration-100 bg-yellow-500 text-xs md:text-sm font-semibold flex items-center gap-x-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <RiPlayListAddLine className="text-base" />
              options
            </button>
            <p className="text-sm md:text-base font-medium text-gray-500">
              Showing 1–12 of 18 results
            </p>
          </div>
          <div className="flex flex-col gap-1 relative">
            <button className="float-right flex items-center gap-x-2 border-none">
              <span className="text-sm md:text-base font-medium text-gray-500">
                Default Sorting
              </span>
              <IoIosArrowDown />
            </button>
            {/* <div className="absolute top-6 w-24 h-34 bg-white shadow-xl bg z-30"></div> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pb-12">
          {data?.data?.map((product, index) => {
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
    </div>
  );
};

export default ProductsSection;
