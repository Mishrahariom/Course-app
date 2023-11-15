import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'responsive' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/list">List</Link>
          <Link to="/details">Details</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="navbar-icon" onClick={toggleNavbar}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

