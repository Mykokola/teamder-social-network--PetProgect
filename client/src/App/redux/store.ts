import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
  
  } from 'redux-persist';
  import { authApi } from "./auth/auth";
  import { setupListeners } from '@reduxjs/toolkit/query'
  import  storage  from "redux-persist/lib/storage";


export const store = configureStore({
    reducer:{
    [authApi.reducerPath]:authApi.reducer
},
middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware(),
    authApi.middleware
 
 ]
})

export const persistor = persistStore(store)