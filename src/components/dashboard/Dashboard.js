import React from 'react';
import { Route } from 'react-router';
import NewSyallbus from './syllabus/NewSyllabus';

const Dashboard = () => {
    return (
        <div>
            <Route path="/new" component={NewSyallbus} />
        </div>
    )
};

export default Dashboard