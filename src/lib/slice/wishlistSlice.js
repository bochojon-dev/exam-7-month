"use client";
import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishes")) || [],
  },
  reducers: {
    toogleLike(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
        localStorage.setItem("wishes", JSON.stringify(state.value));
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
        localStorage.setItem("wishes", JSON.stringify(state.value));
      }
    },
  },
});

export const { toogleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;

// "use client";
// import { createSlice } from "@reduxjs/toolkit";
// import { useEffect, useState } from "react";

// const getInitialWishes = () => {
//   if (typeof window !== "undefined") {
//     const savedWishes = localStorage.getItem("wishes");
//     return savedWishes ? JSON.parse(savedWishes) : [];
//   }
//   return [];
// };

// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState: {
//     value: [],
//   },
//   reducers: {
//     toggleLike(state, action) {
//       let index = state.value.findIndex((el) => el.id === action.payload.id);
//       if (index < 0) {
//         state.value = [...state.value, action.payload];
//         if (typeof window !== "undefined") {
//           localStorage.setItem("wishes", JSON.stringify(state.value));
//         }
//       } else {
//         state.value = state.value.filter((el) => el.id !== action.payload.id);
//         if (typeof window !== "undefined") {
//           localStorage.setItem("wishes", JSON.stringify(state.value));
//         }
//       }
//     },
//     setInitialWishes(state, action) {
//       state.value = action.payload;
//     },
//   },
// });

// export const { toggleLike, setInitialWishes } = wishlistSlice.actions;

// export const useInitialWishes = () => {
//   const [initialWishes, setInitialWishes] = useState([]);

//   useEffect(() => {
//     const wishes = getInitialWishes();
//     setInitialWishes(wishes);
//   }, []);

//   return initialWishes;
// };

// export const { toogleLike } = wishlistSlice.actions;
// export default wishlistSlice.reducer;
