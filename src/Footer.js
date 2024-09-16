import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
  FaBehanceSquare,
} from "react-icons/fa";
import logo from "../src/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="cta">
          <h1>"Stand out online and make an impact"</h1>
          <h2>David Smith - CEO of a Tech Startup</h2>
          <p>Jump on a membership and start requesting designs right away!</p>
          <button className="cta-btn">See Pricing</button>
        </div>
      </div>
      <div className="footer-secondary">
        <div className="company-info">
          <img src={logo} alt="Click'It Logo" className="footer-logo" />{" "}
          <p>
            Click'It is a leading digital marketing agency dedicated to driving
            success for businesses online. With expertise in SEO, PPC, social
            media, content creation, and more, we offer tailored solutions to
            maximize ROI. In the USA, UK, and Canada, working with top-tier
            clients, from start-ups to enterprises.
          </p>
        </div>
        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>SEO Marketing</li>
            <li>Research Topic Trends</li>
            <li>Email Marketing</li>
            <li>Google PPC</li>
          </ul>
        </div>
        <div className="footer-location">
          <h4>Our Location</h4>
          <p>USA</p>
          <p>UK</p>
          <p>Canada</p>
          <p>Virtual</p>
        </div>
        <div className="footer-contact">
          <h4>Contact us</h4>
          <p>Email: info@kronix.com</p>
          <p>Phone: (001) 1231 3435</p>
          <div className="social-icons">
            <a href="#facebook">
              <FaFacebook />
            </a>
            <a href="#linkedin">
              <FaLinkedin />
            </a>
            <a href="#instagram">
              <FaInstagramSquare />
            </a>
            <a href="#twitter">
              <FaTwitter />
            </a>
            <a href="#behance">
              <FaBehanceSquare />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <p className="copyright">
          &copy; 2024 RajaramanR3 – All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
