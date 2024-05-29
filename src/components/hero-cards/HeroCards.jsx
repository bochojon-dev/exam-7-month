import React from "react";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import Image from "next/image";

const HeroCards = () => {
  return (
    <div>
      <div className="hero_cards">
        <div className="hero_card">
          <h3 className="purse">FS - QUILTED MAXI CROSS BAG</h3>
          <Image alt="product" width={400} height={350} src={hero1} />
          <p className="first">
            $534,33 <span>24% Off</span>
          </p>
          <h4 className="odd">
            <sup>$2</sup>99,43
          </h4>
        </div>
        <div className="hero_card">
          <h3>FS - Nike Air Max 270 React...</h3>
          <Image alt="product" width={400} height={350} src={hero2} />
          <p className="second">
            $534,33 <span>24% Off</span>
          </p>
          <h4 className="even">
            <sup>$2</sup>99,43
          </h4>
        </div>
        <div className="hero_card">
          <h3>FS - Nike Air Max 270 React...</h3>
          <Image alt="product" width={400} height={350} src={hero3} />
          <p className="third">
            $534,33 <span>24% Off</span>
          </p>
          <h4 className="odd">
            <sup>$2</sup>99,43
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
