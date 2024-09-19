import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3001/api/";

export const createUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    // const navigate = useNavigate();
    try {
      const response = await axios.post(`${BASE_URL}/register`, data);
      console.log("createUser asyncThunk function resp >> ", response);
      if (response.status == 200) {
        toast.success(response.data.message);
        // navigate("/login");
      } else {
        toast.error(response.data.message);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, data);
      console.log("login asyncThunk function resp >> ", response);
      if (response.status == 200) {
        toast.success(response.data.message);
        // navigate("/");
      } else {
        toast.error(response.data.message);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
// export { loginUser, createUser };
