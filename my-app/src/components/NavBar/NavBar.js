// src/components/Navbar/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"; // Import CSS module for styling
import { logout as authLogout } from "../../services/authService";
import icons from '../../assets/icons.json'

const Navbar = () => {
  const navigate = useNavigate();

  const githubIcon = icons.github_icon
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <h2 className="navbar-item">
          <svg width="50" height="50" viewBox="0 0 20 20" fill="white">
            <path d={githubIcon}/>
          </svg>
          Kenneth
        </h2>
        <li className="navbar-item">
          <Link to="/about-me" className="navbar-link">
           About Me
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/skills" className="navbar-link">
            Skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/work" className="navbar-link">
            Work
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact-me" className="navbar-link">
            Contact Me
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/resume" className="navbar-link">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
