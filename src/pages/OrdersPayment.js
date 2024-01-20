import React, { useState } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import DetailSelected from '../components/DetailSelected';
import Button from '../components/Button';
import { paid } from '../slices';
import "../stylesheets/OrdersPayment.scss"

const OrdersPayment = () => {


  const dispatch = useDispatch();
  const orders = useSelector(state => state.data.orders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const clickPaid = () => {
    dispatch(paid({ order: selectedOrder, paid: true }));
  };

  const selectOrder = (event) => {
    const selectedId = event.target.value;
    setSelectedOrder(orders.find(order => order.id === selectedId));
  };

  return (
    <div className="container">
      <Header />
      <div className='select-order'>
        <h3>Selectionner la commande à encaisser :</h3>
        <select onChange={selectOrder}>
          {orders
            .filter(order => !order.paid)
            .map(order => (
              <option key={order.id} value={order.id}>
                {order.id} - {order.bill}€
              </option>
            ))}
        </select>
      </div>

      <div className="items-list">
      {selectedOrder && (
            <DetailSelected orderId={selectedOrder.id} selectedProducts={selectedOrder.products} />
        )}
      </div>
      <div className="payment">
      <Button
              name="Encaisser la commande"
              className="btn-payment"
              action={clickPaid}
            />
      </div>
    </div>
  );
}

export default OrdersPayment;
