import React, { useEffect } from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, calculateTotalAmount, decrementQuantity, removeItem } from "../../features/cartSlice/cartSlice";

const CartGrid = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAmount());
    // console.log(dispatch(calculateTotalAmount()))
  }, [cartProducts, dispatch]);

  return (
    <div className={`py-6 lg:py-12 bodyBg ${styles.paddingHorizontal}`}>
      <div className="bg-white w-full px-4 lg:px-8 py-12 flex flex-col gap-y-6">
        <h2 className="font-semibold text-3xl">Cart</h2>
        <div className="border border-black w-full" />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:px-8 bg-white gap-6">
        <div className="col-span-3 lg:col-span-2 pb-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 border py-3 bodyBg px-4 ">
            <div></div>
            <div>
              <p className="font-semibold text-base text-gray-600">Product</p>
            </div>
            <div>
              <p className="font-semibold text-base text-gray-600">Price</p>
            </div>
            <div>
              <p className="font-semibold text-base text-gray-600">Quantity</p>
            </div>
            <div>
              <p className="font-semibold text-base text-gray-600">Subtotal</p>
            </div>
          </div>
          {cartProducts?.cartItems?.map((product) => {
            return (
              <div className="w-full grid grid-cols-1 lg:grid-cols-5 border gap-3 py-5 px-4" key={product?.id}>
                <div className="flex items-center justify-start gap-x-5">
                  <button className="border rounded-full w-8 h-8 flex items-center justify-center font-semibold" onClick={()=> dispatch(removeItem({id: product?.id}))}>
                    x
                  </button>
                  <img src={`http://localhost:3001/uploads/${product?.image}`} alt="" className="h-16" />
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-sm text-gray-600">
                    {product?.title}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-normal text-sm text-gray-600">${product?.price}</p>
                </div>
                <div className="flex justify-start items-center">
                  <button className="w-8 h-8 text-lg border border-black border-r-0 flex items-center justify-center" onClick={()=> dispatch(decrementQuantity({id: product?.id}))}>
                    -
                  </button>
                  <span className="w-8 h-8 border border-black font-normal text-sm text-gray-600 flex items-center justify-center">
                    {product?.cartQuantity}
                  </span>
                  <button className="w-8 h-8 text-lg border border-black border-l-0 flex items-center justify-center" onClick={()=> dispatch(addToCart({id: product?.id}))}>
                    +
                  </button>
                </div>
                <div className="flex items-center">
                  <p className="font-normal text-sm text-gray-600 flex items-center justify-start">
                    ${product?.price * product?.cartQuantity}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* cart totals */}
        <div className="col-span-3 lg:col-span-1">
          <div className="bodyBg py-4 w-full px-4">
            <p className="font-semibold text-base text-gray-600">Cart totals</p>
          </div>
          <div className="py-4 w-full px-4 flex justify-between items-center border-b">
            <p className="font-semibold text-base text-gray-600">Subtotal</p>
            <p className="font-normal text-base text-gray-600">${cartProducts?.cartTotalAmount}</p>
          </div>
          <div className="py-4 w-full px-4 flex justify-between items-center border-b">
            <p className="font-semibold text-base text-gray-600">Tax</p>
            <p className="font-normal text-base text-gray-600">$50.00</p>
          </div>
          <div className="py-4 w-full px-4 flex justify-between items-center border-b">
            <p className="font-semibold text-base text-gray-600">Total</p>
            <p className="font-normal text-base text-gray-600">${cartProducts?.cartTotalAmount + 50}</p>
          </div>
          <div className="py-4 w-full">
            <Link
              to="/checkout"
              className="bg-yellow-500 hover:text-white transition-all duration-100 py-4 uppercase text-sm font-semibold block text-center w-full"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartGrid;
