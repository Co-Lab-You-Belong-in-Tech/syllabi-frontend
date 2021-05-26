// packages
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import About from './About.js'
import Login from './Login.js'
import Nav from './Nav.js'

const Home = () => {
    return (
        <div>
          <Route path="/" component={Nav} />
          <Route path="/Login" component={Login}/>
          <Route path="/about" component={About}/>
        </div>
    )
};

export default Home