import React from "react";
import "./footer.scss";
import logo from "../../assets/logo/logo8.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">
    
      <div className="footer-header">
          <img src={logo} className="footer-img" alt="footer-logo-pic" />
        </div>
  
        <div className="footer-copyright">
          &copy; 2021 Che Vino. All rights reserved.
        </div>
        <div className="footer-bottom">
          <a href="https://www.facebook.com/" className="footer-social">
            <FaFacebookSquare />
          </a>
          <a href="http://www.instagram.com/" className="footer-social">
            <FaInstagramSquare />
          </a>
          <a href="https://www.twitter.com" className="footer-social">
            <FaTwitterSquare />
          </a>
          
        </div>
        </div>
      
      
    </footer>
  );
}

export default Footer;


