import React, { useEffect } from "react";
import { styles } from "../styles/styles";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found - Furniture Store";
  }, []);
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-12 bodyBg`}>
      <div className="w-full bg-white flex flex-col items-center justify-center h-[70vh] gap-6 text-center">
        <h1 className="text-2xl lg:text-5xl font-semibold">
          This page doesn't seem to exist.
        </h1>
        <p className="text-base lg:text-xl font-bold text-gray-600">
          It looks like the link pointing here was faulty!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
