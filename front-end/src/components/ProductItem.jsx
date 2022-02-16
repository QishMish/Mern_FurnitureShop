import React, { useState, useRef, useEffect } from "react";
import { addItem } from "../context/actions/cartActions";
import { Link } from "react-router-dom";
import "../styles/Product-item.css";
import Products from "./Products";
import { BsCartPlus } from "react-icons/bs";
import { useGlobalContext } from "../context/AppContext";
import { MdDoneOutline } from "react-icons/md";

function ProductItem({ product }) {
  const { id, title, price, images, description, related_products, reviews } =
    product;
  const { dispatch, cartState } = useGlobalContext();

  const [span, setSpan] = useState(0);
  const imageRef = useRef();
  let height;
  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  function setSpans() {
    height = imageRef.current.clientHeight;
    const addition = height === 476.84 ? 10 : 7;
    const spans = Math.ceil(height / 10) + addition;
    setSpan(spans);
  }
  const exist = cartState.cartItems.find((item) => item.id === id);

  const addItemHandler = () => {
    dispatch(
      addItem({
        id: id,
        title: title,
        price: price,
        image: images[0],
        amount: 1,
        subTotal: price,
      })
    );
  };

  return (
    <div className="product-item" style={{ gridRowEnd: `span ${span}` }}>
      <div className="image-container">
        <Link to={id}>
          <img
            className="main-image"
            ref={imageRef}
            src={images[0]}
            alt="image"
            width="100%"
          />
          <img
            className="hover-img"
            ref={imageRef}
            src={images[1]}
            alt="image"
            width="100%"
          />
        </Link>
        {exist ? (
          <div className="added-item">
            <MdDoneOutline className="added-icon" />
            <Link to="/shop/cart" className="view-cart">
              View Cart
            </Link>
          </div>
        ) : (
          <div className="product-item-cart" onClick={addItemHandler}>
            <BsCartPlus className="add-cart-icon" />
          </div>
        )}
      </div>
      <div className="product-buttom-bar">
        <p>{title}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
