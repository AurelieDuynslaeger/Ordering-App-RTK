// Product.js
import React from 'react';
import '../stylesheets/Product.scss';

const Product = ({ name, price, cover, action }) => {
  return (
    <div className="product" onClick={action}>
      <img src={cover} alt={name} />
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">{price} €</p>
      </div>
    </div>
  );
};

export default Product;


