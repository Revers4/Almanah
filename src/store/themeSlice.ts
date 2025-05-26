import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TThemeState {
    mode: 'dark' | 'light';
}

const initialState: TThemeState = { mode: 'dark' };

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
    toggleTheme: (state) => {
        state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
        state.mode = action.payload;
    },
}
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;