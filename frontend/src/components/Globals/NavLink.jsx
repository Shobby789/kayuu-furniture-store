import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ name, url }) => {
  return (
    <Link
      to={url}
      className="text-base font-medium hover:text-yellow-500 transition-all duration-300"
    >
      {name}
    </Link>
  );
};

export default NavLink;
