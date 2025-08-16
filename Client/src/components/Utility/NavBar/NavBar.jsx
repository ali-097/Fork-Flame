import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src="/logo.png" alt="logo" className="navbar-logo" />

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <button
            className="mobile-close-btn"
            onClick={handleLinkClick}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
          <Link to="/" className="link" onClick={handleLinkClick}>
            <li>Home</li>
          </Link>
          <Link to="/menu" className="link" onClick={handleLinkClick}>
            <li>Menu</li>
          </Link>
          <Link to="/gallery" className="link" onClick={handleLinkClick}>
            <li>Gallery</li>
          </Link>
          <Link to="/reservation" className="link" onClick={handleLinkClick}>
            <li>Reservation</li>
          </Link>
          <Link to="/about" className="link" onClick={handleLinkClick}>
            <li>About Us</li>
          </Link>
          <li
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
              handleLinkClick();
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
