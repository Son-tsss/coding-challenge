import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {login} from "../api/loginService";

export const loginUser = createAsyncThunk("login",
  async ({userName, password}: {userName: string, password: string}) => {
    const result = await login({userName, password});

    if(result.error) {
      throw (new Error(result.error))
    }

    return result.user;
  });

export const logoutUser = createAction("logout");


