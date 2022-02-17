import React from "react";
import FilterPanel from "../components/FilterPanel";
import Header from "../components/Header";
import Products from "../components/Products";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";

function Index() {
  return (
    <div className="index-page  bg-gray">
      <div className="container">
        <Products />
      </div>
    </div>
  );
}

export default Index;
