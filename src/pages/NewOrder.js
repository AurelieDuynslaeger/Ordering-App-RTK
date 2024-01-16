import React from 'react'
import { useParams } from 'react-router-dom'
import ShowItems from '../components/ShowItems';
import Header from '../components/Header';

const NewOrder = () => {

    const { id } = useParams(); 

  return (
    <div className="container">
        <Header/>
        <div className="wrapper">
            <ShowItems/>
            <div className="cart">
                <h1>Commande n° : {id}</h1>
            </div>
        </div>
    </div>
  )
}

export default NewOrder