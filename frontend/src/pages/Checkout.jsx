import React, { useEffect } from "react";
import CustomerInfoForm from "../components/Checkout/CustomerInfoForm";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout - Furniture Store";
  }, []);
  return (
    <div>
      <CustomerInfoForm />
    </div>
  );
};

export default Checkout;
