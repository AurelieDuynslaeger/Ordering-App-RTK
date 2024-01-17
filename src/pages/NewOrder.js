import React from 'react'
import Header from '../components/Header';
import DetailSelected from '../components/DetailSelected';
import products from '../services/products';
import Product from '../components/Product';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from "../slices"

const NewOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const items = products;

  const addProductToCart = (product) => {
    const orderId = id;
    dispatch(addProduct({orderId, product}));
    console.log(product)
  }

  const listProducts = items.map(item => {
    return (
    <Product key={item.id} name={item.name} price={item.price} cover={item.cover} action={()=> addProductToCart(item)}/>
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