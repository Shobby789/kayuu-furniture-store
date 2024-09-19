import React, { useState } from "react";
import { styles } from "../../styles/styles";
import NavLink from "./NavLink";
import { CgIfDesign } from "react-icons/cg";
import { BsFillBasketFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SiKamailio } from "react-icons/si";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav
      className={`w-full h-20 ${styles.paddingHorizontal} flex items-center justify-between border-b relative`}
    >
      <Link to="/" className="flex items-center gap-x-1">
        <CgIfDesign className="text-3xl text-yellow-500" />
        <h1 className="uppercase font-semibold text-xl">kayuu</h1>
        {/* <SiKamailio className="text-yellow-500 text-8xl"/> */}
      </Link>
      <ul className="hidden lg:flex items-center gap-x-10">
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
        <li>
          <Link to="/cart">
            <BsFillBasketFill className="text-xl text-yellow-500" />
          </Link>
        </li>
      </ul>
      <div className="flex items-center lg:hidden gap-x-6">
        <Link to="/cart">
          <BsFillBasketFill className="text-xl text-yellow-500" />
        </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <li>
<BsFillBasketFill className="text-xl text-yellow-500" />
<NavLink name={""} url={"/cart"} />
</li> */
}
