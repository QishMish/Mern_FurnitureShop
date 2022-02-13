import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";
import ProductPage from "../pages/ProductPage";
import Header from "../components/Header";

function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/shop" element={<Index />}>
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRouter;
