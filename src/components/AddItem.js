import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../slices';
import { useNavigate } from 'react-router-dom';

const AddItem = ({icon, title, description}) => {

    const [item, setItem] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addTodo = () => {

        const orderID = `CMD-${Date.now()}`;
        // Faire appel à l'action add de notre slice et l'envoyer au reducer de notre slice
        dispatch(add(item));

        // Faire en sorte que le champ de saisie soit vidé lors de l'ajout de la tache
        setItem({});
        navigate(`/NewOrder/${orderID}`);

    }
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