import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#home">HOME</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#photo">PHOTO</a></li>
        <li><a href="#more">MORE</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
