import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav container">
            <div className="logo">
                <Link to="/">Inclusive Syllabus</Link>
            </div>
            <div className="nav-links">
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

// const Nav = () => {
//     return <div></div>;
// };

export default Nav;
