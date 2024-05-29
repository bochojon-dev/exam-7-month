"use client";
import toogleLike from "../lib/slice/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
  return configureStore({
    reducer: {
      wishes: toogleLike,
    },
  });
};
