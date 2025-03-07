import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer">
        <div className="footer-content">
          <p>© 2025 Kenneth. All rights reserved.</p>
          <div className="socials">
            <a
              href="https://github.com/kevrom0215"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://ph.linkedin.com/in/kenneth-araga-81a4261b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
};

export default Footer;