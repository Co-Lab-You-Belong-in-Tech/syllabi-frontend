import React from 'react';
import { Link } from 'react-router-dom';
import lightbulb from '../../img/light-bulb.svg';

const Nav = () => {
    return (
        <nav className="main-nav container">
            <div className="logo">
                <img src={lightbulb} alt="logo"></img>
                <Link to="/">Inclusive Syllabi</Link>
            </div>
            <div className="nav-links">
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Nav;
