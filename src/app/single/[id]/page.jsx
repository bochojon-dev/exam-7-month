import Header1 from "@/components/header1/Header1";
import Products from "@/components/products/Products";
import React from "react";
import { getData } from "@/fetch";
import SingleRoute from "@/components/single-route/SingleRoute";

const Single = async ({ params: { id } }) => {
  let data = await getData("/products?limit=4&skip=9");
  let datum = await getData(`/products/${id}`);
  return (
    <>
      <Header1 />
      <SingleRoute datum={datum} />
      <Products data={data} title={"RELATED PRODUCTS"} />
    </>
  );
};

export default Single;
