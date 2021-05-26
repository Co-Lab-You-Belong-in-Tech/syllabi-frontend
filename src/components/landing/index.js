// packages
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import About from './About.js';
import Home from './Home.js';
import Login from './Login.js';
import Nav from './Nav.js';
import Register from './Register.js';

import Dashboard from '../dashboard/Dashboard.js';
import NewSyallbus from '../dashboard/syllabus/NewSyllabus.js';


const Landing = () => {
    return (
        <div>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/about" component={About}/>

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/new" component={NewSyallbus} />
        </div>
    )
};

export default Landing