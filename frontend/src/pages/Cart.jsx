import React, { useEffect } from "react";
import CartGrid from "../components/Cart/CartGrid";

const Cart = () => {
  useEffect(() => {
    document.title = "Cart - Furniture Store";
  }, []);
  return (
    <div>
      <CartGrid />
    </div>
  );
};

export default Cart;
