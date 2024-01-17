import React from 'react'
import Header from '../components/Header';
import DetailSelected from '../components/DetailSelected';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { add, addProduct } from "../slices"
import products from '../services/products';
import Button from '../components/Button';


const NewOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const orders = useSelector(state => state.data.orders);
  const currentOrder = orders.find(order => order.id === id);
  const selectedProducts = currentOrder ? currentOrder.products : [];
  


  const addProductToCart = (product) => {
    // console.log("Adding product to cart:", product);
    if (currentOrder) {
      console.log("Current Order ID:", id);
      dispatch(addProduct({ orderId: id, product }));
    }
  };

  const submitOrder = () => {
    dispatch(add(currentOrder));
    navigate("/");
  }

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
            <div className="order-detail">
               <DetailSelected orderId={id} selectedProducts={selectedProducts}/>
               <Button name="Valider la commande" className="btn submit-order" action={submitOrder}/>
            </div>
        </div>
    </div>
  )
}

export default NewOrder