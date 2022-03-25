import React from "react";
import "../styles/Products.css";
import FilterPanel from "./FilterPanel";
import ProductItem from "./ProductItem";
import { useGlobalContext } from "../context/AppContext";
import ProductPagination from "./ProductPagination";
import Loading from "./Loading";
import { motion } from "framer-motion";

function Products() {
  const {
    products: productsObject,
    loading,
    setCategoryHandler,
    productConfig,
  } = useGlobalContext();
  const { products, productsByCategory, length, categories } = productsObject;
  const { page, limit, category } = productConfig;

  const renderProducts = productsByCategory?.map((product, index) => {
    return <ProductItem key={index} product={product} />;
  });

  console.log(length);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="products">
      <FilterPanel
        categories={categories}
        setCurrentCategory={setCategoryHandler}
      />
      <div className="products-info">
        Showing {(page - 1) * limit + 1} – {limit * page} of {products.length}{" "}
        results
      </div>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="product-grid"
      >
        {renderProducts}
      </motion.div>
      <ProductPagination
        productLength={
          category === "all"
            ? length
            : products.filter((item) => item.category == category).length
        }
      />
    </div>
  );
}
// productsByCategory.length
export default Products;
