import React, { useState, useRef, useEffect } from "react";
import { addItem } from "../context/actions/cartActions";
import { Link } from "react-router-dom";
import "../styles/Product-item.css";
import { BsCartPlus } from "react-icons/bs";
import { useGlobalContext } from "../context/AppContext";
import { MdDoneOutline } from "react-icons/md";
import { motion } from "framer-motion";

function ProductItem({ product }) {
  const { _id, title, price, images } = product;
  const { dispatch, cartState } = useGlobalContext();
  // const [span, setSpan] = useState(0);
  const imageRef = useRef();

  // let height;
  // useEffect(() => {
  //   imageRef.current.addEventListener("load", setSpans);
  // },[]);

  // function setSpans() {
  //   height = imageRef.current.clientHeight;
  //   const addition = height === 476.84 ? 10 : 8;
  //   const spans = Math.ceil(height / 10) + addition;
  //   setSpan(spans);
  // }
  const exist = cartState.cartItems.find((item) => item.id === _id);

  const addItemHandler = () => {
    dispatch(
      addItem({
        id: _id,
        title: title,
        price: price,
        image: images[0],
        amount: 1,
        subTotal: price,
      })
    );
  };
  // style={{ gridRowEnd: `span ${span}` }}
  return (
    <motion.div layout className="product-item">
      <div className="image-container">
        <Link to={_id}>
          <img
            className="main-image"
            ref={imageRef}
            src={
              images[0]
                ? images[0]
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
            }
            alt="image"
            width="100%"
          />
          <img
            className="hover-img"
            ref={imageRef}
            src={
              images[1]
                ? images[1]
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
            }
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
    </motion.div>
  );
}

export default ProductItem;
