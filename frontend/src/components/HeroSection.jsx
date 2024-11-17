import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p style={{ textAlign: 'left' }}>
            TOGETHER WE
          </p>
          <p style={{ textAlign: 'right' }}>
            REINVENTED
          </p>
        </div>
        <div className="hero-right">
          <p>
            Together, we can reinvent your business. Reinvention is about
            breaking industry norms. Our wide range of capabilities, ecosystem
            partnerships, and unmatched industry expertise can help your
            business become the next best version of itself.
          </p>
          <a href="#what-we-do" className="cta-link">
            See what we do <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
