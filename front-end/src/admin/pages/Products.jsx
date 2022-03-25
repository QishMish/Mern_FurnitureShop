import React, { useState } from "react";
import ProductsList from "../components/ProductsList";
import ProductModal from "../components/ProductModal";
import Button from "@mui/material/Button";
import SearchBar from "material-ui-search-bar";

function Products() {
  const [modalOpen, setModalOpel] = useState(false);
  const [editProductData, setEditProductData] = useState({
    _id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    images: "",
    keywords: [],
  });
  const [editMode, setEditMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <SearchBar
        value={searchInput}
        onChange={(newValue) => setSearchInput(newValue)}
      />
      <div style={{ margin: "50px auto 20px auto", textAlign: "center" }}>
        <Button
          onClick={() => {
            setModalOpel(true);
          }}
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
        editMode={editMode}
        setEditMode={setEditMode}
      />
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpel={setModalOpel}
          editProductData={editProductData}
          setEditProductData={setEditProductData}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
}

export default Products;
