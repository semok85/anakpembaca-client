import { createSlice } from "@reduxjs/toolkit"

import type { User } from "@/types/user"

interface State {
  auth: {
    accessToken: string | null
    user: User | null
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: null, user: null },
  reducers: {
    setCurrentToken: (state, action) => {
      state.accessToken = action.payload
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload
    },
    logOut: (state) => {
      state.accessToken = null
      state.user = null
      window.localStorage.clear()
    },
  },
})

export const { setCurrentToken, setCurrentUser, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state: State) => state.auth.accessToken
export const selectCurrentUser = (state: State) => state.auth.user
