/** @format */
import { Link, useParams } from "react-router-dom";
import React from "react";
import SingleProductCatalog from "../components/SingleProductCatalog";
import "../styles/Single-product-page.css";
import { FaFacebookSquare, FaTwitter, FaWhatsapp } from "react-icons/fa";
import CustumHttpGet from "../hooks/CustumHttp";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/AppContext";
import { addItem } from "../context/actions/cartActions";
import { useState } from "react";

export default function ProductPage() {
  const { productId } = useParams();
  const { dispatch } = useGlobalContext();
  const [amount, setAmount] = useState(1);

  console.log(`http://localhost:8080/api/v1/product/` + productId);

  const { loading, data, error } = CustumHttpGet(
    `http://localhost:8080/api/v1/product/` + productId
  );
  // const [product] = data;
  console.log(data);

  const {
    loading: relatedLoading,
    data: relatedProducts,
    error: relatedError,
  } = CustumHttpGet(`http://localhost:8080/related_products/` + productId);

  const addItemHandler = () => {
    if (parseInt(amount) < 1) {
      return;
    }
    const { _id, title, price, images, subtotal } = data;
    let image = images[0];
    const cartItem = {
      id:_id,
      title,
      price,
      image,
      subtotal,
      amount: parseInt(amount),
    };
    dispatch(addItem(cartItem));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray">
      <div className="single-product-page container">
        <div className="single-product-info">
          <div className="product-left">
            <SingleProductCatalog images={data.images} />
          </div>
          <div className="product-right">
            <p className="header">Home / Furniture / Aform Barstool</p>
            <div className="info">
              <p>{data.title}</p>
              <span>{data.price}</span>
            </div>
            <div className="product-info-footer">
              <div className="add-to-cart">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min={1}
                />
                <button onClick={addItemHandler}>Add to cart</button>
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
          <p>{data.description}</p>
        </div>
        <h2>Related Products</h2>
        <div className="single-product-realated">
          <div className="related-products-container">
            {relatedLoading ? (
              <Loading />
            ) : (
              relatedProducts.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={`/shop/${item.id}`}
                    className="product-item"
                  >
                    <div className="image-container related-item">
                      <img
                        src={item.images[0]}
                        alt="image"
                        className="related-image"
                      />
                    </div>
                    <div className="product-buttom-bar">
                      <p>{item.title}</p>
                      <span>{item.price}</span>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
