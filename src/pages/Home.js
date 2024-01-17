import React from 'react'
import Header from '../components/Header.js'
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { PiCookingPot } from "react-icons/pi";
import { MdEuroSymbol } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../slices';
import HomeCards from '../components/HomeCards.js';
import "../stylesheets/Home.scss"

const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const clickToOrder = () => {
    const NewOrder = {
      id: `CMD-${Date.now()}`,
      products: [],
      bill: 0,
      paid: false
    };
  
    dispatch(add(NewOrder));
    navigate(`/NewOrder/${NewOrder.id}`);
   
  }

  const clickToShow = () => {
    navigate(`/PendingOrders`)
  }

  const clickToPayment = () => {
    navigate(`/OrdersToPay`)
  }
  
  
  return (
    <div className="container">
        <Header/>
        <div className="menu-cards">
          <HomeCards 
          icon={<BiSolidMessageAltAdd />}
          title="Nouvelle Commande"
          description="Créer et Enregristrer une nouvelle commande"
          onClick={clickToOrder}
          className="menu-tab-add"/>

          <HomeCards
          icon={<PiCookingPot />}
          title="Commande en cours"
          description="Voir le détail des commandes en cours"
          onClick={clickToShow}
          className="menu-tab-show" />

          <HomeCards 
          icon={<MdEuroSymbol />}
          title="Paiement Commande"
          description="Encaisser une commande"
          onClick={clickToPayment}
          className="menu-tab-pay" />
        </div>
    </div>
  )
}

export default Home