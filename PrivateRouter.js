import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

const PrivateRouter =({ component: Component, ... rest}) => {
    let { token } useSelector(state => state);

    if (token === undefined) {
        if window.localStorage.getItem('token') !== undefined {
            token = window.localStorage.getItem('token');
        }
    };

    return (
        <Route 
            {...rest}
            render = {props => token? <Component {...props} {...rest} /> : null}
        />
    )
}