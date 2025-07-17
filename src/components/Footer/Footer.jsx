import React from 'react';
import './Footer.css';
import Github from "../../assets/github.png";
import Instagram from "../../assets/Instagram.png";
import Linkdin from "../../assets/Linkdin.png";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className='footer'>
        <div className="social-links">
          <img src={Github} alt="GitHub" />
          <img src={Instagram} alt="Instagram" />
          <img src={Linkdin} alt="LinkedIn" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      {/* Blur Background Divs */}
      <div className="footer-blur blur-red"></div>
      <div className="footer-blur blur-orange"></div>
    </div>
  );
};

export default Footer;
