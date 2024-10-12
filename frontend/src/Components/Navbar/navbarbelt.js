import React from "react";
import "./navbarbelt.css";
import Scrapify from "../../Assets/trash-can-cleaning-illustration-logo-600nw-2005013984.png";
import googleimg from "../../Assets/images.png"
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
const navbarbelt = () => {
  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link className="leftNavBeltLogo" to="/">
          <img src={Scrapify} alt="" className="scrapifyLogo" />
          <span className="scrapifytext">Scrapify</span>
        </Link>
        <div className="mainNav">
          <Link className="home" to="/">Home</Link>
          <ScrollLink to="why-us" smooth={true} duration={500} className="com">Why Us?</ScrollLink>
          <Link className="com" to="/scrape-rates">Scrape Rates</Link>
        </div>
      </div>
      {/*<div className="rightSideNavBarBelt">
        <div className="googleLogo">
          <img src={googleimg} alt="" className="imagegoogle"/>
        </div>
      </div>*/}
    </div>
  );
};

export default navbarbelt;
