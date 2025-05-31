import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src="https://i.postimg.cc/FR9z9Hpy/MJ-GOLD-DIAMONDS-SILVER.png"
          alt="Shre Mandava Jewellers Logo"
          className="footer-logo"
        />
        <span className="footer-name">Shre Mandava Jewellers</span>
      </div>

      <div className="footer-socials">
        <a
          href="https://wa.me/919121415999"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          WhatsApp: +91 9121415999
        </a>
        <a
          href="https://www.instagram.com/shremandavajewellerss/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Instagram
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Shre Mandava Jewellers. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
