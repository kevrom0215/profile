// src/components/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../../styles/global.css';
import construction from "../../assets/construction.jpg"

const NotFound = () => {
  return (
    <div className='wrapper'>
      <img src={construction} style={{height: '300px', width: 'auto', objectFit:'contain'}}></img>
      <p>This page is still under construction</p>
      <p>
        <Link to="/">Go to profile page</Link>
      </p>
    </div>
  );
};

export default NotFound;
