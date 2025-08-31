import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './About.css';

const About = () => {
  // Use custom hook to scroll to top
  useScrollToTop();

  return (
    <>
      {/* About Header */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn more about our passion for 3D printing</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                At Castylabz, we're passionate about turning your creative ideas into tangible reality. 
                Our journey began with a simple mission: to make high-quality 3D printing accessible to everyone.
              </p>
              <p>
                We specialize in creating custom 3D printed items that are not only functional but also 
                beautiful pieces of art. From personalized keychains to intricate decorative pieces, 
                every item we create is crafted with attention to detail and quality.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="3D Printing Workshop" 
              />
            </div>
          </div>

          <div className="about-features">
            <h2>What Sets Us Apart</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>Advanced Technology</h3>
                <p>We use state-of-the-art 3D printers and premium PLA materials to ensure the highest quality output.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Personalized Service</h3>
                <p>Every project is unique, and we work closely with you to bring your vision to life exactly as you imagine it.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h3>Fast Delivery</h3>
                <p>We understand the importance of timely delivery and strive to complete your orders as quickly as possible.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Quality Guarantee</h3>
                <p>We stand behind every product we create with our quality guarantee and customer satisfaction commitment.</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can bring your ideas to life with our 3D printing services.</p>
            <a 
              href="https://wa.me/9150562986?text=Hi! I'd like to discuss a custom 3D printing project." 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <a 
          href="https://wa.me/9150562986?text=Hi! I'm interested in your 3D printing services." 
          target="_blank" 
          className="whatsapp-btn"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
};

export default About;
