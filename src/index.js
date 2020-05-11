import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {InfoProvider} from './Context'


ReactDOM.render(
  <InfoProvider>
    <Router>
    <App />
    </Router>
  </InfoProvider>,
  document.getElementById('root')
);


