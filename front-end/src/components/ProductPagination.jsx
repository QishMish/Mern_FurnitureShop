/** @format */

import React, { useState } from 'react';
import '../styles/Pagination.css';

function ProductPagination({
  paginationDataProp,
  pageIndex,
  setPaginationIndex,
}) {
  return (
    <div className='product-pagination'>
      {pageIndex >= 1 && <div className='page-index' onClick={() => setPaginationIndex(1)}>>←</div>}
      {paginationDataProp?.map((pageIndex, index) => {
        return (
          <div
            className={
              pageIndex + 1 == 1 ? 'page-index page-active' : 'page-index'
            }
            key={index}
            onClick={() => setPaginationIndex(index)}>
            {index + 1}
          </div>
        );
      })}
      {pageIndex == paginationDataProp.length - 1 ? null : (
        <div className='page-index' onClick={() => setPaginationIndex()}>→</div>
      )}
    </div>
  );
}

export default ProductPagination;
