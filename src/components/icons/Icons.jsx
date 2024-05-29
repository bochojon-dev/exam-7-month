import React from "react";
import "../icons/Icons.css";
import Image from "next/image";
import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";

const Icons = () => {
  let icons = [
    {
      id: 1,
      image: icon1,
      title: "FREE SHIPPING",
    },
    {
      id: 2,
      image: icon2,
      title: "100% REFUND",
    },
    {
      id: 3,
      image: icon3,
      title: "SUPPORT 24/7",
    },
  ];
  let icons_card = icons.map((e) => (
    <div className="icon_card" key={e.id}>
      <Image alt="icon" width={60} height={70} src={e.image} />
      <h3>{e.title} </h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  ));

  return (
    <div className="container">
      <div className="icon_cards">{icons_card}</div>
    </div>
  );
};

export default Icons;
