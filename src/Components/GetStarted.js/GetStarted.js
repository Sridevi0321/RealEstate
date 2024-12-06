import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Real Estate</span>
          <span className="secondaryText">
            Subscribe and find the attractive quotes from us
            <br />
            Find your property soon
          </span>

          <button className="button">
            <a href="mailto:arfainsabasaba@gmail.com"> Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;