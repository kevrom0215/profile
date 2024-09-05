// src/components/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../../styles/global.css';

const NotFound = () => {
  return (
    <div className='wrapper'>
      <h1>Thank you for using the app!</h1>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  );
};

export default NotFound;
