import React from 'react'
import ShowItems from '../components/ShowItems';
import Header from '../components/Header';
import DetailSelected from '../components/DetailSelected';
import products from '../services/products';

const NewOrder = () => {

  return (
    <div className="container">
        <Header/>
        <div className="wrapper">
            <ShowItems/>
            <div className="order-detail">
               <DetailSelected items={products} total={12}/>
            </div>
        </div>
    </div>
  )
}

export default NewOrder