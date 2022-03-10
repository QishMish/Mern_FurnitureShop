/** @format */

import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../../context/AppContext';
import { useState } from 'react';

function ProductModal({ setModalOpel, modalOpen }) {
  const { products } = useGlobalContext();
  const [relatedProductIds, setRelatedProductIds] = useState([]);

  const { data } = products;

  const relatedProductHandler = e => {
    const id = e.target.value;
    let data = [...relatedProductIds, { id: id }];
    setRelatedProductIds(data);
  };

  console.log(relatedProductIds);

  return (
    <div className='admin-modal'>
      <AiOutlineCloseCircle
        className='modal-close'
        onClick={() => setModalOpel(!modalOpen)}
      />
      <div className='product-form-wrapper'>
        <form className='product-form'>
          <div className='title'>
            <label className='product-label'>Title:</label>
            <input type='text' name='title' />
          </div>
          <div className='price'>
            <label className='product-label'>Price:</label>
            <input type='number' name='price' />
          </div>
          <div className='category'>
            <label className='product-label'>Category:</label>
            <input type='text' name='category' />
          </div>
          <div class='wrapper'>
            <div class='file-upload'>
              <input type='file' />
              <i class='fa fa-arrow-up'></i>
            </div>
          </div>
          {/* <div className='images'>
            <label htmlFor='files' className='product-label'>
              Select Photos:
            </label>
            <input type='file' id='files' name='photos' multiple />
          </div> */}
          <div className='description'>
            <label className='product-label'>Description:</label>
            <textarea type='text' name='description' resize='none' />
          </div>
          {/* <div className="related_products">
            <label className="product-label">Related Products:</label>
            <input type="text" name="relatedProducts" />
          </div> */}
          <label className='product-label'>Related Products:</label>
          <div className='related_products'>
            {data.map(item => (
              <div className='check-item'>
                <input
                  className='related_products_check-box'
                  type='checkbox'
                  name={item.title}
                  onChange={e => relatedProductHandler(e)}
                  value={item._id}
                />
                <div className='title'>{item.title}</div>
              </div>
            ))}
          </div>
          <Button
            variant='contained'
            disableElevation
            style={{ margin: '30px 0', backgroundColor: 'rgb(10, 152, 120)' }}>
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
