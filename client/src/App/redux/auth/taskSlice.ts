import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:''||null,
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
        clearToken(state) {
            state.token = null
            state.isLogin = false
        }
    }
})

export const {setToken,clearToken} = tokenSlice.actions
export const tokenReducer = tokenSlice.reducer