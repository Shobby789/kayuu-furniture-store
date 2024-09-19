import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    fetchReviews: builder.query({
      query: (productId) => `/fetchProductReviews/${productId}`,
    }),
  }),
});

export const { useFetchReviewsQuery } = reviewsApi;

export default reviewsApi;
