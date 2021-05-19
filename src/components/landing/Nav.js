import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <div> Inclusive Syllabus</div>

            <div>
                <Link to="/Login">Login</Link>
                <Link to="/About">Login</Link>
            </div>
        </div>
    );
};

export default Nav;