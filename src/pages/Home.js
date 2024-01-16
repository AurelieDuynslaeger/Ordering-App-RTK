import React from 'react'
import Header from '../components/Header.js'
import { BiSolidMessageAltAdd } from "react-icons/bi";

import AddItem from '../components/AddItem.js';

const Home = () => {

  return (
    <div className="container">
        <Header/>
        <div className="menu-cards">
          <AddItem 
            icon={<BiSolidMessageAltAdd />}
            title="Nouvelle Commande"
            description="Créer et enregristrer une nouvelle commande" 
            />


        </div>
    </div>
  )
}

export default Home