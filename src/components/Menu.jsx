import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './menu.css'

const Menu = () => {
    return (
        <div className="navbackground">
            <div className="navlogo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav className="menu">
                <ul>
                    <li className="menuitem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menuitem">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default Menu;