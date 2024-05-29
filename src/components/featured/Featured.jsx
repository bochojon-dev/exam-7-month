import React from "react";
import "../featured/Featured.css";
import Image from "next/image";
import rating from "@/assets/rating.svg";
import featured from "@/assets/featured.png";

const Featured = () => {
  let feature = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  let feature_card = feature?.map((el) => (
    <div className="featured_card" key={el.id}>
      <Image alt="featured icon" width={150} height={150} src={featured} />
      <div className="feature_text">
        <h3>Blue Swade Nike Sneakers</h3>
        <Image alt="rating" width={80} height={12} src={rating} />
        <p>
          $499 <span>$599</span>
        </p>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="featured_contents">
        <h2>FEATURED PRODUCTS</h2>
        <div className="featured_cards">{feature_card}</div>
        <form className="form">
          <input type="search" required placeholder="Search query..." />
          <button>Search </button>
        </form>
      </div>
    </div>
  );
};

export default Featured;
