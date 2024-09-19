import React from "react";
import { styles } from "../../styles/styles";
import { CgIfDesign } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 lg:pt-16 bg-[#131313] text-white">
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6 ${styles.paddingHorizontal}`}
      >
        <div className="col-span-3 flex flex-col gap-y-8">
          <div className="flex items-center gap-x-1">
            <CgIfDesign className="text-4xl text-yellow-500" />
            <h1 className="uppercase font-semibold text-3xl">kayuu</h1>
          </div>
          <div className="flex flex-col gap-y-2">
            <Link to="/" className="text-base">
              3538 Torrance Blvd, Torrance, CA 90503, USA
            </Link>
            <Link to="/" className="text-base">
              +1 123 456 7890
            </Link>
            <Link to="mailto:info@example.com" className="text-base">
              info@example.com
            </Link>
            <Link to="/" className="text-base">
              Visit Our Store
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-y-8">
          <h1 className="uppercase font-semibold text-xl">Useful Links</h1>
          <div className="flex flex-col gap-y-2">
            <Link to="/" className="text-base">
              Home
            </Link>
            <Link to="/products" className="text-base">
              Products
            </Link>
            <Link to="/rooms" className="text-base">
              Rooms
            </Link>
            <Link to="/about-us" className="text-base">
              About Us
            </Link>
            <Link to="/contact-us" className="text-base">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-y-8">
          <h1 className="uppercase font-semibold text-xl">Rooms</h1>
          <div className="flex flex-col gap-y-2">
            <Link to="/" className="text-base">
              Living Room
            </Link>
            <Link to="/" className="text-base">
              Bedroom
            </Link>
            <Link to="/" className="text-base">
              Kitchen
            </Link>
            <Link to="/" className="text-base">
              Bath Room
            </Link>
            <Link to="/" className="text-base">
              Home Office
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-y-8">
          <h1 className="uppercase font-semibold text-xl">Stay In Touch</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-x-3 gap-y-2">
            <Link
            target="_blank"
              to="https://www.facebook.com"
              className="w-10 h-10 flex items-center justify-center bg-[#2d2d2d]"
            >
              <FaFacebookSquare className="text-xl" />
            </Link>
            <Link
            target="_blank"
              to="https://www.twitter.com"
              className="w-10 h-10 flex items-center justify-center bg-[#2d2d2d]"
            >
              <FaTwitter className="text-xl" />
            </Link>
            <Link
            target="_blank"
              to="https://www.youtube.com"
              className="w-10 h-10 flex items-center justify-center bg-[#2d2d2d]"
            >
              <FaYoutube className="text-xl" />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com"
              className="w-10 h-10 flex items-center justify-center bg-[#2d2d2d]"
            >
              <FaInstagram className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border-[1px] border-gray-500 my-8"></div>
      <div
        className={`flex items-center justify-between py-2 ${styles.paddingHorizontal}`}
      >
        <p className="text-sm font-normal">
          Copyright © 2024 Online Furniture Store
        </p>
        <p className="text-sm font-normal">Powered by Online Furniture Store</p>
      </div>
    </footer>
  );
};

export default Footer;
