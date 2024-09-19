import React from "react";
import {
  Category1,
  Category2,
  Category3,
  Category4,
} from "../../assets/export";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative">
        <img
          src={Category1}
          alt=""
          className="brightness-[50%] hover:brightness-[40%] transition-all duration-75"
        />
        <Link
          to="/living-rooms"
          className="absolute bottom-10 left-10 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
        >
          <p className="text-xl font-bold">Living Room</p>
          <BsArrowRight className="text-2xl" />
        </Link>
      </div>
      <div className="relative">
        <img
          src={Category2}
          alt=""
          className="brightness-[50%] hover:brightness-[40%] transition-all duration-75"
        />
        <Link
          to="/living-rooms"
          className="absolute bottom-10 left-10 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
        >
          <p className="text-xl font-bold">Bedroom</p>
          <BsArrowRight className="text-2xl" />
        </Link>
      </div>
      <div className="relative">
        <img
          src={Category3}
          alt=""
          className="brightness-[50%] hover:brightness-[40%] transition-all duration-75"
        />
        <Link
          to="/living-rooms"
          className="absolute bottom-10 left-10 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
        >
          <p className="text-xl font-bold">Kitchen</p>
          <BsArrowRight className="text-2xl" />
        </Link>
      </div>
      <div className="relative">
        <img
          src={Category4}
          alt=""
          className="brightness-[50%] hover:brightness-[40%] transition-all duration-75"
        />
        <Link
          to="/living-rooms"
          className="absolute bottom-10 left-10 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
        >
          <p className="text-xl font-bold">Bathroom</p>
          <BsArrowRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryGrid;
