import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price, id, description, category }) => {
  const checkCategory = () => {
    category =
      category === "bedroom"
        ? "Bedroom"
        : category === "living-room"
        ? "Living Room"
        : category === "home-office"
        ? "Home Office"
        : category === "bathroom"
        ? "Bathroom"
        : category === "kitchen"
        ? "Kitchen"
        : "";
    return category;
  };
  return (
    <Link to={`/products/${id}`}>
      <div
        className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
      >
        <img
          src={image}
          alt=""
          className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
        />
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-xs text-gray-500 font-medium">{checkCategory()}</p>
          <p className="text-base text-yellow-500 font-medium">{title}</p>
          <p className="text-base text-black font-medium">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
