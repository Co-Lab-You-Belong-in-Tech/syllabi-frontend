import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="container">
            <Link to="/">
                <div> Inclusive Syllabus</div>
            </Link>

            <div>
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
