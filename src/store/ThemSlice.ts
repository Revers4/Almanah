import { createSlice } from "@reduxjs/toolkit";

export interface TThemeState {
    mode: 'dark' | 'light';
}

const initialState: TThemeState = { 
    mode: (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
    toggleTheme: (state) => {
        state.mode = state.mode === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', state.mode);
    }
}
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;