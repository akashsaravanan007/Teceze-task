import React, { useState } from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    id: 1,
    name: "Diana Loreza",
    title: "Director of GYMSTORY",
    company: "Gymstory",
    testimonial:
      "Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
    description:
      "I recently hired Ideapeel for a custom web development project and couldn’t be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    title: "CEO of TechWorld",
    company: "TechWorld",
    testimonial: "Amazing service and super easy to work with!",
    description:
      "The team was very professional, on time, and provided an excellent product. The final result was exactly what we were looking for!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 3,
    name: "Sarah Doe",
    title: "Marketing Head of SoftSolutions",
    company: "SoftSolutions",
    testimonial: "They made our website top-notch. Couldn’t ask for better!",
    description:
      "I loved working with Ideapeel. They were quick to respond and made the whole process seamless. Highly recommend them to anyone needing top-tier digital solutions.",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-section">
      <div className="section-header">
        <h4>TESTIMONIAL</h4>
        <h2>Customer is Our Top Priority</h2>
        <p>
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
      </div>

      <div className="testimonial-card">
        <button className="left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="testimonial-content">
          <div className="company-logo">
            <h4>{testimonials[currentIndex].company}</h4>
          </div>
          <h3>{testimonials[currentIndex].testimonial}</h3>
          <p>{testimonials[currentIndex].description}</p>
          <div className="testimonial-author">
            <p>
              <strong>{testimonials[currentIndex].name}</strong>
              <br />
              {testimonials[currentIndex].title}
            </p>
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
          </div>
        </div>
        <button className="right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
