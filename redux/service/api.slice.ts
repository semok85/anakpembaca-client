import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/"

import { logOut, setCurrentToken } from "../features/auth/auth.slice"
import { RootState } from "../store"

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://api.anakpembaca.com/api/v1",
  baseUrl: "http://localhost:8000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions?) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 403) {
    console.log("sending refresh token")
    //send refresh token to get new access token
    const refreshResult = await baseQuery(
      "/auth/getrefreshtoken",
      api,
      extraOptions
    )
    console.log(refreshResult)
    if (refreshResult) {
      //store new token
      api.dispatch(setCurrentToken(refreshResult))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Book"],
  endpoints: (builder) => ({}),
})
