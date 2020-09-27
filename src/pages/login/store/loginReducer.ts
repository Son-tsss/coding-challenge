import { createSlice } from "@reduxjs/toolkit";
import {loginUser, logoutUser} from "./loginActions";

export type LoginState = {
  isLoggedIn: boolean;
  user?: {
    userName: string;
    name: string;
  };
  error?: string;
}

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, ((state, {payload}) => {
      state.error = null;
      state.isLoggedIn = true;
      state.user = payload;
    }));
    builder.addCase(loginUser.rejected, ((state, {error}) => {
      state.error = error.message;
      state.isLoggedIn = false;
      state.user = null;
    }));
    builder.addCase(logoutUser, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error =null;
    })
  }
});

export default loginSlice.reducer;