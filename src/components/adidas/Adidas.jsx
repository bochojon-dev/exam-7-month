import React from "react";
import "../adidas/Adidas.css";
import Image from "next/image";
import adidas from "@/assets/adidas.png";
import line from "@/assets/line.svg";

const Adidas = () => {
  return (
    <div className="adidas">
      <div className="container">
        <div className="adidas_contents">
          <div className="adidas_texts">
            <h3>Adidas Men Running Sneakers</h3>
            <p>Performance and design. Taken right to the edge.</p>
            <div className="shop_now">
              SHOP NOW
              <Image alt="line" width={60} height={3} src={line} />
            </div>
          </div>
          <Image
            className="adidas_image"
            alt="adidas"
            width={794}
            height={600}
            src={adidas}
          />
        </div>
      </div>
    </div>
  );
};

export default Adidas;
