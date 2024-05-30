"use client";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = seachIndex(state, action);
      index < 0
        ? (state.value = [...state.value, { ...action.payload, soni: 1 }])
        : state.value;
      setLocalStorage(state.value);
    },
    incrementCartQuantity(state, action) {
      let index = seachIndex(state, action);
      state.value = state.value?.map((item, inx) =>
        index === inx ? { ...item, soni: item.soni + 1 } : item
      );
      setLocalStorage(state.value);
    },
    decrementCartQuantity(state, action) {
      let index = seachIndex(state, action);
      state.value = state.value?.map((item, inx) =>
        index === inx ? { ...item, soni: item.soni - 1 } : item
      );
      setLocalStorage(state.value);
    },
    removeItemFromCart(state, action) {
      state.value = state.value?.filter((el) => el.id !== action.payload.id);
      setLocalStorage(state.value);
    },
  },
});
function setLocalStorage(state) {
  localStorage.setItem("cart", JSON.stringify(state));
}
function seachIndex(state, action) {
  return state.value.findIndex((el) => el.id === action.payload.id);
}
export const {
  addToCart,
  decrementCartQuantity,
  incrementCartQuantity,
  removeItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
