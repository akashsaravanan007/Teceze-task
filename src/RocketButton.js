import React, { useState, useEffect } from "react";
import "./RocketButton.css";

const RocketButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="rocket-container">
      {isVisible && (
        <button className="rocket-button" onClick={scrollToTop}>
          🚀
        </button>
      )}
    </div>
  );
};

export default RocketButton;
