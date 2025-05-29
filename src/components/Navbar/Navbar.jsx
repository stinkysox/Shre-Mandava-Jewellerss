import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    navigate("/");
    setMenuOpen(false);
  };

  const goToAbout = () => {
    navigate("/about");
    setMenuOpen(false);
  };

  const goToProducts = () => {
    navigate("/products");
    setMenuOpen(false);
  };

  const goToTestimonials = () => {
    navigate("/testimonials");
    setMenuOpen(false);
  };

  const goToContact = () => {
    navigate("/contact");
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={goToHome}>
          <img
            src="https://i.postimg.cc/FR9z9Hpy/MJ-GOLD-DIAMONDS-SILVER.png"
            alt="Shre Mandava Jewellers Logo"
            className="logo-img"
          />
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="menu">
          <ul>
            <li onClick={goToHome}>Home</li>
            <li onClick={goToAbout}>About Us</li>
            <li onClick={goToProducts}>Products</li>
            <li onClick={goToTestimonials}>Testimonials</li>
            <li onClick={goToContact}>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
