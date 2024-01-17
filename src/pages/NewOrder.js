import React from 'react'
import Header from '../components/Header';
import DetailSelected from '../components/DetailSelected';
import products from '../services/products';
import Product from '../components/Product';

const NewOrder = () => {

  const items = products;

  // const addCart = (item) => {

  // }

  const listProducts = items.map(item => {
    return (
    <Product key={item.id} name={item.name} price={item.price} cover={item.cover}/>

    //action à définir : push l'item dans le panier = push la pizza dans item.products pour le nouvel objet item du state inital 
  )});

  
  return (
    <div className="container">
        <Header/>
        <div className="wrapper">
          <div className='products-list'>
            {listProducts}
          </div>
            <div className="order-detail">
               <DetailSelected items={products} total={12}/>
            </div>
        </div>
    </div>
  )
}

export default NewOrder