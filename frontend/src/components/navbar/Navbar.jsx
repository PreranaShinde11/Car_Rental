import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Car Rental</h2>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/auth">Login</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
