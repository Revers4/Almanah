import { configureStore } from "@reduxjs/toolkit";
// import testReducer from "./testSlice.ts";
import testReducer from './themeSlice.ts'
import themeReducer from './themeSlice.ts';


export const store = configureStore({
    reducer: {
        test: testReducer,
        theme:themeReducer
    }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch