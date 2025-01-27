import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/2.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="This is our company logo" />
        <p>TRAVEL-PLANNER</p>
      </div>
      <ul className="nav-menu">
      <li 
          className={menu === "Home" ? "active" : ""} 
          onClick={() => setMenu("Home")}
        >
         <Link to="/" className="no-style">Home</Link> 
        </li>
        <li 
          className={menu === "Explore" ? "active" : ""} 
          onClick={() => setMenu("Explore")}
        >
           <Link to="/explore" className="no-style">Explore</Link>
        </li>
        <li 
          className={menu === "Local-Guide" ? "active" : ""} 
          onClick={() => setMenu("Local-Guide")}
        >
          <Link to="/map" className="no-style">Local Guide</Link>
          
        </li>
        <li
            className={menu === "Itenary booking" ? "active" : ""}
            onClick={() => setMenu("Itenary booking")}
          >
            <Link to="/itinerary" className="no-style">Itenary booking</Link> 
          </li>
        <li 
          className={menu === "Flights Book" ? "active" : ""} 
          onClick={() => setMenu("Flights Book")}
        >
          <Link to="/flightsearch" className="no-style">Flights Book</Link>
        </li>
        <li 
          className={menu === "Example" ? "active" : ""} 
          onClick={() => setMenu("Example")}
        >Example
        </li>
        <li 
          className={menu === "About Us" ? "active" : ""} 
          onClick={() => setMenu("About Us")}
        ><Link to="/about" className="no-style">About Us</Link> 
        </li>

        {/* <li
          className={menu === "Contact" ? "active" : ""}
          onClick={() => setMenu("Contact")}
        >
          <Link to="/contact" className="no-style" >
            Contact
          </Link>
        </li> */}
      </ul>
      {/* <div className="nav-login">
        <button>Login</button>
      </div> */}
    </div>
  );
};

export default Navbar;
