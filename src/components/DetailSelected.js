import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../services/products';

const DetailSelected = ({total, orderId }) => {

    const { id } = useParams(); 

    const listItems = products.map(item => {
        return (
            <div className='order-list' key={item.id}>
                <ul>
                    <li>
                        <div>
                            <p>{item.name}</p>
                            <p>(qté x {item.price})</p>
                        </div>
                        <div>
                            <p>{item.price}€</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    })
  return (
    <div className="order-detail">
        <h1>Détail de la commande N°{id}</h1>
        {listItems}
        <div>
            <h5>Soit un total de {total}€</h5>
        </div>
    </div>
  )
}

export default DetailSelected