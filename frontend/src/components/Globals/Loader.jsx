import React from "react";
import { CgIfDesign } from "react-icons/cg";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      {/* <h1>Loading...</h1> */}
      {/* <CgIfDesign className="text-7xl text-yellow-500" /> */}
      <div className="spinner"> </div>
    </div>
  );
};

export default Loader;
