import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';
import "./Product.css";

function Product({ isFilterColumnVisible }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=15')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='products' style={{ width: isFilterColumnVisible ? '' : '100%' }}>
      {products.map(product => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Product;
