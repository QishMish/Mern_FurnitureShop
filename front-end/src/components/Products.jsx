import React, { useState, useEffect } from "react";
import "../styles/Products.css";
import FilterPanel from "./FilterPanel";
import ProductItem from "./ProductItem";
import { useGlobalContext } from "../context/AppContext";
import ProductPagination from "./ProductPagination";
import { paginateHandler } from "../utils/Pagination";
import Loading from "./Loading";

function Products() {
  const { products } = useGlobalContext();
  const { loading, data, error } = products;
  const [pageIndex, setPageIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [paginationData, setPaginationData] = useState([]);

  console.log("render");

  useEffect(() => {
    const pagDate = paginateHandler(data, currentCategory);
    setPaginationData(pagDate);
  }, [data, currentCategory]);

  useEffect(() => {}, [data, currentCategory]);

  const renderProducts = paginationData[pageIndex]?.map((product, index) => {
    return <ProductItem key={index} product={product} />;
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="products">
      <FilterPanel
        categories={categories}
        setCategories={setCategories}
        setCurrentCategory={setCurrentCategory}
      />
      <div className="products-info">
        {/* Showing {pageIndex + 1} – {paginationData[pageIndex].length} of 
        {data.length} results */}
      </div>
      <div className="product-grid">{renderProducts}</div>
      <ProductPagination
        paginationDataProp={paginationData}
        pageIndexProp={pageIndex}
        setPaginationIndex={setPageIndex}
      />
    </div>
  );
}

export default Products;
