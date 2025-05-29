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
        <span className="footer-name">Shre Mandava Jewellerss</span>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Shre Mandava Jewellers. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
