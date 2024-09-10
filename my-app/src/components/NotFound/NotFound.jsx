// src/components/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../../styles/global.css';

const NotFound = () => {
  return (
    <div className='wrapper'>
      <img src='https://httpstatusdogs.com/img/404.jpg' style={{height: '300px', width: 'auto'}}></img>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to="/login">Go to Login</Link> or <Link to="/dashboard">Go to Dashboard</Link>
      </p>
    </div>
  );
};

export default NotFound;
