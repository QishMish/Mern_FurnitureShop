import React from "react";
import { Link } from "react-router-dom";

function HeaderCart() {
  const open = true;
  return (
    <>
      <div className="header-cart">
        <Link to="shop/cart" className="cart-wrapper">
          <div className="header-cart-price">
            $1,921.00<span> (1)</span>
          </div>
          <div className="header-cart-icon">
            <img
              src="https://img.icons8.com/emoji/48/000000/shopping-cart-emoji.png"
              width="35px"
            />
          </div>
        </Link>
        {/* <div className="cart-container-open">
          <div className="header-cart-grid">
            <div className="header-cart-item">
              <div className="top">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack1-869x543.jpeg"
                  alt=""
                />
                <p>1x</p>
              </div>
              <span>131.13</span>
            </div>
            <div className="header-cart-item">
              <div className="top">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack1-869x543.jpeg"
                  alt=""
                />
                <p>1x</p>
              </div>
              <span>131.13</span>
            </div>
            <div className="header-cart-item">
              <div className="top">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack1-869x543.jpeg"
                  alt=""
                />
                <p>1x</p>
              </div>
              <span>131.13</span>
            </div>
            <div className="header-cart-item">
              <div className="top">
                <img
                  src="https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/130509CraftMortarPestleBlack1-869x543.jpeg"
                  alt=""
                />
                <p>1x</p>
              </div>
              <span>131.13</span>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default HeaderCart;
