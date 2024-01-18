// Product.js
import React, { useState } from 'react';
import '../stylesheets/Product.scss';

const Product = ({ id, name, price, cover, action }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className="product">
      <img src={cover} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>{price} €</p>
        <label>
          Quantité:
          <select value={quantity} onChange={handleQuantityChange}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <button onClick={() => action({ id, name, price, cover, quantity })}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Product;

