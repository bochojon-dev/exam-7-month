import React from "react";
import "../header1/Header1.css";

const Header1 = () => {
  return (
    <div className="header1">
      <div className="container">
        <div className="header1_contents">
          <p>Home</p>
          <span>/</span>
          <p>Hot Deal</p>
          <span>/</span>
          <p className="last">Nike Airmax 270 React</p>
        </div>
      </div>
    </div>
  );
};

export default Header1;
