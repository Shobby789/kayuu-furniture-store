import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ page }) => {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="w-full">{page}</div>
      <Footer />
    </div>
  );
};

export default Layout;
