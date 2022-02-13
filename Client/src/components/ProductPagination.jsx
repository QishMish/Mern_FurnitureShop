/** @format */

import React, { useState } from 'react';
import '../styles/Pagination.css';

function ProductPagination({ paginationDataProp }) {
  const [pageIndex, setPageIndex] = useState(0);

  const items = [1, 2, 3, 4, 5, 6, 7, '→'];
  //   "←",
  console.log(paginationDataProp);
  return (
    <div className='product-pagination'>
      {paginationDataProp?.map((pageIndex, index) => {
        return (
          <div
            className={index == 1 ? 'page-index page-active' : 'page-index'}
            key={index}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}

export default ProductPagination;
