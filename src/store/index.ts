import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../API/authApi.ts";
import userReducer from './UserSlice.ts'
import themeReducer from "./ThemSlice.ts";
import modalSearchReducer from "./ModalSlice.ts"

export const store = configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer,
        user: userReducer,
        theme: themeReducer,
        modalSearch: modalSearchReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;