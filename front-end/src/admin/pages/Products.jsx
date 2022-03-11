import React, { useState } from "react";
import ProductsList from "../components/ProductsList";
import ProductModal from "../components/ProductModal";
import Button from "@mui/material/Button";
import SearchBar from "material-ui-search-bar";

function Products() {
  const [modalOpen, setModalOpel] = useState(false);
  const [editProductData, setEditProductData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    images: "",
    keywords: [],
  });
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <SearchBar
        value={searchInput}
        onChange={(newValue) => setSearchInput(newValue)}
      />
      <div style={{ margin: "50px auto 20px auto", textAlign: "center" }}>
        <Button
          onClick={() => setModalOpel(!modalOpen)}
          variant="contained"
          disableElevation
        >
          Add Product
        </Button>
      </div>
      <ProductsList
        setModalOpel={setModalOpel}
        setEditProductData={setEditProductData}
        searchInput={searchInput}
      />
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpel={setModalOpel}
          editProductData={editProductData}
          setEditProductData={setEditProductData}
        />
      )}
    </>
  );
}

export default Products;
