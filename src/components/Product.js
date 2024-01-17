import React from 'react'
import "../stylesheets/Product.scss"

const Product = ({id, name, price, cover, action}) => {
  return (
    <div key={id} className='product-card' onClick={action}>
            <div className="product-cover">
                <img src={cover} alt={name} />
            </div>
            <div className="product-detail">
                <p>{name}</p> 
                <p>{price} €</p>
            </div>
        
        </div>  
  )
}

export default Product