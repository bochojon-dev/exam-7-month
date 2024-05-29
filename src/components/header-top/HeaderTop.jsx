import Image from "next/image";
import React from "react";
import "../header-top/HeaderTop.css";
import account from "@/assets/account.svg";
import wishlist from "@/assets/wishlist.svg";
import cart from "@/assets/cart.svg";
import search from "@/assets/search.svg";

const HeaderTop = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="top_contents">
          <div className="options">
            <select name="lang">
              <option value="EN">EN</option>
              <option value="RU">RU</option>
              <option value="UZ">UZ</option>
            </select>
            <select name="CURRENCY">
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="UZS">UZS</option>
            </select>
          </div>
          <div className="top_icons">
            <button>
              <Image width={24} height={24} alt="account" src={account} />
            </button>
            <button className="top_icon">
              <Image width={24} height={24} alt="wishlist" src={wishlist} />
              <sup>2</sup>
            </button>
            <button className="top_icon">
              <Image width={24} height={24} alt="cart" src={cart} />
              <sup>3</sup>
            </button>
            <h4>Items</h4>
            <span>
              <p>$0.00</p>
              <Image width={24} height={24} alt="search" src={search} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
