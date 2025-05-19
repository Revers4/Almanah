import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testSlice.ts"


export const store = configureStore({
    reducer: {
        test: testReducer
    }
})