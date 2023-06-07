import { apiSlice } from "@/redux/service/api.slice"

import { removeCurentUser } from "../user/user.slice"
import { logOut, setCurrentToken } from "./auth.slice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          //console.log(data);
          dispatch(logOut())
          dispatch(removeCurentUser())
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState())
          }, 1000)
        } catch (error) {
          console.log(error)
        }
      },
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refreshtoken",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const auth = await queryFulfilled
          dispatch(setCurrentToken(auth.data))
        } catch (error) {
          console.log(error)
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshMutation,
  useLogoutMutation,
} = authApiSlice
