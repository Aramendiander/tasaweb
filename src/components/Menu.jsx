import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../public/logo.png'
import Form from '../components//form/Form.jsx';

const Menu = () => {
    return (
        <div className="navbackground">
            <div>
                <img src={logo} alt="" />
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

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
        </div>
    );
}

export default Menu;