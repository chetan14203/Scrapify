import React, { useState } from "react";
import "./home.css";
import homephoto from "../../Assets/recycling-at-home-background-free-vector.jpg";
import axios from "axios"; // For making HTTP requests

const Home = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false); // New state

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleNextClick = async () => {
    if (mobileNumber.length === 10 && name && address && pickupDate && pickupTime) {
      setLoading(true);
      try {
        await handleFormSubmit(); // Save the details directly
      } catch (error) {
        alert("Error saving details. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://scrapify-rouge.vercel.app/save-user", {
        mobileNumber,
        name,
        address,
        pickupDate,
        pickupTime,
      });

      alert("Details saved successfully!");
      setIsThankYouVisible(true); 
    } catch (error) {
      alert("Error saving details. Please try again.");
    }
  };

  return (
    <div className="homeScreen">
      <div className="leftHome">
        <div className="leftupper">
          <h3>Sell your recyclables</h3>
          <h3>
            online with <span className="scrapify">Scrapify!</span>
          </h3>
          <h2>Paper-Plastics-Metals-Appliances</h2>
          <h2 className="download">
            You can also download the{" "}
            <span className="downloadlink">Scrapify App!</span>
          </h2>
          <img src={homephoto} alt="" className="homeimg" />
        </div>
      </div>

      <div className="rightHome">
        {!isThankYouVisible && (
          <div className="card">
            <h2>Schedule Pick Up</h2>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="tel"
                maxLength="10"
                placeholder="Enter your Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Pick Up Date:</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Pick Up Time:</label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                required
              />
            </div>
            <button className="next-button" onClick={handleNextClick}>
              {loading ? "Loading..." : "Next"}
            </button>
            <p className="help-text">
              Facing any problem? Call us{" "}
              <a href="tel:+917974576441" className="phone-link">+917974576441</a>
            </p>
          </div>
        )}

        {isThankYouVisible && (
          <div className="thank-you-message">
            <h2>Thank you for scheduling the pick up!</h2>
            <p>We will pick up your recyclables on the scheduled date and time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
