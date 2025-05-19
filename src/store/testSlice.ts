import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        id: 1
    },
    reducers: {
        testRun(state, action){
            console.log(state);
            console.log(action);
        }
    }
})

export const { testRun } = testSlice.actions

export default testSlice.reducer; 