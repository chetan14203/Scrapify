import React from "react";
import "./scraperates.css"; 
import Iron from "../../Assets/scrapeImg/iron-removebg-preview.png";
import Paper from '../../Assets/scrapeImg/papers-removebg-preview.png';
import Steel from '../../Assets/scrapeImg/utensils-removebg-preview.png';
import Plastic from '../../Assets/scrapeImg/plastic-removebg-preview.png';
import News from '../../Assets/scrapeImg/newspaper-report-removebg-preview.png';
import Aluminium from '../../Assets/scrapeImg/alumunium-removebg-preview.png';
import Brass from '../../Assets/scrapeImg/brass-nuckle-removebg-preview.png';
import Copper from '../../Assets/scrapeImg/copper-removebg-preview.png';
import Box from '../../Assets/scrapeImg/box-removebg-preview.png';
import Books from '../../Assets/scrapeImg/images__1_-removebg-preview.png';

import Ac1 from "../../Assets/scrapeImg/Ac1png.png";
import battery from "../../Assets/scrapeImg/battery.png";
import cooler from "../../Assets/scrapeImg/cooler.png";
import engine from "../../Assets/scrapeImg/engine.png";
import fan from "../../Assets/scrapeImg/fan.png";
import fridge from "../../Assets/scrapeImg/fridge.png";
import geyser from "../../Assets/scrapeImg/geyser.png";
import windowAc from "../../Assets/scrapeImg/WindowAc.png";
import Washing from "../../Assets/scrapeImg/smart-washing-machine.png";
import motor from "../../Assets/scrapeImg/motors.png";
import lamp from "../../Assets/scrapeImg/lamp.png";
import Microwave from "../../Assets/scrapeImg/microwave.png";
import MetalE from "../../Assets/scrapeImg/metaleWaste.png";
import tv from "../../Assets/scrapeImg/tv.png";
import Printer from "../../Assets/scrapeImg/printer.png";
import Ups from "../../Assets/scrapeImg/ups.png";
import lapy from "../../Assets/scrapeImg/black-laptop.png";
import comp from "../../Assets/scrapeImg/computer(2).png";
import bike from "../../Assets/scrapeImg/bike-removebg-preview.png";
import car from "../../Assets/scrapeImg/download__2_-removebg-preview.png";

const data = {
  "Normal Recyclables": [
    { name: "Office Paper (A3/A4)", price: "RS 11/kg", note: "", image: Paper },
    { name: "Newspaper", price: "RS 12/kg", note: "Market Rates Dropped Recently", image: News },
    { name: "Copies/Books", price: "RS 12/kg", note: "Market Rates Dropped Recently", image: Books },
    { name: "Cardboard", price: "RS 13/kg", note: "To get quote for bulk qty. call at +91-8595358613", image: Box },
    { name: "Plastic", price: "RS 16/kg", note: "", image: Plastic },
    { name: "Iron", price: "RS 27/kg", note: "To get quote for bulk qty. call at +91-8595358613", image: Iron },
    { name: "Steel Utensils", price: "RS 50/kg", note: "", image: Steel },
    { name: "Aluminium", price: "RS 160/kg", note: "", image: Aluminium },
    { name: "Brass", price: "RS 380/kg", note: "", image: Brass },
    { name: "Copper", price: "Rs 450/kg", note: "", image: Copper },
  ],
  "Large Appliances": [
    { name: "Split AC Copper Coil 1.5 Ton (Indoor + Outdoor)", price: "RS 1500/kg", note: "", image : Ac1 },
    { name: "Window AC 1.5 Ton (Copper Coil)", price: "RS 70/kg", note: "", image : windowAc },
    { name: "AC 1 Ton (Copper Coil)", price: "RS 700/piece", note: "", image : Ac1 },
    { name: "Front Load Fully Automatic Washing Machine", price: "RS 20/kg", note: "", image : Washing },
    { name: "AC 2 Ton (Copper Coil)", price: "RS 450/piece", note: "", image : Ac1 },
    { name: "Top Load Fully Automatic Washing Machine", price: "RS 15/kg", note: "", image : Washing },
    { name: "Semi Automatic Washing Machine (Double Drum)", price: "RS 35/kg", note: "", image : Washing },
    { name: "Geyser", price: "RS 60/kg", note: "", image : geyser },
    { name: "Single Door Fridge", price: "RS 30/kg", note: "", image : fridge },
    { name: "Double Door Fridge", price: "Rs 30/kg", note: "", image : fridge },
    { name: "Iron Cooler", price: "RS 22/kg", note: "", image : cooler },
    { name: "Plastic cooler", price: "RS 6/kg", note: "", image : cooler },
  ],
  "Small Appliances": [
    { name: "Printer/scanner/fax machine", price: "RS 18/kg", note: "", image : Printer },
    { name: "Plastic E-waste", price: "RS 50/kg", note: "", image : lamp },
    { name: "Metal E-waste", price: "RS 40/kg", note: "", image : MetalE },
    { name: "CRT TV", price: "RS 150/piece", note: "", image : tv },
    { name: "Ceiling Fan", price: "RS 60/kg", note: "", image : fan },
    { name: "Motors (Copper wiring)", price: "RS 55/kg", note: "", image : motor },
    { name: "Microwave", price: "RS 20/kg", note: "", image : Microwave },
    { name: "UPS", price: "RS 60/kg", note: "", image : Ups },
    { name: "Inverter/Stabilizer (Copper Coil)", price: "RS 55/kg", note: "", image : engine },
    { name: "Battery (used with inverters)", price: "RS 68/kg", note: "", image : battery },
  ],
  "Mobiles & Computers": [
    { name: "Scrap Laptop", price: "RS 100/piece", note: "", image : lapy },
    { name: "CRT Monitor", price: "RS 130/piece", note: "", image : comp },
    { name: "LCD Monitor", price: "RS 100/piece", note: "", image : comp },
    { name: "Computer CPU", price: "RS 60/kg", note: "", image : comp },
  ],
  "Others": [
    { name: "Bike", price: "RS 1500/Piece", note: "", image : bike },
    { name: "Car", price: "RS 10000/piece", note: "", image : car },
  ],
};

const ScrapeRates = () => {
  return (
    <div className="scrape-rates-container">
      <div className="notes-card">
        <h2>Notes</h2>
        <ul className="listalign">
          <li>The prices may vary with fluctuation in the scrap market.</li>
          <li>
            Prices may be different for bulk pickups. Call us at <a href="tel:+917804062925">+91-7804062925</a> to get a quote for bulk pickup.
          </li>
        </ul>
      </div>
      {Object.entries(data).map(([category, items]) => (
        <div className="card-category" key={category}>
          <h2>{category}</h2>
          <div className="card-container">
            {items.map(({ name, price, note, image }, index) => (
              <div className="card3" key={index}>
                <div className="card-content">
                  <img src={image} alt={name} className="item-image" />
                  <p>{name}</p>
                  <p>{price}</p>
                  {note && <p className="note">{note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrapeRates;
  
