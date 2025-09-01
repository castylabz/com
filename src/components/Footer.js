import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Castylabz</h3>
            <p>Transforming ideas into reality with precision 3D printing services.</p>
            <div className="social-links">
              <a 
                href="https://wa.me/9150562986" 
                target="_blank" 
                className="social-link"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href="https://www.instagram.com/casty_labz/" 
                target="_blank" 
                className="social-link"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=keychains">Keychains</Link></li>
              <li><Link to="/products?category=lamps">Lamps</Link></li>
              <li><Link to="/products?category=decor">Decor</Link></li>
              <li><Link to="/products?category=gifts">Gifts</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>
                              <i className="fab fa-whatsapp"></i> WhatsApp: 915 056 2986
            </p>
            <p>
              <i className="fab fa-instagram"></i> 
              <a 
                href="https://www.instagram.com/casty_labz/" 
                target="_blank" 
                className="contact-handle"
                rel="noopener noreferrer"
              >
                @casty_labz
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Castylabz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
