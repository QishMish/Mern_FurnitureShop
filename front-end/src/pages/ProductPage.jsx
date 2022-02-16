/** @format */
import { Link } from "react-router-dom";
import React from "react";
import SingleProductCatalog from "../components/SingleProductCatalog";
import "../styles/Single-product-page.css";
import { FaFacebookSquare, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function ProductPage() {
  return (
    <div className="bg-gray">
      <div className="single-product-page container">
        <div className="single-product-info">
          <div className="product-left">
            <SingleProductCatalog />
          </div>
          <div className="product-right">
            <p className="header">Home / Furniture / Aform Barstool</p>
            <div className="info">
              <p>Aform Barstool</p>
              <span>$350.00</span>
            </div>
            <div className="product-info-footer">
              <div className="add-to-cart">
                <input type="number" value={1} readOnly />
                <button href="">Add to cart</button>
              </div>
              <div className="social-icons">
                <div className="icons-bg blue">
                  <FaFacebookSquare className="social-icon" />
                </div>
                <div className="icons-bg light-blue">
                  <FaTwitter className="social-icon" />
                </div>
                <div className="icons-bg green">
                  <FaWhatsapp className="social-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-product-description">
          <div className="desc-title">Description </div>
          <h2>Description </h2>
          <p>
            PRODUCT INFO:Made to order.Production time: 8-10 weeks Worldwide
            delivery (street level only) The Chair is delivered assembledClean
            with damp clot
          </p>
        </div>
        <h2>Related Products</h2>
        <div className="single-product-realated">
          <div className="related-products-container">
            <Link to="2" className="product-item">
              <div className="image-container related-item">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_2-348x218.jpeg"
                  alt="image"
                  className="related-image"
                />
              </div>
              <div className="product-buttom-bar">
                <p>Solid Table</p>
                <span>$1021.021</span>
              </div>
            </Link>
            <Link to="2" className="product-item">
              <div className="image-container related-item">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_2-348x218.jpeg"
                  alt="image"
                  className="related-image"
                />
              </div>
              <div className="product-buttom-bar">
                <p>Solid Table</p>
                <span>$1021.021</span>
              </div>
            </Link>
            <Link to="shop/3" className="product-item">
              <div className="image-container related-item">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_2-348x218.jpeg"
                  alt="image"
                  className="related-image"
                />
              </div>
              <div className="product-buttom-bar">
                <p>Solid Table</p>
                <span>$1021.021</span>
              </div>
            </Link>
            <Link to="2" className="product-item">
              <div className="image-container related-item">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/Solid_Table_2-348x218.jpeg"
                  alt="image"
                  className="related-image"
                />
              </div>
              <div className="product-buttom-bar">
                <p>Solid Table</p>
                <span>$1021.021</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
