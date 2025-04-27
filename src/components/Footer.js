import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/joaopedrogr" 
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          alt="GitHub"
          className="footer-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;