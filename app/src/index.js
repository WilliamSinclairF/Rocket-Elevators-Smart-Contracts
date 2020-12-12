import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/shared/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
