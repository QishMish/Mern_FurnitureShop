import React from "react";
import "../styles/Header.css";
import HeaderCart from "./HeaderCart";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Navbar />
        <div className="header__logo">
          <h1>OCIN LITE</h1>
        </div>
        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;
