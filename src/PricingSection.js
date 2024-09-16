import React from "react";
import "./PricingSection.css";

const pricingPlans = [
  {
    id: 1,
    title: "Standard",
    label: "Most Popular",
    price: "$2,995/m",
    info: "Pause or cancel anytime",
    description:
      "One request at a time. For companies who need on-going design support.",
    features: [
      "1x active task at a time",
      "Unlimited revisions",
      "Basic SEO",
      "Daily comms through Slack",
      "Work with Expert",
      "2-3 days turn around time",
      "Top tier design",
    ],
  },
  {
    id: 2,
    title: "Growth",
    label: "Best Value",
    price: "$4,795/m",
    info: "Pause or cancel anytime",
    description:
      "Double the requests. For companies with increasing design needs. Limited spots.",
    features: [
      "2x active tasks at a time",
      "Unlimited revisions",
      "Dedicated SEO Analyst",
      "Daily comms through Slack",
      "Work with Expert",
      "2-3 days turn around time",
      "Top tier Content Writer",
    ],
  },
  {
    id: 3,
    title: "Basic - Weekly",
    label: "",
    price: "$890/m",
    info: "Pause or cancel anytime",
    description:
      "Perfect if you want to try the subscription out or only have a few one-off tasks.",
    features: [
      "Fixed Scope of work",
      "2 rounds of revisions",
      "Advance SEO",
      "Daily comms through Slack",
      "1x designer and 1x SEO person",
      "2-5 days turn around time",
      "Top Content Writer & design",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="section-header">
        <h4>CLEAR & SIMPLE PRICING</h4>
        <h2>Simple pricing to level up your brand.</h2>
        <p>
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly
          fee. Cancel anytime.
        </p>
      </div>
      <div className="pricing-cards-container">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <div className="card-header">
              <h3>{plan.title}</h3>
              {plan.label && <span className="label">{plan.label}</span>}
            </div>
            <p className="price">{plan.price}</p>
            <p className="info">{plan.info}</p>
            <p className="description">{plan.description}</p>
            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="cta-buttons">
              <button className="book-call-btn">Book A Call</button>
              <button className="buy-btn">Click to buy</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
