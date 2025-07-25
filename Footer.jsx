import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Pawan Project. All rights reserved.</p>
      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
      </div>
    </footer>
  );
};

export default Footer;
