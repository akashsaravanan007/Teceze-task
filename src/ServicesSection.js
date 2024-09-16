import React from "react";
import "./ServicesSection.css";
import seoIcon from "../src/img/SEO Marketing.png";
import contentMarketingIcon from "../src/img/Content Marketing.png";
import socialMediaIcon from "../src/img/Social Media Management.png";
import ppcIcon from "../src/img/PPC.png";
import emailMarketingIcon from "../src/img/Email Marketing.png";

const services = [
  {
    id: 1,
    icon: seoIcon,
    title: "SEO Marketing",
  },
  {
    id: 2,
    icon: contentMarketingIcon,
    title: "Content Marketing",
  },
  {
    id: 3,
    icon: socialMediaIcon,
    title: "Social Media Management",
  },
  {
    id: 4,
    icon: ppcIcon,
    title: "PPC",
  },
  {
    id: 5,
    icon: emailMarketingIcon,
    title: "Email Marketing",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Services</h2>
      <p>
        Strategic services drive digital success with tailored, comprehensive
        approaches.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
