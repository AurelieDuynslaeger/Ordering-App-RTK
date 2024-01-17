import React from 'react';
import items from '../services/products';

const ShowItems = ({action}) => {
  return (

    <div className='products-list'>
    
    {items.map((item) => (
        <div key={item.id} className='product-card' onClick={action}>
            <div className="product-cover">
                <img src={item.cover} alt={item.name} />
            </div>
            <div className="product-detail">
                <p>{item.name}</p> 
                <p>{item.price} €</p>
            </div>
        
        </div>  
    ))}

    </div>
  );
};

export default ShowItems;