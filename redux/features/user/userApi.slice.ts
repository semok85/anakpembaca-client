import { RootState } from "@/redux/store"
import {
  EntityState,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit"

import type { User } from "@/types/user"

import { apiSlice } from "../../service/api.slice"

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id as string,
})
const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<EntityState<User>, void>({
      query: () => ({
        url: "/users",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData: User[]) => {
        const loadedUsers = responseData.map((user) => {
          // user.id = user._id;
          return user
        })
        return usersAdapter.setAll(initialState, loadedUsers)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" },
            ...result.ids.map((id) => ({ type: "User", id } as const)),
          ]
        } else return [{ type: "User", id: "LIST" }]
      },
    }),
    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/users/id/${id}`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    getUserByEmail: builder.query({
      query: (email) => ({
        url: `/users/email/${email}`,
        method: "GET",
      }),
    }),
    addNewUser: builder.mutation({
      query: (initialUserData) => ({
        url: "/api/users",
        method: "POST",
        body: {
          ...initialUserData,
        },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, ...initialUserData }) => ({
        url: `/users/update/${userId}`,
        method: "PATCH",
        body: {
          ...initialUserData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: arg.userId },
      ],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUserByEmailQuery,
  useAddNewUserMutation,
  useUpdateUserMutation,
} = usersApiSlice

//returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// creates memoized selector
const selectUsersData = createSelector(
  selectUsersResult,
  (userResult) => userResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  // Pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors<RootState>(
  (state) => selectUsersData(state) ?? initialState
)
