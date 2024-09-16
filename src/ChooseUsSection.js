import React from "react";
import "./ChooseUsSection.css";
import Trusted1 from "../src/img/trusted1.png";
import Trusted2 from "../src/img/trusted2.png";
import Trusted3 from "../src/img/trusted3.png";

const reasons = [
  {
    id: 1,
    title: "Solutions Tailored Specifically to Your Business Needs",
    description:
      "We provide customized solutions for your business needs, ensuring relevance and success.",
    image: Trusted1,
  },
  {
    id: 2,
    title: "Creative Excellence Elevates Every Project",
    description:
      "Creative excellence drives our work. From concept to execution, we aim for exceptional results.",
    image: Trusted2,
  },
  {
    id: 3,
    title: "Client Satisfaction is Our Main Focus",
    description:
      "Our main goal is your satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together.",
    image: Trusted3,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <h2>Why Choose Us?</h2>
      <div className="why-choose-us-grid">
        {reasons.map((reason, index) => (
          <div
            key={reason.id}
            className={`why-choose-us-item ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            <img
              src={reason.image}
              alt={reason.title}
              className="why-choose-us-image"
            />
            <div className="why-choose-us-text">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
