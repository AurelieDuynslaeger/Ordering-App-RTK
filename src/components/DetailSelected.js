import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { add } from "../slices"
import { useNavigate } from 'react-router-dom';
import "../stylesheets/Button.scss"
import "../stylesheets/DetailSelected.scss"


const DetailSelected = ({ orderId }) => {

  const dispatch =useDispatch();
  const navigate = useNavigate();

  const orders = useSelector(state => state.data.orders);
  const currentOrder = orders.find(order => order.id === orderId);
  const products = currentOrder ? [...currentOrder.products] : [];


  const submitOrder = () => {
    dispatch(add(currentOrder));
    navigate("/");
  }

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
        <Button name="Valider la commande" className="submit-order" action={submitOrder}/>
      </div>
  </div>
);
}
  
export default DetailSelected