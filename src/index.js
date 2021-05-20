// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// style
import './index.css';

// components
import App from './App';
import returnStoreAndPersistor from './store/ConfigStore.js';


const {store} = returnStoreAndPersistor();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);