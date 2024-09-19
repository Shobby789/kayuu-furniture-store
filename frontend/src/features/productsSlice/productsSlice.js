import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "/products",
    }),

    fetchProductDetails: builder.query({
      query: (productId) => `/products/${productId}`,
    }),

    fetchProductsByCategory: builder.query({
      query: (category) => `/products/${category}`,
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchProductDetailsQuery,
  useFetchProductsByCategoryQuery,
} = productsApi;

export default productsApi;
