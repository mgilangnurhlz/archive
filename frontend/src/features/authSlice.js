import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//? pertama inisialisasi state kosong
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//? untuk request ke api login
export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  //?thunk API untuk error handling
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password,
      });
      return response.data; //! ini
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg; //? mengambil data dari response
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:5000/me");
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete("http://localhost:5000/logout");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  //? meriset state
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    //? sebelum login
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });

    //? jika berhasil
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload; //!  data yg direturn dari
    });

    //? jika error
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //? user Login
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });

    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
