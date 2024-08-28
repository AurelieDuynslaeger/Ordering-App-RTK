import React from 'react'
import "../stylesheets/Header.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from "../pizza3000Logo.png";
import Arrow from "../arrowPizza.png"

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const backHome = () => {
    navigate("/");
  }

  const isHomePage = location.pathname === "/";

  return (
    <header>

      {/* {!isHomePage && <IoArrowBackOutline onClick={() => backHome()} />} */}
      {!isHomePage && <img src={Arrow} alt="" className="arrow-back" onClick={() => backHome()} />}
      {/* <ImTicket />
        <h1>ORDERING APP</h1> */}
      <img src={Logo} alt="Logo Pizza 3000" />
    </header>
  )
}

export default Header