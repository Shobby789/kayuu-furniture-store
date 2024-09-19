import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";
import productsApi from "./productsSlice/productsSlice";
import ordersReducer from "./ordersSlice/ordersSlice";
import reviewsApi from "./reviewsSlice/reviewsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: ordersReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, reviewsApi.middleware),
});
