// src/components/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../../styles/global.css';

const NotFound = () => {
  return (
    <div className='wrapper'>
      <img src='https://httpstatusdogs.com/img/404.jpg' style={{height: '300px', width: 'auto', objectFit:'contain'}}></img>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to="/">Go to profile page</Link>
      </p>
    </div>
  );
};

export default NotFound;
