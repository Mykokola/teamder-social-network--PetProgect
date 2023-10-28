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
        clearToken(state) {
            state.token = ''
             state.isLogin = false
        }
    }
})

export const {setToken,clearToken} = tokenSlice.actions
export const tokenReducer = tokenSlice.reducer