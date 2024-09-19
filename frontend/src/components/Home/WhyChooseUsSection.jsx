import React from "react";
import { styles } from "../../styles/styles";
import { CiDiscount1 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSpatialTracking } from "react-icons/md";

const WhyChooseUsSection = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} py-6 lg:py-24 flex flex-col gap-y-10`}
    >
      <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
          IF YOU WONDER
        </p>
      </div>
      <div>
        <h2 className="text-5xl font-bold mb-6">Why Choose Us</h2>
        <div className="w-full border border-gray-100" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
        <div className="flex flex-col gap-3">
          <CiDiscount1 className="text-5xl text-gray-600" />
          <p className="text-base font-bold">Big Discount</p>
          <p className="text-sm text-gray-600 font-medium">
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <LiaShippingFastSolid className="text-5xl text-gray-600" />
          <p className="text-base font-bold">Free Shipping</p>
          <p className="text-sm text-gray-600 font-medium">
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <IoWalletOutline className="text-5xl text-gray-600" />
          <p className="text-base font-bold">Secure Payments</p>
          <p className="text-sm text-gray-600 font-medium">
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <MdOutlineSpatialTracking className="text-5xl text-gray-600" />
          <p className="text-base font-bold">Order Tracking</p>
          <p className="text-sm text-gray-600 font-medium">
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
