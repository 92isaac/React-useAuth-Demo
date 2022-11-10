import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import "../styles/navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utililies/auth";
// import { cart } from '../productfiles/ProductDisplay';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const navigate = useNavigate()

  const handlelogout = () => {
    auth.logout()
    navigate('/')
  };

  const auth = useAuth()
  return (
    <nav className={toggle ? "navbar collaspe" : "navbar"}>
      <h2 className="logo">
        <Link to="/">
          React<span>-Auth</span>
        </Link>
      </h2>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <FaTimes /> : <FiMenu />}
      </div>

      <ul className="links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
          {!auth.user1 ?  <li>
          <NavLink to="/logindemo">Login</NavLink>
        </li> :         <li>
          <p onClick={handlelogout}>Log Out</p>
        </li>}
      </ul>
    
    </nav>
  );
};

export default Navbar;
