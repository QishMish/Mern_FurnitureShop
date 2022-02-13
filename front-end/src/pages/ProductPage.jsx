/** @format */

import React from 'react';
import SingleProductCatalog from '../components/SingleProductCatalog';
import '../styles/Single-product-page.css';
import { FaFacebookSquare, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function ProductPage() {
  return (
    <div className='single-product-page'>
      <div className='single-product-info'>
        <div className='product-left'>
          <SingleProductCatalog />
        </div>
        <div className='product-right'>
          <p className='header'>Home / Furniture / Aform Barstool</p>
          <div className='info'>
            <p>Aform Barstool</p>
            <span>$350.00</span>
          </div>
          <div className='product-info-footer'>
            <div className='add-to-cart'>
              <input type='number' value={1} />
              <button href=''>Add to cart</button>
            </div>
            <div className='social-icons'>
              <div className='icons-bg blue'>
                <FaFacebookSquare className='social-icon' />
              </div>
              <div className='icons-bg light-blue'>
                <FaTwitter className='social-icon' />
              </div>
              <div className='icons-bg green'>
                <FaWhatsapp className='social-icon'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='single-product-description'></div>
      <div className='single-product-realated'></div>
    </div>
  );
}
