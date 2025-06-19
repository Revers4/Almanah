import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false,
};

const ModalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openModalSearch(state) {
      state.isOpen = true
    },
    closeModalSearch(state) {
        state.isOpen = false
    }
  }
})

export const { openModalSearch, closeModalSearch } = ModalSlice.actions

export default ModalSlice.reducer;