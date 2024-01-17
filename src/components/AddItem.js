import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../slices';
import { useNavigate } from 'react-router-dom';
import items from '../services/products';

const AddItem = () => {
  const dispatch = useDispatch();

        const newOrder = {
         
        }
        // Faire appel à l'action add de la slice et l'envoyer au reducer de notre slice
        dispatch(add(newOrder));
    
  return (
    <div className="menu-tab-add" onClick={() => addTodo()}>
        <div className="tab-header">
            {icon}
        </div>
        <div className="tab-body">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default AddItem