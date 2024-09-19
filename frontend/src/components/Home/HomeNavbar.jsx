import React, { useState } from "react";
import { CgIfDesign } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../../styles/styles";
import { BsFillBasketFill } from "react-icons/bs";
import { IoClose, IoMenu } from "react-icons/io5";
import { SiKamailio } from "react-icons/si";

const HomeNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav
      className={`w-full h-20 ${styles.paddingHorizontal} flex items-center justify-between`}
    >
      <Link to="/" className="flex items-center gap-x-1">
        <CgIfDesign className="text-3xl text-yellow-500" />
        <h1 className="uppercase font-semibold text-xl text-white">kayuu</h1>
        {/* <SiKamailio className="text-yellow-500 text-8xl"/> */}
      </Link>
      <ul className="hidden lg:flex items-center gap-x-10">
        <li>
          <Link
            to="/"
            className="text-base font-medium text-white hover:text-yellow-500 transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-base font-medium text-white hover:text-yellow-500 transition-all duration-300"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/rooms"
            className="text-base font-medium text-white hover:text-yellow-500 transition-all duration-300"
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="text-base font-medium text-white hover:text-yellow-500 transition-all duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className="text-base font-medium text-white hover:text-yellow-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="text-base font-medium text-yellow-500 hover:text-yellow-500 transition-all duration-300"
          >
            <BsFillBasketFill className="text-xl" />
          </Link>
        </li>
      </ul>
      <button
        className="bg-yellow-500 w-8 h-8 lg:hidden flex items-center justify-center"
        onClick={() => setOpenNav(!openNav)}
      >
        <IoMenu className="text-xl" />
      </button>
      <div
        className={`w-full h-screen fixed bg-transparent top-0 left-0 right-0 bottom-0 z-20 flex justify-end ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
        onClick={() => setOpenNav(!openNav)}
      >
        <div className="bg-white w-3/5 md:w-2/5 h-full shadow-xl p-4">
          <button
            className="bg-yellow-500 w-8 h-8 flex items-center justify-center"
            onClick={() => setOpenNav(!openNav)}
          >
            <IoClose className="text-xl" />
          </button>
          <ul className="flex flex-col items-start gap-y-3 mt-8 gap-x-10">
            <li>
              <NavLink name={"Home"} url={"/"} />
            </li>
            <li>
              <NavLink name={"Products"} url={"/products"} />
            </li>
            <li>
              <NavLink name={"Rooms"} url={"/rooms"} />
            </li>
            <li>
              <NavLink name={"About Us"} url={"/about-us"} />
            </li>
            <li>
              <NavLink name={"Contact Us"} url={"/contact-us"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
