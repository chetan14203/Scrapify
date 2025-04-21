import React from 'react';
import './footer.css'; 
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import playstoreImage from '../../Assets/images.png'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoImage from '../../Assets/trash-can-cleaning-illustration-logo-600nw-2005013984.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h2>Contact Us</h2>
          <p>+91 7804062925</p>
          <p>scrapifysolutions@gmail.com</p>
          <p>Customer Support available from 10am - 7pm</p>
          <h2>Find Us Here</h2>
          <div className="social-icons">
           {/* <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="social-icon" />
            </a>*/}
            <a href="https://www.instagram.com/scrapifysolutions/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/scrapify-solutions-a79a86332/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="social-icon" />
            </a>
          </div>
        </div>
        {/*<div className="footer-column">
          <h2>Download the Scrapuncle App</h2>
          <a href="YOUR_APP_DOWNLOAD_LINK" target="_blank" rel="noopener noreferrer">
            <img src={playstoreImage} alt="Download on Playstore" className="playstore-image" />
          </a>
          <p>
            Scrape Rates
          </p>
        </div>*/}
        <div className="footer-column logo-section">
          <img src={logoImage} alt="Scrap Uncle Logo" className="logo-image" />
          <h2 className="scrapuncle-text">Scrapify</h2>
          <p>Scrapify Solutions</p>
          <p>Address: 480, Govindpura, BHEL, Bhopal  - 462023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
