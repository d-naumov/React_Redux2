import { createSlice } from "@reduxjs/toolkit"
import MemesState from "./types/MemesState"
import { loadMemes } from "./memesAction"

const initial: MemesState = {
  memes: [],
  error: null,
  isLoading: false,
}

export const memesSlice = createSlice({
  name: "memes",
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMemes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadMemes.fulfilled, (state, action) => {
        state.isLoading = false
        state.memes = action.payload
      })
      .addCase(loadMemes.rejected, (state, action) => {
        state.isLoading = false
        state.memes = []
        state.error = action.payload as string
      })
  },
})
