import React, { useState, useRef, useEffect } from "react";
import "../styles/Product-item.css";
import Products from "./Products";

function ProductItem({ product }) {
  const { id, title, price, images, description, related_products, reviews } =
    product;
  const [span, setSpan] = useState(0);
  const imageRef = useRef();
  let height;
  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  function setSpans() {
    height = imageRef.current.clientHeight;
    const addition = height ===  476.84 ? 10 : 7;
    const spans = Math.ceil(height / 10) + addition;
    setSpan(spans);
    
  }
  return (
    <div className="product-item" style={{ gridRowEnd: `span ${span}` }}>
      <div className="image-container">
        <img ref={imageRef} src={images[0]} alt="image" width="100%" />
      </div>
      <div className="product-buttom-bar">
        <p>{title}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
