import React from "react";
import "./BenefitsSection.css";
import Benefits1 from "../src/img/benefits1.png";
import Benefits2 from "../src/img/benefits2.png";
import Benefits3 from "../src/img/benefits3.png";
import Benefits4 from "../src/img/benefits4.png";
import Benefits5 from "../src/img/benefits5.png";
import Benefits6 from "../src/img/benefits6.png";
import Benefits7 from "../src/img/benefits7.png";
import Benefits8 from "../src/img/benefits8.png";
import Benefits9 from "../src/img/benefits9.png";

const benefits = [
  {
    id: 1,
    icon: Benefits1,
    title: "On-demand requests",
    description:
      "Put all your requests in the design queue in Trello, and we will knock them out 1 by 1.",
  },
  {
    id: 2,
    icon: Benefits2,
    title: "Top-notch quality",
    description:
      "High-end work from a dedicated team of senior designers always available when you need it.",
  },
  {
    id: 3,
    icon: Benefits3,
    title: "Powered by Webflow",
    description:
      "We build every site on Webflow, making them dynamic, accessible, and easily scalable.",
  },
  {
    id: 4,
    icon: Benefits4,
    title: "Fast. Responsive. Reliable.",
    description:
      "Get regular updates on your projects, with designs delivered in 2-3 days.",
  },
  {
    id: 5,
    icon: Benefits5,
    title: "No Lock in contracts",
    description:
      "Pay the same every month, no surprises. Cancel anytime you want.",
  },
  {
    id: 6,
    icon: Benefits6,
    title: "Great value for money",
    description:
      "Get a dedicated design team at a fraction of the cost of full-time employees.",
  },
  {
    id: 7,
    icon: Benefits7,
    title: "Customized for you",
    description:
      "We design and build custom for you. No templates unless you request them.",
  },
  {
    id: 8,
    icon: Benefits8,
    title: "Creative paying",
    description:
      "We’re here when you need us and not on payroll when you don’t.",
  },
  {
    id: 9,
    icon: Benefits9,
    title: "Expert turnovers",
    description:
      "You’re getting 10+ years of design experience with every request.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <div className="benefits-header-left">
          <h2>Benefits</h2>
          <div className="benefits-content">
            <h3>
              The design subscription that connects you to your dream team
            </h3>
            <div className="benefits-description">
              <p>
                A subscription can alleviate the stress of staffing, managing
                expenses, or making design calls like a Creative Director. We
                partner with you to ensure that your design elevates your brand
                to new levels.
              </p>
              <button className="see-pricing">See Pricing</button>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-icon">
              <img src={benefit.icon} alt={benefit.title} />
            </div>
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
