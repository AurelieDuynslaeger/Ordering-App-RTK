import React from 'react'
import { ImTicket } from "react-icons/im";
import { IoArrowBackOutline } from "react-icons/io5";
import "../stylesheets/Header.scss"
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const backHome = () => {
    navigate("/");
  }

  const isHomePage = location.pathname === "/";

  return (
    <header>
       {!isHomePage && <IoArrowBackOutline onClick={() => backHome()} />}
        <ImTicket />
        <h1>ORDERING APP</h1>
    </header>
  )
}

export default Header