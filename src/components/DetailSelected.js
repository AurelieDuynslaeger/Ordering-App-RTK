import React from 'react'
import { useSelector } from 'react-redux';

const DetailSelected = ({ orderId }) => {
// Utilisez le state du Redux pour récupérer la liste des commandes
const orders = useSelector(state => state.data.items);

// Recherche de la commande spécifique par son ID
const currentOrder = orders.find(order => order.id === orderId);

// Utilisez la liste de produits à partir de l'objet de commande
const products = currentOrder ? currentOrder.products : [];

return (
    <div className="order-detail">
    <h2>Detail de la commande N° { orderId }</h2>
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.name} - {product.price}</li>
      ))}
    </ul>
  </div>
);
}
  
export default DetailSelected