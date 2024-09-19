import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import { NewCollectionImg } from "../../assets/export";
import { useFetchProductsQuery } from "../../features/productsSlice/productsSlice";
import ProductCard from "./ProductCard";

const NewCollection = () => {
  const { data, error, isLoading } = useFetchProductsQuery();
  const [livingRoomProducts, setLivingRoomProducts] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      const filteredProducts = data.data.filter(
        (product) => product.category === "living-room"
      );
      const slicedProducts = data.data.slice(-4);

      setLivingRoomProducts(slicedProducts);
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1>Something went wrong.</h1>
      </div>
    );

  return (
    <div className={`w-full ${styles.paddingHorizontal} py-6 lg:py-24`}>
      <div className="w-full grid grid-cols-2 gap-6">
        <div className="col-span-2 lg:col-span-1 lg:pr-14">
          <img src={NewCollectionImg} alt="" className="h-96 w-full" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-8 justify-center">
          <div className="flex items-center justify-start gap-x-3">
            <div className="border w-24 border-yellow-500" />
            <p className="text-yellow-500 font-normal text-sm uppercase">
              new collection
            </p>
          </div>
          <h2 className="text-4xl font-bold">
            A Perfect Set For Your Living Room
          </h2>
          <p className="text-base font-normal leading-7">
            Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur
            faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas
            faucibus vulputate pharetra nunc sed maecenas diam quisque
            habitasse.
          </p>
          <div>
            <button className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium hover:text-white transition-all duration-100">
              shop this collection
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:pt-24`}
      >
        {livingRoomProducts.map((product, index) => {
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

export default NewCollection;
