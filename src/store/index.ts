import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../API/authApi.ts";
import userReducer from './UserSlice.ts'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(authApi.middleware)
})

