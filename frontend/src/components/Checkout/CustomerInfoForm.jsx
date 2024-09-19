import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { placeOrder } from "../../features/ordersSlice/ordersSlice";

const CustomerInfoForm = () => {
  const cartProducts = useSelector((state) => state.cart);
  // console.log("cartProducts >> ", cartProducts)
  const dispatch = useDispatch();
  const [data, setData] = useState({
    customerEmail: "",
    firstname: "",
    lastname: "",
    companyname: "",
    phonenumber: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    additionalInformation: "",
    cardnumber: "",
    expiryDate: "",
    cvvnumber: "",
    homeAddress: "",
    orderStatus: 1,
  });

  const {
    customerEmail,
    firstname,
    lastname,
    companyname,
    phonenumber,
    country,
    state,
    city,
    zipcode,
    additionalInformation,
    cardnumber,
    expiryDate,
    cvvnumber,
    homeAddress,
    orderStatus,
  } = data;

  // console.log(cartProducts);
  const filteredItems = cartProducts.cartItems.map(({ id, cartQuantity }) => ({
    id,
    cartQuantity,
  }));

  // console.log("products to send on server >>", filteredItems);

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      placeOrder({
        // data,
        customerEmail,
        firstname,
        lastname,
        companyname,
        phonenumber,
        country,
        state,
        city,
        zipcode,
        additionalInformation,
        cardnumber,
        expiryDate,
        cvvnumber,
        homeAddress,
        orderStatus,
        products: cartProducts.cartItems,
        totalAmount: cartProducts.cartTotalAmount,
        userId: 789,
      })
    );
    // console.log("Customer data >> ", data);
  };

  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-12 bodyBg`}>
      <div className="bg-white py-4 md:py-6 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:pb-8">
        <div className="col-span-3 lg:col-span-2 order-1 lg:order-1">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-y-4 order-2 lg:order-1 px-6 py-6 border"
          >
            <h1 className="font-bold text-lg">Customer information</h1>
            <div className="w-full">
              <input
                type="email"
                name="customerEmail"
                id="customerEmail"
                value={data.customerEmail}
                onChange={handleChange}
                placeholder="Your email *"
                className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
              />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                  id="firstname"
                  placeholder="First Name *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  name="companyname"
                  id="companyname"
                  value={data.companyname}
                  onChange={handleChange}
                  placeholder="Company Name *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  value={data.phonenumber}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                name="country"
                id="country"
                value={data.country}
                onChange={handleChange}
                placeholder="Country / Region *"
                className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
              />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="col-span-3 lg:col-span-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={data.city}
                  onChange={handleChange}
                  placeholder="Town / City *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
              <div className="col-span-3 lg:col-span-1">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={data.state}
                  onChange={handleChange}
                  placeholder="State *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
              <div className="col-span-3 lg:col-span-1">
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  value={data.zipcode}
                  onChange={handleChange}
                  placeholder="Zip Code *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                name="homeAddress"
                id="homeAddress"
                value={data.homeAddress}
                onChange={handleChange}
                placeholder="Home Address *"
                className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
              />
            </div>
            <h1 className="font-bold text-lg">Additional information</h1>
            <div className="w-full">
              <textarea
                placeholder="Notes about your order or delivery..."
                className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                name="additionalInformation"
                value={data.additionalInformation}
                id="additionalInformation"
                onChange={handleChange}
                cols="30"
                rows="2"
              ></textarea>
            </div>
            <h1 className="font-bold text-lg">Payment</h1>
            <div className="w-full">
              <input
                type="text"
                name="cardnumber"
                id="cardnumber"
                value={data.cardnumber}
                onChange={handleChange}
                placeholder="2412 7512 3412 3456 *"
                className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
              />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  name="expiryDate"
                  id="expiryDate"
                  value={data.expiryDate}
                  onChange={handleChange}
                  placeholder="Expiry Date *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  name="cvvnumber"
                  id="cvvnumber"
                  value={data.cvvnumber}
                  onChange={handleChange}
                  placeholder="CVV Number *"
                  className="text-sm text-gray-600 border w-full outline-none py-3 px-3"
                />
              </div>
            </div>
            <div className="w-full pt-4">
              <button
                type="submit"
                className="bg-yellow-500 py-3 uppercase text-xs font-medium block text-center w-full hover:text-white"
              >
                place your order
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col gap-y-4 order-1 lg:order-2">
          <h1 className="font-bold text-lg">Your order</h1>
          <div className="border w-full">
            <div className="w-full flex items-center justify-between py-5 px-4 border-b">
              <p className="text-sm font-semibold text-gray-600">Product</p>
              <p className="text-sm font-semibold text-gray-600">Subtotal</p>
            </div>
            {cartProducts?.cartItems?.map((product) => {
              return (
                <div className="w-full flex items-center justify-between py-6 px-4 border-b">
                  <div className="flex items-center justify-start gap-x-4">
                    <img
                      src={`http://localhost:3001/uploads/${product?.image}`}
                      alt=""
                      className="h-10"
                    />
                    <p className="text-sm font-normal flex items-center gap-2 text-gray-600">
                      {product?.title} <IoClose className="text-lg" />
                      {product?.cartQuantity}
                    </p>
                  </div>
                  <p className="text-sm font-normal text-gray-600">$500.00</p>
                </div>
              );
            })}
            <div className="w-full flex items-center justify-between py-6 px-4 border-b">
              <p className="text-sm font-normal text-gray-600">Subtotal</p>
              <p className="text-sm font-normal text-gray-600">
                ${cartProducts?.cartTotalAmount}
              </p>
            </div>
            <div className="w-full flex items-center justify-between py-6 px-4">
              <p className="text-base font-bold text-gray-600">Total</p>
              <p className="text-base font-bold text-gray-600">
                ${cartProducts?.cartTotalAmount + 50}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoForm;
