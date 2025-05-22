import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  token: null | string
}

const initialState: UserState = {
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      state.token = action.payload.token
    },
    logOut() { }
  }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer;