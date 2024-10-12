import React from "react";
import "./works.css";
import pickupImg from './../../Assets/pickup-removebg-preview.png';
import scheduleImg from './../../Assets/schedule-removebg-preview.png';
import paymentImg from './../../Assets/payment-removebg-preview.png';
const works = () => {
  return (
    <div className="howItWorks">
      <h2>How It Works</h2>
      <div className="cards1">
        <div className="card2">
          <img
            src={scheduleImg}
            alt="Schedule Pick Up"
            className="card2-image"
          />
          <h3>Schedule Pick Up</h3>
          <p>Choose a convenient time for us to pick up your recyclables.</p>
        </div>
        <div className="card2">
          <img
            src={pickupImg}
            alt="Pick Up at Your Address"
            className="card2-image"
          />
          <h3>Pick Up at Your Address</h3>
          <p>Our team arrives at your location to collect your items.</p>
        </div>
        <div className="card2">
          <img src={paymentImg} alt="Receive Payment" className="card2-image" />
          <h3>Receive Payment</h3>
          <p>Get paid instantly after your recyclables are collected.</p>
        </div>
      </div>
    </div>
  );
};

export default works;
