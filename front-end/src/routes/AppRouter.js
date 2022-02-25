import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";
import ProductPage from "../pages/ProductPage";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";
import Blog from "../pages/Blog";
import Login from "../admin/components/Login";
import Register from "../admin/components/Register";
import Dashboard from "../admin/pages/Dashboard";
import Products from "../admin/pages/Products";
import Profile from "../admin/pages/Profile";
import { useGlobalContext } from "../context/AppContext";

function AppRouter() {
  const { userState } = useGlobalContext();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/shop" />} />
        <Route path="shop" element={<Index />}></Route>
        <Route path="shop/:productId" element={<ProductPage />} />
        <Route path="shop/cart" element={<CartPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={userState.user ? <Dashboard /> : <Navigate to="/" />}
        >
          <Route path="/dashboard" element={<Products />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRouter;
