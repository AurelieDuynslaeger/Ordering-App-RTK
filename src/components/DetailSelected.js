import React from 'react';
import '../stylesheets/DetailSelected.scss';
import { TbPizzaOff } from "react-icons/tb";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const DetailSelected = ({ orderId, selectedProducts, onUpdateProductQuantity, onRemoveProduct }) => {
  if (!selectedProducts || selectedProducts.length === 0) {
    return (
      <div className="order-detail">
        <h2>Détail de la commande N°{orderId}</h2>
        <p>Aucun produit sélectionné.</p>
      </div>
    );
  }

  const totalAmount = selectedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  const roundedTotal = Math.round(totalAmount * 100) / 100;

  return (
    <div className="order-detail">
      <h2>Détail de la commande N°{orderId}</h2>
      <ul>
        {selectedProducts.map(product => (
          <li key={product.name}>
            <div className='pizza-line'>
              <TbPizzaOff onClick={() => onRemoveProduct(product.name)} className='delete-pizza' />
              <p>{product.name}</p>
            </div>
            <div className='pizza-quantity'>
              <p>{product.price} €</p>
              <div className='quantity-items'>
                <CiSquareMinus onClick={() => onUpdateProductQuantity(product.name, -1)} className='quantity_icon' />
                <span>{product.quantity}</span>
                <CiSquarePlus onClick={() => onUpdateProductQuantity(product.name, 1)} className='quantity_icon' />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='display-total'>
        <p>Soit un total de : <span>{roundedTotal} €</span></p>
      </div>
    </div>
  );
};

export default DetailSelected;
