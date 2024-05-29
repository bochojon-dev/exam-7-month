"use client";
import React from "react";
import { useSelector } from "react-redux";
import Products from "../products/Products";

const Wishes = () => {
  let data = useSelector((s) => s.wishes.value);
  return (
    <>
      <Products title={"Sevimlilar"} data={data} />
    </>
  );
};

export default Wishes;
