import React from "react";
import "./TrustedBySection.css";
import layers from "../src/img/layers.png";
import Quotient from "../src/img/Quotient.png";
import circooles from "../src/img/circooles.png";
import Hourglass from "../src/img/Hourglass.png";
import command from "../src/img/command.png";

const trustedCompanies = [
  { id: 1, logo: layers },
  { id: 2, logo: Quotient },
  { id: 3, logo: circooles },
  { id: 4, logo: Hourglass },
  { id: 5, logo: command },
];

const TrustedBySection = () => {
  return (
    <section className="trusted-by-section">
      <p>Trusted by Thousand Companies</p>
      <div className="trusted-logos-container">
        <div className="trusted-logos">
          {trustedCompanies.map((company) => (
            <img
              key={company.id}
              src={company.logo}
              alt="Trusted Company Logo"
              className="company-logo"
              draggable="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
