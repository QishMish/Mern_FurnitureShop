import React, { useState } from "react";
import ProductsList from "../components/ProductsList";
import ProductModal from "../components/ProductModal";
import Button from "@mui/material/Button";

function Products() {
  const [modalOpen, setModalOpel] = useState(false);
  
  return (
    <>
      <ProductsList />
      {modalOpen && <ProductModal modalOpen={modalOpen} setModalOpel={setModalOpel} />}
      <div style={{ margin: "50px auto 20px auto", textAlign: "center" }}>
        <Button
          onClick={() => setModalOpel(!modalOpen)}
          variant="contained"
          disableElevation
        >
          Add Product
        </Button>
      </div>
    </>
  );
}

export default Products;
