import { createSlice } from "@reduxjs/toolkit";

export const loadMore = createSlice({
  name: "see-more",
  initialState: {
    value: 1,
  },
  reducers: {
    incrementItem(state, action) {
      state.value = state.value + 0.5;
    },
  },
});
export const { incrementItem } = loadMore.actions;
export default loadMore.reducer;
