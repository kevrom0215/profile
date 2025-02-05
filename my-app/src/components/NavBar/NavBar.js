// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import icons from "../../assets/icons.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility
  const navigate = useNavigate();
  const githubIcon = icons.github_icon;

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle menu visibility

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="navbar-toggle" onClick={toggleMenu}>
        <svg width="40" height="40" viewBox="0 0 20 20" fill="white">
            <path d={githubIcon} />
          </svg>
          ☰ &ensp;
        </button>

        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li className="navbar-item brand-item">
          <svg width="40" height="40" viewBox="0 0 20 20" fill="white">
            <path d={githubIcon} />
          </svg>
          </li>
          <li className="navbar-item">
            <Link to="/about-me" className="navbar-link">About Me</Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/contact-me" className="navbar-link">Contact Me</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
