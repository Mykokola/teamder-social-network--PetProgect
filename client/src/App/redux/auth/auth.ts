import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/auth",
  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const token = getState().auth.token;
    console.log(token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi: any = createApi({
  reducerPath: "authUsers",
  baseQuery,
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
    }),
    regUser: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body: body,
      }),
    }),
    authUser: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useRegUserMutation, useAuthUserMutation } =
  authApi;
