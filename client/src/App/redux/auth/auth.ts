import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/auth",
  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const token = getState().auth.token;
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
    currentUser: builder.query({
      query: () => "/current/user",
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
    addFriend: builder.mutation({
      query: (body) => ({
        url: "/addFriend",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: (body) => ({
        url: "/logout",
        method: "POST",
        body,
      }),
    }),
    plusLike: builder.mutation({
      query: (body) => ({
        url: "/update/like/plus",
        method: "PATCH",
        body,
      }),
    }),
    minusLike: builder.mutation({
      query: (body) => ({
        url: "/update/like/minus",
        method: "PATCH",
        body,
      }),

    }),
  }),
});

export const {
  useCurrentUserQuery,
  useGetAllUsersQuery,
  useRegUserMutation,
  useAuthUserMutation,
  useAddFriendMutation,
  useLogoutMutation,
  usePlusLikeMutation,
  useMinusLikeMutation
} = authApi;
