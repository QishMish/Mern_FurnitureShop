import React from "react";
import {Route, Routes } from 'react-router-dom'
import Admin from "../admin/Admin";

function AdminRoute() {
  return (
    <>
      <Routes>
        <Route path="/shop/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default AdminRoute;
