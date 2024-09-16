import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>
        <span className="highlight">Boost</span> Your Brand With
      </h1>
      <h1>
        Innovative <span className="highlight">Digital Marketing</span>
      </h1>
      <p>
        Drive Engagement and Conversions with Advanced Digital Marketing
        Strategies.
      </p>
      <button className="cta-button">Start Now</button>
    </section>
  );
};

export default HeroSection;
