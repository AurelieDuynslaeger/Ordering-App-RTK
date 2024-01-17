import React, { useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import DetailSelected from '../components/DetailSelected'
import Button from '../components/Button'
import { paid } from '../slices'

const OrdersPayment = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.data.items);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const clickPaid = () => {
            dispatch(paid({order : selectedOrder, paid : true}));
    }

    const selectOrder = (event) => {
        const selectedId = event.target.value;
        setSelectedOrder(selectedId);
      };

  return (
    <div className="container">
    <Header/>
    <div className='select-order'>
        <h3>Selectionner la commande à encaisser :</h3>
        <select onChange={selectOrder}>
        {items
            .filter(item => !item.paid)
            .map(item => (
              <option key={item.id} value={item.id}>
                {item.id} - {item.bill}€
              </option>
            ))}
        </select>
    </div>

    <div className="items-list">
    {selectedOrder && <DetailSelected orderId={selectedOrder} />}
        <Button 
            name="Encaisser la commande"
            className="btn payment"
            action={clickPaid}/>
    </div>
    </div>
  )
}

export default OrdersPayment