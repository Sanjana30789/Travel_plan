import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="This is our company logo" />
        <p>VOYAGEVISTA</p>
      </div>

      {/* Dot Menu Icon (for mobile) */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        <span className={`dot ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`dot ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`dot ${isMenuOpen ? 'open' : ''}`}></span>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li className={menu === "Home" ? "active" : ""} onClick={() => {setMenu("Home"); closeMenu();}}>
          <Link to="/" className="no-style">Home</Link>
        </li>
      
        <li className={menu === "Local-Guide" ? "active" : ""} onClick={() => {setMenu("Local-Guide"); closeMenu();}}>
          <Link to="/map" className="no-style">Local Guide</Link>
        </li>
        <li className={menu === "Itenary booking" ? "active" : ""} onClick={() => {setMenu("Itenary booking"); closeMenu();}}>
          <Link to="/itinerary" className="no-style">Itenary booking</Link>
        </li>
        <li className={menu === "Flights Book" ? "active" : ""} onClick={() => {setMenu("Flights Book"); closeMenu();}}>
          <Link to="/flightsearch" className="no-style">Flights Book</Link>
        </li>
        <li className={menu === "Explore" ? "active" : ""} onClick={() => {setMenu("Explore"); closeMenu();}}>
          <Link to="/explore" className="no-style">Explore</Link>
          
        </li>
        <li className={menu === "Example" ? "active" : ""} onClick={() => {setMenu("Example"); closeMenu();}}>
          <Link to="/panaroma" className="no-style">Example</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
