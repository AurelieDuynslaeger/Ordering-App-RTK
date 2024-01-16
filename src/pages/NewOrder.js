import React from 'react'
import { useParams } from 'react-router-dom'
import ShowItems from '../components/ShowItems';

const NewOrder = () => {

    const { id } = useParams(); 

  return (
    <div className="container">
        <ShowItems/>
        <div className="cart">
            <h1>Commande n° : {id}</h1>
        </div>
    </div>
  )
}

export default NewOrder