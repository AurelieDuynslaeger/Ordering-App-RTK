import React from 'react';
import '../stylesheets/Button.scss';
import '../stylesheets/DetailSelected.scss';

const DetailSelected = ({ orderId, selectedProducts }) => {
  // Vérifier si selectedProducts est défini avant d'utiliser reduce
  if (!selectedProducts || selectedProducts.length === 0) {
    return (
      <div className="order-detail">
        <h2>Detail de la commande N° {orderId}</h2>
        <p>Aucun produit sélectionné.</p>
      </div>
    );
  }

  // Calculer le montant total en additionnant les prix de tous les produits
  const totalAmount = selectedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);

  return (
    <div className="order-detail">
      <h2>Detail de la commande N° {orderId}</h2>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            <div>
              <p>{product.name}</p>
            </div>
            <p>{product.quantity} x {product.price}</p>
          </li>
        ))}
      </ul>
      <div className='display-total'>
        {/* Utiliser le montant total calculé */}
        <p>Soit un total de : <span>{totalAmount} €</span></p>
      </div>
    </div>
  );
};

export default DetailSelected;




