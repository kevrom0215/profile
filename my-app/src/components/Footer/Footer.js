import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer">
        <div className="footer-content">
          <p>© 2024 Kenneth. All rights reserved.</p>
          <div className="socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
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