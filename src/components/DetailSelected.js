import React from 'react'
import { useSelector } from 'react-redux';

const DetailSelected = ({ orderId }) => {

const orders = useSelector(state => state.data.orders);
const currentOrder = orders.find(order => order.id === orderId);
const products = currentOrder ? [...currentOrder.products] : [];
// let total = 0;

//   for (const product of products) {
//     total += product.price;
//   }
//   if (currentOrder) {
//     currentOrder.products = [...products]; // Création d'une copie modifiable
//     currentOrder.bill = total;
//   }

return (
    <div className="order-detail">
    <h2>Detail de la commande N° { orderId }</h2>
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.name} - {product.price}</li>
      ))}
    </ul>
    <div className='display-total'>Soit un total de : <span>total €</span></div>
  </div>
);
}
  
export default DetailSelected