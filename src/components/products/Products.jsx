"use client";
import React, { useState } from "react";
import "../products/Products.css";
import Image from "next/image";
import rate from "@/assets/rate.svg";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toogleLike } from "@/lib/slice/wishlistSlice";

const Products = ({ data, title }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
  let dispatch = useDispatch();

  let wishes = useSelector((s) => s.wishes.value);
  const categoryList = categories.map((category, inx) => (
    <li
      key={inx}
      className={selectedCategory === category ? "active" : ""}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </li>
  ));

  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  const productCards = filteredProducts.map((product) => (
    <div key={product.id} className="product_card">
      <div className="btn">HOT</div>
      <Image
        className="image"
        src={product.image}
        alt={product.title}
        width={405}
        height={318}
      />
      <div className="pro_icons">
        <div className="pro_icon">
          <button onClick={() => dispatch(toogleLike(product))}>
            {wishes?.some((el) => el.id === product.id) ? (
              <IoHeartOutline style={{ color: "red" }} />
            ) : (
              <IoHeartOutline />
            )}
          </button>
        </div>
        <div className="pro_icon">
          <IoCartOutline />
        </div>
      </div>
      <Link href={`/single/${product.id}`}>
        <h3 title={product.title}>{product.title}</h3>
      </Link>
      <Image alt="rating" width={120} height={12} src={rate} />
      <div className="price">
        <h4>${product.price}</h4>
        <p>
          <span>${product.price * product.rating.rate}</span>
          24% Off
        </p>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="product_contents">
          <h2>{title}</h2>
          <ul>{categoryList}</ul>
          <div className="product_cards">{productCards}</div>
          <button>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
