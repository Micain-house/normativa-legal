import React, { useState } from "react";
import logo from '../../../assets/logo.png';
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="Logo" width="40px" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={handleLinkClick}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={handleLinkClick}>Blog</NavLink>
        </li>
        <li>
          <NavLink to="/register" onClick={handleLinkClick}>Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
