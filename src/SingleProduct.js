// SingleProduct.js
// SingleProduct.js
import React from 'react';
import "./SingleProduct.css";
import heart from "./images/heart.png"
function SingleProduct({ product }) {
  return (
    <div className='single-product-card'>
      <div className='image-container'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product-description'>
      <div className='top'>
      <h3>PRODUCT NAME</h3>
      </div>
      <div className='bottom'>
      <p><span>Sign in </span> or Create an account to see pricing</p>
      <img src={heart} alt="header-icon"/>
      </div>
      </div>
    </div>
  );
}

export default SingleProduct;

