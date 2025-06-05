import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../API/authApi.ts";
import userReducer from './UserSlice.ts'
import themeReducer from "./ThemSlice.ts";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer,
        user: userReducer,
        theme: themeReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;