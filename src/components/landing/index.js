// packages
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import About from './About.js';
import Home from './Home.js';
import Login from './Login.js';
import Nav from './Nav.js';

const Landing = () => {
    return (
        <div>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login}/>
          <Route path="/about" component={About}/>
        </div>
    )
};

export default Landing