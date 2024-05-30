"use client";
import React, { useState } from "react";
import "../products/Products.css";
import Image from "next/image";
import rate from "@/assets/rate.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsCart3, BsCartCheckFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toogleLike } from "@/lib/slice/wishlistSlice";
import { addToCart } from "@/lib/slice/cartSlice";
import { incrementItem } from "@/lib/slice/loadMore";

const Products = ({ data, title, btn }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
  let dispatch = useDispatch();
  let wishes = useSelector((s) => s.wishes.value);
  let products = useSelector((s) => s.cart.value);
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
          <button
            className="wishlist"
            onClick={() => dispatch(toogleLike(product))}
          >
            {wishes?.some((el) => el.id === product.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
        <div className="pro_icon">
          <button
            className="wishlist"
            onClick={() => {
              dispatch(addToCart(product));

              if (products?.findIndex((el) => el.id == product.id) < 0) {
                // return toast.success("Added to Cart ");
              }
            }}
          >
            {products?.some((el) => el.id === product.id) ? (
              <BsCartCheckFill />
            ) : (
              <BsCart3 />
            )}
          </button>
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
          <ul className="categories">{categoryList}</ul>
          <div className="product_cards">{productCards}</div>

          {!btn ? (
            <div className="btn">
              <button
                // disabled={loading}
                onClick={() => dispatch(incrementItem())}
                className="see__more"
              >
                Load More
                {/* {loading ? "Loading..." : " See More"} */}
              </button>
            </div>
          ) : (
            <>
              <button>load more</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
