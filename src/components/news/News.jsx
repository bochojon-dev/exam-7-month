import React from "react";
import "../news/News.css";
import Image from "next/image";
import news1 from "@/assets/news1.svg";
import news2 from "@/assets/news2.svg";
import news3 from "@/assets/news3.svg";

const News = () => {
  let news = [
    {
      id: 1,
      title: "Fashion Industry",
      image: news1,
    },
    {
      id: 2,
      title: "Best Design Tools",
      image: news2,
    },
    {
      id: 3,
      title: "HR Community",
      image: news3,
    },
  ];
  let new_card = news?.map((el) => (
    <div className="news_card" key={el.id}>
      <Image alt="news icon" width={110} height={80} src={el.image} />
      <div className="news_text">
        <h4>01 Jan, 2015</h4>
        <h3>{el.title} </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="new_contents">
        <h2>LATEST NEWS</h2>
        <div className="news_cards">{new_card}</div>
      </div>
    </div>
  );
};

export default News;
