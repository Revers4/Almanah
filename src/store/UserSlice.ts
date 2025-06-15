import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  token: null | string
  login: null | string
  name: null | string
}

const initialState: UserState = {
  token:localStorage.getItem('token') || null,
  login:localStorage.getItem('login') ||null,
  name:localStorage.getItem('name') || null
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
      localStorage.setItem('token',token)
      localStorage.setItem('login',login)
      localStorage.setItem('name',name)
    },
    logOut(state) {
      state.token = null,
      state.login = null,
      state.name = null
      localStorage.removeItem('token')
      localStorage.removeItem('login')
      localStorage.removeItem('name')
    },
  }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer;