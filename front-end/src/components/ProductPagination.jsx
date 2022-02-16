/** @format */

import React, { useState } from "react";
import "../styles/Pagination.css";

function ProductPagination({
  paginationDataProp,
  pageIndexProp,
  setPaginationIndex,
}) {
  return (
    <div className="product-pagination">
      {pageIndexProp >= 1 && (
        <div
          className="page-index"
          onClick={() => setPaginationIndex((prev) => prev - 1)}
        >
          ←
        </div>
      )}
      {paginationDataProp?.map((pageIndex, index) => {
        return (
          <div
            className={
              pageIndexProp + 1 == index + 1
                ? "page-index page-active"
                : "page-index"
            }
            key={index}
            onClick={() => setPaginationIndex(index)}
          >
            {index + 1}
          </div>
        );
      })}
      {pageIndexProp == paginationDataProp.length - 1 ? null : (
        <div
          className="page-index"
          onClick={() => setPaginationIndex((prev) => prev + 1)}
        >
          →
        </div>
      )}
    </div>
  );
}

export default ProductPagination;
