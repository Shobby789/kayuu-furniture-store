import React from "react";
import { styles } from "../../styles/styles";
import { MapImage } from "../../assets/export";

const ContactForm = () => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-20 bodyBg`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-3 flex items-center justify-center">
          <img src={MapImage} alt="" className="lg:h-[86%]"/>
        </div>
        <div className="col-span-2">
          <div className="bg-white w-full md:w-[400px] lg:w-[460px] drop-shadow-2xl relative overflow-hidden p-6 md:p-8 lg:py-10 lg:px-14">
            <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
            <form className="w-full flex flex-col items-start justify-center gap-y-4">
              <h1 className="font-bold text-3xl">Send Us A Message</h1>
              <div className="w-full">
                <label htmlFor="name" className="font-bold text-gray-600">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-black py-2 px-3 outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="font-bold text-gray-600">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-black py-2 px-3 outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="font-bold text-gray-600">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="w-full border border-black py-2 px-3 outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
