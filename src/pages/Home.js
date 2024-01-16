import React from 'react'
import Header from '../components/Header.js'
import MenuCard from '../components/MenuCard.js'
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { add } from '../slices/index.js';
import { useDispatch } from 'react-redux';
import { PiCookingPotBold } from "react-icons/pi";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

const Home = () => {

// const orders = useSelector(state => state.data.orders);
//à mettre sur listing des commandes 
const dispatch = useDispatch();

const order = {};
  return (
    <div className="container">
        <Header/>
        <div className="menu-cards">
            <MenuCard
                icon={<BiSolidMessageAltAdd />} 
                title="Nouvelle Commande"
                description="Créer et enregristrer une nouvelle commande" 
                action={dispatch(add(order))}
              />
            <MenuCard 
                icon={<PiCookingPotBold />} 
                title="Commande en Cours"
                description="Voir le détail des commandes en cours" 
                actions=""
              />
            <MenuCard 
                icon={<RiMoneyEuroCircleLine />} 
                title="Paiement Commande"
                description="Encaisser une commande" 
                actions=""
              />
        </div>
    </div>
  )
}

export default Home