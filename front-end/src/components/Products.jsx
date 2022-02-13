/** @format */

import React, { useState } from 'react';
import '../styles/Products.css';
import FilterPanel from './FilterPanel';
import ProductItem from './ProductItem';
import { useGlobalContext } from '../context/AppContext';
import ProductPagination from './ProductPagination';
import { paginateHandler } from '../utils/Pagination';
import Loading from './Loading';

function Products() {
  const { products } = useGlobalContext();
  const { loading, data, error } = products;
  const [pageIndex, setPageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState();

  const paginationData = paginateHandler(data);

  if (loading) {
    return (
      <Loading />
    );
  }
  console.log()

  return (
    <div className='products'>
      <FilterPanel />
      <div className='products-info'>Showing 1–14 of {data.length} results</div>
      <div className='product-grid'>
        {paginationData[pageIndex].map((product, index) => {
          return <ProductItem key={index} product={product} />;
        })}
      </div>
      <ProductPagination
        paginationDataProp={paginationData}
        pageIndex={pageIndex}
        setPaginationIndex={setPageIndex}
      />
    </div>
  );
}

export default Products;