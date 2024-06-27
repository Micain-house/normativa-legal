import React, { useState } from "react";
import logo from '../../../assets/logo.png';
import iconLogin from '../../../assets/icon-login.svg'
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
 <>
         <nav>
         <Link to="/" className="title">
           <img src={logo} alt="Logo" width="40px" />
         </Link>
      <ul className={menuOpen ? "open" : ""}>
        <div className="seccion-uno-nav">
        <li>
          <NavLink to="/" onClick={handleLinkClick}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/regulado" onClick={handleLinkClick}>Regulado</NavLink>
        </li>
        <li>
          <NavLink to="/especialista" onClick={handleLinkClick}>Especialista</NavLink>
        </li>
        </div>
        <div className="seccion-dos-nav">
        <li>
          <NavLink to="/ayuda" onClick={handleLinkClick}>Ayuda</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={handleLinkClick} className="login-btn">Ingresar
          <img src={iconLogin} alt="login-icon"/>
          </NavLink>
        </li>
        </div>
      </ul>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </>
  );
};

export default Navigation;
