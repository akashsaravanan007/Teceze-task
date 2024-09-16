import React from "react";
import "./WorkWithUsSection.css";
import Customers from "../src/img/customers.png";
import Success from "../src/img/success.png";
import Experience from "../src/img/experience.png";

const WorkWithUsSection = () => {
  return (
    <section className="work-with-us-section">
      <h2>Work with Click it new Tech</h2>
      <div className="work-with-us-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <img src={Customers} alt="Happy Customers" />
          </div>
          <h3>10,000+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <img src={Success} alt="Success Processes" />
          </div>
          <h3>20,000+</h3>
          <p>Success Processes</p>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <img src={Experience} alt="Years of Experience" />
          </div>
          <h3>10+ Years</h3>
          <p>of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
