import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import HeaderCart from "./HeaderCart";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Navbar />
        <Link to="shop" className="header__logo">
          <h1>OCIN LITE</h1>
        </Link>
        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;
