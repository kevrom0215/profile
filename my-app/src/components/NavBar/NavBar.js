// src/components/Navbar/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"; // Import CSS module for styling
import { logout as authLogout } from "../../services/authService";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authLogout(); // Call the logout function
    navigate("/logout"); // Redirect to the login page
  };
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu" className="navbar-link">
            Menu
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/playground" className="navbar-link">
            Playground
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/logout" onClick={handleLogout} className="navbar-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
