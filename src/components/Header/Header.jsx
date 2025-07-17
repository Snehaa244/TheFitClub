import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      <ul className={`header-menu ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => setMenuOpen(false)}>Home</li>
        <li onClick={() => setMenuOpen(false)}>Programs</li>
        <li onClick={() => setMenuOpen(false)}>Why Us</li>
        <li onClick={() => setMenuOpen(false)}>Plans</li>
        <li onClick={() => setMenuOpen(false)}>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
