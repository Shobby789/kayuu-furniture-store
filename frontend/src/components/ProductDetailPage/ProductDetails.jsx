import React, { useEffect } from "react";
import { styles } from "../../styles/styles";
import ReviewForm from "./ReviewForm";
import { useDispatch } from "react-redux";
import { useFetchProductDetailsQuery } from "../../features/productsSlice/productsSlice";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice/cartSlice";
import { useFetchReviewsQuery } from "../../features/reviewsSlice/reviewsSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const productId = useParams();
  // console.log("productId >> ", productId.title);
  
  const { data, error, isLoading } = useFetchProductDetailsQuery(
    productId.title
  );

  const checkCategory = (category) => {
    category =
      category === "bedroom"
        ? "Bedroom"
        : category === "living-room"
        ? "Living Room"
        : category === "home-office"
        ? "Home Office"
        : category === "bathroom"
        ? "Bathroom"
        : category === "kitchen"
        ? "Kitchen"
        : "";
    return category;
  };

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1>Something went wrong.</h1>
      </div>
    );

  // useEffect(() => {
  //   document.title = `Products - ${data?.data?.title}`;
  // }, []);

  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-12 bodyBg`}>
      <div className="bg-white pb-6 flex flex-col gap-y-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-2 md:col-span-1 flex items-start justify-center">
            <img
              src={`http://localhost:3001/uploads/${data?.data?.image}`}
              alt=""
            />
          </div>
          <div className="col-span-2 md:col-span-1 px-4 lg:px-8 flex flex-col items-start justify-start lg:justify-center gap-y-6">
            <p className="text-gray-600 font-medium text-base">
              Home / Products / {data?.data?.title}
            </p>
            <h1 className="text-black font-semibold text-3xl md:text-4xl leading-10">
              {data?.data?.title}
            </h1>
            <p className="text-gray-600 text-xl font-semibold">
              ${data?.data?.price}
            </p>
            <p className="text-gray-600 text-base font-medium leading-7">
              {data?.data?.description}
            </p>
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center justify-start">
                <button className="w-10 h-10 text-2xl flex items-center justify-center border outline-none">
                  -
                </button>
                <span className="w-10 h-10 flex items-center justify-center border">
                  1
                </span>
                <button className="w-10 h-10 text-2xl flex items-center justify-center border outline-none">
                  +
                </button>
              </div>
              <div>
                <button
                  className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium hover:text-white transition-all duration-100"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data?.data?._id,
                        image: `${data?.data?.image}`,
                        title: data?.data?.title,
                        price: data?.data?.price,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="border w-full" />
            <p className="text-gray-600 text-base font-semibold leading-7">
              Category:{" "}
              <span className="font-medium">
                {checkCategory(data?.data?.category)}
              </span>
            </p>
          </div>
        </div>
        {/* Rewviews Section */}
        <div className="border-t px-4 py-6 lg:px-8 flex flex-col gap-y-6">
          <h5 className="text-gray-600 font-semibold text-lg">Reviews</h5>
          {/* <p className="text-gray font-normal-text-base">There are no reviews yet.</p> */}
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
