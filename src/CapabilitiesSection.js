import React from "react";
import "./CapabilitiesSection.css";

const capabilities = [
  "Web design & UI",
  "Social media visuals",
  "Infographics",
  "Design system",
  "Email design",
  "Stationery",
  "Icons",
  "Packaging & merch",
  "Signage",
  "Brochures",
  "Logos & branding",
  "Digital ads",
  "Wireframes",
];

const CapabilitiesSection = () => {
  return (
    <section className="capabilities-section">
      <p className="small-heading">OUR CAPABILITIES</p>
      <h2>We can help you with...</h2>
      <div className="capabilities-grid">
        {capabilities.map((capability, index) => (
          <div key={index} className="capability-item">
            {capability}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
