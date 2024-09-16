import React from 'react';
import Navbar from './Navbar.js';
import HeroSection from './HeroSection.js';
import TrustedBySection from './TrustedBySection.js';
import ServicesSection from './ServicesSection.js';
import WhyChooseUs from './ChooseUsSection.js';
import WorkWithUsSection from './WorkWithUsSection.js';
import Testimonials from './TestimonialSection.js';
import CapabilitiesSection from './CapabilitiesSection.js';
import BenefitsSection from './BenefitsSection.js';
import PricingSection from './PricingSection.js';
import Blogs from './Blogs.js';
import Footer from './Footer.js';
import RocketButton from './RocketButton.js'

function App() {
  return (  
    <div className="App">
       <Navbar />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkWithUsSection/>
      <Testimonials />
      <CapabilitiesSection />
      <BenefitsSection />
      <PricingSection />
      <Blogs/>
      <Footer />
      <RocketButton />
    </div>
  );
}

export default App;
