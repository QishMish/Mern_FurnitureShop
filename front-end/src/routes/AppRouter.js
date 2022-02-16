import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";
import ProductPage from "../pages/ProductPage";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";
import Blog from "../pages/Blog";

function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/shop" />} />
        <Route path="shop" element={<Index />}></Route>
        <Route path="shop/:productId" element={<ProductPage />} />
        <Route path="shop/cart" element={<CartPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRouter;
