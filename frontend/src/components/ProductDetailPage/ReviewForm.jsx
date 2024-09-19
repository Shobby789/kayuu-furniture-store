import React from "react";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFetchReviewsQuery } from "../../features/reviewsSlice/reviewsSlice";

const ReviewForm = () => {
  const id = useParams();
  // console.log(id.title);
  // const { data, error, isLoading } = useFetchReviewsQuery(id.title);
  // console.log("reviews >> ", data);

  const [reviewsData, setReviewsData] = useState({
    rating: "4.5",
    review: "",
    username: "",
    useremail: "",
  });

  const handleChange = (e) => {
    setReviewsData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const userData = {
    productId: id,
    userId: "456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data >> ", reviewsData);

  };

  return (
    <div className="w-full border p-4 lg:p-8 flex flex-col gap-6">
      {/* <div className="w-full flex flex-col gap-y-6">
        {data?.reviews?.map((review)=>{
          return <p className="text-base font-normal text-black">{review.review}</p>
        })}
      </div> */}
      {/* <div className="w-full border"/> */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl text-gray-600 font-semibold">
          Be the first to review “Beige Working Chair With Armrest”
        </h2>
        <p className="text-base text-gray-600">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="flex items-center gap-x-3">
        <label htmlFor="rating" className="font-medium text-gray-600 text-base">
          Your rating *
        </label>
        <div className="flex items-center gap-x-1">
          <FaRegStar className="text-xl cursor-pointer" />
          <FaRegStar className="text-xl cursor-pointer" />
          <FaRegStar className="text-xl cursor-pointer" />
          <FaRegStar className="text-xl cursor-pointer" />
          <FaRegStar className="text-xl cursor-pointer" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="name" className="text-base text-gray-600 font-medium">
            Your review *
          </label>
          <textarea
            name="review"
            value={reviewsData.review}
            onChange={handleChange}
            id="review"
            cols="30"
            rows="4"
            className="w-full border border-gray-600 outline-none p-3 text-base text-gray-600"
          ></textarea>
        </div>
        <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-base text-gray-600 font-medium"
            >
              Name *
            </label>
            <input
              type="text"
              name="username"
              value={reviewsData.username}
              onChange={handleChange}
              id="name"
              className="w-full p-3 text-base text-gray-600 border border-gray-600 outline-none"
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="useremail"
              className="text-base text-gray-600 font-medium"
            >
              Email *
            </label>
            <input
              type="email"
              name="useremail"
              value={reviewsData.useremail}
              onChange={handleChange}
              id="useremail"
              className="w-full p-3 text-base text-gray-600 border border-gray-600 outline-none"
              placeholder=""
            />
          </div>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium hover:text-white transition-all duration-100"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
