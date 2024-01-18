import React from 'react'
import Header from '../components/Header';
import DetailSelected from '../components/DetailSelected';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from "../slices"
import products from '../services/products';
import "../stylesheets/Button.scss";


const NewOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
 

  const orders = useSelector(state => state.data.orders);
  const currentOrder = orders.find(order => order.id === id);
  const selectedProducts = currentOrder ? currentOrder.products : [];
  


  const addProductToCart = (product) => {
    if (currentOrder) {
      dispatch(addProduct({ orderId: id, product }));
    }
  };

  const listProducts = products.map(product => {
    return (
      <Product key={product.id} name={product.name} price={product.price} cover={product.cover} action={() => addProductToCart(product)}/>
    );
  });

  
  return (
    <div className="container">
        <Header/>
        <div className="wrapper">
          <div className='products-list'>
            {listProducts}
          </div>
               <DetailSelected orderId={id} selectedProducts={selectedProducts}/>
        </div>
    </div>
  )
}

export default NewOrder