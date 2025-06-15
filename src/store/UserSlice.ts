import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  token: null | string
  login: null | string
  name: null | string
}

const initialState: UserState = {
  token: null,
  login:null,
  name: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      const {token,login,name} = action.payload
      state.token = token
      state.login = login
      state.name = name
    },
    logOut(state) {
      state.token = null,
      state.login = null,
      state.name = null
    }
  }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer;