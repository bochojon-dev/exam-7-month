"use client";
import toogleLike from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import seeMoreSlice from "./slice/loadMore";

export const store = () => {
  return configureStore({
    reducer: {
      wishes: toogleLike,
      cart: cartSlice,
      seemore: seeMoreSlice,
    },
  });
};
