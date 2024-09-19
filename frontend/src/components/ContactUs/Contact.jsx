import React from "react";
import { styles } from "../../styles/styles";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { BsPersonFillGear } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className={`${styles.paddingHorizontal} py-6 lg:py-20 bodyBg`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 flex gap-x-2 lg:gap-x-4">
          <div>
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <FaLocationDot className="text-yellow-500 text-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-yellow-500 uppercase font-semibold text-xs">
              out store
            </p>
            <p className="text-xl text-gray-600 font-bold">
              3538 Torrance Blvd, Torrance, CA 90503, USA
            </p>
            <p className="text-gray-600 text-base font-medium leading-7">
              Posuere sagittis ultricies enim massa nisi neque augue in
              condimentum lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              dapibus leo.
            </p>
            <div className="flex flex-col md:flex-row gap-6 lg:gap-14 items-start lg:items-center">
              <div className="flex items-center gap-x-6">
                <FaFacebook className="hover:text-yellow-500 transition-all duration-200 cursor-pointer" />
                <FaTwitter className="hover:text-yellow-500 transition-all duration-200 cursor-pointer" />
                <FaYoutube className="hover:text-yellow-500 transition-all duration-200 cursor-pointer" />
                <FaInstagram className="hover:text-yellow-500 transition-all duration-200 cursor-pointer" />
              </div>
              <div>
                <Link
                  to="/"
                  className="uppercase text-xs font-medium hover:text-yellow-500 flex items-center gap-x-4"
                >
                  <FaLocationArrow className="hover:text-yellow-500 transition-all duration-200 cursor-pointer text-lg" />
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 lg:px-40">
          <div className="flex items-start gap-x-4 border-b py-4">
            <div>
              <IoCall className="text-base text-yellow-500" />
            </div>
            <div>
              <p className="text-yellow-500 uppercase font-semibold text-xs">
                call us
              </p>
              <p className="text-lg text-gray-600 font-bold">+1 123 456 7890</p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 border-b py-4">
            <div>
              <MdOutlineSupportAgent className="text-xl text-yellow-500" />
            </div>
            <div>
              <p className="text-yellow-500 uppercase font-semibold text-xs">
                SUPPORT
              </p>
              <p className="text-lg text-gray-600 font-bold">
                support@email.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 border-b py-4">
            <div>
              <IoMdPricetags className="text-lg text-yellow-500" />
            </div>
            <div>
              <p className="text-yellow-500 uppercase font-semibold text-xs">
                SALES
              </p>
              <p className="text-lg text-gray-600 font-bold">sales@email.com</p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 py-4">
            <div>
              <BsPersonFillGear className="text-xl text-yellow-500" />
            </div>
            <div>
              <p className="text-yellow-500 uppercase font-semibold text-xs">
                COMPLAINTS
              </p>
              <p className="text-lg text-gray-600 font-bold">
                complaints@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
