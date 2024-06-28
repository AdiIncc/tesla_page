import React from "react";
import "./Explore.css";
import image5 from "../../assets/Tesla_Explore.jpg";
import NavBar from "../../components/NavBar/NavBar";

const carInfo = [
  {
    price: "$57,390",
    drive: "REAR-WHEEL DRIVE",
    availability: "AVAILABLE IN 2025",
    range: "250 MI. RANGE (EST.)",
    acceleration: "6.5 SEC. 0-60 MPH",
    horsepower: "315 HP"
  },
  {
    price: "$76,390",
    drive: "ALL-WHEEL DRIVE",
    availability: "DELIVERY IN 2025",
    range: "340 MI. RANGE (EST.)",
    acceleration: "4.1 SEC. 0-60 MPH",
    horsepower: "600 HP"
  },
  {
    price: "$96,390",
    drive: "CYBERBEAST",
    availability: "DELIVERY IN 2025",
    range: "320 MI. RANGE (EST.)",
    acceleration: "2.6 SEC. 0-60 MPH†",
    horsepower: "845 HP"
  },
];

const Explore = () => {
  return (
    <div>
      <NavBar />
      <img src={image5} className="background fade-in" alt="Tesla Explore" />
      {carInfo.map((info, index) => (
        <div className="container" key={index}>
          <div className="standard_version">
            <legend>{info.price}</legend>
            <ul>
              <h1>{info.drive}</h1>
              <li>{info.availability}</li>
              <li>{info.range}</li>
              <li>{info.acceleration}</li>
              <li>{info.horsepower}</li>
              <li>
                <input type="checkbox" id={`checkbox_${index}`} />
                <label htmlFor={`checkbox_${index}`}></label>
              </li>
            </ul>
          </div>
        </div>
      ))}
      <div className="order-button-container">
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default Explore;