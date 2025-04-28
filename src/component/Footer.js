import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"; // Import the updated styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h2 className="footsec">Surprise Hub</h2>
          <p>Creating unforgettable moments with unique gifts and surprises. Let’s make every occasion special!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3 className="quick">Quick Links</h3>
          <ul className="quicklist">
            <li>Home</li>
            <li>Gifts</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faEnvelope}/>support@surprisehub.com</p>
          <p><FontAwesomeIcon icon={faPhone}/> +91-9842367902</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
           <FontAwesomeIcon icon={faFacebook} style={{paddingRight:'5px',paddingleft:'5px',marginLeft:'7px'}} />surprisehub
            <FontAwesomeIcon icon={faInstagram}  style={{paddingRight:'7px',marginLeft:'7px'}} />surprise_hub
           <FontAwesomeIcon icon={faTwitter}  style={{paddingRight:'7px',marginLeft:'7px'}}/>Surprise_hub
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Surprise Hub | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
