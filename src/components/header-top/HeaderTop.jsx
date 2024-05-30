"use client";
import Image from "next/image";
import React from "react";
import "../header-top/HeaderTop.css";
import account from "@/assets/account.svg";
import wishlist from "@/assets/wishlist.svg";
import cart from "@/assets/cart.svg";
import search from "@/assets/search.svg";
import Link from "next/link";
import { useSelector } from "react-redux";

const HeaderTop = () => {
  let data = useSelector((s) => s.cart.value);
  let wishes = useSelector((s) => s.wishes.value);

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
            <select name="currency">
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="UZS">UZS</option>
            </select>
          </div>
          <div className="top_icons">
            <Link href={"/login"}>
              <button>
                <Image width={24} height={24} alt="account" src={account} />
              </button>
            </Link>
            <Link href={"/wishes"}>
              <button className="top_icon">
                <Image width={24} height={24} alt="wishlist" src={wishlist} />
                <sup>{wishes.length}</sup>
              </button>
            </Link>
            <Link href={"/cart"}>
              <button className="top_icon">
                <Image width={24} height={24} alt="cart" src={cart} />
                <sup>{data.length}</sup>
              </button>
            </Link>
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
