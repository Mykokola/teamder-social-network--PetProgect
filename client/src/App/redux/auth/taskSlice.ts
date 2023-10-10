import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:'',
    isLogin:false
}
const tokenSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setToken(state, action) {
          state.token = action.payload;
          state.isLogin = true
        },
    }
})
export const {setToken} = tokenSlice.actions
export const tokenReducer = tokenSlice.reducer