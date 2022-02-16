import React, { useState } from "react";
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
  // const [currentPage, setCurrentPage] = useState();
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState("all");

  const paginationData = paginateHandler(data);

  const filteredCategory = categories.filter(category =>
    category.toLowerCase() == currentCategory.toLowerCase()
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="products">
      <FilterPanel categories={categories} setCategories = {setCategories} setCurrentCategory = {setCurrentCategory}/>
      <div className="products-info">Showing 1–14 of {data.length} results</div>
      <div className="product-grid">
          {paginationData[pageIndex].map((product, index) => {
            return <ProductItem key={index} product={product} />;
          })}
      </div>
      <ProductPagination
        paginationDataProp={paginationData}
        pageIndexProp={pageIndex}
        setPaginationIndex={setPageIndex}
      />
    </div>
  );
}

export default Products;
