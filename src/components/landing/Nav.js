import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <Link to="/"><div> Inclusive Syllabus</div></Link>

            <div>
                <Link to="/Login">Login</Link>
                <Link to="/About">About</Link>
            </div>
        </div>
    );
};

export default Nav;