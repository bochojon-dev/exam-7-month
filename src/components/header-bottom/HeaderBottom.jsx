"use client";
import React, { useState, useEffect } from "react";
import "../header-bottom/HeaderBottom.css";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const HeaderBottom = () => {
  const [toggle, setToggle] = useState(false);
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const pages = ["HOME", "SINGLE", "SNEAKERS", "BELT", "CONTACT"];
  let pages = [
    {
      id: 1,
      title: "HOME",
      link: "/",
    },
    {
      id: 2,
      title: "CONTACT",
      link: "/contact",
    },
    {
      id:3,
      title:"ABOUT",
      link:'/about'
    },
    {
      id: 4,
      title: "LOGIN",
      link: "/login",
    },
  ];
  const page = pages.map((el, inx) => (
    <Link key={inx} href={el.link}>
      <li className="nav_items">{el.title}</li>
    </Link>
  ));

  return (
    <div className={`header_bottom ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <div className={`bottom_contents `}>
          <Link href={"/"}>
            <div className="logo">
              <Image alt="logo" width={44} height={44} src={logo} />
              <h4>E-Comm</h4>
            </div>
          </Link>
          <ul
            className={`m ${toggle ? "show" : ""} ${shrink ? "shrink2" : ""}`}
          >
            {page}
          </ul>
          <button className="menu" onClick={() => setToggle(!toggle)}>
            <IoMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
