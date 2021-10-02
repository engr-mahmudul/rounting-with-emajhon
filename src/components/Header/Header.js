import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop" activeStyle={{ fontWeight: "bold", color:"goldenrod" }}>Shop</NavLink>
                <NavLink to="/orders" activeStyle={{ fontWeight: "bold", color:"goldenrod" }}>Order Review</NavLink>
                <NavLink to="/inventory" activeStyle={{ fontWeight: "bold", color:"goldenrod" }}>Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;