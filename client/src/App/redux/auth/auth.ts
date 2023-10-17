import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/auth",
  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const token = getState().auth.token;
    console.log(getState().auth)
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
    updateLike: builder.mutation({
      query: (body) => ({
        url: "/update/like",
        method: "PATCH",
        body,
      }),
    }),
    getUserById:builder.mutation({
      query: (body) => ({
        url:"/getUserById",
        method:"POST",
        body
      })
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
  useUpdateLikeMutation,
  useGetUserByIdMutation
} = authApi;
