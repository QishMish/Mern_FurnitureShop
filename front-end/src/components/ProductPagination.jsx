import React from "react";
import { useGlobalContext } from "../context/AppContext";
import "../styles/Pagination.css";

function ProductPagination({ productLength }) {
  const {
    productConfig,
    products,
    nextPageHandler,
    prevPageHandler,
    navigateHandler,
  } = useGlobalContext();
  const { page, limit } = productConfig;
  const { length,productsByCategory } = products;
  return (
    <div className="product-pagination">
      {page > 1 && (
        <div className="page-index" onClick={() => prevPageHandler()}>
          ←
        </div>
      )}
      {Array.apply(null, { length: Math.ceil(productLength / limit) }).map(
        (pageIndex, index) => {
          return (
            <div
              className={
                page == index + 1 ? "page-index page-active" : "page-index"
              }
              key={index}
              onClick={(e) => navigateHandler(index + 1)}
            >
              {index + 1}
            </div>
          );
        }
      )}
      {page < Math.ceil(length / limit) && (
        <div className="page-index" onClick={() => nextPageHandler()}>
          →
        </div>
      )}
    </div>
  );
}

export default ProductPagination;
