import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../../services/authService'; // Import your authentication function

const PrivateRoute = ({ element }) => {
  const location = useLocation();
  return isAuthenticated() ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;