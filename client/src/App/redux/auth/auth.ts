import React from "react";
import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:3001/auth',
})
export const authApi:any = createApi({
    reducerPath:'authUsers',
    baseQuery,
    endpoints:(builder) => ({
        getAllUsers: builder.query({
            query: () => '/users',
        })
    })
})
export const {useGetAllUsersQuery} = authApi