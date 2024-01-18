import React from 'react'
import { useSelector } from 'react-redux';
import "../stylesheets/Button.scss"
import "../stylesheets/DetailSelected.scss"


const DetailSelected = ({ orderId }) => {

  const orders = useSelector(state => state.data.orders);
  const currentOrder = orders.find(order => order.id === orderId);
  const products = currentOrder ? [...currentOrder.products] : [];

return (
    <div className="order-detail">
      <h2>Detail de la commande N° { orderId }</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}><p>{product.name}</p> <p>{product.price}</p></li>
        ))}
      </ul>
      <div className='display-total'>
        <p>Soit un total de : <span>total €</span></p> 
      </div>
  </div>
);
}
  
export default DetailSelected