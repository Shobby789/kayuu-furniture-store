import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/placeOrder",
        data
      );
      console.log("placeOrder api response >> ", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const cancelOrder = createAsyncThunk(
  "orders/cancelOrder",
  async ({ userId, orderId }, thunkAPI) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/cancelOrder",
        { userId, orderId }
      );
      console.log("cancelOrder response", response);
      return orderId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    message: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        error = action.payload;
        isLoading = false;
      })
      .addCase(cancelOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        error = action.payload;
        isLoading = false;
      });
  },
});

export default orderSlice.reducer;
