import React from 'react';  
import './Footer.css'; // Ensure to import the CSS file  

const Footer = () => {  
  return (  
    <div className="footer-container">  
      <footer className="footer">  
        <div className="footer-content">  
          <div className="footer-section">  
            <h4>About Us</h4>  
            <p>About Founder</p>  
            <p>Contact Us</p>  
            <p>Team</p>  
            <p>Locations</p>  
          </div>  

          <div className="footer-section">  
            <h4>FAQ</h4>  
            <p>Terms & Conditions</p>  
            <p>Careers</p>  
            <p>Solutions</p>  
            <p>Our Process</p>  
          </div>  

          <div className="footer-section">  
            <h4>Get In Touch</h4>  
            <p>Taking seamless key performance indicators offline to maximise the long tail.</p>  
            <div className="social-icons">  
              <a href="https://facebook.com" className="icon facebook"><i className="fab fa-facebook-f"></i></a>  
              <a href="https://youtube.com" className="icon youtube"><i className="fab fa-youtube"></i></a>  
              <a href="https://linkedin.com" className="icon linkedin"><i className="fab fa-linkedin-in"></i></a>  
              <a href="https://twitter.com" className="icon twitter"><i className="fab fa-twitter"></i></a>  
            </div>  
          </div>  
        </div>  
      </footer>  
    </div>  
  );  
};  

export default Footer;