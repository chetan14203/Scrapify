import React from "react";
import './whyus.css';
import rateImg from '../../Assets/money-removebg-preview.png'
import convenienceImg from '../../Assets/thumbs-removebg-preview.png'
import trustImg from '../../Assets/trust-removebg-preview.png'
import ecoImg from '../../Assets/realeco-removebg-preview.png'
const whyus = () => {
  return (
    <div className="whyUs" id="why-us">
      <h2>Why Us?</h2>
      <div className="whyUsCards">
        <div className="whyUsCard">
          <h3>Best Rates</h3>
          <img src={rateImg} alt="" class="whyUsImage" />
          <p>We provide the best value for your scrap from our network of Recyclers.</p>
        </div>
        <div className="whyUsCard">
          <h3>Convenience</h3>
          <img src={convenienceImg} alt="" class="whyUsImage" />
          <p>Doorstep pickup according to user's convenient date & time.</p>
        </div>
        <div className="whyUsCard">
          <h3>Trust</h3>
          <img src={trustImg} alt="" class="whyUsImage" />
          <p>Trained & Verified Pickup Staff with Swapeco Smart Weighing Scale</p>
        </div>
        <div className="whyUsCard">
          <h3>Eco Friendly</h3>
          <img src={ecoImg} alt="" class="whyUsImage" />
          <p>We ensure responsible recycling of your scrap items.</p>
        </div>
      </div>
    </div>
  );
};

export default whyus;
