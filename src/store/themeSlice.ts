import { createSlice } from "@reduxjs/toolkit";

export type TThemeState = 'light' | 'dark'

const initialState: TThemeState = 'dark'


const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme:(state)=>{
            const newTheme = (state) ==='dark' ? 'light' : 'dark'
            const html = document.documentElement
            html.classList.toggle('light', newTheme === 'light')
            return newTheme
        },
        setTheme: (state,action) => {       
            const newTheme = action.payload
            document.documentElement.classList.toggle('light',newTheme === 'light')
            return newTheme
        },
    }


})

export const {toggleTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer; 